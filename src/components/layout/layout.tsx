import type { ReactNode } from "react";
import NavBar from "./navbar";

interface Props {
  children?: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="bg-slate-800">
      <NavBar />
      {children}
    </div>
  );
}
