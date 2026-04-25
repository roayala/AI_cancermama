"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

const transport = new DefaultChatTransport({ api: "/api/chat" });

export default function ChatPage() {
  const { messages, sendMessage, status } = useChat({ transport });
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);
  const isLoading = status === "streaming" || status === "submitted";

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    sendMessage({ text: input });
    setInput("");
  }

  return (
    <div className="min-h-screen bg-rose-50 flex flex-col">
      <header className="bg-white border-b border-rose-100 px-6 py-3 flex items-center gap-3">
        <Image
          src="/analuz_logo.png"
          alt="AnaLuz"
          width={100}
          height={44}
          className="object-contain"
        />
        <p className="text-xs text-gray-400">Tu acompañante de salud</p>
      </header>

      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4 max-w-2xl w-full mx-auto">
        {messages.length === 0 && (
          <div className="text-center space-y-2 py-12">
            <p className="text-rose-300 text-4xl">💗</p>
            <p className="text-gray-500 text-sm">
              Hola, soy AnaLuz. Estoy aquí para acompañarte y responder tus preguntas.
            </p>
          </div>
        )}

        {messages.map((m) => (
          <div key={m.id} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
              m.role === "user"
                ? "bg-rose-600 text-white rounded-br-sm"
                : "bg-white text-gray-700 shadow-sm border border-rose-50 rounded-bl-sm"
            }`}>
              {m.parts.map((part, i) =>
                part.type === "text" ? <span key={i}>{part.text}</span> : null
              )}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm border border-rose-50">
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-rose-300 rounded-full animate-bounce [animation-delay:0ms]" />
                <span className="w-2 h-2 bg-rose-300 rounded-full animate-bounce [animation-delay:150ms]" />
                <span className="w-2 h-2 bg-rose-300 rounded-full animate-bounce [animation-delay:300ms]" />
              </div>
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      <div className="bg-white border-t border-rose-100 px-4 py-4">
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto flex gap-3 items-end">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e as unknown as React.FormEvent);
              }
            }}
            placeholder="Escribe tu pregunta..."
            rows={1}
            className="flex-1 resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-rose-300 focus:ring-1 focus:ring-rose-200"
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="bg-rose-600 hover:bg-rose-700 disabled:bg-rose-200 text-white rounded-xl px-4 py-3 text-sm font-medium transition-colors"
          >
            Enviar
          </button>
        </form>
        <p className="text-center text-xs text-gray-300 mt-2">
          AnaLuz no entrega ni interpreta resultados médicos.
        </p>
      </div>
    </div>
  );
}
