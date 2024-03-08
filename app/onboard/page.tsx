import Header from "@/components/layout/Header";
import CreateCompanyForm from "./components/create-company-form";

export default async function Onboard() {
  return (
    <div>
      <Header />

      <CreateCompanyForm />
    </div>
  );
}
