import httpInstance from "./http_service";
import { cookies } from "next/headers";

export async function signIn(email: string) {
  const url = `http://localhost:3333/openid/check`;
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

export async function getSession() {
  try {
    const { data, status } = await httpInstance.get("/openid/me", {
      headers: {
        // @ts-ignore
        Cookie: cookies(),
      },
      withCredentials: true,
    });

    if (status === 200) {
      console.log(data);
      return data;
    } else {
      return null;
    }
  } catch (error: unknown) {
    // setAuthState(defaultAuthState);
    // console.error(error);
    throw error;
  }
}
