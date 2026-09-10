import * as motion from "framer-motion/client";

export default function NotFoundContent() {
  return (
    <main className="min-h-[calc(100vh-240px)] flex flex-col items-center justify-center py-12 md:py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col items-center text-center max-w-5xl mx-auto"
      >
        {/* 404. Title */}
        <h1 className="font-belgiano_serif text-[110px] sm:text-[180px] md:text-[250px] lg:text-[330px] leading-[0.9] lg:leading-[0.85] font-normal text-[#F4805C] select-none tracking-normal">
          404.
        </h1>

        {/* Subtitle */}
        <p className="mt-6 sm:mt-8 md:mt-10 text-base sm:text-lg md:text-[20px] lg:text-[22px] text-[#555555] font-outfit">
          Ooops! Looks like this page <span className="font-bold text-foreground">ghosted us.</span> 👻
        </p>
      </motion.div>
    </main>
  );
}
