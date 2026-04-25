"use client";

import { useState } from "react";
import Image from "next/image";

const content = {
  es: {
    tagline: "Tu acompañante en cada paso del camino.",
    howItWorks: "Cómo funciona",
    openChat: "Abrir chat con AnaLuz",
    viewDemo: "Ver panel de demostración",
    disclaimer: "AnaLuz no reemplaza a tu médico. Su rol es acompañarte.",
    steps: [
      "El laboratorio sube un resultado a la base de datos",
      "AnaLuz detecta el resultado y envía un SMS a la paciente",
      "Si no hay respuesta en 24h, AnaLuz hace seguimiento",
      "Si persiste el silencio, notifica al personal de la clínica",
      "Después de la consulta, la paciente puede chatear con AnaLuz",
    ],
  },
  en: {
    tagline: "Your companion at every step of the journey.",
    howItWorks: "How it works",
    openChat: "Open chat with AnaLuz",
    viewDemo: "View demo dashboard",
    disclaimer: "AnaLuz does not replace your doctor. Her role is to support you.",
    steps: [
      "The lab uploads a result to the database",
      "AnaLuz detects the result and sends an SMS to the patient",
      "If there is no response in 24h, AnaLuz sends a follow-up",
      "If silence persists, the clinic staff is notified",
      "After the consultation, the patient can chat with AnaLuz",
    ],
  },
};

export default function Home() {
  const [lang, setLang] = useState<"es" | "en">("es");
  const t = content[lang];

  return (
    <main className="min-h-screen bg-rose-50 flex flex-col items-center justify-center px-6">
      <div className="max-w-lg w-full text-center space-y-6">

        <div className="flex justify-end">
          <button
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            className="text-xs font-medium text-rose-400 border border-rose-200 rounded-full px-3 py-1.5 hover:bg-rose-100 transition-colors"
          >
            {lang === "es" ? "English" : "Español"}
          </button>
        </div>

        <div className="space-y-2 flex flex-col items-center">
          <Image
            src="/analuz_logo.png"
            alt="AnaLuz"
            width={280}
            height={120}
            priority
            className="object-contain"
          />
          <p className="text-rose-400 text-lg">{t.tagline}</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-rose-100 p-6 space-y-4 text-left">
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-widest">{t.howItWorks}</h2>
          <div className="space-y-3">
            {t.steps.map((text, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="w-7 h-7 rounded-full bg-rose-100 text-rose-600 text-sm font-semibold flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                <p className="text-gray-600 text-sm pt-0.5">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <a
            href="/chat"
            className="block w-full bg-rose-600 hover:bg-rose-700 text-white font-medium py-3 px-6 rounded-xl transition-colors"
          >
            {t.openChat}
          </a>
          <a
            href="/demo"
            className="block w-full bg-white hover:bg-rose-50 text-rose-600 font-medium py-3 px-6 rounded-xl border border-rose-200 transition-colors"
          >
            {t.viewDemo}
          </a>
        </div>

        <p className="text-xs text-rose-300">{t.disclaimer}</p>
      </div>
    </main>
  );
}
