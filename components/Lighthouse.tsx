export default function Lighthouse({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 48" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
      <path d="M20 2v3M15 9l5-4 5 4z" fill="currentColor" />
      <rect x="15" y="9" width="10" height="6" />
      <path d="M13 15h14M14.5 15 13 40h14l-1.5-25" />
      <path d="M14 22h12M13.6 30h12.8" />
      <rect x="18" y="33" width="4" height="7" fill="currentColor" />
      <path d="M3 44c5-3 9-4 17-4s12 1 17 4M1 47h38" />
    </svg>
  );
}
