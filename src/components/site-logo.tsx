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
      aria-label="DizArt Home"
      className={cn("inline-flex shrink-0 items-center", className)}
    >
      <Image
        src="/dizart-logo.png"
        alt="DizArt"
        width={160}
        height={160}
        priority={priority}
        quality={95}
        className={cn(
          "h-11 w-11 object-contain md:h-12 md:w-12",
          imageClassName
        )}
      />
    </Link>
  );
}
