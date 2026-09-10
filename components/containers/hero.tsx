import Image from "next/image";
import { getProfile } from "@/actions/profile.actions";
import * as motion from "framer-motion/client";
import CTAButtons from "../shared/cta-buttons";
import UnderlineIcon from "../icons/underline";
import TornPaperBg from "../icons/torn-paper";
import BurstIcon from "../icons/burst";
import CurvedArrow from "../icons/curved-arrow";

export default async function Hero() {
  const profile = await getProfile();

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={container}
      className="container flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 py-12 lg:py-20"
    >
      {/* Left Side - 50% width */}
      <div className="w-full lg:w-1/2 flex flex-col items-start gap-6 lg:gap-8 text-left">
        {/* Title */}
        <motion.h1
          variants={item}
          className="relative font-belgiano_serif text-[48px] sm:text-[64px] md:text-[76px] lg:text-[105px] leading-[1.02] font-normal tracking-tight text-foreground"
        >
          {/* Hey! i'm Aniket & Arrow */}
          <span className="absolute -top-[36px] -left-2.5 sm:-top-[46px] sm:-left-3 lg:-top-[30px] lg:-left-3.5 pointer-events-none select-none z-10 flex flex-col items-start">
            <span className="font-friendship text-[14px] sm:text-[16px] lg:text-[17px] text-[#F4805C] -rotate-[12deg] origin-bottom-left whitespace-nowrap tracking-normal ml-1 mb-0.5">
              Hey! I&apos;m Aniket
            </span>
            <CurvedArrow className="w-[15px] h-[40px] sm:w-[19px] sm:h-[50px] lg:w-[22px] lg:h-[58px]" />
          </span>

          <span className="text-[#F4805C]">I</span> Design <br />
          <span className="relative inline-block">
            Meaningful
            <UnderlineIcon className="absolute -bottom-1 sm:-bottom-2 lg:-bottom-2.5 left-0 w-[102%] pointer-events-none" />
          </span>{" "}
          <br />
          Experiences<span className="text-[#F4805C]">.</span>
        </motion.h1>

        {/* Short Description */}
        <motion.p
          variants={item}
          className="text-sm sm:text-base lg:text-[17px] text-[#434343] leading-relaxed max-w-[480px]"
        >
          Product Designer focused on end-to-end execution. I bridge competitive
          synthesis, rigorous edge-case mapping, and advanced AI workflows to
          deliver products that drive measurable business metrics
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={item} className="pt-2">
          <CTAButtons resume={profile.resume} />
        </motion.div>
      </div>

      {/* Right Side - 50% width */}
      <motion.div
        variants={item}
        className="w-full lg:w-1/2 flex items-center justify-center lg:items-end lg:justify-end relative min-h-[440px] sm:min-h-[480px] lg:min-h-[520px] pt-4 sm:pt-2 lg:pt-0"
      >
        <div className="relative w-[320px] h-[400px] sm:w-[365px] sm:h-[456px] lg:w-[415px] lg:h-[519px] max-w-full flex items-center justify-center">
          {/* Duct Tape at top-left */}
          <div className="absolute -top-9 -left-5 sm:-top-10 sm:-left-7 lg:-top-12 lg:-left-8 w-[115px] h-[91px] sm:w-[130px] sm:h-[103px] lg:w-[147px] lg:h-[117px] z-10 pointer-events-none select-none">
            <Image
              src="/hero/duct-tape.svg"
              alt="Duct Tape"
              width={147}
              height={117}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Top-Right Burst SVG */}
          <div className="absolute top-0 -right-4 sm:-top-2 sm:right-0 lg:-top-4 lg:right-2 w-7 h-9 sm:w-8 sm:h-10 lg:w-9 lg:h-12 z-10 pointer-events-none select-none">
            <BurstIcon className="w-full h-full -scale-x-100 -rotate-12" />
          </div>

          {/* Torn Paper Background */}
          <TornPaperBg className="w-full h-full drop-shadow-sm select-none z-0" />

          {/* Profile Photo Cutout */}
          <div className="absolute bottom-0 right-4 sm:right-5 lg:right-6 z-20 flex items-end justify-center pointer-events-none select-none">
            <Image
              src="/hero/aniket.png"
              alt="Aniket Banerjee"
              width={497}
              height={480}
              priority
              className="w-[384px] h-[370px] sm:w-[438px] sm:h-[423px] lg:w-[497px] lg:h-[480px] max-w-none object-contain object-bottom"
            />
          </div>

          {/* Crumpled Paper Note at bottom-left */}
          <div className="absolute -left-4 sm:-left-8 lg:-left-[86px] bottom-8 sm:bottom-6 lg:bottom-4 w-[195px] h-[85px] sm:w-[210px] sm:h-[91px] lg:w-[228px] lg:h-[99px] z-30 select-none pointer-events-none">
            <Image
              src="/hero/crumpled-paper.svg"
              alt="Note"
              width={228}
              height={99}
              priority
              className="w-full h-full object-contain pointer-events-none"
            />
            {/* Black Pushpin */}
            <div className="absolute top-0 left-5 sm:left-6 lg:left-7 w-3 h-3 sm:w-[13px] sm:h-[13px] lg:w-[14px] lg:h-[14px] rounded-full bg-gradient-to-br from-[#4A4A4A] via-[#1A1A1A] to-[#000000] shadow-[1px_2px_4px_rgba(0,0,0,0.55)] border border-black/40 z-20">
              {/* Specular 3D Highlight */}
              <div className="absolute top-[1.5px] left-[1.5px] lg:top-[2px] lg:left-[2px] w-[2px] h-[2px] lg:w-[3px] lg:h-[3px] rounded-full bg-white/80" />
            </div>
            {/* Note Text */}
            <div className="absolute top-[22px] left-11 sm:top-[24px] sm:left-12 lg:top-[27px] lg:left-14 flex flex-col z-10">
              <span className="font-outfit text-[11px] sm:text-[12px] lg:text-[13px] font-medium text-[#1E1E1E] leading-[15px] sm:leading-[16px] lg:leading-[17px] tracking-[-0.01em]">
                Product Designer
              </span>
              <span className="font-outfit text-[11px] sm:text-[12px] lg:text-[13px] font-medium text-[#1E1E1E] leading-[15px] sm:leading-[16px] lg:leading-[17px] tracking-[-0.01em]">
                2+ Years experience
              </span>
            </div>

            {/* Bottom-Left Burst SVG */}
            <div className="absolute -bottom-14 left-2 sm:-bottom-11 sm:left-14 lg:-bottom-12 lg:left-20 w-7 h-9 sm:w-8 sm:h-10 lg:w-9 lg:h-12 -z-10 pointer-events-none select-none">
              <BurstIcon className="w-full h-full -rotate-45" />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}

