"use server";

import { signIn } from "@/lib/auth";

export async function authenticate(email: string) {
  try {
    console.log(email);
    return await signIn(email);
  } catch (error) {
    throw error;
  }
}
