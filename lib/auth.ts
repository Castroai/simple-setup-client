import { User } from "next-auth";
import httpInstance from "./http_service";
import { cookies } from "next/headers";

export async function signIn(email: string) {
  try {
    const { data } = await httpInstance.post(
      "/openid/check",
      { username: email },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const { org_id } = data;
    return org_id;
  } catch (error: unknown) {
    console.error(error);
  }
  return null;
}

export async function getSession(): Promise<User | null> {
  const res = httpInstance.get("/openid/me", {
    headers: {
      // @ts-ignore
      Cookie: cookies(),
    },
    withCredentials: true,
  });
  try {
    const data = await res;
    if (data.status === 401) {
      return null;
    } else {
      return data.data;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
}
