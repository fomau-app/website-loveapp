export type Lang = "fr" | "en";

export const company = {
  name: "FOMAU",
  form: "SAS",
  capital: "3 000 €",
  address: "11 rue Erlanger, 75016 Paris, France",
  siren: "930 816 954",
  siret: "930 816 954 00018",
  rcs: "RCS Paris 930 816 954",
  vat: "FR33930816954",
  email: "contact@fomau.com",
};

export const appName = "LoveApp";
export const appTagline = "Couple Games";
export const appFullName = "LoveApp - Couple Games";

export const routes = {
  fr: {
    home: "/",
    privacy: "/politique-de-confidentialite",
    terms: "/cgu",
    legal: "/mentions-legales",
    delete: "/suppression-compte",
  },
  en: {
    home: "/en",
    privacy: "/en/privacy",
    terms: "/en/terms",
    legal: "/en/legal-notice",
    delete: "/en/delete-account",
  },
} as const;

export type RouteKey = keyof (typeof routes)["fr"];

export const other = (lang: Lang): Lang => (lang === "fr" ? "en" : "fr");
