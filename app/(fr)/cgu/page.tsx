import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { termsFr } from "@/lib/legal-fr";

export const metadata: Metadata = {
  title: "CGU — LoveApp - Couple Games",
  description: "Conditions générales d'utilisation de l'application LoveApp - Couple Games.",
};

export default function Page() {
  return <LegalPage lang="fr" page="terms" doc={termsFr} />;
}
