import Image from "next/image";
import { Button } from "../ui/button";
import { getProfile } from "@/actions/profile.actions";

export default async function Hero() {
  const profile = await getProfile();
  console.log(profile);
  return (
    <section className="container flex flex-col items-center gap-10 lg:gap-14 py-12 lg:py-20">
      {/* Hero Image */}
      <div className="relative w-[115.43px] lg:w-[201px] h-[64px] lg:h-[101px] rounded-[76px] border-4 border-primary-700 shadow-2xl shadow-black/20">
        <Image
          src={profile.profile_image.url}
          alt={profile.profile_image.alt}
          fill
          priority
          className="object-cover object-top grayscale rounded-[76px] shadow-2xl shadow-black/15"
        />
      </div>

      <div className="flex flex-col items-center gap-6 lg:gap-8">
        {/* Namaste! */}
        <div className="flex items-center gap-4">
          <div className="w-10 h-[1px] bg-gradient-to-r from-[#FAFAFA] to-primary-300" />
          <p className="font-instrument_serif text-xl lg:text-2xl text-primary-500 italic">
            Namaste !
          </p>
          <div className="w-10 h-[1px] bg-gradient-to-r from-primary-300 to-[#FAFAFA]" />
        </div>

        {/* Title */}
        <h1 className="w-[92%] lg:w-[76%] text-[28px] lg:text-[62px] font-instrument_serif leading-normal lg:leading-[78px] text-center">
          I&rsquo;m <span className="text-muted italic">Aniket</span> , a
          digital product <span className="text-muted italic">designer</span> ,
          I design experiences for{" "}
          <span className="text-muted italic line-through">users</span> people
        </h1>

        {/* Short Description */}
        <p className="max-md:w-[76%] lg:text-2xl text-muted text-center">
          Designing for clarity, simplicity, and human connection.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-5">
          <Button
            variant="outline"
            className="w-[128px] lg:w-[166px] h-[56px] lg:h-[69px] border-primary-700"
          >
            Resume
          </Button>
          <Button className="w-[128px] lg:w-[166px] h-[56px] lg:h-[69px]">
            Let&rsquo;s connect
          </Button>
        </div>
      </div>
    </section>
  );
}
