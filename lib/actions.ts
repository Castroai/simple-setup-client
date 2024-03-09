"use server";

import { signIn } from "@/lib/auth";

export async function authenticate(email: string) {
  return await signIn(email);
}
