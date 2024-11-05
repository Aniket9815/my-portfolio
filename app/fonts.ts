import { Outfit, Instrument_Serif } from "next/font/google";

// Font Outfit
export const fontOutfit = Outfit({
  weight: ["400", "500"],
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
