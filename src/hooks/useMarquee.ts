"use client";

import { useRef, useEffect, useCallback } from "react";

interface UseMarqueeOptions {
  speed?: number; // px per second
  nudgeDistance?: number; // px to jump on arrow click
  nudgePauseDuration?: number; // ms to pause after nudge
  pauseOnHover?: boolean;
}

export function useMarquee({
  speed = 60,
  nudgeDistance = 350,
  nudgePauseDuration = 1500,
  pauseOnHover = true,
}: UseMarqueeOptions = {}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Mutable state via refs (no re-renders)
  const offsetRef = useRef(0);
  const setWidthRef = useRef(0);
  const rafRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);
  const isPausedRef = useRef(false);
  const nudgeTimeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);
  const prefersReducedMotion = useRef(false);

  // Touch-swipe refs
  const touchStartXRef = useRef(0);
  const touchOffsetAtStartRef = useRef(0);

  // Measure one "set" of items (total scrollWidth / 3)
  const measure = useCallback(() => {
    if (!trackRef.current) return;
    setWidthRef.current = trackRef.current.scrollWidth / 3;
  }, []);

  // Animation loop
  useEffect(() => {
    // Check reduced motion preference
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    prefersReducedMotion.current = mq.matches;
    const handleMotionChange = (e: MediaQueryListEvent) => {
      prefersReducedMotion.current = e.matches;
    };
    mq.addEventListener("change", handleMotionChange);

    // Initial measurement
    measure();

    // Observe size changes
    const ro = new ResizeObserver(() => measure());
    if (trackRef.current) ro.observe(trackRef.current);

    const tick = (time: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = time;
      const delta = time - lastTimeRef.current;
      lastTimeRef.current = time;

      if (
        !isPausedRef.current &&
        !prefersReducedMotion.current &&
        setWidthRef.current > 0
      ) {
        offsetRef.current += (speed * delta) / 1000;

        // Reset when we've scrolled one full set — invisible because of 3x duplication
        if (offsetRef.current >= setWidthRef.current) {
          offsetRef.current -= setWidthRef.current;
        }

        if (trackRef.current) {
          trackRef.current.style.transform = `translate3d(-${offsetRef.current}px, 0, 0)`;
        }
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      mq.removeEventListener("change", handleMotionChange);
      if (nudgeTimeoutRef.current) clearTimeout(nudgeTimeoutRef.current);
    };
  }, [speed, measure]);

  const handleMouseEnter = useCallback(() => {
    if (pauseOnHover) isPausedRef.current = true;
  }, [pauseOnHover]);

  const handleMouseLeave = useCallback(() => {
    if (pauseOnHover) isPausedRef.current = false;
  }, [pauseOnHover]);

  const nudge = useCallback(
    (direction: "left" | "right") => {
      if (!trackRef.current || setWidthRef.current === 0) return;

      const delta = direction === "left" ? -nudgeDistance : nudgeDistance;
      offsetRef.current += delta;

      // Clamp / wrap
      if (offsetRef.current < 0) {
        offsetRef.current += setWidthRef.current;
      } else if (offsetRef.current >= setWidthRef.current) {
        offsetRef.current -= setWidthRef.current;
      }

      // Apply with a smooth CSS transition
      trackRef.current.style.transition = "transform 0.4s ease-out";
      trackRef.current.style.transform = `translate3d(-${offsetRef.current}px, 0, 0)`;

      // Remove transition after it completes so rAF can take over smoothly
      const handleTransitionEnd = () => {
        if (trackRef.current) {
          trackRef.current.style.transition = "none";
        }
      };
      trackRef.current.addEventListener("transitionend", handleTransitionEnd, {
        once: true,
      });

      // Pause auto-scroll, then resume
      isPausedRef.current = true;
      if (nudgeTimeoutRef.current) clearTimeout(nudgeTimeoutRef.current);
      nudgeTimeoutRef.current = setTimeout(() => {
        isPausedRef.current = false;
        lastTimeRef.current = 0; // reset delta so we don't get a big jump
      }, nudgePauseDuration);
    },
    [nudgeDistance, nudgePauseDuration]
  );

  const nudgeLeft = useCallback(() => nudge("left"), [nudge]);
  const nudgeRight = useCallback(() => nudge("right"), [nudge]);

  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      touchStartXRef.current = e.touches[0].clientX;
      touchOffsetAtStartRef.current = offsetRef.current;
      isPausedRef.current = true;
      if (nudgeTimeoutRef.current) clearTimeout(nudgeTimeoutRef.current);
    },
    []
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!trackRef.current || setWidthRef.current === 0) return;

      const delta = touchStartXRef.current - e.touches[0].clientX;
      let newOffset = touchOffsetAtStartRef.current + delta;

      // Wrap around seamlessly
      if (newOffset < 0) {
        newOffset += setWidthRef.current;
      } else if (newOffset >= setWidthRef.current) {
        newOffset -= setWidthRef.current;
      }

      offsetRef.current = newOffset;
      trackRef.current.style.transform = `translate3d(-${newOffset}px, 0, 0)`;
    },
    []
  );

  const handleTouchEnd = useCallback(() => {
    nudgeTimeoutRef.current = setTimeout(() => {
      isPausedRef.current = false;
      lastTimeRef.current = 0;
    }, nudgePauseDuration);
  }, [nudgePauseDuration]);

  return {
    containerRef,
    trackRef,
    handleMouseEnter,
    handleMouseLeave,
    nudgeLeft,
    nudgeRight,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  };
}
