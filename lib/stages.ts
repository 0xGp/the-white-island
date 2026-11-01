export type StageId =
  | "home"
  | "horizon"
  | "tide"
  | "emergence"
  | "about"
  | "monument"
  | "faq"
  | "return";

export type Stage = {
  id: StageId;
  href: string;
  label: string;
  kicker: string;
};

export const stages: Stage[] = [
  { id: "home", href: "/", label: "Home", kicker: "00 — THE SHORE" },
  { id: "horizon", href: "/horizon", label: "Horizon", kicker: "01 — THE HORIZON" },
  { id: "tide", href: "/tide", label: "Tide", kicker: "02 — THE RISING TIDE" },
  { id: "emergence", href: "/emergence", label: "Emergence", kicker: "03 — THE EMERGENCE" },
  { id: "about", href: "/about", label: "About", kicker: "04 — BEYOND THE SHORE" },
  { id: "monument", href: "/monument", label: "Monument", kicker: "05 — THE MONUMENT" },
  { id: "faq", href: "/faq", label: "FAQ", kicker: "FAQ" },
  { id: "return", href: "/return", label: "Return", kicker: "06 — THE RETURN" },
];

export function getStage(id: StageId) {
  const index = stages.findIndex((s) => s.id === id);
  const stage = stages[index] ?? stages[0];
  return {
    index: Math.max(0, index),
    stage,
    prev: index > 0 ? stages[index - 1] : null,
    next: index >= 0 && index < stages.length - 1 ? stages[index + 1] : null,
  };
}
