import type { NavItem, OrganizationInfo } from "@/content/types";

const PROVISIONAL = {
  status: "provisional",
  source: "Provisional prototype copy — not organization-approved",
  permissionStatus: "n/a",
  reviewStatus: "requires-cultural-review",
  locale: "en",
  lastUpdated: "2026-07-23",
} as const;

/** Primary navigation (new IA). Donate is rendered as a distinct button. */
export const primaryNav: NavItem[] = [
  { label: "Home", href: "/", primary: true },
  { label: "About", href: "/about", primary: true },
  { label: "Our Activities", href: "/our-activities", primary: true },
  { label: "About Crimean Tatars", href: "/about-crimean-tatars", primary: true },
  { label: "Gallery", href: "/gallery", primary: true },
  { label: "Contact", href: "/contact", primary: true },
];

/** The distinct Donate call-to-action destination. */
export const donateNav: NavItem = { label: "Donate", href: "/donate", primary: true };

/** Secondary destinations for the footer. */
export const secondaryNav: NavItem[] = [{ label: "Donate", href: "/donate", primary: false }];

/** Public contact + social (provisional; confirmed address only). */
export const contact = {
  email: "canadacrimea@gmail.com",
  social: [] as { label: string; href: string }[],
};

export const organization: OrganizationInfo = {
  workingName: "Crimean Tatar Heritage Canada",
  positioning:
    "Promoting awareness of Crimean Tatar history, culture, language, and heritage across Canada.",
  supportingLine: "Preserving the past. Celebrating the present. Inspiring the future.",
  homeTagline: "Preserving and sharing Crimean Tatar heritage in Canada",
  homeIntroduction:
    "Crimean Tatar Heritage Canada is dedicated to preserving, celebrating, and sharing Crimean Tatar culture, history, and traditions in Canada. Through cultural festivals, workshops, film screenings, educational initiatives, and community events, we bring Crimean Tatar heritage to wider audiences and help pass it on to future generations. We create meaningful connections between communities while keeping our cultural identity and traditions alive.",
  provisionalIntro:
    "Crimean Tatar Heritage Canada preserves and shares Crimean Tatar culture, history, language, stories, films, literature, and traditions with audiences across Canada — through cultural events, translated books, subtitled films and screenings, and educational outreach.",
  cactNote:
    "Crimean Tatar Heritage Canada focuses on culture, heritage, language, education, books, films, and community events. The Canadian Association of Crimean Tatars (CACT) is a separate organization focused on advocacy and human rights.",
  meta: { ...PROVISIONAL },
};
