import type { IParcial } from "@/schemas/parcial";

export function GET() {
  const data: IParcial[] = [
    {
      id: 1,
      title: "Parcial 1",
      description: "Parcial 1 de la materia de Métodos Numéricos",
      content:
        [
          {
            "id": 1,
            "title": "Método de la Secante",
            "description": "El método de la secante es un procedimiento numérico para encontrar raíces de ecuaciones no lineales de la forma f(x) = 0. Este método pertenece a la familia de métodos iterativos y se basa en una aproximación lineal de la función, utilizando dos puntos iniciales para generar una secante (línea recta que cruza la curva de la función). Es un método relacionado con el método de Newton-Raphson, pero tiene la ventaja de no requerir la derivada de la función.",
            "methodBackground": "El método de la secante es una variación del método de Newton, desarrollado para reducir la complejidad computacional al evitar el cálculo de derivadas. Ambos métodos se originan en la búsqueda de soluciones para problemas matemáticos no lineales, que tienen aplicaciones fundamentales en ingeniería, física y computación. El método de la secante se utiliza comúnmente cuando la función objetivo es complicada y su derivada no está fácilmente disponible o es costosa de calcular.",
            "relationshipsWithOtherMethods": "El método de la secante está relacionado con otros métodos iterativos como el método de bisección (basado en dividir un intervalo) y el método de Newton-Raphson (que utiliza derivadas). Aunque la convergencia del método de la secante es más lenta que la del método de Newton, suele ser más rápida que la del método de bisección.",
            "formula": "x_{n+1} = x_n - \\frac{f(x_n)(x_n - x_{n-1})}{f(x_n) - f(x_{n-1})}",
            "algorithm": [
              "Definir la función f(x) de la cual se desea encontrar la raíz.",
              "Seleccionar dos puntos iniciales x0 y x1.",
              "Definir una tolerancia para la convergencia y un número máximo de iteraciones.",
              "Para cada iteración hasta el máximo permitido:",
              "\tCalcular f(x0) y f(x1).",
              "\tVerificar si la diferencia entre f(x1) y f(x0) es cero (para evitar división por cero).",
              "\tAplicar la fórmula del método de la secante para calcular el nuevo valor x2.",
              "\tComprobar si la diferencia entre x2 y x1 es menor que la tolerancia, en cuyo caso detener el proceso y devolver x2 como la raíz aproximada.",
              "\tActualizar los valores x0 y x1 con x1 y x2, respectivamente.",
              "Si se alcanza el número máximo de iteraciones sin converger, finalizar el método con un mensaje de error."
            ],
            "example": [],
            "applications": "El método de la secante puede emplearse en análisis de datos o desarrollo web cuando es necesario encontrar soluciones a problemas matemáticos complejos. Por ejemplo: 1. En análisis de datos, podrías usar este método para ajustar modelos no lineales o calcular el punto de equilibrio en un modelo económico. 2. En automatización de tareas, puede ser útil para determinar parámetros óptimos en sistemas de simulación."
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
    {
      id: 2,
      title: "Parcial 2",
      description: "Parcial 2 de la materia de Métodos Numéricos",
      content: []
    },
    {
      id: 3,
      title: "Parcial 3",
      description: "Parcial 3 de la materia de Métodos Numéricos",
      content: []
    }
  ];

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" }
  });
}
