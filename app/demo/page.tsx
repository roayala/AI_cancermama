"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

type Result = {
  id: string;
  status: string;
  uploaded_at: string;
  doctor_name: string;
  patient_name: string;
  patient_phone: string;
  sms_sent_at: string | null;
  follow_up_sent_at: string | null;
  escalated_at: string | null;
  acknowledged_at: string | null;
};

const STATUS_LABELS: Record<string, { label: string; color: string }> = {
  pending:        { label: "Pendiente",      color: "bg-gray-100 text-gray-600" },
  notified:       { label: "SMS enviado",    color: "bg-blue-100 text-blue-600" },
  follow_up_sent: { label: "Seguimiento",    color: "bg-yellow-100 text-yellow-700" },
  escalated:      { label: "Escalado",       color: "bg-red-100 text-red-600" },
  acknowledged:   { label: "Confirmado",     color: "bg-green-100 text-green-700" },
};

const DEMO_PATIENT_ID = ""; // filled after first load

export default function DemoPage() {
  const [results, setResults] = useState<Result[]>([]);
  const [patientId, setPatientId] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchResults = useCallback(async () => {
    const res = await fetch("/api/results");
    const data = await res.json();
    setResults(data);
    if (data.length > 0 && !patientId) {
      // Extract patient id from first result to reuse
    }
  }, [patientId]);

  useEffect(() => {
    fetchResults();
    // Poll every 5 seconds to show workflow progress in real time
    const interval = setInterval(fetchResults, 5000);
    return () => clearInterval(interval);
  }, [fetchResults]);

  async function fetchPatientId() {
    const res = await fetch("/api/results");
    const data = await res.json();
    // Get patient id from DB via a separate call
    const pRes = await fetch("/api/patients");
    const patients = await pRes.json();
    return patients[0]?.id;
  }

  async function triggerNotification() {
    setLoading(true);
    try {
      const pid = await fetchPatientId();
      if (!pid) return alert("No demo patient found. Run npm run migrate first.");
      await fetch("/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ patientId: pid }),
      });
      await fetchResults();
    } finally {
      setLoading(false);
    }
  }

  async function acknowledge(resultId: string) {
    await fetch("/api/acknowledge", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resultId }),
    });
    await fetchResults();
  }

  return (
    <div className="min-h-screen bg-rose-50 px-6 py-10">
      <div className="max-w-3xl mx-auto space-y-8">

        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <Image
              src="/analuz_logo.png"
              alt="AnaLuz"
              width={120}
              height={52}
              className="object-contain"
            />
            <p className="text-rose-400 text-sm">Panel de demostración</p>
          </div>
          <a href="/chat" className="text-sm text-rose-500 underline">
            Abrir chat →
          </a>
        </div>

        <div className="bg-white rounded-2xl border border-rose-100 p-5 space-y-3">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-widest">Simular nuevo resultado</h2>
          <p className="text-sm text-gray-500">
            Simula que un laboratorio sube un resultado. AnaLuz iniciará el flujo de notificación automáticamente.
            El agente esperará <strong>30 seg</strong> antes del seguimiento y <strong>1 min</strong> antes de escalar.
          </p>
          <button
            onClick={triggerNotification}
            disabled={loading}
            className="bg-rose-600 hover:bg-rose-700 disabled:bg-rose-200 text-white text-sm font-medium px-5 py-2.5 rounded-xl transition-colors"
          >
            {loading ? "Iniciando..." : "Subir resultado de laboratorio"}
          </button>
        </div>

        <div className="space-y-3">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-widest">
            Resultados ({results.length})
          </h2>

          {results.length === 0 && (
            <p className="text-gray-400 text-sm">No hay resultados aún.</p>
          )}

          {results.map((r) => {
            const s = STATUS_LABELS[r.status] ?? { label: r.status, color: "bg-gray-100 text-gray-500" };
            return (
              <div key={r.id} className="bg-white rounded-2xl border border-rose-100 p-5 space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-medium text-gray-800">{r.patient_name}</p>
                    <p className="text-xs text-gray-400">{r.patient_phone} · {r.doctor_name}</p>
                  </div>
                  <span className={`text-xs font-medium px-3 py-1 rounded-full ${s.color}`}>
                    {s.label}
                  </span>
                </div>

                <div className="text-xs text-gray-400 space-y-1">
                  {r.sms_sent_at      && <p>SMS enviado: {new Date(r.sms_sent_at).toLocaleTimeString()}</p>}
                  {r.follow_up_sent_at && <p>Seguimiento: {new Date(r.follow_up_sent_at).toLocaleTimeString()}</p>}
                  {r.escalated_at     && <p>Escalado al staff: {new Date(r.escalated_at).toLocaleTimeString()}</p>}
                  {r.acknowledged_at  && <p>Confirmado por paciente: {new Date(r.acknowledged_at).toLocaleTimeString()}</p>}
                </div>

                {!["acknowledged", "escalated"].includes(r.status) && (
                  <button
                    onClick={() => acknowledge(r.id)}
                    className="text-xs text-rose-600 underline"
                  >
                    Simular respuesta de la paciente
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
