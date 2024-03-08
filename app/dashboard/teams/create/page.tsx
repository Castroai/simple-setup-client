import Link from "next/link";
import DashboardLayout from "@/components/layout/DashboardLayout";
export default function DashboardPage() {
  return (
    <DashboardLayout>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
        <div className="flex items-center">
          <h1 className="font-semibold text-lg md:text-2xl">Teams</h1>
          <Link className="ml-auto " href={"/dashboard/teams/create"}>
            Create Team
          </Link>
        </div>
      </main>
    </DashboardLayout>
  );
}
