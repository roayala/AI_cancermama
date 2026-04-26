"use client";

import { useState, type ComponentType, type ReactNode } from "react";
import Image from "next/image";
import {
  ChevronDown,
  Compass,
  HelpCircle,
  BookOpen,
  Hand,
  Activity,
  CalendarCheck,
  Sparkles,
  ArrowRight,
  ShieldAlert,
} from "lucide-react";

type CardItem = { name: string; text: string };
type InfoCard = {
  title: string;
  intro: string;
  items: CardItem[];
  footer?: string;
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
    toggleOpen: "Mostrar",
    toggleClose: "Ocultar",
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

    afterTitle: "Después de la consulta",
    afterIntro:
      "Salir del consultorio con un diagnóstico o un resultado anormal puede sentirse abrumador. Aquí encontrarás información clara para entender lo que sigue, resolver dudas comunes y apoyarte en fuentes confiables — siempre de la mano de tu médico.",
    afterWarningTitle: "Una nota importante",
    afterWarning:
      "AnaLuz ofrece información general y acompañamiento emocional. No diagnostica, no prescribe y no reemplaza la opinión de tu equipo médico. Cualquier decisión clínica debe tomarse en consulta con tu oncólogo o ginecólogo.",
    afterCards: [
      {
        title: "Entendiendo los siguientes pasos",
        intro:
          "Después de un resultado anormal o un diagnóstico, el camino se vuelve más claro cuando sabes qué esperar.",
        items: [
          {
            name: "Estudios complementarios",
            text: "Tu médico puede pedir ultrasonido, resonancia o una biopsia para confirmar y caracterizar el hallazgo. Suele tomar de 1 a 3 semanas tener todos los resultados.",
          },
          {
            name: "Comité multidisciplinario",
            text: "Tu caso se discute en un equipo formado por cirujano oncólogo, oncólogo médico, radioncólogo, patólogo y radiólogo. Juntos diseñan un plan a tu medida.",
          },
          {
            name: "Plan personalizado",
            text: "El tratamiento depende del subtipo molecular, el estadio y tu salud general. No hay dos planes iguales — el tuyo se construye específicamente para ti.",
          },
          {
            name: "Tu red de apoyo",
            text: "Además del equipo médico, tendrás acceso a enfermería oncológica, trabajo social, nutrición y psicooncología. Apóyate en todos ellos.",
          },
        ],
      },
      {
        title: "Preguntas frecuentes",
        intro: "Las dudas más comunes después de un diagnóstico inicial.",
        items: [
          {
            name: "¿Un resultado anormal significa cáncer?",
            text: "No necesariamente. Muchos hallazgos resultan ser benignos (quistes, fibroadenomas, calcificaciones). Solo la biopsia confirma el diagnóstico.",
          },
          {
            name: "¿Cuánto tarda confirmarse un diagnóstico?",
            text: "Generalmente entre 7 y 14 días después de la biopsia, dependiendo del laboratorio y de los marcadores que se necesiten estudiar.",
          },
          {
            name: "¿Puedo seguir trabajando durante el tratamiento?",
            text: "Muchas mujeres lo hacen, especialmente con tratamientos hormonales o radioterapia. La quimioterapia suele requerir más descanso. Habla con tu equipo.",
          },
          {
            name: "¿Voy a perder el cabello?",
            text: "Solo algunos tipos de quimioterapia lo causan. La hormonoterapia, las terapias dirigidas y la radioterapia mamaria normalmente no provocan caída del cabello.",
          },
          {
            name: "¿Cuánto cuesta el tratamiento?",
            text: "Varía mucho según institución y cobertura. En México existen opciones públicas (IMSS, ISSSTE, INCan, FUCAM) y privadas. Trabajo social puede orientarte.",
          },
        ],
      },
      {
        title: "Guía confiable",
        intro:
          "Buscar información en internet es natural, pero no toda fuente es confiable. Estas instituciones publican información validada por especialistas.",
        items: [
          {
            name: "En México",
            text: "INCan (Instituto Nacional de Cancerología), FUCAM, Salvati y la Asociación Mexicana de Lucha contra el Cáncer ofrecen guías para pacientes en español.",
          },
          {
            name: "Sociedades médicas",
            text: "El Consenso Mexicano sobre Cáncer de Mama (revisión 2025), NCCN Guidelines for Patients y ESMO Patient Guides están disponibles de forma gratuita en línea.",
          },
          {
            name: "Internacionales",
            text: "American Cancer Society, Breastcancer.org y Susan G. Komen tienen secciones en español con información actualizada y revisada por oncólogos.",
          },
          {
            name: "Cómo identificar información confiable",
            text: "Busca fechas recientes (2 años o menos), autoría médica visible, fuentes citadas y evita sitios que prometan curas milagrosas o vendan productos.",
          },
        ],
      },
    ] as InfoCard[],

    askTitle: "Preguntas que puedes hacerle a AnaLuz",
    askSub:
      "Toca cualquiera para abrir el chat. AnaLuz responde con calidez y referencias.",
    askGoToChat: "Hablar con AnaLuz",
    askExamples: [
      "¿Qué significa que mi resultado sea BIRADS 4?",
      "¿Qué preguntas debo hacerle a mi oncólogo en la primera consulta?",
      "¿Cómo me preparo emocionalmente antes de una biopsia?",
      "¿Qué efectos secundarios podría tener la quimioterapia?",
      "¿Cómo cuido mi salud mental durante el tratamiento?",
      "¿Dónde puedo encontrar grupos de apoyo cerca de mí?",
    ],

    detectionTitle: "Sobre la detección oportuna",
    detectionIntro:
      "La detección temprana es la herramienta más poderosa que tenemos. Tres hábitos sencillos que pueden hacer la diferencia.",
    detectionCards: [
      {
        title: "Autoexploración mensual",
        intro:
          "Conocer tu cuerpo es el primer paso. Hacerlo cada mes te permite notar cambios pronto.",
        items: [
          {
            name: "Cuándo hacerla",
            text: "Entre los días 7 y 10 después del primer día de tu periodo, cuando los senos están menos sensibles. Si ya no menstrúas, elige el mismo día de cada mes.",
          },
          {
            name: "Cómo hacerla",
            text: "En tres momentos: frente al espejo observando forma y piel, acostada palpando con movimientos circulares, y en la regadera con la piel enjabonada.",
          },
          {
            name: "Qué buscar",
            text: "Bultos o engrosamientos, cambios en la piel (hoyuelos, enrojecimiento, descamación), secreción del pezón, retracción del pezón o asimetría reciente.",
          },
        ],
        footer:
          "Si encuentras algo distinto, no entres en pánico — la mayoría de los hallazgos son benignos. Pero sí agenda una consulta pronto.",
      },
      {
        title: "Mastografía",
        intro:
          "Es el estudio de imagen más efectivo para detectar el cáncer de mama antes de que se sienta.",
        items: [
          {
            name: "A partir de los 40 años",
            text: "La recomendación general en México es realizarla cada 1 o 2 años entre los 40 y los 49 años, y cada 1 a 2 años a partir de los 50. Tu médico puede ajustar la frecuencia.",
          },
          {
            name: "Si hay antecedentes familiares",
            text: "Si tu madre, hermana o hija tuvo cáncer de mama, comienza 10 años antes de la edad de diagnóstico de tu familiar — y nunca antes de los 30. Considera asesoría genética.",
          },
          {
            name: "Qué esperar",
            text: "El estudio dura entre 15 y 20 minutos. Hay una compresión breve de cada seno (incómoda, no dolorosa) y los resultados suelen llegar en 5 a 10 días.",
          },
        ],
        footer:
          "Una mastografía con clasificación BIRADS 1 o 2 es normal. BIRADS 3 requiere seguimiento, y BIRADS 4 o 5 indica que hay que estudiar más a fondo.",
      },
      {
        title: "Seguimiento continuo",
        intro:
          "Después de un tratamiento o un hallazgo previo, la vigilancia regular cuida tu bienestar a largo plazo.",
        items: [
          {
            name: "Primeros 3 años",
            text: "Consultas con tu oncólogo cada 3 a 6 meses. Es el periodo en que se vigila más de cerca cualquier signo de recurrencia.",
          },
          {
            name: "Años 4 y 5",
            text: "Consultas cada 6 a 12 meses, con mastografía anual del seno conservado y del contralateral. Marcadores tumorales solo si tu médico los indica.",
          },
          {
            name: "A partir del año 5",
            text: "Consultas anuales y mastografía anual de por vida. Cuida también huesos, corazón y salud mental — efectos a largo plazo de algunos tratamientos.",
          },
          {
            name: "Hábitos protectores",
            text: "Actividad física moderada, alimentación rica en vegetales, peso saludable, limitar alcohol y no fumar reducen el riesgo de recurrencia.",
          },
        ],
      },
    ] as InfoCard[],
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
    toggleOpen: "Show",
    toggleClose: "Hide",
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

    afterTitle: "After the consultation",
    afterIntro:
      "Leaving the doctor's office with an abnormal result or a diagnosis can feel overwhelming. Here you'll find clear information to understand what comes next, resolve common questions, and lean on trusted sources — always alongside your doctor.",
    afterWarningTitle: "An important note",
    afterWarning:
      "AnaLuz provides general information and emotional companionship. She does not diagnose, prescribe, or replace your medical team's opinion. Every clinical decision must be made with your oncologist or gynecologist.",
    afterCards: [
      {
        title: "Understanding the next steps",
        intro:
          "After an abnormal result or a diagnosis, the path becomes clearer when you know what to expect.",
        items: [
          {
            name: "Additional studies",
            text: "Your doctor may order an ultrasound, MRI, or biopsy to confirm and characterize the finding. It usually takes 1 to 3 weeks to have all results.",
          },
          {
            name: "Multidisciplinary committee",
            text: "Your case is discussed by a team of surgical oncologist, medical oncologist, radiation oncologist, pathologist and radiologist. Together they design a plan tailored to you.",
          },
          {
            name: "Personalized plan",
            text: "Treatment depends on molecular subtype, stage, and your overall health. No two plans are alike — yours is built specifically for you.",
          },
          {
            name: "Your support network",
            text: "Beyond the medical team, you'll have access to oncology nursing, social work, nutrition, and psycho-oncology. Lean on all of them.",
          },
        ],
      },
      {
        title: "Frequently asked questions",
        intro: "The most common doubts after an initial diagnosis.",
        items: [
          {
            name: "Does an abnormal result mean cancer?",
            text: "Not necessarily. Many findings turn out to be benign (cysts, fibroadenomas, calcifications). Only a biopsy confirms a diagnosis.",
          },
          {
            name: "How long does it take to confirm a diagnosis?",
            text: "Usually 7 to 14 days after the biopsy, depending on the lab and the markers that need to be studied.",
          },
          {
            name: "Can I keep working during treatment?",
            text: "Many women do, especially during hormone therapy or radiation. Chemotherapy usually requires more rest. Talk to your team.",
          },
          {
            name: "Will I lose my hair?",
            text: "Only some chemotherapies cause this. Hormone therapy, targeted therapies, and breast radiation usually do not cause hair loss.",
          },
          {
            name: "How much does treatment cost?",
            text: "It varies by institution and coverage. In Mexico there are public options (IMSS, ISSSTE, INCan, FUCAM) and private ones. Social work can guide you.",
          },
        ],
      },
      {
        title: "Trusted guide",
        intro:
          "Searching the internet is natural, but not every source is reliable. These institutions publish information validated by specialists.",
        items: [
          {
            name: "In Mexico",
            text: "INCan, FUCAM, Salvati, and the Mexican Association for the Fight Against Cancer offer patient guides in Spanish.",
          },
          {
            name: "Medical societies",
            text: "The Mexican Consensus on Breast Cancer (2025 revision), NCCN Guidelines for Patients, and ESMO Patient Guides are freely available online.",
          },
          {
            name: "International",
            text: "American Cancer Society, Breastcancer.org, and Susan G. Komen have Spanish-language sections with up-to-date, oncologist-reviewed information.",
          },
          {
            name: "How to spot reliable information",
            text: "Look for recent dates (2 years or less), visible medical authorship, cited sources, and avoid sites promising miracle cures or selling products.",
          },
        ],
      },
    ] as InfoCard[],

    askTitle: "Questions you can ask AnaLuz",
    askSub: "Tap any to open the chat. AnaLuz answers warmly, with references.",
    askGoToChat: "Talk to AnaLuz",
    askExamples: [
      "What does a BIRADS 4 result mean?",
      "What questions should I ask my oncologist at the first visit?",
      "How can I prepare emotionally before a biopsy?",
      "What side effects might chemotherapy have?",
      "How do I take care of my mental health during treatment?",
      "Where can I find support groups near me?",
    ],

    detectionTitle: "About early detection",
    detectionIntro:
      "Early detection is the most powerful tool we have. Three simple habits that can make the difference.",
    detectionCards: [
      {
        title: "Monthly self-exam",
        intro:
          "Knowing your body is the first step. Doing it monthly helps you notice changes early.",
        items: [
          {
            name: "When to do it",
            text: "Between days 7 and 10 after the first day of your period, when breasts are less tender. If you no longer menstruate, pick the same day each month.",
          },
          {
            name: "How to do it",
            text: "In three moments: in front of the mirror observing shape and skin, lying down using circular palpation, and in the shower with soapy skin.",
          },
          {
            name: "What to look for",
            text: "Lumps or thickening, skin changes (dimples, redness, scaling), nipple discharge, nipple retraction, or recent asymmetry.",
          },
        ],
        footer:
          "If you find something different, don't panic — most findings are benign. But do schedule a visit soon.",
      },
      {
        title: "Mammography",
        intro:
          "It is the most effective imaging study to detect breast cancer before it can be felt.",
        items: [
          {
            name: "Starting at age 40",
            text: "The general recommendation in Mexico is every 1 to 2 years between ages 40 and 49, and every 1 to 2 years from age 50. Your doctor may adjust frequency.",
          },
          {
            name: "If there is family history",
            text: "If your mother, sister, or daughter had breast cancer, start 10 years before your relative's age at diagnosis — and never before age 30. Consider genetic counseling.",
          },
          {
            name: "What to expect",
            text: "The study takes 15 to 20 minutes. There is a brief compression of each breast (uncomfortable, not painful) and results usually arrive in 5 to 10 days.",
          },
        ],
        footer:
          "A BIRADS 1 or 2 mammogram is normal. BIRADS 3 needs follow-up, and BIRADS 4 or 5 means further studies are required.",
      },
      {
        title: "Continuous follow-up",
        intro:
          "After treatment or a previous finding, regular surveillance protects your long-term well-being.",
        items: [
          {
            name: "First 3 years",
            text: "Visits with your oncologist every 3 to 6 months. This is the period when any sign of recurrence is monitored most closely.",
          },
          {
            name: "Years 4 and 5",
            text: "Visits every 6 to 12 months, with annual mammography of the conserved and contralateral breast. Tumor markers only if your doctor indicates them.",
          },
          {
            name: "From year 5 onward",
            text: "Yearly visits and yearly mammography for life. Also care for bones, heart, and mental health — long-term effects of some treatments.",
          },
          {
            name: "Protective habits",
            text: "Moderate physical activity, vegetable-rich diet, healthy weight, limited alcohol, and not smoking all reduce the risk of recurrence.",
          },
        ],
      },
    ] as InfoCard[],
  },
};

type IconType = ComponentType<{ className?: string }>;

type CollapsibleProps = {
  id: string;
  title: string;
  subtitle?: string;
  Icon?: IconType;
  iconClassName?: string;
  containerClassName?: string;
  toggleOpenLabel: string;
  toggleCloseLabel: string;
  defaultOpen?: boolean;
  children: ReactNode;
};

function Collapsible({
  id,
  title,
  subtitle,
  Icon,
  iconClassName,
  containerClassName,
  toggleOpenLabel,
  toggleCloseLabel,
  defaultOpen = false,
  children,
}: CollapsibleProps) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = `${id}-panel`;
  return (
    <div
      className={`overflow-hidden rounded-3xl border border-border shadow-sm backdrop-blur ${
        containerClassName ?? "bg-card/80"
      }`}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-secondary/20 sm:px-7"
      >
        <span className="flex min-w-0 items-start gap-4">
          {Icon && (
            <span
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${
                iconClassName ?? "bg-primary/15 text-primary"
              }`}
              aria-hidden
            >
              <Icon className="h-5 w-5" />
            </span>
          )}
          <span className="min-w-0">
            <span className="block font-serif text-xl font-medium text-[color:var(--primary-hover)] sm:text-[1.35rem]">
              {title}
            </span>
            {subtitle && (
              <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
                {subtitle}
              </span>
            )}
          </span>
        </span>
        <span className="flex shrink-0 items-center gap-2">
          <span className="hidden text-xs font-medium text-muted-foreground sm:inline">
            {open ? toggleCloseLabel : toggleOpenLabel}
          </span>
          <span
            className={`flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          >
            <ChevronDown className="h-4 w-4" aria-hidden />
          </span>
        </span>
      </button>

      <div
        id={panelId}
        className={`grid transition-all duration-300 ease-out ${
          open
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-border px-6 py-6 sm:px-7">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [lang, setLang] = useState<"es" | "en">("es");
  const t = content[lang];

  // Rotate between rose, peach, and teal for visual rhythm on numbered lists
  const stepAccent = (i: number) => {
    const palette = [
      "bg-primary/10 text-primary",
      "bg-secondary/50 text-[color:var(--primary-hover)]",
      "bg-accent/15 text-accent",
    ];
    return palette[i % palette.length];
  };

  // Icons for the "After consultation" cards
  const afterIcons: IconType[] = [Compass, HelpCircle, BookOpen];
  // Icons for the "Detection" cards
  const detectionIcons: IconType[] = [Hand, Activity, CalendarCheck];
  // Subtle background tint per card so the section reads as a sequence
  const cardTint = (i: number) => {
    const palette = ["bg-primary/5", "bg-accent/5", "bg-secondary/20"];
    return palette[i % palette.length];
  };
  const iconTint = (i: number) => {
    const palette = [
      "bg-primary/15 text-primary",
      "bg-accent/15 text-accent",
      "bg-secondary/60 text-[color:var(--primary-hover)]",
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

        {/* How it works — collapsible */}
        <section className="mt-10">
          <Collapsible
            id="how-it-works"
            title={t.howItWorks}
            subtitle={t.howItWorksSub}
            toggleOpenLabel={t.toggleOpen}
            toggleCloseLabel={t.toggleClose}
          >
            <ol className="flex flex-col gap-5">
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
          </Collapsible>
        </section>

        {/* AFTER THE CONSULTATION */}
        <section className="mt-12">
          <div className="text-center">
            <p className="font-serif text-xs uppercase tracking-[0.2em] text-accent">
              {lang === "es" ? "Acompañamiento" : "Companion"}
            </p>
            <h2 className="mt-2 font-serif text-2xl font-medium text-[color:var(--primary-hover)] sm:text-3xl">
              {t.afterTitle}
            </h2>
          </div>

          {/* Intro — collapsible */}
          <div className="mt-6">
            <Collapsible
              id="after-intro"
              title={lang === "es" ? "Una introducción" : "A short intro"}
              Icon={ShieldAlert}
              iconClassName="bg-secondary/60 text-[color:var(--primary-hover)]"
              containerClassName="bg-secondary/30"
              toggleOpenLabel={t.toggleOpen}
              toggleCloseLabel={t.toggleClose}
            >
              <div className="flex flex-col gap-4">
                <p className="text-sm leading-relaxed text-foreground/85">
                  {t.afterIntro}
                </p>
                <div className="rounded-2xl border border-border bg-card/70 px-4 py-3">
                  <p className="text-sm font-semibold text-foreground">
                    {t.afterWarningTitle}
                  </p>
                  <p className="mt-0.5 text-sm leading-relaxed text-foreground/80">
                    {t.afterWarning}
                  </p>
                </div>
              </div>
            </Collapsible>
          </div>

          {/* Cards — each is its own collapsible */}
          <div className="mt-5 flex flex-col gap-4">
            {t.afterCards.map((card, ci) => {
              const Icon = afterIcons[ci % afterIcons.length];
              return (
                <Collapsible
                  key={ci}
                  id={`after-${ci}`}
                  title={card.title}
                  subtitle={card.intro}
                  Icon={Icon}
                  iconClassName={iconTint(ci)}
                  containerClassName={cardTint(ci)}
                  toggleOpenLabel={t.toggleOpen}
                  toggleCloseLabel={t.toggleClose}
                >
                  <ul className="flex flex-col gap-3.5">
                    {card.items.map((item, ii) => (
                      <li
                        key={ii}
                        className="border-l-2 border-primary/30 pl-4"
                      >
                        <p className="text-sm font-semibold text-foreground">
                          {item.name}
                        </p>
                        <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                          {item.text}
                        </p>
                      </li>
                    ))}
                  </ul>
                </Collapsible>
              );
            })}
          </div>
        </section>

        {/* QUESTIONS YOU CAN ASK ANALUZ — collapsible */}
        <section className="mt-12">
          <Collapsible
            id="ask-questions"
            title={t.askTitle}
            subtitle={t.askSub}
            Icon={Sparkles}
            iconClassName="bg-accent/15 text-accent"
            containerClassName="bg-accent/5"
            toggleOpenLabel={t.toggleOpen}
            toggleCloseLabel={t.toggleClose}
          >
            <ul className="grid gap-3 sm:grid-cols-2">
              {t.askExamples.map((q, i) => (
                <li key={i}>
                  <a
                    href={`/chat?q=${encodeURIComponent(q)}`}
                    className="group flex h-full items-start gap-3 rounded-2xl border border-border bg-card/80 px-4 py-3.5 text-left shadow-sm backdrop-blur transition-colors hover:border-primary/40 hover:bg-card"
                  >
                    <span
                      className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${iconTint(
                        i
                      )}`}
                      aria-hidden
                    >
                      <Sparkles className="h-3.5 w-3.5" />
                    </span>
                    <span className="flex-1 text-sm leading-snug text-foreground">
                      {q}
                    </span>
                    <ArrowRight
                      className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary"
                      aria-hidden
                    />
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex justify-center">
              <a
                href="/chat"
                className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-card/80 px-5 py-2.5 text-sm font-medium text-primary shadow-sm backdrop-blur transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                {t.askGoToChat}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </Collapsible>
        </section>

        {/* ABOUT EARLY DETECTION */}
        <section className="mt-12">
          <div className="text-center">
            <p className="font-serif text-xs uppercase tracking-[0.2em] text-accent">
              {lang === "es" ? "Prevención" : "Prevention"}
            </p>
            <h2 className="mt-2 font-serif text-2xl font-medium text-[color:var(--primary-hover)] sm:text-3xl">
              {t.detectionTitle}
            </h2>
          </div>

          {/* Intro — collapsible */}
          <div className="mt-6">
            <Collapsible
              id="detection-intro"
              title={lang === "es" ? "Por qué importa" : "Why it matters"}
              Icon={Activity}
              iconClassName="bg-accent/15 text-accent"
              containerClassName="bg-accent/5"
              toggleOpenLabel={t.toggleOpen}
              toggleCloseLabel={t.toggleClose}
            >
              <p className="text-sm leading-relaxed text-foreground/85">
                {t.detectionIntro}
              </p>
            </Collapsible>
          </div>

          {/* Cards — each is its own collapsible */}
          <div className="mt-5 flex flex-col gap-4">
            {t.detectionCards.map((card, ci) => {
              const Icon = detectionIcons[ci % detectionIcons.length];
              return (
                <Collapsible
                  key={ci}
                  id={`detection-${ci}`}
                  title={card.title}
                  subtitle={card.intro}
                  Icon={Icon}
                  iconClassName={iconTint(ci)}
                  containerClassName={cardTint(ci)}
                  toggleOpenLabel={t.toggleOpen}
                  toggleCloseLabel={t.toggleClose}
                >
                  <ul className="flex flex-col gap-3.5">
                    {card.items.map((item, ii) => (
                      <li
                        key={ii}
                        className="border-l-2 border-primary/30 pl-4"
                      >
                        <p className="text-sm font-semibold text-foreground">
                          {item.name}
                        </p>
                        <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                          {item.text}
                        </p>
                      </li>
                    ))}
                  </ul>

                  {card.footer && (
                    <p className="mt-5 rounded-xl bg-card/80 px-4 py-3 text-xs leading-relaxed text-foreground/80">
                      {card.footer}
                    </p>
                  )}
                </Collapsible>
              );
            })}
          </div>
        </section>

        {/* CTAs */}
        <section className="mt-12 flex flex-col gap-3">
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
