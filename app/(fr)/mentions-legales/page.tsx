import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { legalNoticeFr } from "@/lib/legal-fr";

export const metadata: Metadata = {
  title: "Mentions légales — LoveApp - Couple Games",
  description: "Mentions légales du site et de l'application LoveApp - Couple Games, éditée par FOMAU.",
};

export default function Page() {
  return <LegalPage lang="fr" page="legal" doc={legalNoticeFr} />;
}
