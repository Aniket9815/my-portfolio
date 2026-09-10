import type { Metadata } from "next";
import "./globals.css";
import {
  fontBelgianoSerif,
  fontInstrumentSerif,
  fontOutfit,
  fontInter,
} from "./fonts";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import NotFoundContent from "@/components/shared/not-found-content";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "Ooops! Looks like this page ghosted us.",
};

export default function RootNotFound() {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body
        className={`${fontOutfit.variable} ${fontInstrumentSerif.variable} ${fontBelgianoSerif.variable} ${fontInter.variable} antialiased w-full min-h-screen bg-background text-foreground font-outfit flex flex-col`}
      >
        <Header />
        <NotFoundContent />
        <Footer />
      </body>
    </html>
  );
}
