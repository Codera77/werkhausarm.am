import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

type SiteLogoProps = {
  className?: string;
  imageClassName?: string;
  priority?: boolean;
};

export function SiteLogo({
  className,
  imageClassName,
  priority = false,
}: SiteLogoProps) {
  return (
    <Link
      href="/"
      aria-label="Werkhaus Home"
      className={cn("inline-flex shrink-0 items-center", className)}
    >
      <Image
        src="/logowerk.jpg"
        alt="Werkhaus"
        width={120}
        height={120}
        priority={priority}
        className={cn(
          "h-10 w-10 rounded-full object-cover md:h-12 md:w-12",
          imageClassName
        )}
      />
    </Link>
  );
}
