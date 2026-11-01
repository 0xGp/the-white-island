export default function Ornament({ className = "" }: { className?: string }) {
  return (
    <div className={`ornament ${className}`} aria-hidden="true">
      <span />
      <b>✦</b>
      <span />
    </div>
  );
}
