import type { Metadata } from "next";
import { WorkspaceShell } from "@/components/ide/WorkspaceShell";

export const metadata: Metadata = {
  title: "Code",
  alternates: { canonical: "/code" },
};

export default function CodePage() {
  return <WorkspaceShell initialFileId="repo:README.md" navigationMode="source" />;
}
