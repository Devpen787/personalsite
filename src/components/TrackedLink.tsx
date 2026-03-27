"use client";

import posthog from "posthog-js";
import type { AnchorHTMLAttributes } from "react";

type TrackedLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  eventName: string;
  eventProps?: Record<string, string>;
};

export function TrackedLink({
  eventName,
  eventProps,
  href,
  onClick,
  children,
  ...rest
}: TrackedLinkProps) {
  return (
    <a
      href={href}
      onClick={(event) => {
        posthog.capture(eventName, {
          href: typeof href === "string" ? href : "",
          ...eventProps,
        });
        onClick?.(event);
      }}
      {...rest}
    >
      {children}
    </a>
  );
}
