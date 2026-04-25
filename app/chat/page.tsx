"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
    <div className="relative flex min-h-screen flex-col bg-background text-foreground">
      {/* Ambient color blobs to match the home palette */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-40 -right-32 h-72 w-72 rounded-full bg-secondary/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 right-1/3 h-80 w-80 rounded-full bg-accent/10 blur-3xl"
      />

      <header className="relative z-10 border-b border-border bg-card/80 px-4 py-3 backdrop-blur sm:px-6">
        <div className="mx-auto flex max-w-2xl items-center justify-between gap-3">
          <Link
            href="/"
            aria-label="AnaLuz - Inicio"
            className="flex items-center gap-3 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
          >
            <Image
              src="/analuz_logo.png"
              alt="AnaLuz"
              width={240}
              height={96}
              priority
              className="h-14 w-auto object-contain sm:h-16"
            />
            <span className="hidden text-xs text-muted-foreground sm:inline">
              Tu acompañante de salud
            </span>
          </Link>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-muted-foreground">
            <span
              aria-hidden
              className="h-2 w-2 rounded-full bg-accent"
            />
            En línea
          </span>
        </div>
      </header>

      <div className="relative z-10 mx-auto w-full max-w-2xl flex-1 space-y-4 overflow-y-auto px-4 py-6">
        {messages.length === 0 && (
          <div className="flex flex-col items-center gap-4 py-12 text-center">
            <span
              aria-hidden
              className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path d="M12 21s-7.5-4.7-9.6-9.2C1 8.6 2.7 5.5 5.7 4.9c1.9-.4 3.7.4 4.8 1.9.6.7 1 1.5 1.5 2.4.5-.9.9-1.7 1.5-2.4 1.1-1.5 2.9-2.3 4.8-1.9 3 .6 4.7 3.7 3.3 6.9C19.5 16.3 12 21 12 21Z" />
              </svg>
            </span>
            <div className="space-y-1">
              <p className="font-serif text-xl text-[color:var(--primary-hover)]">
                Hola, soy AnaLuz
              </p>
              <p className="mx-auto max-w-sm text-sm leading-relaxed text-muted-foreground text-pretty">
                Estoy aquí para acompañarte y responder tus preguntas con
                calma y cuidado.
              </p>
            </div>
          </div>
        )}

        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
                m.role === "user"
                  ? "rounded-br-sm bg-primary text-primary-foreground"
                  : "rounded-bl-sm border border-border bg-card text-foreground"
              }`}
            >
              {m.parts.map((part, i) =>
                part.type === "text" ? <span key={i}>{part.text}</span> : null,
              )}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <div className="rounded-2xl rounded-bl-sm border border-border bg-card px-4 py-3 shadow-sm">
              <div className="flex gap-1">
                <span className="h-2 w-2 animate-bounce rounded-full bg-primary/60 [animation-delay:0ms]" />
                <span className="h-2 w-2 animate-bounce rounded-full bg-secondary [animation-delay:150ms]" />
                <span className="h-2 w-2 animate-bounce rounded-full bg-accent/70 [animation-delay:300ms]" />
              </div>
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      <div className="relative z-10 border-t border-border bg-card/80 px-4 py-4 backdrop-blur">
        <form
          onSubmit={handleSubmit}
          className="mx-auto flex max-w-2xl items-end gap-3"
        >
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
            className="flex-1 resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="rounded-xl bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-[color:var(--primary-hover)] disabled:cursor-not-allowed disabled:bg-secondary disabled:text-[color:var(--primary-hover)]/60"
          >
            Enviar
          </button>
        </form>
        <p className="mt-2 text-center text-xs text-muted-foreground/80">
          AnaLuz no entrega ni interpreta resultados médicos.
        </p>
      </div>
    </div>
  );
}
