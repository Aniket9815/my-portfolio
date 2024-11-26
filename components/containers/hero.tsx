import Image from "next/image";
import { getProfile } from "@/actions/profile.actions";
import * as motion from "framer-motion/client";
import CTAButtons from "../shared/cta-buttons";

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
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={container}
      className="container flex flex-col items-center gap-10 lg:gap-14 py-12 lg:py-12"
    >
      {/* Hero Image */}
      <motion.div
        variants={item}
        className="w-[115.43px] lg:w-[201px] h-[64px] lg:h-[101px]"
      >
        <div className="relative w-full h-full rounded-[76px] border-4 border-primary-700 shadow-2xl shadow-black/20 overflow-hidden">
          <Image
            src={profile.profile_image.url}
            alt={profile.profile_image.alt || "Image"}
            fill
            priority
            width={201}
            height={101}
            className="object-cover object-center shadow-2xl shadow-black/15"
          />
        </div>
      </motion.div>

      <div className="flex flex-col items-center gap-6 lg:gap-8">
        {/* Namaste! */}
        <motion.div variants={item} className="flex items-center gap-4">
          <div className="w-10 h-[1px] bg-gradient-to-r from-[#FAFAFA] to-primary-300" />
          <p className="font-instrument_serif text-xl lg:text-2xl text-primary-500 italic">
            Namaste !
          </p>
          <div className="w-10 h-[1px] bg-gradient-to-r from-primary-300 to-[#FAFAFA]" />
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={item}
          className="w-[92%] lg:w-[76%] text-[28px] lg:text-[62px] font-instrument_serif leading-normal lg:leading-[78px] text-center"
        >
          I&rsquo;m <span className="text-muted italic">Aniket</span> , a
          digital product <span className="text-muted italic">designer</span> ,
          I design experiences for{" "}
          <span className="text-muted italic line-through">users</span> people
        </motion.h1>

        {/* Short Description */}
        <motion.p
          variants={item}
          className="max-md:w-[76%] lg:text-2xl text-muted text-center"
        >
          Designing for clarity, simplicity, and human connection.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={item}>
          <CTAButtons resume={profile.resume} email={profile.email} />
        </motion.div>
      </div>
    </motion.section>
  );
}
