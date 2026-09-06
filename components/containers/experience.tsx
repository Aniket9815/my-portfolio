import React from "react";
import Marquee from "react-fast-marquee";
import * as motion from "framer-motion/client";

const companies = [
  {
    name: "AngelOne",
    logo: "/companies/angelone.png",
  },
  {
    name: "Thence",
    logo: "/companies/thence.png",
  },
  {
    name: "Raptee",
    logo: "/companies/raptee.png",
  },
];

export default function Experience() {
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
    <section id="experience" className="container py-4 lg:py-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={aniItem}
        className="border-y border-black/10 py-6 lg:py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-10 lg:gap-16"
      >
        <div className="shrink-0">
          <p className="text-sm lg:text-lg font-medium leading-snug">
            I&rsquo;ve worked with
            <br />
            some amazing teams
          </p>
        </div>

        <div className="w-full flex-1 overflow-hidden">
          <Marquee autoFill speed={30} pauseOnHover={true} gradient={false}>
            {companies.map((company, index) => (
              <div
                key={index}
                className="mx-6 sm:mx-8 lg:mx-10 flex items-center justify-center"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="w-[120px] h-[60px] lg:w-[172px] lg:h-[90px] object-contain mix-blend-multiply select-none"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </motion.div>
    </section>
  );
}
