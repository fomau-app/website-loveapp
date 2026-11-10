import type { Metadata } from "next";
import { HomePage } from "@/components/Home";
import { home } from "@/lib/home";

export const metadata: Metadata = {
  title: home.fr.meta.title,
  description: home.fr.meta.description,
  openGraph: { title: home.fr.meta.title, description: home.fr.meta.description, type: "website" },
};

export default function Page() {
  return <HomePage lang="fr" />;
}
