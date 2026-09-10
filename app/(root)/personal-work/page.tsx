import type { Metadata } from "next";
import Image from "next/image";
import * as motion from "framer-motion/client";

export const metadata: Metadata = {
  title: "Personal Work | Aniket Banerjee",
  description: "This page is still in progress. Stay tuned for something exciting!",
};

export default function PersonalWorkPage() {
  return (
    <main className="min-h-[calc(100vh-240px)] flex flex-col items-center justify-center py-12 md:py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col items-center text-center max-w-4xl mx-auto"
      >
        {/* Cat Image */}
        <div className="relative mb-6 sm:mb-8 flex items-center justify-center">
          <Image
            src="/cat.png"
            alt="Cat working on laptop"
            width={392}
            height={467}
            priority
            className="w-[200px] sm:w-[260px] md:w-[300px] lg:w-[320px] h-auto object-contain select-none pointer-events-none drop-shadow-sm"
          />
        </div>

        {/* Title */}
        <h1 className="font-belgiano_serif text-[42px] sm:text-[64px] md:text-[84px] lg:text-[105px] font-[600] leading-[1.05] tracking-tight text-foreground select-none">
          <span className="text-[#F4805C]">W</span>ork in progress
          <span className="text-[#F4805C]">.</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-[18px] text-[#656565] font-outfit max-w-[520px] leading-relaxed">
          This page is still in progress. Stay tuned for something exciting!
        </p>
      </motion.div>
    </main>
  );
}
