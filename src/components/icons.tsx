import type { ReactElement } from "react";

export function StickerIcon({
  icon: Icon,
  className = "",
}: {
  icon: (props: { className?: string }) => ReactElement;
  className?: string;
}) {
  return (
    <span className={`relative inline-block ${className}`}>
      <Icon className="absolute inset-0 h-full w-full translate-x-[3px] translate-y-[3px] text-violet-500" />
      <Icon className="absolute inset-0 h-full w-full translate-x-[1.5px] translate-y-[1.5px] text-sky-400" />
      <Icon className="relative h-full w-full text-near-black" />
    </span>
  );
}

export function SparkleIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M28 4c1.2 10.8 3.9 17.6 9.4 23.1C42.9 32.6 49.7 35.3 60 36.5c-10.3 1.2-17.1 3.9-22.6 9.4C31.9 51.4 29.2 58.2 28 69c-1.2-10.8-3.9-17.6-9.4-23.1C13.1 40.4 6.3 37.7-4 36.5 6.3 35.3 13.1 32.6 18.6 27.1 24.1 21.6 26.8 14.8 28 4Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        transform="translate(4 -3)"
      />
    </svg>
  );
}

export function BoltIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 64"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M26 2 4 36h14L12 62l24-34H22L26 2Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M7 17 17 7M17 7H8M17 7v9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CloseIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M6 6l12 12M18 6 6 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MenuDotsIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="5" cy="12" r="1.6" fill="currentColor" />
      <circle cx="12" cy="12" r="1.6" fill="currentColor" />
      <circle cx="19" cy="12" r="1.6" fill="currentColor" />
    </svg>
  );
}

export function XIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 4l16 16M20 4 4 20"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function LinkedInIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="8.2" cy="8.5" r="1.1" fill="currentColor" />
      <path d="M8.2 11.2v6.3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path
        d="M12 17.5v-3.8c0-1.4.9-2.4 2.1-2.4s1.9 1 1.9 2.4v3.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12 11.2v6.3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function YouTubeIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="6" width="18" height="12" rx="4" stroke="currentColor" strokeWidth="1.6" />
      <path d="m10.5 9.5 4 2.5-4 2.5z" fill="currentColor" />
    </svg>
  );
}

export function GitHubIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
        fill="currentColor"
      />
    </svg>
  );
}
