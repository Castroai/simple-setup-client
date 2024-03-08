import DashboardLayout from "@/components/layout/DashboardLayout";

import InviteUserButton from "./components/invite-user-button";
export default async function TeamPage({
  params,
}: {
  params: { id: string };
  searchParams: {};
}) {
  return (
    <DashboardLayout>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
        <div className="flex items-center justify-between">
          {/* <h1 className="font-semibold text-lg md:text-2xl">{teamInfo.name}</h1> */}
          <div>
            <InviteUserButton teamId={parseInt(params.id)} />
          </div>
        </div>
        {/* <div>
          {teamInfo.teamMembers.map(({ name, id }) => {
            return <div key={id}>{name}</div>;
          })}
        </div> */}
      </main>
    </DashboardLayout>
  );
}
