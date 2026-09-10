import { getProfile } from "@/actions/profile.actions";
import Marquee from "react-fast-marquee";
import * as motion from "framer-motion/client";
import BurstIcon from "@/components/icons/burst";

export default async function Skills() {
  const profile = await getProfile();

  const aniItem = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeIn",
      },
    },
  };

  return (
    <section id="about" className="py-12 lg:py-20">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={aniItem}
          viewport={{ once: true }}
          className="relative w-full max-w-[797px] lg:w-[797px] mx-auto"
        >
          {/* Solid black bottom shadow layer offset bottom-left */}
          <div className="absolute inset-0 -translate-x-2.5 translate-y-2.5 sm:-translate-x-3 sm:translate-y-3 md:-translate-x-3.5 md:translate-y-3.5 bg-black rounded-[28px] sm:rounded-[36px] md:rounded-[44px]" />

          {/* Primary inside card (#F4805C) */}
          <div className="relative bg-[#F4805C] rounded-[28px] sm:rounded-[36px] md:rounded-[44px] overflow-hidden pt-8 sm:pt-10 md:pt-12 lg:pt-14 pb-7 sm:pb-8 md:pb-10 lg:pb-12 flex flex-col items-center">
            {/* Title Text */}
            <h2 className="font-outfit font-semibold text-white text-[19px] sm:text-[23px] md:text-[27px] lg:text-[31px] text-center leading-[1.35] lg:leading-[42px] max-w-[650px] px-4 sm:px-6">
              A misaligned 1px border? My personal nightmare. Chaos in business
              logic? My favourite problem to solve.
            </h2>

            {/* Divider with centered upward burst SVG */}
            <div className="flex items-center justify-center w-full max-w-[480px] px-8 my-6 md:my-7 gap-3">
              <div className="h-[1px] flex-1 bg-white/40" />
              <div className="flex items-center justify-center w-6 h-6">
                <BurstIcon color="#FFFFFF" className="w-5 h-6 rotate-90" />
              </div>
              <div className="h-[1px] flex-1 bg-white/40" />
            </div>

            {/* Subheading */}
            <p className="text-[11px] md:text-xs font-semibold tracking-[0.25em] text-black uppercase text-center mb-6 md:mb-8">
              PREETY SKILLED AT
            </p>

            {/* Skills Marquee */}
            <div className="w-full px-3 sm:px-12">
              <Marquee
                autoFill
                speed={35}
                pauseOnHover={true}
                gradient={false}
              >
                {profile.skills.map((item, index) => (
                  <div
                    key={index}
                    className="px-6 py-3 md:px-7 md:py-3.5 bg-black text-white text-sm md:text-base font-medium flex items-center justify-center rounded-full mx-2 md:mx-2.5 whitespace-nowrap select-none"
                  >
                    {item}
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
