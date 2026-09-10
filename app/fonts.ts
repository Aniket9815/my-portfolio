import { Outfit, Instrument_Serif, Inter } from "next/font/google";
import localFont from "next/font/local";

// Font Inter
export const fontInter = Inter({
  weight: ["400", "500", "600"],
  style: ["normal"],
  variable: "--font-inter",
  subsets: ["latin"],
});

// Font Outfit
export const fontOutfit = Outfit({
  weight: ["400", "500", "600"],
  style: ["normal"],
  variable: "--font-outfit",
  subsets: ["latin"],
});

// Font Instrument_Serif
export const fontInstrumentSerif = Instrument_Serif({
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument_serif",
  subsets: ["latin"],
});

// Font Belgiano Serif
export const fontBelgianoSerif = localFont({
  src: [
    {
      path: "../public/fonts/BelgianoSerif.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/BelgianoSerif.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/BelgianoSerif.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/BelgianoSerif.otf",
      weight: "600",
      style: "italic",
    },
  ],
  variable: "--font-belgiano_serif",
  display: "swap",
});

// Font Friendsip
export const fontFriendship = localFont({
  src: [
    {
      path: "../public/fonts/Friendsip.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-friendship",
  display: "swap",
});

export const fontFriendsip = fontFriendship;

