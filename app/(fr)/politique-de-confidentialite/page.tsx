import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { privacyFr } from "@/lib/legal-fr";

export const metadata: Metadata = {
  title: "Politique de confidentialité — LoveApp - Couple Games",
  description: "Quelles données LoveApp - Couple Games traite, pourquoi, et comment exercer vos droits.",
};

export default function Page() {
  return <LegalPage lang="fr" page="privacy" doc={privacyFr} />;
}
