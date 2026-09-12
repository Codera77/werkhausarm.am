export function FlagAm({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 24" className={className} aria-hidden>
      <rect width="36" height="8" y="0" fill="#D90012" />
      <rect width="36" height="8" y="8" fill="#0033A0" />
      <rect width="36" height="8" y="16" fill="#F2A800" />
    </svg>
  );
}

export function FlagRu({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 24" className={className} aria-hidden>
      <rect width="36" height="8" y="0" fill="#FFFFFF" />
      <rect width="36" height="8" y="8" fill="#0039A6" />
      <rect width="36" height="8" y="16" fill="#D52B1E" />
    </svg>
  );
}

export function FlagGb({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 24" className={className} aria-hidden>
      <rect width="36" height="24" fill="#012169" />
      <path d="M0 0 L36 24 M36 0 L0 24" stroke="#FFF" strokeWidth="5" />
      <path d="M0 0 L36 24 M36 0 L0 24" stroke="#C8102E" strokeWidth="2.5" />
      <path d="M18 0 V24 M0 12 H36" stroke="#FFF" strokeWidth="8" />
      <path d="M18 0 V24 M0 12 H36" stroke="#C8102E" strokeWidth="4.5" />
    </svg>
  );
}
