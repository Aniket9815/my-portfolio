import { getProfile } from "@/actions/profile.actions";
import Marquee from "react-fast-marquee";

export default async function Skills() {
  const profile = await getProfile();

  return (
    <section className="py-12 lg:py-20">
      <div className="container flex flex-col items-center gap-12">
        <h1 className="lg:w-[70%] text-[20px] lg:text-[42px] leading-normal lg:leading-[60px] text-center">
          Not great with numbers, but spotting a 0.5-pixel flaw? That&apos;s the
          real superpower behind my designs !
        </h1>

        <h1 className="lg:text-[28px] text-muted text-center leading-normal">
          I&rsquo;m pretty skilled at
        </h1>

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
