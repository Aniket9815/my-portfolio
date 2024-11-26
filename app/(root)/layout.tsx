import type { Metadata } from "next";
import "../globals.css";
import { fontInstrumentSerif, fontOutfit } from "../fonts";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";

export const metadata: Metadata = {
  title: "Aniket Banerjee",
  description: "My personal portfolio website.",
  keywords: ["Aniket Banerjee", "Portfolio", "UI/UX", "Designer"],
  authors: [
    { name: "Aniket Banerjee", url: "https://aniketbanerjee.vercel.app/" },
  ],
  openGraph: {
    title: "Aniket Banerjee",
    description: "My personal portfolio website.",
    url: "https://aniketbanerjee.vercel.app/",
    type: "website",
    images: [
      {
        url: "https://cdn.sanity.io/images/70w14hnc/production/1a4f92603371ab3f4d39ce76a990807faff0f172-2453x1637.jpg",
        width: 1200,
        height: 630,
        alt: "Aniket Banerjee",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body
        className={`${fontOutfit.variable} ${fontInstrumentSerif.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
