"use client";

import Link from "next/link";

export default function AnnouncementBar() {
  return (
    <div
      className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-center px-4"
      style={{
        height: "36px",
        background: "rgba(244,121,32,0.04)",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <Link
        href="/ai-resilience"
        className="text-[11px] tracking-[0.15em] uppercase font-semibold text-[#F47920] hover:text-[#c96218] transition-colors duration-200 inline-flex items-center gap-2 group"
      >
        Introducing AI Resilience
        <svg
          width="12"
          height="12"
          viewBox="0 0 16 16"
          fill="none"
          className="transition-transform duration-200 group-hover:translate-x-0.5"
        >
          <path
            d="M3 8h10M9 4l4 4-4 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </div>
  );
}
