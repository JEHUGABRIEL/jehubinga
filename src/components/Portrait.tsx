const bgTones = {
  hero: "bg-near-black",
  about: "bg-accent-red",
};

export function Portrait({
  tone = "hero",
  className = "",
}: {
  tone?: keyof typeof bgTones;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden ${bgTones[tone]} ${className}`}
    >
      <svg
        viewBox="0 0 200 240"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMax slice"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id={`glow-${tone}`} cx="50%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="200" height="240" fill={`url(#glow-${tone})`} />
        {/* shoulders */}
        <path
          d="M-10 240c6-46 40-72 110-72s104 26 110 72Z"
          fill="#0b0a09"
          opacity="0.92"
        />
        {/* neck */}
        <rect x="86" y="150" width="28" height="34" fill="#0b0a09" opacity="0.92" />
        {/* head */}
        <ellipse cx="100" cy="118" rx="46" ry="54" fill="#0b0a09" opacity="0.92" />
        {/* hair / beanie */}
        <path
          d="M54 108c-2-34 20-58 46-58s48 24 46 58c-10-14-26-16-46-16s-36 2-46 16Z"
          fill="#050505"
        />
        {/* glasses */}
        <g stroke="#efece4" strokeWidth="3" opacity="0.85" fill="none">
          <rect x="66" y="112" width="30" height="22" rx="6" />
          <rect x="104" y="112" width="30" height="22" rx="6" />
          <path d="M96 121h8" strokeLinecap="round" />
          <path d="M66 118 54 112" strokeLinecap="round" />
          <path d="M134 118l12-6" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}
