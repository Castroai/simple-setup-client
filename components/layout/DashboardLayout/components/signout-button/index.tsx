"use client";
import { Button } from "@/components/ui/button";
import httpInstance from "@/lib/http_service";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function SignOutButton() {
  const router = useRouter();
  const signOutHandler = async () => {
    try {
      // console.log("here");
      const { status } = await httpInstance.get("/signout", {
        withCredentials: true,
      });
      if (status === 204) {
        router.refresh();
      }
    } catch (error) {
      // console.error(error);
    }
  };
  return <Button onClick={signOutHandler}>Logout</Button>;
}
