"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import { FaBehance, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import HeaderUnderlineIcon from "@/components/icons/header-underline";

export default function Navbar({ profile }: { profile: ProfileType }) {
  const { scrollY } = useScroll();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [navAtTop, setNavAtTop] = useState<boolean>(true);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 0) {
      setNavAtTop(false);
    } else {
      setNavAtTop(true);
    }
  });

  const navVariants = {
    initial: { opacity: 0, y: -10, scale: 0.95 },
    open: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.2, ease: "easeOut" },
    },
    closed: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: { duration: 0.15, ease: "easeIn" },
    },
  };

  const links = [
    { label: "Work", link: "#work" },
    { label: "Personal work", link: "#work" },
    { label: "Contact", link: "#contact" },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      icon: FaInstagram,
      link: profile.social_links.instagram,
    },
    {
      name: "LinkedIn",
      icon: FaLinkedinIn,
      link: profile.social_links.linkedin,
    },
    {
      name: "Behance",
      icon: FaBehance,
      link: profile.social_links.behance,
    },
  ];

  return (
    <nav
      className={`${!navAtTop && "bg-background shadow-lg px-6 rounded-full"} flex items-center justify-between my-3 py-2 transition-all duration-300 ease-in-out`}
    >
      <Link
        href="/"
        className="relative inline-block text-2xl font-instrument_serif italic"
      >
        Aniket
        <HeaderUnderlineIcon className="absolute left-0 w-full pointer-events-none" />
      </Link>

      <div ref={menuRef} className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
          className="bg-black w-[52px] h-[52px] rounded-full flex flex-col items-center justify-center gap-1.5 focus:outline-none transition-transform active:scale-95"
        >
          <span
            className={`w-5 h-[2px] bg-[#F4805C] rounded-full transition-all duration-300 ease-in-out ${
              isOpen ? "rotate-45 translate-y-[4px]" : ""
            }`}
          />
          <span
            className={`w-5 h-[2px] bg-[#F4805C] rounded-full transition-all duration-300 ease-in-out ${
              isOpen ? "-rotate-45 -translate-y-[4px]" : ""
            }`}
          />
        </button>

        <motion.div
          initial="initial"
          animate={isOpen ? "open" : "closed"}
          variants={navVariants}
          className="absolute right-0 mt-4 bg-black w-[250px] rounded-[20px] p-5 shadow-lg space-y-5 z-40"
        >
          <ul className="space-y-5">
            {links.map((item, index) => (
              <li key={index} className="text-xl">
                <Link
                  href={item.link}
                  onClick={() => setIsOpen(false)}
                  className="text-[#F4805C] hover:opacity-80 transition-opacity block"
                >
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
                aria-label={item.name}
                className="w-full py-2 bg-[#F4805C] rounded-full flex items-center justify-center text-black hover:opacity-90 transition-opacity"
              >
                <item.icon className="text-xl" />
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </nav>
  );
}
