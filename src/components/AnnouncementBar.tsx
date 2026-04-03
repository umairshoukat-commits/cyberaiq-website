"use client";

import Link from "next/link";

export default function AnnouncementBar() {
  return (
    <div
      className="fixed top-0 left-0 right-0 z-[60] text-center py-2.5 px-4"
      style={{
        background: "rgba(244,121,32,0.06)",
        borderBottom: "1px solid rgba(244,121,32,0.12)",
        backdropFilter: "blur(12px)",
      }}
    >
      <Link
        href="/ai-resilience"
        className="text-[11px] tracking-[0.15em] uppercase font-semibold text-[#F47920] hover:text-[#ff8c3a] transition-colors duration-200 inline-flex items-center gap-2"
      >
        Introducing AI Resilience
        <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
    </div>
  );
}
