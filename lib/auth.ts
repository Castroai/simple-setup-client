import { User } from "next-auth";
import httpInstance from "./http_service";
import { cookies } from "next/headers";

export async function signIn(email: string) {
  const url = `http://${process.env.NEXT_PUBLIC_API_URL}:${process.env.NEXT_PUBLIC_API_PORT}/openid/check`;
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: email }),
    });

    const { org_id } = await res.json();

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
