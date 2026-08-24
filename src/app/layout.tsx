import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/motion/PageTransition";
import { RouteTransitionFX } from "@/components/motion/RouteTransitionFX";
import "./globals.css";

const SITE_TITLE = "Crimean Tatar Heritage Canada";
const SITE_DESCRIPTION =
  "Crimean Tatar Heritage Canada — a cultural and educational home preserving Crimean Tatar history, culture, language, and heritage across Canada.";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: {
    default: SITE_TITLE,
    template: "%s · Crimean Tatar Heritage Canada",
  },
  description: SITE_DESCRIPTION,
  robots: { index: false, follow: false }, // prototype: do not index
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    type: "website",
    locale: "en_CA",
    siteName: SITE_TITLE,
  },
  icons: {
    icon: [{ url: "/media/brand/crimean-tatar-heritage-canada-logo-dark.png", type: "image/png" }],
    shortcut: "/media/brand/crimean-tatar-heritage-canada-logo-dark.png",
    apple: "/media/brand/crimean-tatar-heritage-canada-logo-dark.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <noscript>
          <style>{`
            [data-motion-reveal] {
              opacity: 1 !important;
              transform: none !important;
              filter: none !important;
              clip-path: inset(0) !important;
            }
            .ornament-stroke-reveal path {
              stroke-dasharray: none !important;
              stroke-dashoffset: 0 !important;
            }
          `}</style>
        </noscript>
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <RouteTransitionFX />
        <main id="main">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
