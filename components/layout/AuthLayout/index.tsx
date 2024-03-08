import { ReactNode } from "react";
import Header from "../Header";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <Header />
      <div className="flex flex-1">{children}</div>
    </div>
  );
}
