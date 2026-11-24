"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { id: "projets", label: "Projets" },
  { id: "palmares", label: "Palmarès" },
  { id: "methode", label: "Méthode" },
  { id: "contact", label: "Contact" },
];

export function Nav({ heart }: { heart: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  // Section visible : soulignée dans le menu
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    LINKS.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-30 px-4 pt-4">
      <nav
        aria-label="Navigation principale"
        className="mx-auto max-w-5xl rounded-3xl border-[2.5px] border-cacao bg-creme/95 px-5 py-2 shadow-[4px_4px_0_#1f100a] backdrop-blur"
      >
        <div className="flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 text-lg font-bold no-underline">
            {heart}
            ANTONELLA.T
          </a>

          <ul className="hidden gap-6 text-sm font-medium md:flex">
            {LINKS.slice(0, 3).map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  aria-current={active === l.id ? "location" : undefined}
                  className={`no-underline underline-offset-8 decoration-2 decoration-cuivre hover:underline ${active === l.id ? "underline" : ""}`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a href="#contact" className="hidden rounded-full bg-cacao px-4 py-1.5 text-sm font-bold text-or no-underline sm:inline-block">
              Me contacter
            </a>
            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-full border-2 border-cacao md:hidden"
              aria-expanded={open}
              aria-controls="menu-mobile"
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              onClick={() => setOpen((o) => !o)}
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                {open ? <path d="M5 5l14 14M19 5L5 19" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <ul id="menu-mobile" className="mt-3 grid gap-1 border-t-2 border-cacao/15 pt-3 pb-2 md:hidden">
            {LINKS.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-2.5 text-lg font-bold no-underline hover:bg-sable"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
