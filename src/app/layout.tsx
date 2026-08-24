import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { MotionProvider } from "@/components/motion-provider";
import { JsonLd } from "@/components/json-ld";
import { site } from "@/data/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default:
      "Mentor Systems — Software Engineering & AI Automation Company in Lahore, Pakistan",
    template: "%s — Mentor Systems",
  },
  description: site.description,
  keywords: [
    "Mentor Systems",
    "Mentor Systems Lahore",
    "Mentor Systems Pakistan",
    "software company Lahore",
    "software development Lahore",
    "AI automation Lahore",
    "web development Pakistan",
    "software development",
    "web development",
    "mobile app development",
    "AI automation",
    "make.com",
    "n8n",
    "VAPI agents",
    "RAG bots",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title:
      "Mentor Systems — Software Engineering & AI Automation in Lahore, Pakistan",
    description: site.description,
    url: "/",
    siteName: "Mentor Systems",
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Mentor Systems — Software Engineering & AI Automation in Lahore, Pakistan",
    description: site.description,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      url: site.url,
      email: site.email,
      telephone: site.phoneIntl,
      description: site.description,
      logo: `${site.url}/icon.svg`,
      sameAs: site.socials.map((s) => s.href),
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.streetAddress,
        addressLocality: site.address.addressLocality,
        addressRegion: site.address.addressRegion,
        addressCountry: site.address.addressCountry,
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": `${site.url}/#localbusiness`,
      name: site.name,
      url: site.url,
      email: site.email,
      telephone: site.phoneIntl,
      description: site.description,
      image: `${site.url}/opengraph-image`,
      logo: `${site.url}/icon.svg`,
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.streetAddress,
        addressLocality: site.address.addressLocality,
        addressRegion: site.address.addressRegion,
        addressCountry: site.address.addressCountry,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: site.geo.latitude,
        longitude: site.geo.longitude,
      },
      areaServed: ["Lahore", "Pakistan", "Worldwide"],
      parentOrganization: { "@id": `${site.url}/#organization` },
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      publisher: { "@id": `${site.url}/#organization` },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-base text-[#f4f6fb]">
        <JsonLd data={organizationJsonLd} />
        <MotionProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
