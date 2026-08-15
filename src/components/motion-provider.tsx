"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Scopes framer-motion to the `domAnimation` feature set (animation, exit,
 * inView, tap, hover, focus). The heavy drag/layout/pan projection engine is
 * never bundled, so pages ship far less animation runtime. All `m` components
 * in the app must be descendants of this provider.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}
