"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (typeof navigator !== "undefined" && navigator.maxTouchPoints > 0) {
      setIsTouch(true);
      return;
    }

    const dot = dotRef.current;
    const ringEl = ringRef.current;
    if (!dot || !ringEl) return;

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    };

    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.12;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.12;
      ringEl.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px) translate(-50%, -50%)`;
      rafRef.current = requestAnimationFrame(animate);
    };

    const onEnter = () => {
      dot.classList.add("expanded");
      ringEl.classList.add("expanded");
    };
    const onLeave = () => {
      dot.classList.remove("expanded");
      ringEl.classList.remove("expanded");
    };

    const attachHoverListeners = () => {
      document
        .querySelectorAll("a, button, [data-cursor-expand]")
        .forEach((el) => {
          el.addEventListener("mouseenter", onEnter);
          el.addEventListener("mouseleave", onLeave);
        });
    };

    window.addEventListener("mousemove", onMove);
    attachHoverListeners();

    // Re-attach on DOM changes
    const observer = new MutationObserver(attachHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
      observer.disconnect();
    };
  }, [isTouch]);

  if (isTouch) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot hidden md:block z-[9999] pointer-events-none"
      />
      <div
        ref={ringRef}
        className="cursor-ring hidden md:block z-[9998] pointer-events-none"
      />
    </>
  );
}
