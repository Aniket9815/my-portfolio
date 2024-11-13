import { buttonVariants } from "../ui/button";
import Link from "next/link";

export default function CTAButtons({
  resume,
  email,
}: {
  resume: string;
  email: string;
}) {
  return (
    <div className="flex gap-5">
      <Link
        href={resume}
        target="_blank"
        rel="noopener noreferrer"
        className={`${buttonVariants({ variant: "outline" })} w-[128px] lg:w-[166px] h-[56px] lg:h-[69px] border-primary-700`}
      >
        Resume
      </Link>
      <Link
        href={`mailto:${email}`}
        className={`${buttonVariants()} w-[128px] lg:w-[166px] h-[56px] lg:h-[69px]`}
      >
        Let&rsquo;s connect
      </Link>
    </div>
  );
}
