import Link from "next/link";
import { backLabel, Footer, Header } from "@/components/Chrome";
import { Inline } from "@/components/Inline";
import type { LegalDoc } from "@/lib/legal-types";
import { routes, type Lang, type RouteKey } from "@/lib/site";

export function LegalPage({ lang, page, doc }: { lang: Lang; page: RouteKey; doc: LegalDoc }) {
  return (
    <>
      <Header lang={lang} page={page} />
      <main className="mx-auto max-w-6xl px-5 pt-14">
        <Link href={routes[lang].home} className="text-sm text-muted hover:text-text">
          ← {backLabel(lang)}
        </Link>

        <div className="mt-10 grid gap-12 lg:grid-cols-[240px_1fr]">
          <aside className="hidden lg:block">
            <nav aria-label={lang === "fr" ? "Sommaire" : "Contents"} className="sticky top-24 space-y-1 border-l border-line pl-4 text-sm">
              {doc.sections.map((s, i) => (
                <a key={i} href={`#s${i + 1}`} className="block py-1 leading-snug text-muted hover:text-text">
                  {s.title}
                </a>
              ))}
            </nav>
          </aside>

          <article className="prose-legal min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">{doc.eyebrow}</p>
            <h1 className="mt-3 text-4xl leading-[1.1] md:text-5xl">{doc.title}</h1>
            <p className="mt-4 text-sm text-dim">{doc.updated}</p>
            {doc.intro && <p className="mt-8 max-w-[68ch] text-lg leading-relaxed text-muted"><Inline text={doc.intro} /></p>}

            <div className="mt-12 space-y-12">
              {doc.sections.map((s, i) => (
                <section key={i} id={`s${i + 1}`} className="scroll-mt-24">
                  <h2 className="mb-4 text-2xl">
                    <span className="mr-2 text-accent tabular-nums">{i + 1}.</span>
                    {s.title}
                  </h2>
                  <div className="space-y-4 text-[15.5px] leading-relaxed text-muted">
                    {s.blocks.map((b, j) => {
                      if ("p" in b) return <p key={j}><Inline text={b.p} /></p>;
                      if ("ul" in b)
                        return (
                          <ul key={j} className="space-y-2 pl-5">
                            {b.ul.map((li, k) => (
                              <li key={k} className="list-disc marker:text-accent"><Inline text={li} /></li>
                            ))}
                          </ul>
                        );
                      if ("card" in b)
                        return (
                          <dl key={j} className="grid gap-x-6 gap-y-2 rounded-2xl border border-line bg-card p-5 sm:grid-cols-[170px_1fr]">
                            {b.card.map(([k, v]) => (
                              <div key={k} className="contents">
                                <dt className="text-dim">{k}</dt>
                                <dd className="text-text"><Inline text={v} /></dd>
                              </div>
                            ))}
                          </dl>
                        );
                      return (
                        <div key={j} className="overflow-x-auto rounded-2xl border border-line">
                          <table className="w-full min-w-[560px] text-left text-sm">
                            <thead className="bg-card text-text">
                              <tr>{b.table.head.map((h) => <th key={h} className="px-4 py-3 font-semibold">{h}</th>)}</tr>
                            </thead>
                            <tbody>
                              {b.table.rows.map((row, r) => (
                                <tr key={r} className="border-t border-line align-top">
                                  {row.map((c, k) => (
                                    <td key={k} className={`px-4 py-3 ${k === 0 ? "text-text" : ""}`}><Inline text={c} /></td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      );
                    })}
                  </div>
                </section>
              ))}
            </div>
          </article>
        </div>
      </main>
      <Footer lang={lang} />
    </>
  );
}
