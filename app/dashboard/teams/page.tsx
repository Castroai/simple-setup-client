import DashboardLayout from "@/components/layout/DashboardLayout";
import CreateTeamButton from "./create/components/create-team-button";
import { DataTable } from "./table/data-table";
import { columns } from "./table/ columns";
// import { fetchAllTeams } from "@/app/actions";

export default async function TeamPage() {
  // const teams = await fetchAllTeams();
  // const initialState = {
  //   pageSize: 10,
  //   pageIndex: 0,
  // };

  return (
    <DashboardLayout>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
        <div className="flex items-center justify-between">
          <h1 className="font-semibold text-lg md:text-2xl">Teams</h1>
          <CreateTeamButton />
        </div>
        <div className="border shadow-sm rounded-lg">
          {/* {teams && (
            <DataTable
              columns={columns}
              data={teams.data}
              initialState={initialState}
            />
          )} */}
        </div>
      </main>
    </DashboardLayout>
  );
}
