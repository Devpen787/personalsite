"use client";

import { useEffect } from "react";
import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import posthog from "posthog-js";
import { PostHogProvider as Provider } from "posthog-js/react";

const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const host = process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://eu.i.posthog.com";

let initialized = false;

function PosthogPageview() {
  const pathname = usePathname();

  useEffect(() => {
    if (!key) return;

    if (!initialized) {
      posthog.init(key, {
        api_host: host,
        autocapture: true,
        capture_pageview: false,
        capture_pageleave: true,
        person_profiles: "identified_only",
      });
      initialized = true;
    }
  }, []);

  useEffect(() => {
    if (!key || !initialized) return;

    posthog.capture("$pageview", {
      $current_url: window.location.href,
      pathname,
      search: window.location.search,
    });
  }, [pathname]);

  return null;
}

export function PosthogProvider({ children }: { children: ReactNode }) {
  if (!key) {
    return <>{children}</>;
  }

  return (
    <Provider client={posthog}>
      <PosthogPageview />
      {children}
    </Provider>
  );
}
