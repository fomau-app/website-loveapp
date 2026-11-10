import Image from "next/image";
import Link from "next/link";
import { appFullName, company, other, routes, type Lang, type RouteKey } from "@/lib/site";

const labels = {
  fr: {
    nav: [
      ["#envies", "Les envies"],
      ["#flamme", "La flamme"],
      ["#vie-privee", "Vie privée"],
    ],
    switch: "English",
    legal: "Légal",
    contact: "Contact",
    terms: "CGU",
    privacy: "Politique de confidentialité",
    legalNotice: "Mentions légales",
    del: "Supprimer mon compte",
    tagline: "Des jeux à deux, chaque soir.",
    rights: "Tous droits réservés.",
    back: "Retour à l'accueil",
  },
  en: {
    nav: [
      ["#desires", "Moods"],
      ["#flame", "The flame"],
      ["#privacy", "Privacy"],
    ],
    switch: "Français",
    legal: "Legal",
    contact: "Contact",
    terms: "Terms of use",
    privacy: "Privacy policy",
    legalNotice: "Legal notice",
    del: "Delete my account",
    tagline: "Games for two, every evening.",
    rights: "All rights reserved.",
    back: "Back to home",
  },
} as const;

export const backLabel = (lang: Lang) => labels[lang].back;

/** Lien vers la même page dans l'autre langue (accueil si inconnue). */
export function Header({ lang, page = "home" }: { lang: Lang; page?: RouteKey }) {
  const l = labels[lang];
  const home = routes[lang].home;
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link href={home} className="flex items-center gap-2.5" aria-label={appFullName}>
          <Image src="/loveapp-icon.png" alt="" width={32} height={32} className="size-8 rounded-[9px]" />
          <span className="font-serif text-[19px] font-semibold tracking-tight">
            LoveApp <span className="hidden text-muted sm:inline">· Couple Games</span>
          </span>
        </Link>
        {page === "home" && (
          <nav className="hidden items-center gap-7 text-sm text-muted md:flex">
            {l.nav.map(([href, label]) => (
              <a key={href} href={`${home === "/" ? "" : home}${href}`} className="hover:text-text">
                {label}
              </a>
            ))}
          </nav>
        )}
        <Link
          href={routes[other(lang)][page]}
          hrefLang={other(lang)}
          lang={other(lang)}
          className="rounded-full border border-line px-3.5 py-1.5 text-sm font-medium text-muted hover:text-text"
        >
          {l.switch}
        </Link>
      </div>
    </header>
  );
}

export function Footer({ lang }: { lang: Lang }) {
  const l = labels[lang];
  const r = routes[lang];
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <Image src="/loveapp-icon.png" alt="" width={36} height={36} className="size-9 rounded-[10px]" />
            <span className="font-serif text-xl font-semibold">{appFullName}</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-muted">{l.tagline}</p>
        </div>
        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-dim">{l.legal}</h4>
          <ul className="space-y-2.5 text-sm text-muted">
            <li><Link href={r.terms} className="hover:text-text">{l.terms}</Link></li>
            <li><Link href={r.privacy} className="hover:text-text">{l.privacy}</Link></li>
            <li><Link href={r.legal} className="hover:text-text">{l.legalNotice}</Link></li>
            <li><Link href={r.delete} className="hover:text-text">{l.del}</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-dim">{l.contact}</h4>
          <ul className="space-y-2.5 text-sm text-muted">
            <li><a href={`mailto:${company.email}`} className="hover:text-text">{company.email}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-dim">
          © {year} {company.name} — {appFullName}. {l.rights}
        </p>
      </div>
    </footer>
  );
}
