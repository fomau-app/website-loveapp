import type { Metadata } from "next";
import { HomePage } from "@/components/Home";
import { home } from "@/lib/home";

export const metadata: Metadata = {
  title: home.en.meta.title,
  description: home.en.meta.description,
  openGraph: { title: home.en.meta.title, description: home.en.meta.description, type: "website" },
};

export default function Page() {
  return <HomePage lang="en" />;
}
