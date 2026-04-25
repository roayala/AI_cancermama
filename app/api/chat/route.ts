import { streamText, convertToModelMessages, type UIMessage } from "ai";

// The Vercel AI Gateway integration provisions GATEWAY_API_KEY,
// but the AI SDK looks for AI_GATEWAY_API_KEY. Alias it so the
// default gateway provider can authenticate.
if (!process.env.AI_GATEWAY_API_KEY && process.env.GATEWAY_API_KEY) {
  process.env.AI_GATEWAY_API_KEY = process.env.GATEWAY_API_KEY;
}

const SYSTEM_PROMPT = `Eres AnaLuz, una acompañante de salud cálida y empática para pacientes de cáncer de mama.

Tu rol es:
- Responder preguntas sobre el proceso de tratamiento del cáncer de mama en lenguaje simple y claro
- Explicar qué pueden esperar en las próximas etapas del tratamiento
- Brindar apoyo emocional y orientación sobre recursos disponibles
- Recordar a la paciente que su médico es quien puede responder preguntas específicas sobre su caso

Reglas estrictas:
- NUNCA entregues, interpretes ni comentes resultados médicos específicos
- NUNCA diagnostiques ni sugieras diagnósticos
- NUNCA generes miedo ni urgencia innecesaria
- Si la paciente pregunta por su resultado, indícale amablemente que esa información solo puede compartirla su médico

Tono:
- Cálido, cercano y humano — como una amiga que conoce el sistema de salud
- Usa español latinoamericano natural
- Frases cortas y claras — evita el lenguaje médico técnico
- Siempre termina con una nota de aliento o un próximo paso concreto`;

export async function POST(req: Request) {
  try {
    const { messages }: { messages: UIMessage[] } = await req.json();

    const result = streamText({
      // Zero-config via the Vercel AI Gateway — just pass the model id
      model: "anthropic/claude-sonnet-4.5",
      system: SYSTEM_PROMPT,
      messages: await convertToModelMessages(messages),
    });

    return result.toUIMessageStreamResponse();
  } catch (err) {
    console.error("[v0] /api/chat error:", err);
    return new Response(
      JSON.stringify({
        error:
          err instanceof Error ? err.message : "Unknown error in chat route",
      }),
      { status: 500, headers: { "content-type": "application/json" } },
    );
  }
}
