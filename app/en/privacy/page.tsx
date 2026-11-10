import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { privacyEn } from "@/lib/legal-en";

export const metadata: Metadata = {
  title: "Privacy policy — LoveApp - Couple Games",
  description: "What data LoveApp - Couple Games processes, why, and how to exercise your rights.",
};

export default function Page() {
  return <LegalPage lang="en" page="privacy" doc={privacyEn} />;
}
