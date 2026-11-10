import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { deleteEn } from "@/lib/legal-en";

export const metadata: Metadata = {
  title: "Delete my account — LoveApp - Couple Games",
  description: "How to delete your LoveApp account and your data.",
};

export default function Page() {
  return <LegalPage lang="en" page="delete" doc={deleteEn} />;
}
