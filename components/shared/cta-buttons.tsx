import Link from "next/link";

export default function CTAButtons({
  resume,
}: {
  resume: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <Link
        href={resume}
        target="_blank"
        rel="noopener noreferrer"
        className="w-[135px] lg:w-[166px] h-[48px] lg:h-[52px] rounded-full border border-black text-black font-medium text-sm lg:text-base flex items-center justify-center hover:bg-black/5 transition-colors text-center"
      >
        Resume
      </Link>
      <Link
        href="#work"
        className="w-[135px] lg:w-[166px] h-[48px] lg:h-[52px] rounded-full bg-black text-white font-medium text-sm lg:text-base flex items-center justify-center hover:bg-black/85 transition-colors shadow-sm text-center"
      >
        View my work
      </Link>
    </div>
  );
}

