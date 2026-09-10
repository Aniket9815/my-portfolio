"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiLockClosed, HiEye, HiEyeSlash, HiArrowLeft } from "react-icons/hi2";
import { verifyProjectPassword } from "@/actions/project-auth.actions";

interface ProjectUnlockProps {
  project: {
    slug: string;
    title: string;
    category?: string;
  };
}

export default function ProjectUnlock({ project }: ProjectUnlockProps) {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!password.trim()) {
      setErrorMessage("Please enter the password.");
      return;
    }

    setErrorMessage("");
    startTransition(async () => {
      const res = await verifyProjectPassword(project.slug, password);
      if (res.success) {
        router.refresh();
      } else {
        setErrorMessage(res.error || "Incorrect password. Please try again.");
      }
    });
  };

  return (
    <main className="min-h-[calc(100vh-280px)] flex flex-col items-center justify-center py-16 px-4 relative">
      <div className="fixed inset-0 bg-black/40 backdrop-blur-md -z-10" />
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="w-full max-w-md bg-[#F3E6E2] rounded-[32px] border border-[#E8D9D4] p-8 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.2)] text-center relative z-10"
      >
        {/* Lock Icon */}
        <div className="w-16 h-16 rounded-full bg-[#F4805C]/15 flex items-center justify-center text-[#F4805C] mx-auto mb-6">
          <HiLockClosed className="w-8 h-8" />
        </div>

        {/* Category & Title */}
        {project.category && (
          <p className="text-xs sm:text-sm font-medium text-[#F4805C] uppercase tracking-wider mb-2">
            {project.category}
          </p>
        )}
        <h1 className="text-2xl sm:text-3xl font-outfit font-medium text-black tracking-tight mb-3">
          {project.title}
        </h1>
        <p className="text-sm text-[#656565] leading-relaxed mb-8">
          This project is password-protected. Please enter the access password to view this case study.
        </p>

        {/* Password Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div className="space-y-2">
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (errorMessage) setErrorMessage("");
                }}
                placeholder="Enter password"
                className="w-full px-4 py-3.5 pr-11 bg-white rounded-xl border border-[#D6D6D6] text-black placeholder:text-[#898989] text-sm focus:outline-none focus:border-[#F4805C] focus:ring-1 focus:ring-[#F4805C] transition-all"
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
                className="text-xs text-red-500 font-medium"
              >
                {errorMessage}
              </motion.p>
            )}
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="w-full py-3.5 rounded-full bg-black text-white text-sm font-medium hover:bg-black/85 transition-colors flex items-center justify-center gap-2 shadow-sm disabled:opacity-50"
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
                Unlocking...
              </>
            ) : (
              "Unlock Case Study"
            )}
          </button>
        </form>

        <div className="mt-6 pt-6 border-t border-[#E8D9D4]">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#898989] hover:text-black transition-colors"
          >
            <HiArrowLeft className="w-4 h-4" />
            Back to all projects
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
