"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

type ProtocolGroup = {
  title: string;
  intro?: string;
  items: { name: string; text: string }[];
};

const content = {
  es: {
    tagline: "Tu acompañante en cada paso del camino.",
    intro:
      "Un cuidado cercano, paciente y humano — para que ninguna mujer enfrente sus resultados sola.",
    howItWorks: "Cómo funciona",
    howItWorksSub: "Cinco pasos pensados para acompañarte sin invadirte.",
    openChat: "Abrir chat con AnaLuz",
    viewDemo: "Ver panel de demostración",
    disclaimer: "AnaLuz no reemplaza a tu médico. Su rol es acompañarte.",
    langLabel: "English",
    toggleOpen: "Mostrar pasos",
    toggleClose: "Ocultar pasos",
    steps: [
      {
        title: "Resultado disponible",
        text: "El laboratorio sube un resultado a la base de datos.",
      },
      {
        title: "Primer aviso",
        text: "AnaLuz detecta el resultado y envía un SMS a la paciente.",
      },
      {
        title: "Seguimiento amable",
        text: "Si no hay respuesta en 24h, AnaLuz hace un seguimiento.",
      },
      {
        title: "Notificación a la clínica",
        text: "Si persiste el silencio, notifica al personal de la clínica.",
      },
      {
        title: "Acompañamiento continuo",
        text: "Después de la consulta, la paciente puede chatear con AnaLuz.",
      },
    ],
    protocols: "Protocolos de tratamiento",
    protocolsSub:
      "Una guía clara sobre los tratamientos para el cáncer de mama según las guías ESMO, NCCN y el Consenso Mexicano.",
    protocolsToggleOpen: "Ver protocolos",
    protocolsToggleClose: "Ocultar protocolos",
    protocolsIntro:
      "Los protocolos se eligen de forma multidisciplinaria según el subtipo molecular, el estadio clínico (I-IV) y el estado general de la paciente. Se dividen en tratamientos locales y sistémicos.",
    protocolGroups: [
      {
        title: "Tratamientos locales",
        intro: "Para el control directo del tumor.",
        items: [
          {
            name: "Cirugía",
            text: "Base del tratamiento: conservadora (tumorectomía, lumpectomía) o mastectomía total/radical modificada.",
          },
          {
            name: "Biopsia de ganglio centinela",
            text: "Método de elección para evaluar la axila en estadios iniciales (I-II), evitando vaciamientos innecesarios.",
          },
          {
            name: "Radioterapia",
            text: "Frecuente tras cirugía conservadora para destruir células cancerosas remanentes.",
          },
          {
            name: "Cirugía oncoplástica",
            text: "Combina técnicas oncológicas con reconstrucción mamaria simultánea.",
          },
        ],
      },
      {
        title: "Tratamientos sistémicos",
        intro: "Actúan en todo el cuerpo para un cuidado integral.",
        items: [
          {
            name: "Quimioterapia",
            text: "Medicamentos citotóxicos para etapas avanzadas o antes/después de la cirugía.",
          },
          {
            name: "Terapia endocrina/hormonal",
            text: "Para tumores con receptores hormonales positivos (ER+/PgR+): tamoxifeno, inhibidores de aromatasa.",
          },
          {
            name: "Terapias dirigidas",
            text: "Anti-HER2 (ej. trastuzumab) para tumores HER2 positivos y otros blancos moleculares.",
          },
          {
            name: "Inmunoterapia",
            text: "Apoya al sistema inmune, a menudo combinada con quimioterapia en triple negativo.",
          },
        ],
      },
      {
        title: "Secuencia del protocolo",
        intro: "Decidida en comités multidisciplinarios.",
        items: [
          {
            name: "Neoadyuvancia",
            text: "Tratamiento antes de la cirugía para reducir el tamaño del tumor.",
          },
          {
            name: "Adyuvancia",
            text: "Tratamiento complementario después de la cirugía para reducir el riesgo de recaída.",
          },
        ],
      },
      {
        title: "Novedades 2026",
        intro: "Lo más reciente en oncología mamaria.",
        items: [
          {
            name: "Medicina de precisión",
            text: "Guía molecular para tratamientos personalizados según cada paciente.",
          },
          {
            name: "Inteligencia artificial",
            text: "Modelos de IA que evalúan el riesgo a 5 años a partir de mastografías.",
          },
          {
            name: "Nuevas combinaciones",
            text: "Sacituzumab govitecan + pembrolizumab como opción preferida en triple negativo metastásico.",
          },
          {
            name: "Desescalada",
            text: "En posmenopáusicas con tumores HR+/HER2- pequeños se considera omitir la biopsia de ganglio centinela.",
          },
        ],
      },
    ] as ProtocolGroup[],
    protocolsDisclaimer:
      "Cada caso debe ser evaluado por un oncólogo para determinar el protocolo adecuado.",
  },
  en: {
    tagline: "Your companion at every step of the journey.",
    intro:
      "Close, patient, human care — so no woman has to face her results alone.",
    howItWorks: "How it works",
    howItWorksSub: "Five gentle steps designed to support, not intrude.",
    openChat: "Open chat with AnaLuz",
    viewDemo: "View demo dashboard",
    disclaimer: "AnaLuz does not replace your doctor. Her role is to support you.",
    langLabel: "Español",
    toggleOpen: "Show steps",
    toggleClose: "Hide steps",
    steps: [
      {
        title: "Result available",
        text: "The lab uploads a result to the database.",
      },
      {
        title: "First message",
        text: "AnaLuz detects the result and sends an SMS to the patient.",
      },
      {
        title: "Gentle follow-up",
        text: "If there is no response in 24h, AnaLuz sends a follow-up.",
      },
      {
        title: "Clinic notified",
        text: "If silence persists, the clinic staff is notified.",
      },
      {
        title: "Ongoing companion",
        text: "After the consultation, the patient can chat with AnaLuz.",
      },
    ],
    protocols: "Treatment protocols",
    protocolsSub:
      "A clear guide to breast cancer treatment based on ESMO, NCCN and the Mexican Consensus guidelines.",
    protocolsToggleOpen: "View protocols",
    protocolsToggleClose: "Hide protocols",
    protocolsIntro:
      "Protocols are chosen by a multidisciplinary team based on molecular subtype, clinical stage (I-IV) and the patient's overall condition. They are grouped into local and systemic treatments.",
    protocolGroups: [
      {
        title: "Local treatments",
        intro: "Direct control of the tumor.",
        items: [
          {
            name: "Surgery",
            text: "Cornerstone of treatment: breast-conserving (lumpectomy) or total/modified radical mastectomy.",
          },
          {
            name: "Sentinel lymph node biopsy",
            text: "Preferred method to assess the axilla in early stages (I-II), avoiding unnecessary dissection.",
          },
          {
            name: "Radiotherapy",
            text: "Often used after conservative surgery to destroy remaining cancer cells.",
          },
          {
            name: "Oncoplastic surgery",
            text: "Combines oncologic techniques with simultaneous breast reconstruction.",
          },
        ],
      },
      {
        title: "Systemic treatments",
        intro: "Whole-body therapy for integral care.",
        items: [
          {
            name: "Chemotherapy",
            text: "Cytotoxic drugs for advanced stages or before/after surgery.",
          },
          {
            name: "Endocrine / hormone therapy",
            text: "For hormone-receptor positive tumors (ER+/PgR+): tamoxifen, aromatase inhibitors.",
          },
          {
            name: "Targeted therapies",
            text: "Anti-HER2 (e.g. trastuzumab) for HER2-positive tumors and other molecular targets.",
          },
          {
            name: "Immunotherapy",
            text: "Supports the immune system, often combined with chemo in triple-negative cases.",
          },
        ],
      },
      {
        title: "Protocol sequence",
        intro: "Decided in multidisciplinary committees.",
        items: [
          {
            name: "Neoadjuvant",
            text: "Treatment before surgery to shrink the tumor.",
          },
          {
            name: "Adjuvant",
            text: "Treatment after surgery to reduce the risk of recurrence.",
          },
        ],
      },
      {
        title: "What's new in 2026",
        intro: "The latest in breast oncology.",
        items: [
          {
            name: "Precision medicine",
            text: "Molecular guidance for personalized treatment for each patient.",
          },
          {
            name: "Artificial intelligence",
            text: "AI models assessing 5-year risk from mammograms.",
          },
          {
            name: "New combinations",
            text: "Sacituzumab govitecan + pembrolizumab as a preferred option in metastatic triple-negative breast cancer.",
          },
          {
            name: "De-escalation",
            text: "In postmenopausal patients with small HR+/HER2- tumors, omitting sentinel node biopsy is considered.",
          },
        ],
      },
    ] as ProtocolGroup[],
    protocolsDisclaimer:
      "Every case should be evaluated by an oncologist to determine the right protocol.",
  },
};

export default function Home() {
  const [lang, setLang] = useState<"es" | "en">("es");
  const [stepsOpen, setStepsOpen] = useState(false);
  const [protocolsOpen, setProtocolsOpen] = useState(false);
  const t = content[lang];

  // Rotate between rose, peach, and teal for visual rhythm
  const stepAccent = (i: number) => {
    const palette = [
      "bg-primary/10 text-primary",
      "bg-secondary/50 text-[color:var(--primary-hover)]",
      "bg-accent/15 text-accent",
    ];
    return palette[i % palette.length];
  };

  // Section badge colors for the protocol groups
  const groupAccent = (i: number) => {
    const palette = [
      "bg-primary/10 text-primary",
      "bg-accent/15 text-accent",
      "bg-secondary/50 text-[color:var(--primary-hover)]",
      "bg-primary/15 text-[color:var(--primary-hover)]",
    ];
    return palette[i % palette.length];
  };

  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Decorative soft blobs in brand colors */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-32 h-80 w-80 rounded-full bg-primary/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-40 -right-32 h-72 w-72 rounded-full bg-secondary/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -right-24 h-96 w-96 rounded-full bg-accent/15 blur-3xl"
      />

      <div className="relative mx-auto flex min-h-screen max-w-2xl flex-col px-6 py-6 sm:py-8">
        {/* Top bar — logo on the left, language toggle on the right */}
        <header className="flex items-center justify-between gap-4">
          <a
            href="/"
            aria-label="AnaLuz — Inicio"
            className="flex items-center -ml-2"
          >
            <Image
              src="/analuz_logo.png"
              alt="AnaLuz"
              width={320}
              height={128}
              priority
              className="h-20 w-auto object-contain sm:h-24"
            />
          </a>
          <button
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            className="rounded-full border border-border bg-card/70 px-4 py-1.5 text-xs font-medium text-foreground/70 backdrop-blur transition-colors hover:bg-card hover:text-primary"
          >
            {t.langLabel}
          </button>
        </header>

        {/* Hero */}
        <section className="mt-12 flex flex-col items-center text-center sm:mt-16">
          <h1 className="font-serif text-3xl font-medium leading-tight text-[color:var(--primary-hover)] text-balance sm:text-4xl">
            {t.tagline}
          </h1>

          <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground text-pretty">
            {t.intro}
          </p>

          {/* Decorative divider matching the logo's underline */}
          <div className="mt-8 flex items-center gap-3" aria-hidden>
            <span className="h-px w-12 bg-primary/40" />
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-primary"
            >
              <path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.5-7 10-7 10z" />
            </svg>
            <span className="h-px w-12 bg-accent/50" />
          </div>
        </section>

        {/* How it works — collapsible card */}
        <section className="mt-10">
          <div className="overflow-hidden rounded-3xl border border-border bg-card/80 shadow-sm backdrop-blur">
            <button
              type="button"
              onClick={() => setStepsOpen((v) => !v)}
              aria-expanded={stepsOpen}
              aria-controls="how-it-works-panel"
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-secondary/20 sm:px-8"
            >
              <span>
                <span className="block font-serif text-2xl font-medium text-[color:var(--primary-hover)]">
                  {t.howItWorks}
                </span>
                <span className="mt-1 block text-sm text-muted-foreground">
                  {t.howItWorksSub}
                </span>
              </span>
              <span className="flex shrink-0 items-center gap-2">
                <span className="hidden text-xs font-medium text-muted-foreground sm:inline">
                  {stepsOpen ? t.toggleClose : t.toggleOpen}
                </span>
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-300 ${
                    stepsOpen ? "rotate-180" : ""
                  }`}
                >
                  <ChevronDown className="h-4 w-4" aria-hidden />
                </span>
              </span>
            </button>

            <div
              id="how-it-works-panel"
              className={`grid transition-all duration-300 ease-out ${
                stepsOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <ol className="flex flex-col gap-5 border-t border-border px-6 py-6 sm:px-8">
                  {t.steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-serif text-base font-semibold ${stepAccent(
                          i
                        )}`}
                      >
                        {i + 1}
                      </span>
                      <div className="pt-0.5">
                        <p className="text-sm font-semibold text-foreground">
                          {step.title}
                        </p>
                        <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                          {step.text}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Treatment protocols — collapsible card */}
        <section className="mt-5">
          <div className="overflow-hidden rounded-3xl border border-border bg-card/80 shadow-sm backdrop-blur">
            <button
              type="button"
              onClick={() => setProtocolsOpen((v) => !v)}
              aria-expanded={protocolsOpen}
              aria-controls="protocols-panel"
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-secondary/20 sm:px-8"
            >
              <span>
                <span className="block font-serif text-2xl font-medium text-[color:var(--primary-hover)]">
                  {t.protocols}
                </span>
                <span className="mt-1 block text-sm text-muted-foreground">
                  {t.protocolsSub}
                </span>
              </span>
              <span className="flex shrink-0 items-center gap-2">
                <span className="hidden text-xs font-medium text-muted-foreground sm:inline">
                  {protocolsOpen ? t.protocolsToggleClose : t.protocolsToggleOpen}
                </span>
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 text-accent transition-transform duration-300 ${
                    protocolsOpen ? "rotate-180" : ""
                  }`}
                >
                  <ChevronDown className="h-4 w-4" aria-hidden />
                </span>
              </span>
            </button>

            <div
              id="protocols-panel"
              className={`grid transition-all duration-300 ease-out ${
                protocolsOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="border-t border-border px-6 py-6 sm:px-8">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {t.protocolsIntro}
                  </p>

                  <div className="mt-6 flex flex-col gap-6">
                    {t.protocolGroups.map((group, gi) => (
                      <div
                        key={gi}
                        className="rounded-2xl border border-border bg-background/60 p-5"
                      >
                        <div className="flex items-start gap-3">
                          <span
                            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-serif text-sm font-semibold ${groupAccent(
                              gi
                            )}`}
                          >
                            {gi + 1}
                          </span>
                          <div>
                            <h3 className="font-serif text-lg font-medium text-[color:var(--primary-hover)]">
                              {group.title}
                            </h3>
                            {group.intro && (
                              <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                                {group.intro}
                              </p>
                            )}
                          </div>
                        </div>

                        <ul className="mt-4 flex flex-col gap-3">
                          {group.items.map((item, ii) => (
                            <li
                              key={ii}
                              className="flex items-start gap-3 border-l-2 border-primary/30 pl-3"
                            >
                              <div>
                                <p className="text-sm font-semibold text-foreground">
                                  {item.name}
                                </p>
                                <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                                  {item.text}
                                </p>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <p className="mt-6 rounded-xl bg-secondary/30 px-4 py-3 text-xs leading-relaxed text-foreground/80">
                    {t.protocolsDisclaimer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTAs */}
        <section className="mt-8 flex flex-col gap-3">
          <a
            href="/chat"
            className="block w-full rounded-2xl bg-primary px-6 py-3.5 text-center text-base font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {t.openChat}
          </a>
          <a
            href="/demo"
            className="block w-full rounded-2xl border border-accent/40 bg-card/60 px-6 py-3.5 text-center text-base font-medium text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            {t.viewDemo}
          </a>
        </section>

        {/* Disclaimer */}
        <footer className="mt-auto pt-10 text-center">
          <p className="text-xs leading-relaxed text-muted-foreground">
            {t.disclaimer}
          </p>
        </footer>
      </div>
    </main>
  );
}
