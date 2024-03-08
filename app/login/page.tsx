import { Metadata } from "next";
import Link from "next/link";
import AuthLayout from "@/components/layout/AuthLayout";
import { UserAuthForm } from "./components/use-auth-form";
import jwt from "jsonwebtoken";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};
export interface Root {
  params: Params;
  searchParams: SearchParams;
}

export interface Params {}

export interface SearchParams {
  token?: string;
}

export default function LoginPage({ params, searchParams }: Root) {
  if (searchParams.token) {
    jwt.verify(searchParams.token, "default_secret_key", (err, decoded) => {
      if (err) {
        // Invalid Token Signature
        console.error("Token verification failed:", err.message);
        redirect("/");
      } else {
        console.log("Decoded Token:", decoded);
      }
    });
  }
  return (
    <AuthLayout>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome Back
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your email below to sign in
          </p>
        </div>
        <UserAuthForm decodedToken={searchParams.token} />
        <p className="px-8 text-center text-sm text-muted-foreground">
          By clicking continue, you agree to our{" "}
          <Link
            href="/terms"
            className="underline underline-offset-4 hover:text-primary"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            href="/privacy"
            className="underline underline-offset-4 hover:text-primary"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </AuthLayout>
  );
}
