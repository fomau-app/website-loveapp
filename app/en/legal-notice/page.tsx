import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { legalNoticeEn } from "@/lib/legal-en";

export const metadata: Metadata = {
  title: "Legal notice — LoveApp - Couple Games",
  description: "Legal notice of the LoveApp - Couple Games website and app, published by FOMAU.",
};

export default function Page() {
  return <LegalPage lang="en" page="legal" doc={legalNoticeEn} />;
}
