import type { LegalDoc } from "./legal-types";
import { appFullName, company } from "./site";

const UPDATED = "Last updated: November 10, 2026";
const MAIL = `[${company.email}](mailto:${company.email})`;

export const privacyEn: LegalDoc = {
  eyebrow: "Legal",
  title: "Privacy policy",
  updated: UPDATED,
  intro: `Your relationship is yours. This policy explains, plainly, what data **${appFullName}** ("LoveApp") processes, why, who we share it with and how to exercise your rights. It applies to the mobile app and to this website.`,
  sections: [
    {
      title: "Who is responsible for your data?",
      blocks: [
        { p: "The data controller is:" },
        {
          card: [
            ["Company", `${company.name}, ${company.form} (simplified joint-stock company) with a share capital of ${company.capital}`],
            ["Registered office", company.address],
            ["Company number (SIREN)", company.siren],
            ["Privacy contact", MAIL],
          ],
        },
      ],
    },
    {
      title: "The essentials in a few lines",
      blocks: [
        {
          ul: [
            "**You can play without an account.** In that case, your information stays on your phone.",
            "**Your spoken answers are not recorded.** The app does not use the microphone to listen to your conversations and keeps no discussion.",
            "**No geolocation, no access to your contacts.**",
            "**No advertising** in the app and we never sell your data.",
            "**You can delete your account and export your data** at any time.",
          ],
        },
      ],
    },
    {
      title: "What data do we collect?",
      blocks: [
        { p: "It depends on how you use the app." },
        {
          table: {
            head: ["Situation", "Data involved"],
            rows: [
              [
                "Without an account",
                "First names, pronouns, relationship start date, couple status, mascot, progress (XP, streak, games, badges, quests), preferences (theme, language, sounds, discreet mode). **This data stays on your phone.**",
              ],
              [
                "With an account (pairing, Premium, backup)",
                "Email address or Apple / Google identifier (the address can be hidden if you use \"Sign in with Apple\"), first name, pronouns, language, time zone, profile photo (optional), pairing link with your partner, gameplay progress and statistics, important dates and life milestones you enter, sparks and mascot outfits.",
              ],
              [
                "Tadikoi Daily",
                "Your Yes/No answers and guesses, visible only to you and your paired partner. These answers may relate to your relationship.",
              ],
              [
                "Subscription and purchases",
                "Payment is handled by Apple or Google: we never see your card or bank details. Through RevenueCat, we receive a purchase identifier and your subscription status (active, trial, expired).",
              ],
              [
                "Notifications",
                "Your phone's notification token, the reminder time you choose, notification preferences.",
              ],
              [
                "Analytics and technical data",
                "Usage events (screens viewed, games started), phone model, operating system and app version, language, technical identifiers, crash reports.",
              ],
              [
                "Photos and camera",
                "You pick a profile photo from the camera or photo library only when you decide to. Photos taken for the \"Dares\" game are kept in memory only for the duration of the game.",
              ],
            ],
          },
        },
        { p: "**Sensitive data.** Some games (the \"Hot\" category, couple questions) may touch on intimacy. The app never asks you to freely type information about your health or sex life: you play out loud. The only answers stored are the Yes/No answers of Tadikoi Daily. Their processing is based on your consent, which you can withdraw at any time by deleting your account." },
      ],
    },
    {
      title: "Why do we use your data?",
      blocks: [
        {
          table: {
            head: ["Purpose", "Legal basis"],
            rows: [
              ["Providing the app: account, pairing, progress, Tadikoi Daily, personalisation", "Performance of a contract (the Terms)"],
              ["Managing the Premium subscription and purchases", "Performance of a contract"],
              ["Sending notifications (evening reminder, flame at risk, partner waiting)", "Your consent, requested by your phone"],
              ["Measuring usage, improving the app, fixing bugs", "Legitimate interest, or consent where the law requires it"],
              ["Security, fraud and abuse prevention", "Legitimate interest"],
              ["Accounting and tax obligations, responding to legal requests", "Legal obligation"],
            ],
          },
        },
      ],
    },
    {
      title: "Who do we share your data with?",
      blocks: [
        { p: "We do not sell your data. It is accessible to our service providers, solely to run the service:" },
        {
          table: {
            head: ["Recipient", "Role"],
            rows: [
              ["Google (Firebase)", "Server data hosting, notification delivery, analytics"],
              ["RevenueCat", "Subscription management and verification"],
              ["Apple and Google", "App stores, payments, \"Sign in with Apple / Google\""],
              ["Vercel", "Hosting of this website"],
            ],
          },
        },
        { p: "**Your paired partner** sees your first name, your profile photo, your shared progress and your Tadikoi Daily answers. You can end the pairing at any time. We may also disclose data to authorities when required by law." },
      ],
    },
    {
      title: "Where is your data stored?",
      blocks: [
        { p: "We configure our services to host data within the European Union wherever possible. Some providers (notably Google, RevenueCat and Apple) may process data in the United States or other countries. Such transfers are covered by the mechanisms provided for by the GDPR: an adequacy decision (Data Privacy Framework) or the European Commission's standard contractual clauses." },
      ],
    },
    {
      title: "How long do we keep it?",
      blocks: [
        {
          ul: [
            "**Account and gameplay data**: as long as your account exists. When you delete it, the data is erased or anonymised; backup copies are purged within 30 days.",
            "**Analytics data**: 13 months maximum.",
            "**Notification tokens**: until you uninstall the app or withdraw permission.",
            "**Accounting data related to purchases**: the legal retention period (10 years).",
            "**Photos taken for the \"Dares\" game**: for the duration of the game, in memory only.",
          ],
        },
      ],
    },
    {
      title: "Your rights",
      blocks: [
        { p: "Under the GDPR you have the right to access, rectify, erase, restrict, object, and port your data, to withdraw your consent at any time, and to set instructions for your data after your death." },
        { p: `You can delete your account and export your data from the app. You can also write to us at ${MAIL}. We reply within one month. To delete your account, see [Delete my account](/en/delete-account).` },
        { p: "If you believe your rights are not respected, you may lodge a complaint with the French data protection authority, the CNIL ([cnil.fr](https://www.cnil.fr)), or with the authority of your country of residence." },
      ],
    },
    {
      title: "Security",
      blocks: [
        { p: "Communications are encrypted (HTTPS). Data is encrypted at rest with our hosting providers, access is limited to what is necessary, profile photos are stored privately and technical logs contain no personal data. As no system is infallible, we will notify you and the supervisory authority of any data breach presenting a risk, as required by law." },
      ],
    },
    {
      title: "Minimum age",
      blocks: [
        { p: `${appFullName} is intended for people aged **16 and over**. We do not knowingly collect data from anyone younger. If you believe a child under 16 has given us data, write to ${MAIL} and we will delete it.` },
      ],
    },
    {
      title: "Website and cookies",
      blocks: [
        { p: "This website uses no advertising cookies and no analytics tool. Our host may record technical logs (IP address, visit date) for security and proper operation." },
      ],
    },
    {
      title: "Changes",
      blocks: [
        { p: "We may update this policy, for instance when new features are added. The date of the last update appears at the top of the page; for any significant change, we will let you know in the app." },
      ],
    },
  ],
};

export const termsEn: LegalDoc = {
  eyebrow: "Legal",
  title: "Terms of use",
  updated: UPDATED,
  intro: `These terms govern your use of **${appFullName}**. By using the app, you accept them. If you disagree, please do not use it.`,
  sections: [
    {
      title: "Who we are",
      blocks: [
        { p: "The app is published by:" },
        {
          card: [
            ["Company", `${company.name}, ${company.form} with a share capital of ${company.capital}`],
            ["Registered office", company.address],
            ["Registration", `${company.rcs} — SIRET ${company.siret}`],
            ["Contact", MAIL],
          ],
        },
      ],
    },
    {
      title: "The service",
      blocks: [
        { p: `${appFullName} is a mobile app of games for couples: questions, conversations, dares, guessing games and friendly bets. It is mainly played by two people on a single phone; Tadikoi Daily is played on each person's own phone, once paired. The app also includes progress (streak, levels, badges, quests), mascots and customisation items.` },
        { p: "It is entertainment. It is in no way a substitute for professional advice (couples therapist, doctor, lawyer)." },
      ],
    },
    {
      title: "Minimum age and adult content",
      blocks: [
        { p: "The app is intended for people aged **16 and over**. By using it, you declare that you are at least 16." },
        { p: "The \"Hot\" category and some games touch on intimacy between partners in a suggestive way. This content is intended for **adults** (18, or the age of majority in your country). If you are a minor, you agree not to use it. Discreet mode lets you hide this content." },
      ],
    },
    {
      title: "Account and pairing",
      blocks: [
        {
          ul: [
            "You don't need an account to play. It becomes useful to pair two phones, get Premium or back up your progress.",
            "You agree to provide accurate information and keep your credentials confidential. You are responsible for your account's activity.",
            "Pairing uses a one-time code that you share with your partner. An account can be paired with only one couple at a time. Either of you can leave the pairing at any time.",
            "You can delete your account at any time from the app (see [Delete my account](/en/delete-account)).",
          ],
        },
      ],
    },
    {
      title: "Playing kindly",
      blocks: [
        { p: "Games and dares are meant to be enjoyed together. You agree to:" },
        {
          ul: [
            "never pressure your partner to answer, play or take on a dare: anyone can skip, stop or decline, without justification;",
            "not carry out any dare or forfeit that is dangerous, illegal, humiliating or against your limits;",
            "not use the app to harass, threaten, control or monitor anyone;",
            "not use the app for any unlawful purpose, nor attempt to misuse it, bypass its limits or disrupt its operation.",
          ],
        },
        { p: "The app's dares, forfeits and \"pacts\" are simply games between you: they have **no legal value** and create no obligation. You carry them out at your own risk." },
      ],
    },
    {
      title: "Free and Premium",
      blocks: [
        { p: "**You can play for free, without paying.** Part of the games are free to play, with a taste of the others." },
        { p: "**Premium** is an optional subscription that unlocks every game and the advanced features. One subscription benefits both members of a paired couple. Depending on the period, monthly and yearly plans, with or without a free trial, may be offered. Prices, duration and applicable conditions are shown in the app before any purchase and may change; the price you accepted does not change during the current period." },
        {
          ul: [
            "**Payment**: purchases are made through your App Store or Google Play account and are subject to their terms.",
            "**Renewal**: the subscription renews automatically unless cancelled at least 24 hours before the end of the current period, from your App Store or Google Play account settings. Deleting the app or your LoveApp account does not cancel the subscription.",
            "**Withdrawal and refunds**: as digital content is supplied immediately with your agreement, you acknowledge that you lose your right of withdrawal once supply begins. Refund requests are handled by Apple or Google under their policies.",
            "**Sparks**: sparks are a virtual currency earned by playing and usable only inside the app. They have no monetary value and are neither exchangeable nor refundable.",
          ],
        },
      ],
    },
    {
      title: "Intellectual property",
      blocks: [
        { p: `The app, its texts, games, mascots, illustrations, logos and trademarks belong to ${company.name} or its licensors and are protected. We grant you a personal, non-exclusive, non-transferable and revocable right to use the app for private purposes. Any copying, extraction of content, reverse engineering or commercial use is prohibited.` },
        { p: "You remain the owner of the profile photo you add. You allow us to host it and display it to your paired partner, for the purposes of the service only. You warrant that you have the right to use it and that it infringes no one's rights." },
      ],
    },
    {
      title: "Availability and changes to the service",
      blocks: [
        { p: "We do our best to keep the app running properly, but we do not guarantee uninterrupted availability (maintenance, incidents, reliance on third-party services). We may change, modify or remove features and content, notably for technical, legal or quality reasons." },
      ],
    },
    {
      title: "Liability",
      blocks: [
        { p: "To the extent permitted by law, and without prejudice to your consumer rights, we cannot be held liable for the consequences of a dare, a forfeit or a conversation carried out using the app, nor for indirect damages (loss of data, profits, moral prejudice) resulting from its use. Nothing in these terms excludes our liability for gross negligence, wilful misconduct, personal injury or where the law forbids it." },
      ],
    },
    {
      title: "Suspension and termination",
      blocks: [
        { p: "You may stop using the app and delete your account at any time. We may suspend or delete an account that breaches these terms, after informing you where possible." },
      ],
    },
    {
      title: "Personal data",
      blocks: [
        { p: "The processing of your data is described in our [Privacy policy](/en/privacy), which forms part of these terms." },
      ],
    },
    {
      title: "Changes to these terms",
      blocks: [
        { p: "We may change these terms, for instance when adding features. For any significant change, we will let you know in the app. Continuing to use the app after the new terms take effect means you accept them; otherwise you can delete your account." },
      ],
    },
    {
      title: "Governing law and disputes",
      blocks: [
        { p: `These terms are governed by French law. If you have a problem, please contact us first at ${MAIL}: we will look for an amicable solution. If you are a consumer, you may use a consumer mediator free of charge; the details are provided on request. Failing agreement, the courts of Paris will have jurisdiction, without prejudice to the mandatory jurisdiction rules applicable to consumers (including the right to bring proceedings before the courts of your country of residence).` },
      ],
    },
  ],
};

export const legalNoticeEn: LegalDoc = {
  eyebrow: "Legal",
  title: "Legal notice",
  updated: UPDATED,
  sections: [
    {
      title: "Publisher",
      blocks: [
        { p: `This website and the **${appFullName}** app are published by:` },
        {
          card: [
            ["Company", `${company.name}, simplified joint-stock company (${company.form})`],
            ["Share capital", company.capital],
            ["Registered office", company.address],
            ["SIREN", company.siren],
            ["SIRET (head office)", company.siret],
            ["Trade register", company.rcs],
            ["VAT number", company.vat],
            ["Contact", MAIL],
            ["Publication director", `The legal representative of ${company.name}`],
          ],
        },
      ],
    },
    {
      title: "Website hosting",
      blocks: [
        {
          card: [
            ["Host", "Vercel Inc."],
            ["Address", "440 N Barranca Ave #4133, Covina, CA 91723, United States"],
            ["Website", "[vercel.com](https://vercel.com)"],
          ],
        },
      ],
    },
    {
      title: "Intellectual property",
      blocks: [
        { p: `All content of the website and the app (texts, games, mascots, illustrations, logos, interface) is protected by copyright and trademark law and belongs to ${company.name} unless stated otherwise. Any unauthorised reproduction or distribution is prohibited.` },
      ],
    },
    {
      title: "Personal data",
      blocks: [
        { p: "The collection and processing of personal data are described in our [Privacy policy](/en/privacy). Use of the app is governed by our [Terms of use](/en/terms)." },
      ],
    },
    {
      title: "Liability",
      blocks: [
        { p: `${company.name} endeavours to keep the published information up to date and accurate, but cannot be held liable for errors or omissions, nor for damage resulting from use of the website. Links to third-party websites do not bind ${company.name} as to their content.` },
      ],
    },
    {
      title: "Governing law",
      blocks: [
        { p: "This legal notice is governed by French law. In the event of a dispute, the French courts have jurisdiction." },
      ],
    },
  ],
};

export const deleteEn: LegalDoc = {
  eyebrow: "Account",
  title: "Delete my account",
  updated: UPDATED,
  intro: "You can delete your LoveApp account and your data at any time. Deletion is permanent.",
  sections: [
    {
      title: "From the app",
      blocks: [
        {
          ul: [
            "Open LoveApp on your phone.",
            "Go to **Settings**.",
            "Tap **Delete my account**.",
            "Confirm: this action cannot be undone.",
          ],
        },
      ],
    },
    {
      title: "By email",
      blocks: [
        { p: `If you can no longer access the app, write to us at ${MAIL} from the address linked to your account, with the subject "Account deletion". We may ask you to confirm your identity, then we process your request within one month at most.` },
      ],
    },
    {
      title: "What is deleted",
      blocks: [
        {
          ul: [
            "Your profile: first name, pronouns, profile photo, email or sign-in identifier;",
            "Your progress, statistics, important dates and life milestones, sparks and outfits;",
            "Your Tadikoi Daily answers and guesses;",
            "Your pairing: it ends and your personal data is no longer shown to your partner;",
            "Your notification tokens.",
          ],
        },
        { p: "Backup copies are purged within 30 days. Some accounting data related to purchases may be kept for the legal retention period." },
      ],
    },
    {
      title: "Good to know",
      blocks: [
        {
          ul: [
            "**Your Premium subscription is not cancelled automatically.** Cancel it from your App Store or Google Play account settings to stop being billed.",
            "Want to keep a copy of your data? Export it from the app before deleting your account.",
            "Without an account, your data stays on your phone: uninstalling the app erases it.",
          ],
        },
      ],
    },
  ],
};
