import type { Lang } from "./site";

type Desire = { name: string; line: string; tone: string };

export type HomeCopy = {
  eyebrow: string;
  h1: [string, string];
  sub: string;
  free: string;
  stores: { apple: string; google: string; soon: string };
  stepsTitle: string;
  steps: { t: string; d: string }[];
  desiresId: string;
  desiresTitle: string;
  desiresSub: string;
  desires: Desire[];
  dailyTitle: string;
  dailyText: string;
  flameId: string;
  flameTitle: string;
  flameText: string;
  flameFacts: { k: string; v: string }[];
  privacyId: string;
  privacyTitle: string;
  privacyPoints: { t: string; d: string }[];
  privacyLink: string;
  premiumTitle: string;
  premiumFree: { t: string; items: string[] };
  premiumPlus: { t: string; items: string[] };
  premiumNote: string;
  closingTitle: string;
  closingText: string;
  meta: { title: string; description: string };
};

export const home: Record<Lang, HomeCopy> = {
  fr: {
    eyebrow: "LoveApp - Couple Games",
    h1: ["Des jeux à deux,", "chaque soir."],
    sub: "Un seul téléphone, des questions qui font parler, des défis qui font rire. LoveApp transforme votre soirée en petit rituel de complicité.",
    free: "Gratuit pour jouer, sans compte.",
    stores: { apple: "App Store", google: "Google Play", soon: "Bientôt disponible" },
    stepsTitle: "Le canapé, un téléphone, vous deux.",
    steps: [
      { t: "Choisissez votre envie", d: "Discuter, rigoler, se remémorer, aller plus loin… Chaque soir a son humeur, et LoveApp a le jeu qui va avec." },
      { t: "Jouez à tour de rôle", d: "Une carte, une question, un défi. On se passe le téléphone, on se répond de vive voix, on se laisse surprendre." },
      { t: "Entretenez la flamme", d: "Chaque soir joué fait grandir votre série. Votre duo de mascottes évolue au fil des jours, et vous aussi." },
    ],
    desiresId: "envies",
    desiresTitle: "Sept envies, des dizaines de jeux.",
    desiresSub: "L'accueil s'organise comme vos soirées : par envie, pas par catégorie technique.",
    desires: [
      { name: "On veut discuter", line: "Des questions simples pour relancer la conversation, même après une longue journée.", tone: "var(--rose)" },
      { name: "On veut apprendre à se connaître", line: "Vous croyez tout savoir de l'autre ? Check-up, premières fois, mode d'emploi.", tone: "var(--peach)" },
      { name: "On veut discuter de manière profonde", line: "Les questions qui comptent, posées doucement, sans filtre ni jugement.", tone: "var(--lilac)" },
      { name: "On veut rigoler", line: "Toi ou moi, défis, mini-jeux : le fou rire est garanti, la mauvaise foi aussi.", tone: "var(--butter)" },
      { name: "On veut se remémorer des souvenirs", line: "Remonter le temps, retrouver le premier rendez-vous, la première dispute, le premier fou rire.", tone: "var(--sky)" },
      { name: "Hot", line: "Des jeux sensuels, taquins et suggestifs, réservés aux adultes consentants. Mode discret inclus.", tone: "var(--accent)" },
      { name: "On veut parier des cadeaux", line: "Un jeu, un gage, un pacte signé du bout du doigt. Le perdant paie son pari.", tone: "var(--sage)" },
    ],
    dailyTitle: "Tadikoi Daily, le rendez-vous du jour",
    dailyText: "Cinq questions par jour. Chacun répond pour soi sur son propre téléphone, puis devine les réponses de l'autre. Votre score d'affinité se construit jour après jour.",
    flameId: "flamme",
    flameTitle: "Une flamme à ne pas laisser s'éteindre",
    flameText: "Un jeu terminé, un défi du jour relevé : la soirée compte. Votre série grandit, votre mascotte passe d'étincelle à brasier, puis à légende.",
    flameFacts: [
      { k: "5", v: "duos de mascottes vivants" },
      { k: "20", v: "niveaux, d'Étincelle à Éternité" },
      { k: "12", v: "badges à décrocher" },
      { k: "7", v: "langues dans l'app" },
    ],
    privacyId: "vie-privee",
    privacyTitle: "Ce qui se dit sur le canapé reste sur le canapé.",
    privacyPoints: [
      { t: "Vos réponses orales ne sont pas enregistrées", d: "On parle, on ne tape rien. L'app n'écoute pas et ne garde aucune conversation." },
      { t: "Pas besoin de compte pour jouer", d: "Un compte n'est utile que pour jumeler vos deux téléphones, profiter de Premium ou sauvegarder votre progression." },
      { t: "Vos données, votre décision", d: "Suppression du compte et export de vos données possibles à tout moment, depuis l'application." },
    ],
    privacyLink: "Lire la politique de confidentialité",
    premiumTitle: "Gratuit pour jouer. Premium pour aller plus loin.",
    premiumFree: {
      t: "Gratuit",
      items: ["Des jeux complets, jouables chaque jour", "Un avant-goût de tous les autres jeux", "La flamme, les quêtes et la mascotte de départ", "Sans compte, sans engagement"],
    },
    premiumPlus: {
      t: "Premium",
      items: ["Tous les jeux et toutes les cartes, sans limite", "Tadikoi Daily sur vos deux téléphones", "Statistiques et jauges de votre couple", "Un seul abonnement pour vous deux"],
    },
    premiumNote: "Les offres et les prix sont affichés dans l'application avant tout achat. L'abonnement se gère depuis votre compte App Store ou Google Play.",
    closingTitle: "Prêts pour ce soir ?",
    closingText: "LoveApp arrive bientôt sur iPhone et Android.",
    meta: {
      title: "LoveApp - Couple Games · Des jeux à deux, chaque soir",
      description: "LoveApp - Couple Games : l'app de jeux pour couples, sur un seul téléphone. Questions, défis, fous rires et complicité, chaque soir.",
    },
  },
  en: {
    eyebrow: "LoveApp - Couple Games",
    h1: ["Games for two,", "every evening."],
    sub: "One phone, questions that get you talking, dares that make you laugh. LoveApp turns your evening into a small ritual of togetherness.",
    free: "Free to play, no account needed.",
    stores: { apple: "App Store", google: "Google Play", soon: "Coming soon" },
    stepsTitle: "The couch, one phone, the two of you.",
    steps: [
      { t: "Pick your mood", d: "Talk, laugh, reminisce, turn up the heat… Every evening has its mood, and LoveApp has a game for it." },
      { t: "Play in turns", d: "A card, a question, a dare. Pass the phone, answer out loud, let each other surprise you." },
      { t: "Keep the flame alive", d: "Every evening played grows your streak. Your pair of mascots evolves day after day, and so do you." },
    ],
    desiresId: "desires",
    desiresTitle: "Seven moods, dozens of games.",
    desiresSub: "The home screen is organised like your evenings: by mood, not by technical category.",
    desires: [
      { name: "We want to talk", line: "Simple questions to restart the conversation, even after a long day.", tone: "var(--rose)" },
      { name: "We want to get to know each other", line: "Think you know everything about them? Check-ups, first times, user manuals.", tone: "var(--peach)" },
      { name: "We want a deep conversation", line: "The questions that matter, asked gently, with no filter and no judgement.", tone: "var(--lilac)" },
      { name: "We want to laugh", line: "Me or you, dares, mini-games: laughter guaranteed, bad faith too.", tone: "var(--butter)" },
      { name: "We want to remember", line: "Travel back in time: the first date, the first fight, the first fit of giggles.", tone: "var(--sky)" },
      { name: "Hot", line: "Sensual, teasing and suggestive games, for consenting adults only. Discreet mode included.", tone: "var(--accent)" },
      { name: "We want to bet gifts", line: "A game, a forfeit, a pact signed with a fingertip. The loser pays up.", tone: "var(--sage)" },
    ],
    dailyTitle: "Tadikoi Daily, today's date",
    dailyText: "Five questions a day. Each of you answers for yourself on your own phone, then guesses the other's answers. Your affinity score builds up day after day.",
    flameId: "flame",
    flameTitle: "A flame you won't want to let die",
    flameText: "A finished game, a daily dare taken up: the evening counts. Your streak grows, your mascot goes from spark to blaze to legend.",
    flameFacts: [
      { k: "5", v: "living mascot duos" },
      { k: "20", v: "levels, from Spark to Eternity" },
      { k: "12", v: "badges to unlock" },
      { k: "7", v: "languages in the app" },
    ],
    privacyId: "privacy",
    privacyTitle: "What's said on the couch stays on the couch.",
    privacyPoints: [
      { t: "Your spoken answers are not recorded", d: "You talk, you don't type. The app doesn't listen and keeps no conversation." },
      { t: "No account needed to play", d: "An account is only useful to pair your two phones, enjoy Premium or back up your progress." },
      { t: "Your data, your call", d: "Delete your account and export your data at any time, from the app." },
    ],
    privacyLink: "Read the privacy policy",
    premiumTitle: "Free to play. Premium to go further.",
    premiumFree: {
      t: "Free",
      items: ["Full games you can play every day", "A taste of every other game", "The flame, quests and your starter mascot", "No account, no commitment"],
    },
    premiumPlus: {
      t: "Premium",
      items: ["Every game and every card, unlimited", "Tadikoi Daily across your two phones", "Statistics and gauges for your couple", "One subscription for both of you"],
    },
    premiumNote: "Offers and prices are shown in the app before any purchase. Your subscription is managed from your App Store or Google Play account.",
    closingTitle: "Ready for tonight?",
    closingText: "LoveApp is coming soon to iPhone and Android.",
    meta: {
      title: "LoveApp - Couple Games · Games for two, every evening",
      description: "LoveApp - Couple Games: the couples' game app, played on a single phone. Questions, dares, laughs and togetherness, every evening.",
    },
  },
};
