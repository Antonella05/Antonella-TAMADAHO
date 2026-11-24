"use client";

import { useState } from "react";

const FILTERS = ["Tous", "Santé", "Hackathon", "Bénin", "Missions", "Labo"] as const;
type Filter = (typeof FILTERS)[number];

const PROJECTS: { title: string; tag: string; cat: Exclude<Filter, "Tous">; text: string; stack: string[] }[] = [
  {
    title: "DrépaForce",
    tag: "Santé · 2026",
    cat: "Santé",
    text: "Application mobile d’accompagnement des patients drépanocytaires et de leurs familles en Afrique francophone : carnet de santé, alertes de crise, mode hors-ligne, accès par SMS/USSD.",
    stack: ["React Native"],
  },
  {
    title: "Mood Diary & Escape Stress",
    tag: "Santé mentale · 2025",
    cat: "Santé",
    text: "Un journal pour suivre ses émotions et un mini-jeu pour évacuer le stress. Outils de bien-être, pas des outils médicaux.",
    stack: [],
  },
  {
    title: "TontineChain",
    tag: "Hackathon · 2e place MIABE",
    cat: "Hackathon",
    text: "Application mobile qui sécurise les tontines grâce à la blockchain et facilite les paiements.",
    stack: ["Blockchain"],
  },
  {
    title: "Wadunu",
    tag: "Bénin · Projet académique ENEAM",
    cat: "Bénin",
    text: "Plateforme pour préserver et partager les recettes et le patrimoine culinaire du Bénin.",
    stack: ["Laravel"],
  },
  {
    title: "DibaHealth",
    tag: "Santé · Stage chez Case&co, 2025",
    cat: "Santé",
    text: "Système de gestion de dossiers médicaux.",
    stack: [],
  },
  {
    title: "Formulaires pour organisations",
    tag: "Missions",
    cat: "Missions",
    text: "Conception de formulaires et de pages web pour des processus de recrutement et d’éligibilité.",
    stack: [],
  },
  {
    title: "Éditeur collaboratif",
    tag: "Projet perso",
    cat: "Labo",
    text: "Simulation d’édition collaborative en temps réel : 3 utilisateurs simulés, résolution de conflits, latence variable, mode hors ligne.",
    stack: ["React", "Zustand", "Tailwind"],
  },
];

const MORE = [
  { name: "Lex229", text: "Éducation au droit numérique pour le grand public au Bénin (Flutter)" },
  { name: "Taoli’s", text: "Commandes d’un restaurant, 2026" },
  { name: "Techblog", text: "Blog technologique (Flutter)" },
  { name: "Todolist", text: "Liste de tâches (Flutter)" },
];

export function Projects() {
  const [filter, setFilter] = useState<Filter>("Tous");
  const shown = PROJECTS.filter((p) => filter === "Tous" || p.cat === filter);

  return (
    <>
      <div role="group" aria-label="Filtrer les projets" className="reveal mb-6 flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
            className={`rounded-full border-2 border-cacao px-4 py-1.5 text-sm font-bold transition-colors ${
              filter === f ? "bg-cacao text-or" : "bg-creme hover:bg-sable"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3" aria-live="polite">
        {shown.map((p) => (
          <li key={p.title} className="sticker flex flex-col">
            <p className="eyebrow text-cuivre">{p.tag}</p>
            <h3 className="mt-2 text-2xl">{p.title}</h3>
            <p className="mt-3 flex-1 text-cacao/85">{p.text}</p>
            {p.stack.length > 0 && (
              <ul className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <li key={s} className="chip">
                    {s}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      {filter === "Tous" && (
        <ul className="mt-8 flex flex-wrap gap-3">
          {MORE.map((m) => (
            <li key={m.name} className="chip !bg-sable !py-1.5">
              <span className="font-bold">{m.name}</span> · {m.text}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
