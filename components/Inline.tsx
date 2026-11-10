import Link from "next/link";
import { Fragment } from "react";

/** Mini-markup : **gras** et [texte](lien). Les liens commençant par / sont internes. */
export function Inline({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
  return (
    <>
      {parts.map((part, i) => {
        const bold = part.match(/^\*\*([^*]+)\*\*$/);
        if (bold) return <strong key={i} className="font-semibold text-text">{bold[1]}</strong>;
        const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (link) {
          const cls = "text-accent underline underline-offset-4 decoration-accent/40 hover:decoration-accent";
          return link[2].startsWith("/") ? (
            <Link key={i} href={link[2]} className={cls}>{link[1]}</Link>
          ) : (
            <a key={i} href={link[2]} className={cls} {...(link[2].startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
              {link[1]}
            </a>
          );
        }
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </>
  );
}
