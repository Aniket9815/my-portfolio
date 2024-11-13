import BGImg from "@/public/footer-background.jpeg";
import Image from "next/image";
import Link from "next/link";
import { FaBehance, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { HiMiniArrowUpRight } from "react-icons/hi2";
import { buttonVariants } from "../ui/button";
import { getProfile } from "@/actions/profile.actions";

export default async function Footer() {
  const profile = await getProfile();
  const socialLinks = [
    {
      icon: FaInstagram,
      link: profile.social_links.instagram,
    },
    {
      icon: FaLinkedinIn,
      link: profile.social_links.linkedin,
    },
    {
      icon: FaBehance,
      link: profile.social_links.behance,
    },
  ];

  return (
    <footer id="contact" className="relative z-40">
      <Image
        src={BGImg}
        alt="img"
        priority
        fill
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative container pt-32 pb-20 space-y-16 text-white">
        <div className="text-center">
          <div className="flex items-center justify-center gap-4">
            <div className="w-[39px] h-[1px] bg-gradient-to-r from-primary-300 to-[#fafafa]" />
            <p className="text-xl lg:text-[32px] text-primary-200 font-instrument_serif italic">
              Reach me anytime
            </p>
            <div className="w-[39px] h-[1px] bg-gradient-to-r from-[#fafafa] to-primary-500" />
          </div>
          <h1 className="text-[28px] lg:text-[62px] font-normal font-instrument_serif leading-[80.6px] mt-6">
            Let&rsquo;s <span className="italic text-primary-200">Connect</span>
          </h1>
          <p className="text-sm lg:text-2xl text-primary-200">
            Let&rsquo;s turn ideas into reality—drop me a line
          </p>
          <Link
            href={`mailto:${profile.email}`}
            className={`${buttonVariants({ variant: "outline" })} w-[140px] h-[62px] lg:w-[178px] lg:h-[77px] border-4 border-primary-400 lg:text-xl text-white mt-12`}
          >
            Contact <HiMiniArrowUpRight className="w-10 h-10" />
          </Link>
        </div>

        <div className="w-full h-[1px] bg-gradient-to-r from-primary-700 via-primary-500 to-primary-700" />

        <div className="flex flex-col-reverse lg:flex-row items-center justify-between max-lg:gap-8">
          <p className="text-primary-200">@Aniket Banerjee. Design portfolio</p>
          <div className="flex items-center gap-4">
            {socialLinks.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="w-[68px] py-2 border border-primary-400 rounded-[71px] hover:bg-[#101010]"
              >
                <item.icon className="mx-auto text-2xl" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
