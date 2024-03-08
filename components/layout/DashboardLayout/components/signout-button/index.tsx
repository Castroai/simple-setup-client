"use client";

// import { fetchIdpFromUserId } from "@/app/actions/oidc";
import { Button } from "@/components/ui/button";
// import { signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function SignOutButton() {
  const [idp, setIdp] = useState<string | null>(null);
  // const session = useSession();
  // const getIdp = async () => {
  //   try {
  //     if (
  //       session &&
  //       session.data &&
  //       session.data.user &&
  //       session.data.user.id
  //     ) {
  //       const idp = await fetchIdpFromUserId(session.data.user.id);
  //       return idp;
  //     }
  //     return null;
  //   } catch (error) {
  //     console.error(error);
  //     throw error;
  //   }
  // };
  // useEffect(() => {
  //   getIdp().then((idp) => {
  //     setIdp(idp);
  //   });
  // }, []);

  const signOutHandler = () => {
    // switch (idp) {
    //   case "okta":
    //     signOut().then(() => {
    //       return (window.location.href = `${process.env.NEXT_PUBLIC_OKTA_BASE_URL}/v1/logout?id_token_hint=${session.data && session.data.idToken}`);
    //     });
    //     break;
    //   case null:
    //     signOut();
    //     break;
    //   default:
    //     break;
    // }
  };
  return <Button onClick={signOutHandler}>Logout</Button>;
}
