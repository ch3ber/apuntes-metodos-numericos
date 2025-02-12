export function GET() {
  const data = [
    {
      id: 1,
      title: "Parcial 1",
      description: "Parcial 1 de la materia de Métodos Numéricos",
      content:
        [
          {
            "id": 1,
            "title": "Método de la Secante",
            "description": "El método de la secante es un procedimiento numérico para encontrar raíces de ecuaciones no lineales, aproximando la función con una línea secante basada en dos puntos iniciales.",
            "methodBackground": "El método de la secante es una variación del método de Newton, desarrollado para reducir la complejidad computacional al evitar el cálculo de derivadas. Se usa en problemas matemáticos no lineales en ingeniería y computación.",
            "relationshipsWithOtherMethods": "Relacionado con el método de Newton-Raphson (que usa derivadas) y el método de bisección (que divide un intervalo). La secante suele ser más rápida que la bisección, pero menos estable que Newton.",
            "formula": "x_{n+1} = x_n - (f(x_n) * (x_n - x_{n-1})) / (f(x_n) - f(x_{n-1}))",
            "algorithm": [
              "Seleccionar dos puntos iniciales x0 y x1.",
              "Calcular f(x0) y f(x1).",
              "Aplicar la fórmula de la secante para obtener x2.",
              "Comprobar convergencia: si |x2 - x1| < tolerancia, terminar.",
              "Actualizar x0 = x1, x1 = x2 y repetir hasta la convergencia o alcanzar el máximo de iteraciones."
            ],
            "example": ["https://ejemplo1.com", "https://ejemplo2.com", "https://ejemplo3.com"],
            "applications": "Utilizado en análisis de datos, simulaciones y optimización en algoritmos computacionales.",
          },
          {
            "id": 2,
            "title": "Método del Punto Fijo",
            "description": "El método del punto fijo es una técnica iterativa para resolver ecuaciones no lineales reformulándolas en la forma x = g(x).",
            "methodBackground": "Derivado de la teoría de puntos fijos en análisis funcional, es una alternativa a métodos como Newton-Raphson cuando la derivada no está disponible.",
            "relationshipsWithOtherMethods": "Relacionado con el método de Newton-Raphson y el método de Gauss-Seidel en la solución de ecuaciones y sistemas lineales.",
            "formula": "x_{n+1} = g(x_n)",
            "algorithm": [
              "Reescribir la ecuación en la forma x = g(x).",
              "Seleccionar un valor inicial x0.",
              "Evaluar x1 = g(x0).",
              "Comprobar convergencia: si |x1 - x0| < tolerancia, terminar.",
              "Actualizar x0 = x1 y repetir hasta alcanzar la tolerancia o el número máximo de iteraciones."
            ],
            "example": ["https://ejemplo4.com", "https://ejemplo5.com", "https://ejemplo6.com"],
            "applications": "Usado en aprendizaje automático, optimización de redes neuronales y ajuste de modelos en análisis de datos.",
          },
          {
            "id": 3,
            "title": "Método de Gauss",
            "description": "El método de eliminación de Gauss es una técnica algebraica para resolver sistemas de ecuaciones lineales transformando la matriz en forma triangular superior.",
            "methodBackground": "Desarrollado por Carl Friedrich Gauss, es una de las bases del álgebra lineal computacional y se utiliza ampliamente en la resolución de ecuaciones en diversas disciplinas.",
            "relationshipsWithOtherMethods": "Relacionado con el método de Gauss-Jordan, la descomposición LU y el método de Jacobi.",
            "formula": "Ax = b → [A|b] → forma triangular superior → sustitución regresiva.",
            "algorithm": [
              "Formar la matriz aumentada [A|b].",
              "Aplicar eliminación hacia adelante para obtener una matriz triangular superior.",
              "Realizar sustitución regresiva para obtener las soluciones.",
              "Si el sistema es inconsistente o tiene infinitas soluciones, indicar el resultado correspondiente."
            ],
            "example": ["https://ejemplo7.com", "https://ejemplo8.com", "https://ejemplo9.com"],
            "applications": "Utilizado en cálculos científicos, optimización de algoritmos y modelos computacionales en análisis de datos.",
          },
          {
            "id": 4,
            "title": "Método de Gauss-Jordan",
            "description": "El método de Gauss-Jordan es una extensión del método de Gauss que convierte la matriz aumentada en su forma escalonada reducida, facilitando la solución del sistema sin sustitución regresiva.",
            "methodBackground": "Desarrollado por Wilhelm Jordan como una mejora del método de eliminación de Gauss, se usa ampliamente en software de álgebra lineal y cálculos numéricos.",
            "relationshipsWithOtherMethods": "Relacionado con el método de Gauss y la descomposición LU.",
            "formula": "Ax = b → [A|b] → forma escalonada reducida → solución directa.",
            "algorithm": [
              "Formar la matriz aumentada [A|b].",
              "Aplicar eliminación hacia adelante para convertir la matriz en forma escalonada.",
              "Normalizar cada fila dividiendo por el pivote.",
              "Aplicar eliminación hacia atrás para obtener la forma escalonada reducida.",
              "Leer la solución directamente de la matriz resultante."
            ],
            "example": ["https://ejemplo10.com", "https://ejemplo11.com", "https://ejemplo12.com"],
            "applications": "Usado en inteligencia artificial, optimización de recursos en redes y simulaciones numéricas en desarrollo web y análisis de datos.",
          }
        ]

    },
  ];

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" }
  });
}
