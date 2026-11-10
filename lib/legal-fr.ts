import type { LegalDoc } from "./legal-types";
import { appFullName, company } from "./site";

const UPDATED = "Dernière mise à jour : 10 novembre 2026";
const MAIL = `[${company.email}](mailto:${company.email})`;

export const privacyFr: LegalDoc = {
  eyebrow: "Légal",
  title: "Politique de confidentialité",
  updated: UPDATED,
  intro: `Votre vie de couple vous appartient. Cette politique explique, simplement, quelles données **${appFullName}** (« LoveApp ») traite, pourquoi, avec qui nous les partageons et comment exercer vos droits. Elle s'applique à l'application mobile et au site vitrine.`,
  sections: [
    {
      title: "Qui est responsable de vos données ?",
      blocks: [
        { p: "Le responsable du traitement est la société suivante :" },
        {
          card: [
            ["Société", `${company.name}, ${company.form} au capital de ${company.capital}`],
            ["Siège social", company.address],
            ["SIREN", company.siren],
            ["Contact données personnelles", MAIL],
          ],
        },
      ],
    },
    {
      title: "L'essentiel en quelques lignes",
      blocks: [
        {
          ul: [
            "**Vous pouvez jouer sans compte.** Dans ce cas, vos informations restent sur votre téléphone.",
            "**Vos réponses orales ne sont pas enregistrées.** L'application n'accède pas au micro pour écouter vos conversations et ne conserve aucune discussion.",
            "**Aucune géolocalisation, aucun accès à vos contacts.**",
            "**Pas de publicité** dans l'application et aucune vente de vos données.",
            "**Vous pouvez supprimer votre compte et exporter vos données** à tout moment.",
          ],
        },
      ],
    },
    {
      title: "Quelles données collectons-nous ?",
      blocks: [
        { p: "Les données dépendent de la façon dont vous utilisez l'application." },
        {
          table: {
            head: ["Situation", "Données concernées"],
            rows: [
              [
                "Sans compte",
                "Prénoms, pronoms, date de début de relation, statut du couple, mascotte, progression (XP, série, parties, badges, quêtes), préférences (thème, langue, sons, mode discret). **Ces données restent sur votre téléphone.**",
              ],
              [
                "Avec un compte (jumelage, Premium, sauvegarde)",
                "Adresse e-mail ou identifiant Apple / Google (l'adresse peut être masquée si vous utilisez « Se connecter avec Apple »), prénom, pronoms, langue, fuseau horaire, photo de profil (facultative), lien de jumelage avec votre partenaire, progression et statistiques de jeu, dates importantes et étapes de vie que vous saisissez, étincelles et tenues de mascotte.",
              ],
              [
                "Tadikoi Daily",
                "Vos réponses Oui/Non et vos devinettes, visibles uniquement par vous et votre partenaire jumelé. Ces réponses peuvent évoquer votre vie de couple.",
              ],
              [
                "Abonnement et achats",
                "Le paiement est traité par Apple ou Google : nous ne voyons ni votre carte ni vos coordonnées bancaires. Nous recevons, via RevenueCat, un identifiant d'achat et l'état de votre abonnement (actif, essai, expiré).",
              ],
              [
                "Notifications",
                "Jeton de notification de votre téléphone, heure de rappel choisie, préférences de notification.",
              ],
              [
                "Mesure d'audience et technique",
                "Événements d'usage (écrans consultés, jeux lancés), modèle de téléphone, système et version de l'application, langue, identifiants techniques, rapports d'incident.",
              ],
              [
                "Photos et caméra",
                "Vous choisissez une photo de profil depuis la caméra ou la pellicule uniquement quand vous le décidez. Les photos prises pour le jeu « Défis » ne sont gardées en mémoire que le temps de la partie.",
              ],
            ],
          },
        },
        { p: "**Données sensibles.** Certains jeux (catégorie « Hot », questions de couple) peuvent aborder l'intimité. L'application ne vous demande jamais de saisir librement des informations sur votre santé ou votre vie sexuelle : on joue à voix haute. Les seules réponses conservées sont les réponses Oui/Non du Tadikoi Daily. Leur traitement repose sur votre consentement, que vous pouvez retirer à tout moment en supprimant votre compte." },
      ],
    },
    {
      title: "Pourquoi utilisons-nous vos données ?",
      blocks: [
        {
          table: {
            head: ["Finalité", "Base légale"],
            rows: [
              ["Fournir l'application : compte, jumelage, progression, Tadikoi Daily, personnalisation", "Exécution du contrat (les CGU)"],
              ["Gérer l'abonnement Premium et les achats", "Exécution du contrat"],
              ["Envoyer des notifications (rappel du soir, flamme en danger, partenaire qui attend)", "Votre consentement, demandé par votre téléphone"],
              ["Mesurer l'usage et améliorer l'application, corriger les bugs", "Intérêt légitime, ou consentement lorsque la loi l'exige"],
              ["Sécurité, prévention de la fraude et des abus", "Intérêt légitime"],
              ["Obligations comptables, fiscales et réponse aux demandes légales", "Obligation légale"],
            ],
          },
        },
      ],
    },
    {
      title: "Avec qui partageons-nous vos données ?",
      blocks: [
        { p: "Nous ne vendons pas vos données. Elles sont accessibles à nos prestataires, uniquement pour faire fonctionner le service :" },
        {
          table: {
            head: ["Destinataire", "Rôle"],
            rows: [
              ["Google (Firebase)", "Hébergement des données serveur, envoi des notifications, mesure d'audience"],
              ["RevenueCat", "Gestion et vérification des abonnements"],
              ["Apple et Google", "Boutiques d'applications, paiements, connexion « Se connecter avec Apple / Google »"],
              ["Vercel", "Hébergement du site vitrine"],
            ],
          },
        },
        { p: "**Votre partenaire jumelé** voit votre prénom, votre photo de profil, votre progression commune et vos réponses du Tadikoi Daily. Vous pouvez mettre fin au jumelage à tout moment. Nous pouvons enfin communiquer des données aux autorités lorsque la loi nous y oblige." },
      ],
    },
    {
      title: "Où sont stockées vos données ?",
      blocks: [
        { p: "Nous configurons nos services pour héberger les données au sein de l'Union européenne dans toute la mesure du possible. Certains prestataires (notamment Google, RevenueCat et Apple) peuvent traiter des données aux États-Unis ou dans d'autres pays. Ces transferts sont encadrés par les mécanismes prévus par le RGPD : décision d'adéquation (Data Privacy Framework) ou clauses contractuelles types de la Commission européenne." },
      ],
    },
    {
      title: "Combien de temps les conservons-nous ?",
      blocks: [
        {
          ul: [
            "**Données de compte et de jeu** : tant que votre compte existe. À la suppression du compte, elles sont effacées ou anonymisées ; les copies de sauvegarde sont purgées sous 30 jours.",
            "**Données de mesure d'audience** : 13 mois au maximum.",
            "**Jetons de notification** : jusqu'à la désinstallation de l'application ou le retrait de l'autorisation.",
            "**Données comptables liées aux achats** : durée légale de conservation (10 ans).",
            "**Photos prises pour le jeu « Défis »** : le temps de la partie, uniquement en mémoire.",
          ],
        },
      ],
    },
    {
      title: "Vos droits",
      blocks: [
        { p: "Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits d'accès, de rectification, d'effacement, de limitation, d'opposition, de portabilité, ainsi que du droit de retirer votre consentement à tout moment et de définir des directives sur le sort de vos données après votre décès." },
        { p: `Vous pouvez supprimer votre compte et exporter vos données depuis l'application. Vous pouvez aussi nous écrire à ${MAIL}. Nous répondons dans un délai d'un mois. Pour la suppression, consultez la page [Supprimer mon compte](/suppression-compte).` },
        { p: "Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la CNIL : [cnil.fr](https://www.cnil.fr), 3 place de Fontenoy, TSA 80715, 75334 Paris Cedex 07." },
      ],
    },
    {
      title: "Sécurité",
      blocks: [
        { p: "Les échanges sont chiffrés (HTTPS). Les données sont chiffrées au repos chez nos hébergeurs, l'accès est limité à ce qui est nécessaire, les photos de profil sont stockées de manière privée et les journaux techniques ne contiennent pas de données personnelles. Aucun système n'étant infaillible, nous vous informerons ainsi que la CNIL en cas de violation de données présentant un risque, conformément à la loi." },
      ],
    },
    {
      title: "Âge minimum",
      blocks: [
        { p: `${appFullName} est réservée aux personnes de **16 ans et plus**. Nous ne collectons pas sciemment de données de personnes plus jeunes. Si vous pensez qu'un mineur de moins de 16 ans nous a transmis des données, écrivez-nous à ${MAIL} et nous les supprimerons.` },
      ],
    },
    {
      title: "Site vitrine et cookies",
      blocks: [
        { p: "Ce site n'utilise aucun cookie publicitaire ni outil de mesure d'audience. Notre hébergeur peut enregistrer des journaux techniques (adresse IP, date de visite) à des fins de sécurité et de bon fonctionnement." },
      ],
    },
    {
      title: "Modifications",
      blocks: [
        { p: "Nous pouvons mettre à jour cette politique, par exemple lorsque de nouvelles fonctionnalités sont ajoutées. La date de dernière mise à jour figure en haut de la page ; en cas de changement important, nous vous en informerons dans l'application." },
      ],
    },
  ],
};

export const termsFr: LegalDoc = {
  eyebrow: "Légal",
  title: "Conditions générales d'utilisation",
  updated: UPDATED,
  intro: `Ces conditions encadrent l'utilisation de **${appFullName}**. En utilisant l'application, vous les acceptez. Si vous n'êtes pas d'accord, ne l'utilisez pas.`,
  sections: [
    {
      title: "Qui sommes-nous ?",
      blocks: [
        { p: "L'application est éditée par :" },
        {
          card: [
            ["Société", `${company.name}, ${company.form} au capital de ${company.capital}`],
            ["Siège social", company.address],
            ["Immatriculation", `${company.rcs} — SIRET ${company.siret}`],
            ["Contact", MAIL],
          ],
        },
      ],
    },
    {
      title: "Le service",
      blocks: [
        { p: `${appFullName} est une application mobile de jeux à faire en couple : questions, discussions, défis, jeux de devinettes et de paris amicaux. Elle se joue principalement à deux sur un seul téléphone ; le Tadikoi Daily se joue chacun sur son téléphone, après jumelage. L'application comprend également une progression (série, niveaux, badges, quêtes), des mascottes et des éléments de personnalisation.` },
        { p: "C'est un divertissement. Elle ne remplace en aucun cas l'avis d'un professionnel (thérapeute de couple, médecin, avocat)." },
      ],
    },
    {
      title: "Âge minimum et contenus pour adultes",
      blocks: [
        { p: "L'application est réservée aux personnes de **16 ans et plus**. En l'utilisant, vous déclarez avoir au moins 16 ans." },
        { p: "La catégorie « Hot » et certains jeux abordent l'intimité des couples de manière suggestive. Ces contenus sont destinés aux **personnes majeures** (18 ans, ou l'âge de la majorité dans votre pays). Si vous êtes mineur, vous vous engagez à ne pas les utiliser. Le mode discret permet de masquer ces contenus." },
      ],
    },
    {
      title: "Compte et jumelage",
      blocks: [
        {
          ul: [
            "Un compte n'est pas nécessaire pour jouer. Il devient utile pour jumeler deux téléphones, bénéficier de Premium ou sauvegarder votre progression.",
            "Vous vous engagez à fournir des informations exactes et à garder vos identifiants confidentiels. Vous êtes responsable de l'usage de votre compte.",
            "Le jumelage se fait grâce à un code à usage unique que vous partagez avec votre partenaire. Un compte ne peut être jumelé qu'à un seul couple à la fois. Chacun peut quitter le jumelage à tout moment.",
            "Vous pouvez supprimer votre compte à tout moment depuis l'application (voir [Supprimer mon compte](/suppression-compte)).",
          ],
        },
      ],
    },
    {
      title: "Jouer avec bienveillance",
      blocks: [
        { p: "Les jeux et défis sont faits pour être partagés dans le plaisir. Vous vous engagez à :" },
        {
          ul: [
            "ne jamais forcer votre partenaire à répondre, à jouer ou à relever un défi : chacun peut passer, s'arrêter ou refuser, sans justification ;",
            "ne réaliser aucun défi ou gage qui soit dangereux, illégal, humiliant ou contraire à vos limites ;",
            "ne pas utiliser l'application pour harceler, menacer, contrôler ou surveiller une personne ;",
            "ne pas utiliser l'application dans un but illicite, ni tenter de la détourner, de contourner ses limites ou d'en perturber le fonctionnement.",
          ],
        },
        { p: "Les défis, gages et « pactes » de l'application sont de simples jeux entre vous : ils n'ont **aucune valeur juridique** et ne créent aucune obligation. Vous les réalisez sous votre seule responsabilité." },
      ],
    },
    {
      title: "Offre gratuite et Premium",
      blocks: [
        { p: "**On peut jouer gratuitement, sans payer.** Une partie des jeux est accessible gratuitement, avec un avant-goût des autres." },
        { p: "**Premium** est un abonnement facultatif qui débloque l'ensemble des jeux et des fonctionnalités avancées. Un seul abonnement profite aux deux membres du couple jumelé. Selon les périodes, des formules mensuelle et annuelle, avec ou sans période d'essai, peuvent être proposées. Les prix, la durée et les conditions applicables sont affichés dans l'application avant tout achat et peuvent évoluer ; le prix que vous avez accepté ne change pas en cours de période." },
        {
          ul: [
            "**Paiement** : les achats sont réalisés via votre compte App Store ou Google Play et soumis à leurs conditions.",
            "**Renouvellement** : l'abonnement se renouvelle automatiquement, sauf résiliation au moins 24 heures avant la fin de la période en cours, depuis les réglages de votre compte App Store ou Google Play. Supprimer l'application ou votre compte LoveApp ne résilie pas l'abonnement.",
            "**Rétractation et remboursement** : les contenus numériques étant fournis immédiatement avec votre accord, vous reconnaissez perdre votre droit de rétractation dès le début de leur fourniture (art. L221-28 du Code de la consommation). Les demandes de remboursement sont traitées par Apple ou Google selon leurs politiques.",
            "**Étincelles** : les étincelles sont une monnaie virtuelle gagnée en jouant et utilisable uniquement dans l'application. Elles n'ont aucune valeur monétaire, ne sont ni échangeables ni remboursables.",
          ],
        },
      ],
    },
    {
      title: "Propriété intellectuelle",
      blocks: [
        { p: `L'application, ses textes, jeux, mascottes, illustrations, logos et marques sont la propriété de ${company.name} ou de ses concédants et sont protégés. Nous vous accordons un droit personnel, non exclusif, non transférable et révocable d'utiliser l'application pour un usage privé. Toute copie, extraction de contenus, ingénierie inverse ou exploitation commerciale est interdite.` },
        { p: "Vous restez propriétaire de la photo de profil que vous ajoutez. Vous nous autorisez à l'héberger et à l'afficher à votre partenaire jumelé, pour les besoins du service uniquement. Vous garantissez avoir le droit de l'utiliser et qu'elle ne porte atteinte à aucun tiers." },
      ],
    },
    {
      title: "Disponibilité et évolution du service",
      blocks: [
        { p: "Nous faisons de notre mieux pour que l'application fonctionne correctement, mais nous ne garantissons pas une disponibilité continue (maintenance, incident, dépendance à des services tiers). Nous pouvons faire évoluer, modifier ou retirer des fonctionnalités et des contenus, notamment pour des raisons techniques, légales ou de qualité." },
      ],
    },
    {
      title: "Responsabilité",
      blocks: [
        { p: "Dans les limites autorisées par la loi, et sans préjudice de vos droits de consommateur, notre responsabilité ne saurait être engagée pour les conséquences d'un défi, d'un gage ou d'une discussion réalisés à partir de l'application, ni pour les dommages indirects (perte de données, de profits, préjudice moral) résultant de son utilisation. Rien dans ces conditions n'exclut notre responsabilité en cas de faute lourde, de dol, de dommage corporel ou lorsque la loi l'interdit." },
      ],
    },
    {
      title: "Suspension et résiliation",
      blocks: [
        { p: "Vous pouvez cesser d'utiliser l'application et supprimer votre compte à tout moment. Nous pouvons suspendre ou supprimer un compte en cas de non-respect de ces conditions, après vous en avoir informé lorsque c'est possible." },
      ],
    },
    {
      title: "Données personnelles",
      blocks: [
        { p: "Le traitement de vos données est décrit dans notre [Politique de confidentialité](/politique-de-confidentialite), qui fait partie de ces conditions." },
      ],
    },
    {
      title: "Modification des conditions",
      blocks: [
        { p: "Nous pouvons modifier ces conditions, par exemple lors de l'ajout de fonctionnalités. En cas de changement important, nous vous en informerons dans l'application. Continuer à l'utiliser après l'entrée en vigueur des nouvelles conditions vaut acceptation ; sinon, vous pouvez supprimer votre compte." },
      ],
    },
    {
      title: "Droit applicable, médiation et litiges",
      blocks: [
        { p: `Ces conditions sont soumises au droit français. En cas de difficulté, contactez-nous d'abord à ${MAIL} : nous chercherons une solution amiable. Si vous agissez en tant que consommateur, vous pouvez recourir gratuitement à un médiateur de la consommation ; ses coordonnées vous sont communiquées sur simple demande. À défaut d'accord, les tribunaux compétents seront ceux de Paris, sans préjudice des règles impératives de compétence applicables aux consommateurs.` },
      ],
    },
  ],
};

export const legalNoticeFr: LegalDoc = {
  eyebrow: "Légal",
  title: "Mentions légales",
  updated: UPDATED,
  sections: [
    {
      title: "Éditeur",
      blocks: [
        { p: `Le site et l'application **${appFullName}** sont édités par :` },
        {
          card: [
            ["Société", `${company.name}, société par actions simplifiée (${company.form})`],
            ["Capital social", company.capital],
            ["Siège social", company.address],
            ["SIREN", company.siren],
            ["SIRET (siège)", company.siret],
            ["RCS", company.rcs],
            ["TVA intracommunautaire", company.vat],
            ["Contact", MAIL],
            ["Directeur de la publication", `Le représentant légal de ${company.name}`],
          ],
        },
      ],
    },
    {
      title: "Hébergement du site",
      blocks: [
        {
          card: [
            ["Hébergeur", "Vercel Inc."],
            ["Adresse", "440 N Barranca Ave #4133, Covina, CA 91723, États-Unis"],
            ["Site", "[vercel.com](https://vercel.com)"],
          ],
        },
      ],
    },
    {
      title: "Propriété intellectuelle",
      blocks: [
        { p: `L'ensemble du contenu du site et de l'application (textes, jeux, mascottes, illustrations, logos, interface) est protégé par le droit d'auteur et le droit des marques, et appartient à ${company.name} sauf mention contraire. Toute reproduction ou diffusion non autorisée est interdite.` },
      ],
    },
    {
      title: "Données personnelles",
      blocks: [
        { p: "La collecte et le traitement des données personnelles sont décrits dans notre [Politique de confidentialité](/politique-de-confidentialite). L'utilisation de l'application est régie par nos [Conditions générales d'utilisation](/cgu)." },
      ],
    },
    {
      title: "Responsabilité",
      blocks: [
        { p: `${company.name} s'efforce de maintenir les informations publiées à jour et exactes, mais ne saurait être tenue responsable des erreurs ou omissions, ni des dommages résultant de l'utilisation du site. Les liens vers des sites tiers n'engagent pas ${company.name} quant à leur contenu.` },
      ],
    },
    {
      title: "Droit applicable",
      blocks: [
        { p: "Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français sont compétents." },
      ],
    },
  ],
};

export const deleteFr: LegalDoc = {
  eyebrow: "Compte",
  title: "Supprimer mon compte",
  updated: UPDATED,
  intro: "Vous pouvez supprimer votre compte LoveApp et vos données à tout moment. La suppression est définitive.",
  sections: [
    {
      title: "Depuis l'application",
      blocks: [
        {
          ul: [
            "Ouvrez LoveApp sur votre téléphone.",
            "Allez dans **Réglages**.",
            "Appuyez sur **Supprimer mon compte**.",
            "Confirmez : l'action est irréversible.",
          ],
        },
      ],
    },
    {
      title: "Par e-mail",
      blocks: [
        { p: `Si vous ne pouvez plus accéder à l'application, écrivez-nous à ${MAIL} depuis l'adresse associée à votre compte, en indiquant « Suppression de compte ». Nous pouvons vous demander de confirmer votre identité, puis nous traitons votre demande dans un délai d'un mois au plus.` },
      ],
    },
    {
      title: "Ce qui est supprimé",
      blocks: [
        {
          ul: [
            "Votre profil : prénom, pronoms, photo de profil, e-mail ou identifiant de connexion ;",
            "Votre progression, vos statistiques, vos dates importantes et étapes de vie, vos étincelles et tenues ;",
            "Vos réponses et devinettes du Tadikoi Daily ;",
            "Votre jumelage : il prend fin et vos données personnelles ne sont plus affichées à votre partenaire ;",
            "Vos jetons de notification.",
          ],
        },
        { p: "Les copies de sauvegarde sont purgées sous 30 jours. Certaines données comptables liées à des achats peuvent être conservées pendant la durée légale." },
      ],
    },
    {
      title: "Bon à savoir",
      blocks: [
        {
          ul: [
            "**Votre abonnement Premium n'est pas résilié automatiquement.** Résiliez-le depuis les réglages de votre compte App Store ou Google Play pour ne plus être facturé.",
            "Vous souhaitez conserver une copie de vos données ? Exportez-les depuis l'application avant de supprimer votre compte.",
            "Sans compte, vos données restent sur votre téléphone : désinstaller l'application suffit à les effacer.",
          ],
        },
      ],
    },
  ],
};
