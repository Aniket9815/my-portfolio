"use client";

import React, { useState, useTransition, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { HiLockClosed, HiEye, HiEyeSlash, HiXMark } from "react-icons/hi2";
import { verifyProjectPassword } from "@/actions/project-auth.actions";

interface ProjectUnlockDialogProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    slug: string;
    title: string;
    category?: string;
  } | null;
  onSuccess?: (slug: string) => void;
}

export default function ProjectUnlockDialog({
  isOpen,
  onClose,
  project,
  onSuccess,
}: ProjectUnlockDialogProps) {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isPending, startTransition] = useTransition();

  // Reset state when project changes or dialog opens
  useEffect(() => {
    if (isOpen) {
      setPassword("");
      setShowPassword(false);
      setErrorMessage("");
      // Prevent background scrolling
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, project]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen && !isPending) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, isPending, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!project) return;
    if (!password.trim()) {
      setErrorMessage("Please enter the password.");
      return;
    }

    setErrorMessage("");
    startTransition(async () => {
      const res = await verifyProjectPassword(project.slug, password);
      if (res.success) {
        onSuccess?.(project.slug);
        onClose();
        router.push(`/${project.slug}`);
      } else {
        setErrorMessage(res.error || "Incorrect password. Please try again.");
      }
    });
  };

  return (
    <AnimatePresence>
      {isOpen && project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Blurred Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => !isPending && onClose()}
            className="fixed inset-0 bg-black/60 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Dialog Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-md bg-[#F3E6E2] rounded-[32px] border border-[#E8D9D4] p-7 sm:p-9 shadow-[0_25px_60px_rgba(0,0,0,0.25)] z-10 text-center overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={() => !isPending && onClose()}
              type="button"
              aria-label="Close dialog"
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center text-black/60 hover:text-black transition-colors"
            >
              <HiXMark className="w-5 h-5" />
            </button>

            {/* Lock Icon */}
            <div className="w-14 h-14 rounded-full bg-[#F4805C]/15 flex items-center justify-center text-[#F4805C] mx-auto mb-4">
              <HiLockClosed className="w-7 h-7" />
            </div>

            {/* Category & Title */}
            {project.category && (
              <p className="text-xs sm:text-sm font-medium text-[#F4805C] uppercase tracking-wider mb-1.5 font-outfit">
                {project.category}
              </p>
            )}
            <h2 className="text-2xl sm:text-[28px] font-outfit font-medium text-black tracking-tight mb-2 leading-snug">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#656565] leading-relaxed mb-6 font-outfit">
              This project is password protected. Enter the password below to access the case study.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div className="space-y-1.5">
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (errorMessage) setErrorMessage("");
                    }}
                    placeholder="Enter password"
                    className="w-full px-4 py-3 pr-11 bg-white rounded-xl border border-[#D6D6D6] text-black placeholder:text-[#898989] text-sm font-outfit focus:outline-none focus:border-[#F4805C] focus:ring-1 focus:ring-[#F4805C] transition-all"
                    disabled={isPending}
                    autoFocus
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#898989] hover:text-black transition-colors"
                  >
                    {showPassword ? (
                      <HiEyeSlash className="w-4 h-4" />
                    ) : (
                      <HiEye className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {errorMessage && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs text-red-500 font-medium font-outfit pl-1"
                  >
                    {errorMessage}
                  </motion.p>
                )}
              </div>

              <button
                type="submit"
                disabled={isPending}
                className="w-full py-3.5 rounded-full bg-black text-white text-xs sm:text-sm font-medium font-outfit hover:bg-black/85 transition-colors flex items-center justify-center gap-2 shadow-sm disabled:opacity-50 cursor-pointer"
              >
                {isPending ? (
                  <>
                    <svg
                      className="w-4 h-4 animate-spin text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    <span>Unlocking...</span>
                  </>
                ) : (
                  <span>Unlock Case Study</span>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
