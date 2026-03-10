"use client";

import { trackEvent } from "@/lib/gtag";
import Link from "next/link";

export default function BlogCardTracker({
  href,
  title,
  children,
  className,
}: {
  href: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      onClick={() =>
        trackEvent("blog_click", {
          event_label: title,
          link_url: href,
        })
      }
      className={className}
    >
      {children}
    </Link>
  );
}
