"use client";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function SignOutButton() {
  const signOutHandler = () => {
    alert("FIX THIS");
  };
  return <Button onClick={signOutHandler}>Logout</Button>;
}
