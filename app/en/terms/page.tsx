import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { termsEn } from "@/lib/legal-en";

export const metadata: Metadata = {
  title: "Terms of use — LoveApp - Couple Games",
  description: "Terms of use of the LoveApp - Couple Games app.",
};

export default function Page() {
  return <LegalPage lang="en" page="terms" doc={termsEn} />;
}
