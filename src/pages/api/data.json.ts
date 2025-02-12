export function GET() {
  const data = {
    message: "Hola, este es un JSON expuesto en un endpoint de Astro",
    users: [
      { id: 1, name: "Israel" },
      { id: 2, name: "Juan" }
    ]
  };

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" }
  });
}
