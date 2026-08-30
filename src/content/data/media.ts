import type { MediaSlotConfig } from "@/content/types";

/**
 * Media registry — maps homepage slots to SUPPLIED media under
 * public/media/pending/ (git-ignored; provisional dev use only).
 *
 * EVERY asset is permissionStatus "requires-permission" / status "provisional".
 * Nothing here is approved; no identities/dates/captions are confirmed; no asset
 * is moved to /approved. See docs/media-placement-plan.md.
 *
 * CLASSIFICATION (verified by visual inspection):
 *  - community/*  : genuine candid community photography (Toronto events,
 *    waterfront paddling, parade in traditional dress) — safe for public use.
 *  - memory/*     : Sürgünlik commemorative graphics — History & Memory ONLY.
 *  - EXCLUDED     : 702746399 (survivor-story graphic that NAMES a specific
 *    individual) is not used anywhere; official-archive/* (advocacy) excluded.
 */
export const MEDIA_BASE =
  "/media/pending/crimean_tatar_heritage_media/crimean_tatar_heritage_media";

const CE = `${MEDIA_BASE}/community-events`;
const TX = `${MEDIA_BASE}/heritage-textiles`;
const USER_SUPPLIED = "/media/pending/user-supplied";

const pendingMeta = (source: string) =>
  ({
    status: "provisional",
    source,
    permissionStatus: "requires-permission",
    reviewStatus: "requires-cultural-review",
    locale: "en",
    lastUpdated: "2026-07-24",
  }) as const;

/** Genuine community photography (public-safe). */
export const community = {
  paradeGallery: `${USER_SUPPLIED}/crimean-tatar-parade-enhanced.jpg`,
  boatFlag: `${CE}/731384989_17898067407470291_6464895788179433142_n.jpg`, // 1536x2048 paddling + CT flag
  beachGroup: `${CE}/729674488_17898067380470291_3727093852634629425_n.jpg`, // 1066x711 beach group + flags
  paradeWalk: `${CE}/705968752_17893029510470291_2891156537831662895_n.jpg`, // 1012x1137 parade, traditional dress
  wide: `${CE}/731379312_17898067398470291_6345361092169330494_n.jpg`, // 853x569 landscape
  portA: `${CE}/731093844_17898067434470291_6771248145165919428_n.jpg`, // 854x1138
  portB: `${CE}/729375652_17898067389470291_525589630171508946_n.jpg`, // 854x1138
  portC: `${CE}/729375649_17898067461470291_394084901087854348_n.jpg`, // 854x1138
  portD: `${CE}/731219726_17898067416470291_71693135080815175_n.jpg`, // 854x1138
} as const;

/** User-supplied cultural programming photographs selected by subject. */
export const culturalMedia = {
  dance: `${USER_SUPPLIED}/cultural-dance.png`,
  herHeartScreening: `${USER_SUPPLIED}/her-heart-screening-2025.png`,
  booksBrochure: `${USER_SUPPLIED}/books-translation-brochure.png`,
  educationalPresentation: `${USER_SUPPLIED}/educational-presentation.png`,
  interview: `${USER_SUPPLIED}/community-interview.jpg`,
  heritageDisplay: `${USER_SUPPLIED}/heritage-display.png`,
  portraitExhibition: `${USER_SUPPLIED}/portrait-exhibition.png`,
  galleryEvent: `${USER_SUPPLIED}/community-gallery-event.png`,
  artExhibition: `${USER_SUPPLIED}/art-exhibition.png`,
} as const;

/** User-supplied workshop and food-culture photographs. */
export const workshopMedia = {
  cookingClass: `${USER_SUPPLIED}/cooking-masterclass-chebureki.jpeg`,
  potteryClass: `${USER_SUPPLIED}/pottery-masterclass-children.jpeg`,
  tasteOfCrimea: `${USER_SUPPLIED}/taste-of-crimea-chebureki.jpeg`,
  cookingCommunity: `${USER_SUPPLIED}/cooking-workshop-community.jpeg`,
  cuisinePresentation: `${USER_SUPPLIED}/cultural-cuisine-presentation.jpeg`,
  coffeeTradition: `${USER_SUPPLIED}/crimean-coffee-tradition.jpeg`,
} as const;

/** Sürgünlik commemorative graphic — History & Memory only. */
export const memory = {
  survivorsCover: "/media/surgunlik-1944.jpg", // 1080x1350 "Memories of Survivors" title graphic (no named individual)
} as const;

/** Heritage textiles — LOW-RES (206px); small museum-object cards only. */
export const textiles = {
  a: `${TX}/484989515_635980669068554_6900302005736451763_n.jpg`,
  b: `${TX}/51064580_2145196652477470_1237865091454468096_n.jpg`,
  c: `${TX}/51155590_2145196709144131_4587842193951031296_n.jpg`,
  d: `${TX}/51297179_2145196625810806_9198188981445984256_n.jpg`,
  e: `${TX}/51375782_2145196752477460_3967586751051988992_n.jpg`,
} as const;

/* ----- Cinematic media slots ----- */

/** Final approved composition target for the interactive heritage-book intro. */
export const heroSlot: MediaSlotConfig = {
  slotId: "hero-cinematic",
  mediaType: "video",
  futureAnimationSlot: false,
  fallbackImageSrc: "/media/video/heritage-book-ambient-poster-v2.jpg",
  reducedMotionImageSrc: "/media/video/heritage-book-ambient-poster-v2.jpg",
  posterSrc: "/media/video/heritage-book-ambient-poster-v2.jpg",
  desktopVideoSrc: "/media/video/heritage-book-ambient-loop-v2.mp4",
  mobileVideoSrc: "/media/video/heritage-book-ambient-loop.mp4",
  objectPosition: "center center",
  alt: "A warm Crimean Tatar interior overlooking Bakhchysarai, with coffee, sweets, and a heritage book on the table.",
  decorativeSvg: null,
  priority: true,
  meta: pendingMeta("AI-assisted concept based on a user-supplied interior video; requires cultural review"),
};

export const finalCtaSlot: MediaSlotConfig = {
  slotId: "final-cta-cinematic",
  mediaType: "video",
  futureAnimationSlot: false,
  fallbackImageSrc: "/media/video/final-cta-poster.png",
  reducedMotionImageSrc: "/media/video/final-cta-poster.png",
  posterSrc: "/media/video/final-cta-poster.png",
  desktopVideoSrc: "/media/video/final-cta-loop-pingpong.mp4",
  objectPosition: "center center",
  alt: "A cinematic blue fabric landscape carrying a gold Crimean Tatar tamga.",
  decorativeSvg: null,
  meta: pendingMeta("User-supplied cinematic Crimea call-to-action animation"),
};

export const livingHeritageSlot: MediaSlotConfig = {
  slotId: "flag-textile-motion",
  mediaType: "image",
  futureAnimationSlot: true,
  fallbackImageSrc: community.paradeWalk,
  objectPosition: "center 38%",
  alt: "Community members in traditional embroidered dress at a cultural procession in Canada (provisional photograph, pending permission).",
  decorativeSvg: "ornament-line",
  meta: pendingMeta("Supplied media pack — community-events (pending permission)"),
};

export const heritageToHistorySlot: MediaSlotConfig = {
  slotId: "heritage-to-history",
  mediaType: "image",
  futureAnimationSlot: true,
  fallbackImageSrc: culturalMedia.portraitExhibition,
  objectPosition: "center 48%",
  alt: "A Crimean Tatar portrait exhibition preserving community memory (user-supplied photograph).",
  decorativeSvg: "ornament-line",
  meta: pendingMeta("Supplied media pack — community-events (pending permission)"),
};

export const surgunlikSlot: MediaSlotConfig = {
  slotId: "surgunlik-story",
  mediaType: "image",
  futureAnimationSlot: true,
  fallbackImageSrc: memory.survivorsCover,
  reducedMotionImageSrc: memory.survivorsCover,
  objectPosition: "center 20%",
  alt: "A commemorative graphic titled ‘Sürgünlik 1944 — Memories of Survivors’ (provisional, pending permission; no individuals identified).",
  decorativeSvg: null,
  meta: pendingMeta("Supplied media pack — history-memory (pending permission; sensitive)"),
};

export const featuredEventSlot: MediaSlotConfig = {
  slotId: "community-gallery-motion",
  mediaType: "image",
  futureAnimationSlot: true,
  fallbackImageSrc: culturalMedia.dance,
  objectPosition: "center 38%",
  alt: "A young dancer performing at a cultural festival in Canada (user-supplied photograph).",
  decorativeSvg: null,
  meta: pendingMeta("Supplied media pack — community-events (pending permission)"),
};

/** Gallery preview stills (community only). */
export const galleryStills: {
  src: string;
  alt: string;
  ratio: "portrait" | "landscape" | "square" | "wide";
  objectPosition?: string;
}[] = [
  { src: community.paradeGallery, alt: "Crimean Tatar community members participating in a cultural parade in Canada.", ratio: "wide", objectPosition: "center" },
  { src: culturalMedia.dance, alt: "A young dancer performing at a community cultural festival.", ratio: "landscape", objectPosition: "center 38%" },
  { src: culturalMedia.heritageDisplay, alt: "A display of Crimean Tatar ceramics, photographs, textiles, and jewellery.", ratio: "portrait", objectPosition: "center 42%" },
  { src: culturalMedia.herHeartScreening, alt: "Audience and organizers following the 2025 screening of Her Heart, held for the 81st anniversary of the genocide of the Crimean Tatar people.", ratio: "wide", objectPosition: "center 42%" },
  { src: culturalMedia.portraitExhibition, alt: "A community exhibition of Crimean Tatar portrait photography.", ratio: "wide", objectPosition: "center" },
  { src: culturalMedia.galleryEvent, alt: "Community members gathered for a cultural and educational event in an art gallery.", ratio: "wide", objectPosition: "center 45%" },
  { src: culturalMedia.booksBrochure, alt: "A visitor reading a bilingual cultural and literary programme.", ratio: "portrait", objectPosition: "center 42%" },
  { src: culturalMedia.artExhibition, alt: "Artwork documenting Crimean Tatar history displayed at a community exhibition.", ratio: "landscape", objectPosition: "center" },
  { src: culturalMedia.interview, alt: "A recorded conversation inside a Crimean Tatar cultural display.", ratio: "landscape", objectPosition: "center" },
  { src: workshopMedia.cookingClass, alt: "Participants preparing traditional Crimean Tatar food during a community cooking workshop.", ratio: "wide", objectPosition: "center" },
  { src: workshopMedia.potteryClass, alt: "Children watching a pottery demonstration during a community workshop.", ratio: "landscape", objectPosition: "center" },
  { src: workshopMedia.cuisinePresentation, alt: "Crimean Tatar pastries being presented at a cultural gathering.", ratio: "portrait", objectPosition: "center 42%" },
];

export const galleryMeta = pendingMeta(
  "Supplied media pack — community-events (pending permission, captions, and consent)",
);
