import Image from "next/image";
import Link from "next/link";
import { Footer, Header } from "@/components/Chrome";
import { home } from "@/lib/home";
import { routes, type Lang } from "@/lib/site";

function StoreBadge({ label, soon }: { label: string; soon: string }) {
  return (
    <div className="rounded-2xl border border-line bg-card px-5 py-2.5">
      <span className="leading-tight">
        <span className="block text-[11px] uppercase tracking-wider text-dim">{soon}</span>
        <span className="block text-[15px] font-semibold text-text">{label}</span>
      </span>
    </div>
  );
}

export function HomePage({ lang }: { lang: Lang }) {
  const c = home[lang];
  const r = routes[lang];
  return (
    <>
      <Header lang={lang} page="home" />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 top-[-120px] size-[620px] rounded-full blur-3xl"
            style={{ background: "radial-gradient(circle, var(--glow), transparent 68%)" }}
          />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-16 md:grid-cols-[1.15fr_0.85fr] md:pt-24">
            <div className="rise">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{c.eyebrow}</p>
              <h1 className="mt-5 text-[2.9rem] leading-[1.02] sm:text-6xl lg:text-[4.4rem]">
                {c.h1[0]} <em className="font-medium italic text-accent">{c.h1[1]}</em>
              </h1>
              <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-muted">{c.sub}</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <StoreBadge label={c.stores.apple} soon={c.stores.soon} />
                <StoreBadge label={c.stores.google} soon={c.stores.soon} />
              </div>
              <p className="mt-5 text-sm text-dim">{c.free}</p>
            </div>

            <div className="rise relative mx-auto w-full max-w-[400px]" style={{ animationDelay: "0.12s" }}>
              <Image
                src="/loveapp-icon.png"
                alt={lang === "fr" ? "Les deux mascottes de LoveApp, deux flammes amoureuses" : "LoveApp's two mascots, a pair of flames in love"}
                width={640}
                height={640}
                priority
                className="w-full rounded-[22%] shadow-[0_30px_80px_-20px_var(--glow)] ring-1 ring-line"
              />
            </div>
          </div>
        </section>

        {/* Comment ça marche — vraie séquence : l'ordre compte */}
        <section className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="max-w-[18ch] text-3xl sm:text-4xl">{c.stepsTitle}</h2>
          <ol className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-3">
            {c.steps.map((s, i) => (
              <li key={i} className="bg-card p-8">
                <span className="font-serif text-5xl text-accent/70 tabular-nums">{i + 1}</span>
                <h3 className="mt-5 text-xl">{s.t}</h3>
                <p className="mt-2 leading-relaxed text-muted">{s.d}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Envies */}
        <section id={c.desiresId} className="mx-auto max-w-6xl scroll-mt-20 px-5 py-16">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <h2 className="text-3xl sm:text-4xl">{c.desiresTitle}</h2>
              <p className="mt-4 max-w-[40ch] leading-relaxed text-muted">{c.desiresSub}</p>
            </div>
            <ul className="divide-y divide-line border-y border-line">
              {c.desires.map((d) => (
                <li key={d.name} className="grid gap-1 py-6 sm:grid-cols-[28px_1fr] sm:gap-x-5">
                  <span aria-hidden className="mt-2 hidden size-3 rounded-full sm:block" style={{ background: d.tone }} />
                  <div>
                    <h3 className="text-xl sm:text-2xl">{d.name}</h3>
                    <p className="mt-1.5 max-w-[54ch] leading-relaxed text-muted">{d.line}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Daily + flamme */}
        <section id={c.flameId} className="mx-auto max-w-6xl scroll-mt-20 px-5 py-16">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-line bg-card p-8 sm:p-10">
              <h2 className="text-2xl sm:text-3xl">{c.dailyTitle}</h2>
              <p className="mt-4 leading-relaxed text-muted">{c.dailyText}</p>
            </div>
            <div className="rounded-3xl border border-line p-8 sm:p-10" style={{ background: "linear-gradient(160deg, var(--card2), var(--card))" }}>
              <h2 className="text-2xl sm:text-3xl">{c.flameTitle}</h2>
              <p className="mt-4 leading-relaxed text-muted">{c.flameText}</p>
              <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5">
                {c.flameFacts.map((f) => (
                  <div key={f.v}>
                    <dt className="font-serif text-4xl font-semibold text-accent tabular-nums">{f.k}</dt>
                    <dd className="mt-1 text-sm text-muted">{f.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* Vie privée */}
        <section id={c.privacyId} className="mx-auto max-w-6xl scroll-mt-20 px-5 py-16">
          <div className="rounded-[2rem] border border-line bg-bg2 p-8 sm:p-12">
            <h2 className="max-w-[20ch] text-3xl sm:text-4xl">{c.privacyTitle}</h2>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {c.privacyPoints.map((p) => (
                <div key={p.t}>
                  <h3 className="text-lg">{p.t}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{p.d}</p>
                </div>
              ))}
            </div>
            <Link href={r.privacy} className="mt-10 inline-block text-accent underline underline-offset-4 decoration-accent/40 hover:decoration-accent">
              {c.privacyLink} →
            </Link>
          </div>
        </section>

        {/* Gratuit / Premium */}
        <section className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="max-w-[24ch] text-3xl sm:text-4xl">{c.premiumTitle}</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[c.premiumFree, c.premiumPlus].map((col, i) => (
              <div
                key={col.t}
                className={`rounded-3xl border p-8 ${i === 1 ? "border-accent/50 bg-card" : "border-line"}`}
              >
                <h3 className={`text-xl ${i === 1 ? "text-accent" : ""}`}>{col.t}</h3>
                <ul className="mt-5 space-y-3 text-muted">
                  {col.items.map((it) => (
                    <li key={it} className="flex gap-3">
                      <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-[70ch] text-sm text-dim">{c.premiumNote}</p>
        </section>

        {/* Clôture */}
        <section className="mx-auto max-w-6xl px-5 pb-8 pt-16 text-center">
          <h2 className="text-4xl sm:text-5xl">{c.closingTitle}</h2>
          <p className="mt-4 text-lg text-muted">{c.closingText}</p>
        </section>
      </main>
      <Footer lang={lang} />
    </>
  );
}
