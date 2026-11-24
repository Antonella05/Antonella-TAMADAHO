const LINKEDIN = "https://www.linkedin.com/in/antonella-tamadaho";
const GITHUB = "https://github.com/Antonella05";

// Tracé d'ECG (licence graphique) : ligne de base et quatre battements
const ECG_PATH =
  "M0 75 L80 75 Q130 60 180 75 L215 82 L245 15 L275 95 L305 75 Q390 55 470 75 " +
  "L560 75 Q610 60 660 75 L695 82 L725 30 L755 95 L785 75 Q870 55 950 75 L1200 75";

const STACK = ["React", "TypeScript", "Laravel", "Flutter", "React Native", "Tailwind"];

const FACTS = [
  { value: "4", label: "hackathons, 4 distinctions" },
  { value: "3", label: "langues : français, anglais, fon" },
  { value: "2026", label: "Social Impact Award, Pega GenAI Blueprint, Dakar" },
];

const PROJECTS = [
  {
    title: "DrépaForce",
    tag: "Santé · 2026",
    text: "Application mobile d’accompagnement des patients drépanocytaires et de leurs familles en Afrique francophone : carnet de santé, alertes de crise, mode hors-ligne, accès par SMS/USSD.",
    stack: ["React Native"],
  },
  {
    title: "Mood Diary & Escape Stress",
    tag: "Santé mentale · 2025",
    text: "Un journal pour suivre ses émotions et un mini-jeu pour évacuer le stress. Outils de bien-être, pas des outils médicaux.",
    stack: [],
  },
  {
    title: "TontineChain",
    tag: "Hackathon · 2e place MIABE",
    text: "Application mobile qui sécurise les tontines grâce à la blockchain et facilite les paiements.",
    stack: ["Blockchain"],
  },
  {
    title: "Wadunu & DibaHealth",
    tag: "Ancrés au Bénin",
    text: "Une plateforme pour préserver le patrimoine culinaire du Bénin (projet ENEAM) et un système de gestion de dossiers médicaux (stage chez Case&co, 2025).",
    stack: ["Laravel"],
  },
  {
    title: "Formulaires pour organisations",
    tag: "Missions",
    text: "Conception de formulaires et de pages web pour des processus de recrutement et d’éligibilité.",
    stack: [],
  },
  {
    title: "Éditeur collaboratif",
    tag: "Projet perso",
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

const AWARDS = [
  { rank: "Prix", name: "Social Impact Award", detail: "Pega GenAI Blueprint 2026, Dakar, avec MindBridge Africa" },
  { rank: "2e place", name: "MIABE Hackathon", detail: "TontineChain" },
  { rank: "3e place", name: "AI Buildathon Southern Africa", detail: "AwaDiag" },
  { rank: "3e place", name: "Cursor Hackathon", detail: "Géolocalisation des centres de santé du Bénin" },
];

const PROTOCOL = [
  { name: "Écouter", text: "Comprendre l’utilisateur avant de coder." },
  { name: "Diagnostiquer", text: "Cadrer le besoin et les contraintes : réseau, langue, appareil." },
  { name: "Prototyper", text: "Vite, avec l’IA comme copilote, puis relire et valider." },
  { name: "Peaufiner", text: "Accessibilité, hors-ligne, détails." },
  { name: "Déployer et suivre", text: "Mise en ligne et retours." },
];

function Heart({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path
        d="M32 49l-3.2-2.9C18.6 36.8 12 30.8 12 23.4 12 17.5 16.6 13 22.4 13c3.3 0 6.4 1.5 8.4 4 .4.5.8 1 1.2 1.6.4-.6.8-1.1 1.2-1.6 2-2.5 5.1-4 8.4-4C47.4 13 52 17.5 52 23.4c0 7.4-6.6 13.4-16.8 22.7L32 49z"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-t`} className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <p className="eyebrow reveal">{eyebrow}</p>
      <h2 id={`${id}-t`} className="reveal mt-3 mb-10 text-4xl font-bold md:text-5xl">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function Home() {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-20 border-b border-or/15 bg-cacao/80 backdrop-blur">
        <nav aria-label="Navigation principale" className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#top" className="flex items-center gap-2 font-semibold text-or no-underline">
            <Heart className="heart h-7 w-7" />
            Antonella T.
          </a>
          <ul className="hidden gap-7 text-sm text-sable md:flex">
            {[
              ["Projets", "#projets"],
              ["Palmarès", "#palmares"],
              ["Méthode", "#methode"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <li key={href}>
                <a href={href} className="no-underline hover:text-or">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main id="top">
        {/* Accueil */}
        <section className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-24 pb-16">
          <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 opacity-30 md:opacity-45" aria-hidden="true">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="h-40 w-full md:h-56">
              <path d={ECG_PATH} pathLength={1} className="ecg-line" />
            </svg>
          </div>

          <div className="relative mx-auto w-full max-w-6xl">
            <p className="eyebrow">Cotonou, Bénin · Tech de santé et de bien-être</p>
            <h1 className="mt-4 text-6xl font-extrabold md:text-8xl">Antonella Tamadaho</h1>
            <p className="mt-6 max-w-2xl text-xl text-sable">
              Développeuse full-stack, web et mobile, et gestionnaire de projets informatiques chez UNUSUALL.
            </p>
            <p className="quote mt-6 text-3xl text-or">Le code au service de l’humain.</p>
            <p className="mt-4 max-w-2xl text-creme/90">
              Je conçois des outils numériques pour la santé et la santé mentale, pensés pour les réalités du Bénin : connexions lentes,
              petits écrans, usages locaux.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#projets" className="btn btn-gold">
                Voir mes projets
              </a>
              <a href="#contact" className="btn btn-ghost">
                Me contacter
              </a>
            </div>
            <ul className="mt-12 flex flex-wrap gap-2" aria-label="Technologies">
              {STACK.map((s) => (
                <li key={s} className="chip">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Repères */}
        <div className="border-y border-or/15 bg-cafe/40">
          <dl className="mx-auto grid max-w-6xl gap-8 px-6 py-14 md:grid-cols-3">
            {FACTS.map((f) => (
              <div key={f.label} className="reveal">
                <dt className="text-5xl font-extrabold text-or">{f.value}</dt>
                <dd className="mt-2 text-sable">{f.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Pourquoi */}
        <Section id="pourquoi" eyebrow="Pourquoi je fais ça" title="Une vocation née d’un silence">
          <blockquote className="quote reveal max-w-3xl text-2xl text-sable md:text-3xl">
            À 13 ans, au CNHUP de Cotonou, un homme enfermé m’a demandé de dire au docteur que l’animal qu’on avait enfermé voulait être
            libéré. Personne ne m’a écoutée. Ce silence est devenu ma vocation : rendre leur place, par le code et par les mots, à ceux
            que l’on fait taire.
          </blockquote>
        </Section>

        {/* Projets */}
        <Section id="projets" eyebrow="Projets" title="Ce que j’ai construit">
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((p) => (
              <li key={p.title} className="card reveal flex flex-col">
                <p className="eyebrow">{p.tag}</p>
                <h3 className="mt-2 text-2xl font-bold">{p.title}</h3>
                <p className="mt-3 flex-1 text-creme/85">{p.text}</p>
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
          <ul className="reveal mt-10 grid gap-x-8 gap-y-3 text-sm text-sable sm:grid-cols-2">
            {MORE.map((m) => (
              <li key={m.name}>
                <span className="font-semibold text-or">{m.name}</span> · {m.text}
              </li>
            ))}
          </ul>
        </Section>

        {/* Palmarès */}
        <Section id="palmares" eyebrow="Palmarès" title="Hackathons">
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {AWARDS.map((a) => (
              <li key={a.name} className="card reveal">
                <p className="eyebrow">{a.rank}</p>
                <h3 className="mt-2 text-xl font-bold">{a.name}</h3>
                <p className="mt-2 text-sm text-sable">{a.detail}</p>
              </li>
            ))}
          </ol>
          <p className="reveal mt-8 text-sable">
            Certifiée <span className="font-semibold text-or">TITA by MTN</span> : top community management et création de contenus
            (juillet 2026).
          </p>
        </Section>

        {/* Méthode */}
        <Section id="methode" eyebrow="Protocole" title="Ma méthode">
          <ol className="grid gap-5 md:grid-cols-5">
            {PROTOCOL.map((s, i) => (
              <li key={s.name} className="card reveal">
                <p className="text-3xl font-extrabold text-brun" aria-hidden="true">
                  {i + 1}
                </p>
                <h3 className="mt-1 text-lg font-bold">{s.name}</h3>
                <p className="mt-2 text-sm text-sable">{s.text}</p>
              </li>
            ))}
          </ol>
        </Section>

        {/* Contact */}
        <Section id="contact" eyebrow="Contact" title="Parlons de votre projet">
          <p className="reveal max-w-2xl text-xl text-sable">Ouverte aux missions, collaborations et CDI. Cotonou, remote possible.</p>
          <div className="reveal mt-8 flex flex-wrap gap-3">
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="btn btn-gold">
              LinkedIn<span className="sr-only"> (ouvre un nouvel onglet)</span>
            </a>
            <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              GitHub<span className="sr-only"> (ouvre un nouvel onglet)</span>
            </a>
          </div>
        </Section>
      </main>

      <footer className="border-t border-or/15 px-6 py-10 text-center text-sm text-sable">
        <Heart className="heart mx-auto mb-3 h-8 w-8 text-or" />
        <p>© {new Date().getFullYear()} Antonella Tamadaho · Le code au service de l’humain.</p>
      </footer>
    </>
  );
}
