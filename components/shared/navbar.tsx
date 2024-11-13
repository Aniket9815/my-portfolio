"use client";

import { useState } from "react";
import Link from "next/link";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import { Slant as Hamburger } from "hamburger-react";
import { FaBehance, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Navbar({ profile }: { profile: ProfileType }) {
  const { scrollY } = useScroll();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [navAtTop, setNavAtTop] = useState<boolean>(true);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 0) {
      setNavAtTop(false);
    } else {
      setNavAtTop(true);
    }
  });

  const navVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-20%" },
    initial: { opacity: 0, y: "-20%" },
  };

  const links = [
    { label: "Work", link: "#work" },
    { label: "About", link: "#about" },
    { label: "Contact", link: "#contact" },
  ];

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
    <nav
      className={`${!navAtTop && "bg-white shadow-lg px-6 rounded-full"} flex items-center justify-between my-3 py-2 transition-all duration-300 ease-in-out`}
    >
      <Link href="/" className="text-2xl font-instrument_serif italic">
        Aniket
      </Link>

      <div className="relative">
        <div className="bg-primary-50 w-[52px] h-[52px] rounded-full flex items-center justify-center">
          <Hamburger
            size={20}
            color="#1C1B1F"
            toggled={isOpen}
            onToggle={() => setIsOpen((isOpen) => !isOpen)}
          />
        </div>

        <motion.div
          initial="initial"
          animate={isOpen ? "open" : "closed"}
          variants={navVariants}
          className="absolute right-0 mt-4 bg-primary-50 w-[250px] rounded-[20px] p-5 -z-10 shadow-lg space-y-5"
        >
          <ul className="space-y-5">
            {links.map((item, index) => (
              <li key={index} className="text-xl">
                <Link href={item.link} onClick={() => setIsOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="grid grid-cols-3 gap-2">
            {socialLinks.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="w-full py-2 border border-primary-100 rounded-full flex items-center justify-center hover:bg-stone-200"
              >
                <item.icon className="text-primary-300 text-xl" />
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </nav>
  );
}
