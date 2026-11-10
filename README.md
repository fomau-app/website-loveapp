# website-loveapp

Site vitrine de **LoveApp - Couple Games** (FR / EN) : présentation de l'app, politique de confidentialité, CGU, mentions légales et page de suppression de compte.

- Next.js 16 (App Router) · Tailwind CSS 4 · export 100 % statique
- Éditeur : FOMAU

## Lancer en local

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```

## Pages

| FR | EN |
| --- | --- |
| `/` | `/en` |
| `/politique-de-confidentialite` | `/en/privacy` |
| `/cgu` | `/en/terms` |
| `/mentions-legales` | `/en/legal-notice` |
| `/suppression-compte` | `/en/delete-account` |

Les textes sont dans `lib/` (`home.ts`, `legal-fr.ts`, `legal-en.ts`), les informations société dans `lib/site.ts`.

## Déploiement

Dépôt prévu pour Vercel (import GitHub, aucune variable d'environnement).
