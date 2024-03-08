import HeaderNav from "./components/HeaderNav";
import { getSession } from "@/lib/auth";

export default async function Header() {
  const session = await getSession();
  return <HeaderNav isLoggedIn={session !== null} />;
}
