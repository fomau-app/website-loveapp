export type Block =
  | { p: string }
  | { ul: string[] }
  | { table: { head: string[]; rows: string[][] } }
  | { card: [string, string][] };

export type Section = { title: string; blocks: Block[] };

export type LegalDoc = {
  eyebrow: string;
  title: string;
  updated: string;
  intro?: string;
  sections: Section[];
};
