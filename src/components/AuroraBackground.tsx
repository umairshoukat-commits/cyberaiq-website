"use client";

export default function AuroraBackground() {
  return (
    <>
      <style>{`
        @keyframes aurora-drift-1 {
          0%   { transform: translateZ(0) translate(0%, 0%) scale(1); }
          25%  { transform: translateZ(0) translate(12%, -18%) scale(1.12); }
          50%  { transform: translateZ(0) translate(-8%, 14%) scale(0.92); }
          75%  { transform: translateZ(0) translate(18%, -8%) scale(1.08); }
          100% { transform: translateZ(0) translate(0%, 0%) scale(1); }
        }
        @keyframes aurora-drift-2 {
          0%   { transform: translateZ(0) translate(0%, 0%) scale(1); }
          25%  { transform: translateZ(0) translate(-18%, 12%) scale(1.08); }
          50%  { transform: translateZ(0) translate(14%, -12%) scale(0.88); }
          75%  { transform: translateZ(0) translate(-8%, 10%) scale(1.12); }
          100% { transform: translateZ(0) translate(0%, 0%) scale(1); }
        }
        @keyframes aurora-drift-3 {
          0%   { transform: translateZ(0) translate(0%, 0%) scale(1); }
          33%  { transform: translateZ(0) translate(8%, -20%) scale(1.15); }
          66%  { transform: translateZ(0) translate(-12%, 8%) scale(0.95); }
          100% { transform: translateZ(0) translate(0%, 0%) scale(1); }
        }
      `}</style>
      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
        {/* Blob 1 — accent orange, top-right */}
        <div
          className="absolute -top-[10%] right-[-5%] w-[600px] h-[600px] md:w-[900px] md:h-[900px] rounded-full"
          style={{
            background: "#F47920",
            opacity: 0.08,
            filter: "blur(120px)",
            mixBlendMode: "screen",
            animation: "aurora-drift-1 18s ease-in-out infinite",
            willChange: "transform",
          }}
        />
        {/* Blob 2 — secondary blue, bottom-left */}
        <div
          className="absolute -bottom-[10%] -left-[10%] w-[700px] h-[700px] md:w-[1000px] md:h-[1000px] rounded-full"
          style={{
            background: "#2B7EC1",
            opacity: 0.06,
            filter: "blur(120px)",
            mixBlendMode: "screen",
            animation: "aurora-drift-2 22s ease-in-out infinite",
            willChange: "transform",
          }}
        />
        {/* Blob 3 — mixed gradient, center */}
        <div
          className="absolute top-[25%] left-[25%] w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full"
          style={{
            background: "linear-gradient(135deg, #F47920, #2B7EC1)",
            opacity: 0.04,
            filter: "blur(120px)",
            mixBlendMode: "screen",
            animation: "aurora-drift-3 25s ease-in-out infinite",
            willChange: "transform",
          }}
        />
      </div>
    </>
  );
}
