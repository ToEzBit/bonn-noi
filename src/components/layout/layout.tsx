import type { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export default function Layout({ children }: Props) {
  return <div className="bg-slate-800">{children}</div>;
}
