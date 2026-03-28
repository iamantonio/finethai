export function ThaiOrnament({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-primary/60" />
      <svg
        width="40"
        height="20"
        viewBox="0 0 40 20"
        fill="none"
        className="text-primary/60 shrink-0"
      >
        <path
          d="M20 0L24 8L32 4L28 12L36 16L28 16L24 20L20 14L16 20L12 16L4 16L12 12L8 4L16 8L20 0Z"
          fill="currentColor"
        />
      </svg>
      <div className="h-px flex-1 bg-gradient-to-l from-transparent via-primary/30 to-primary/60" />
    </div>
  );
}

export function ThaiPattern() {
  return (
    <div
      className="absolute inset-0 opacity-[0.02] pointer-events-none"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%23d4a843'%3E%3Cpath d='M40 10 L45 20 L55 15 L50 25 L60 30 L50 30 L45 40 L40 28 L35 40 L30 30 L20 30 L30 25 L25 15 L35 20 Z' opacity='0.5'/%3E%3Cpath d='M0 50 L5 60 L15 55 L10 65 L20 70 L10 70 L5 80 L0 68 L-5 80 L-10 70 L-20 70 L-10 65 L-15 55 L-5 60 Z' opacity='0.3'/%3E%3Cpath d='M80 50 L85 60 L95 55 L90 65 L100 70 L90 70 L85 80 L80 68 L75 80 L70 70 L60 70 L70 65 L65 55 L75 60 Z' opacity='0.3'/%3E%3C/g%3E%3C/svg%3E")`,
      }}
    />
  );
}
