import { cn } from "@/lib/cn";

export function PowerMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      className={cn("h-8 w-8 shrink-0", className)}
    >
      <circle
        cx="16"
        cy="18"
        r="8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        className="text-brand"
      />
      <path
        d="M16 6.5v7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        className="text-brand"
      />
    </svg>
  );
}

export function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5",
        tone === "light" ? "text-white" : "text-navy",
      )}
    >
      <PowerMark />
      <span className="flex flex-col leading-none">
        <span className="text-[15px] font-semibold tracking-[0.16em]">DRIVEON</span>
        <span className="mt-1 text-[10px] font-medium tracking-[0.18em] opacity-70">
          ÖKUKENNSLA
        </span>
      </span>
    </span>
  );
}
