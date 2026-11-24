import { Nav } from "@/components/Nav";
import { Projects } from "@/components/Projects";
import { CopyEmail } from "@/components/CopyEmail";

const LINKEDIN = "https://www.linkedin.com/in/antonella-tamadaho";
const GITHUB = "https://github.com/Antonella05";
const EMAIL = "antonellatamadaho@gmail.com";

// Tracé d'ECG (licence graphique)
const ECG_PATH = "M0 150 L90 150 L120 150 L140 120 L160 150 L185 160 L205 40 L235 250 L255 150 L280 150 Q310 110 340 150 L400 150";
const HEART_PATH =
  "M200 330 L180 312 C118 255 78 218 78 172 C78 136 106 108 142 108 C166 108 188 120 200 140 C212 120 234 108 258 108 C294 108 322 136 322 172 C322 218 282 255 220 312 Z";

const STACK = ["React", "TypeScript", "Laravel", "Flutter", "React Native", "Tailwind", "Community management"];

const FACTS = [
  { value: "4", label: "hackathons, 4 distinctions" },
  { value: "3", label: "langues : français, anglais, fon" },
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
        fill="currentColor"
        stroke="#1f100a"
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Title({ id, eyebrow, children, light = false }: { id: string; eyebrow: string; children: React.ReactNode; light?: boolean }) {
  return (
    <div className="reveal mb-8">
      <p className={`eyebrow rounded-full border-2 px-3 py-1 ${light ? "border-creme text-creme" : "border-cacao bg-or"}`}>{eyebrow}</p>
      <h2 id={id} className="mt-4 text-4xl md:text-5xl">
        {children}
      </h2>
    </div>
  );
}

export default function Home() {
  const marquee = [...STACK, ...STACK, ...STACK, ...STACK];
  return (
    <>
      <a href="#top" className="skip">Aller au contenu</a>
      <div className="progress" aria-hidden="true" />
      <Nav heart={<Heart className="heart h-8 w-8 text-or" />} />

      <main id="top">
        {/* Accueil */}
        <section aria-labelledby="hero-t" className="relative overflow-hidden px-6 pt-24 pb-10 md:pt-28">
          <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-[1.2fr_0.8fr]">
            <div className="order-last md:order-first">
              <p className="eyebrow rounded-full border-2 border-cacao bg-sable px-3 py-1">Cotonou, Bénin · Tech de santé et de bien-être</p>
              <h1 id="hero-t" className="mt-5 text-5xl md:text-7xl">
                Antonella
                <br />
                <span className="relative inline-block">
                  Tamadaho
                  <svg viewBox="0 0 400 20" preserveAspectRatio="none" className="absolute -bottom-2 left-0 h-3 w-full text-or" aria-hidden="true">
                    <path d="M2 14 Q 60 2 120 12 T 240 10 T 398 8" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
              <p className="mt-5 max-w-xl text-lg">
                Développeuse full-stack, web et mobile, community manager et gestionnaire de projets informatiques chez UNUSUALL.
              </p>
              <p className="quote mt-5 text-3xl text-cuivre">Ma technologie au service de la santé mentale.</p>
              <p className="mt-4 max-w-xl text-cacao/80">
                Je conçois des outils numériques pour la santé et la santé mentale, pensés pour les réalités du Bénin : connexions lentes,
                petits écrans, usages locaux.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#projets" className="btn btn-gold">
                  Voir mes projets →
                </a>
                <a href="#contact" className="btn btn-white">
                  Me contacter
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[240px] md:order-last md:max-w-md">
              <svg viewBox="0 0 400 400" className="float w-full" role="img" aria-label="Un cœur traversé par une ligne d’électrocardiogramme">
                <circle cx="200" cy="200" r="188" fill="#d4b483" stroke="#1f100a" strokeWidth="5" />
                <path d={HEART_PATH} fill="#fbf4ea" stroke="#1f100a" strokeWidth="5" strokeLinejoin="round" />
                <path d={ECG_PATH} pathLength={1} className="ecg-line" transform="translate(0 20)" />
              </svg>
            </div>
          </div>
        </section>

        {/* Technologies */}
        <div className="marquee -rotate-1 border-y-[2.5px] border-cacao bg-cafe py-4 text-or" aria-label="Compétences">
          <ul className="marquee-track text-2xl font-bold">
            {marquee.map((s, i) => (
              <li key={i} className="flex items-center gap-12" aria-hidden={i >= STACK.length ? "true" : undefined}>
                {s} <span aria-hidden="true">✦</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Repères */}
        <section aria-label="Repères" className="px-6 py-12">
          <dl className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2">
            {FACTS.map((f) => (
              <div key={f.label} className="sticker reveal !bg-sable">
                <dt className="text-5xl font-bold">{f.value}</dt>
                <dd className="mt-2 text-lg font-medium">{f.label}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Pourquoi */}
        <section aria-labelledby="pourquoi-t" id="pourquoi" className="bg-sable px-6 py-14">
          <div className="mx-auto max-w-4xl">
            <Title id="pourquoi-t" eyebrow="Pourquoi je fais ça">
              Une vocation née d’un silence
            </Title>
            <blockquote className="quote reveal border-l-[6px] border-cuivre pl-6 text-2xl md:text-3xl">
              À 13 ans, au CNHUP de Cotonou, un homme enfermé m’a demandé de dire au docteur que l’animal qu’on avait enfermé voulait être
              libéré. Personne ne m’a écoutée. Ce silence est devenu ma vocation : rendre leur place, par le code et par les mots, à ceux
              que l’on fait taire.
            </blockquote>
          </div>
        </section>

        {/* Projets */}
        <section aria-labelledby="projets-t" id="projets" className="px-6 py-14">
          <div className="mx-auto max-w-6xl">
            <Title id="projets-t" eyebrow="Projets">
              Ce que j’ai construit
            </Title>
            <Projects />
          </div>
        </section>

        {/* Palmarès */}
        <section aria-labelledby="palmares-t" id="palmares" className="bg-cuivre px-6 py-14 text-creme">
          <div className="mx-auto max-w-6xl">
            <Title id="palmares-t" eyebrow="Palmarès" light>
              Hackathons
            </Title>
            <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {AWARDS.map((a) => (
                <li key={a.name} className="sticker reveal !bg-or text-cacao">
                  <p className="eyebrow">{a.rank}</p>
                  <h3 className="mt-2 text-xl">{a.name}</h3>
                  <p className="mt-2 text-sm">{a.detail}</p>
                </li>
              ))}
            </ol>
            <p className="reveal mt-6 text-lg">
              Certifiée <span className="font-bold text-or">TITA by MTN</span> : top community management et création de contenus (juillet
              2026).
            </p>
          </div>
        </section>

        {/* Méthode */}
        <section aria-labelledby="methode-t" id="methode" className="px-6 py-14">
          <div className="mx-auto max-w-6xl">
            <Title id="methode-t" eyebrow="Protocole">
              Ma méthode
            </Title>
            <ol className="grid gap-4 md:grid-cols-5">
              {PROTOCOL.map((s, i) => (
                <li key={s.name} className="sticker reveal">
                  <p className="text-4xl font-bold text-brun" aria-hidden="true">
                    {i + 1}
                  </p>
                  <h3 className="mt-2 text-lg">{s.name}</h3>
                  <p className="mt-2 text-sm text-cacao/80">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Contact */}
        <section aria-labelledby="contact-t" id="contact" className="bg-or px-6 py-14">
          <div className="mx-auto max-w-4xl text-center">
            <Heart className="heart mx-auto mb-4 h-12 w-12 text-creme" />
            <h2 id="contact-t" className="text-4xl md:text-6xl">
              Parlons de votre projet
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg">Ouverte aux missions, collaborations et CDI. Cotonou, remote possible.</p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <CopyEmail email={EMAIL} />
              <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="btn !bg-cacao !text-or">
                LinkedIn<span className="sr-only"> (ouvre un nouvel onglet)</span>
              </a>
              <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="btn btn-white">
                GitHub<span className="sr-only"> (ouvre un nouvel onglet)</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-cacao px-6 py-8 text-center text-sm text-sable">
        <p>© {new Date().getFullYear()} Antonella Tamadaho · Ma technologie au service de la santé mentale.</p>
      </footer>
    </>
  );
}
