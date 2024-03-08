import HeaderNav from "./components/HeaderNav";
// import { auth } from "@/lib/auth";

export default async function Header() {
  // const session = await auth();
  return <HeaderNav isLoggedIn={false} />;
}
