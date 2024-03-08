import Header from "@/components/layout/Header";
import { getSession } from "@/lib/auth";
export default async function Home() {
  const user = await getSession();
  return (
    <>
      <Header />
      <div className="container mx-auto p-10">
        <div className="">
          <h1 className="text-3xl font-medium">Welcome to Simple Setup .Dev</h1>
          <h2 className="text-md font-light">Onboarding has never beasier</h2>
          {JSON.stringify(user)}
        </div>
      </div>
    </>
  );
}
