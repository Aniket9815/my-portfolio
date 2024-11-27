import { getProfile } from "@/actions/profile.actions";
import Marquee from "react-fast-marquee";
import * as motion from "framer-motion/client";

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
      <div className="container flex flex-col items-center gap-8 lg:gap-12">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          variants={aniItem}
          viewport={{ once: true }}
          className="lg:w-[70%] text-[20px] lg:text-[42px] leading-normal lg:leading-[60px] text-center"
        >
          Not great with numbers, but spotting a 0.5-pixel flaw? That&apos;s the
          real superpower behind my designs !
        </motion.h1>

        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={aniItem}
          viewport={{ once: true }}
          className="text-base lg:text-[32px] text-muted text-center leading-normal"
        >
          I&rsquo;m pretty skilled at
        </motion.p>

        <Marquee autoFill gradient gradientColor="white" gradientWidth={40}>
          {profile.skills.map((item, index) => (
            <div
              key={index}
              className="lg:w-[157px] lg:h-[72px] max-lg:py-[15px] max-lg:px-[22px] bg-primary-50 text-sm lg:text-base text-muted capitalize flex items-center justify-center rounded-full mx-4 lg:mx-8"
            >
              {item}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
