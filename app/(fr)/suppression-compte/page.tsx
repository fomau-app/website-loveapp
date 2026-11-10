import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { deleteFr } from "@/lib/legal-fr";

export const metadata: Metadata = {
  title: "Supprimer mon compte — LoveApp - Couple Games",
  description: "Comment supprimer votre compte LoveApp et vos données.",
};

export default function Page() {
  return <LegalPage lang="fr" page="delete" doc={deleteFr} />;
}
