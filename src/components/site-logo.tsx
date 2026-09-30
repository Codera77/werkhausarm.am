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
        src="/dizart-logo-lg.png"
        alt="DizArt"
        width={512}
        height={512}
        priority={priority}
        quality={100}
        sizes="(max-width: 768px) 56px, 72px"
        className={cn(
          "h-11 w-11 object-contain md:h-12 md:w-12",
          imageClassName
        )}
      />
    </Link>
  );
}
