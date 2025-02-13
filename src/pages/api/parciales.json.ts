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
            "title": "Método de Bisección",
            "description": "El método de bisección es un algoritmo numérico utilizado para encontrar raíces de ecuaciones de la forma f(x) = 0. Se basa en el teorema del valor intermedio, que establece que si una función continua cambia de signo en un intervalo [a, b], entonces existe al menos una raíz dentro de ese intervalo. El método consiste en dividir el intervalo en dos partes iguales y seleccionar la subparte donde la función cambia de signo, repitiendo el proceso hasta que se alcanza una precisión deseada.",
            "methodBackground": "El método de bisección es uno de los algoritmos más antiguos para encontrar raíces de funciones. Su simplicidad y robustez lo hacen ideal para situaciones donde se requiere garantizar la convergencia. Se utiliza principalmente en cálculos científicos, simulaciones y control de sistemas donde es fundamental encontrar valores óptimos.",
            "relationshipsWithOtherMethods": "Este método está estrechamente relacionado con el método de la secante y el método de Newton-Raphson, que también se usan para encontrar raíces. A diferencia de estos, la bisección no requiere derivadas, lo que la hace más estable, aunque más lenta en comparación con Newton-Raphson, que converge más rápido cuando se tiene una buena aproximación inicial.",
            "formula": "c = \\frac{a + b}{2}",
            "algorithm": [
              "Definir la función f(x) de la cual se desea encontrar la raíz.",
              "Seleccionar un intervalo inicial [a, b] donde f(a) y f(b) tengan signos opuestos.",
              "Definir la tolerancia y el número máximo de iteraciones.",
              "Para cada iteración hasta el máximo permitido:",
              "\tCalcular el punto medio c = (a + b) / 2.",
              "\tEvaluar la función en c.",
              "\tSi f(c) es cero, c es la raíz y se detiene el proceso.",
              "\tSi f(c) tiene el mismo signo que f(a), reemplazar a con c; de lo contrario, reemplazar b con c.",
              "Si la diferencia entre a y b es menor que la tolerancia, devolver c como la raíz aproximada.",
              "Si se alcanza el número máximo de iteraciones sin converger, finalizar el método con un mensaje de error."
            ],
            "example": [],
            "applications": "El método de bisección tiene diversas aplicaciones en desarrollo web, automatización de tareas y análisis de datos: 1. Análisis de datos: Puede utilizarse para optimizar modelos de predicción cuando se requiere encontrar un valor óptimo en un intervalo específico. 2. Automatización de tareas: Se puede aplicar en la calibración de parámetros en scripts automatizados, por ejemplo, ajustando umbrales de decisión en sistemas de monitoreo. 3. Desarrollo web: En motores de búsqueda o sistemas de recomendación, el método puede emplearse para ajustar dinámicamente parámetros como tasas de conversión o métricas de clasificación."
          },
          {
            "id": 2,
            "title": "Método de Newton-Raphson",
            "description": "El método de Newton-Raphson es un algoritmo numérico para encontrar raíces de funciones de la forma f(x) = 0. Se basa en una aproximación iterativa utilizando la derivada de la función para calcular mejores estimaciones de la raíz. Es ampliamente utilizado debido a su rapidez y eficiencia en problemas de análisis numérico y optimización.",
            "methodBackground": "El método de Newton-Raphson fue desarrollado por Isaac Newton y posteriormente formalizado por Joseph Raphson en el siglo XVII. Es una de las técnicas más utilizadas en cálculo numérico debido a su rapidez en la convergencia, especialmente cuando se inicia con una buena aproximación inicial.",
            "relationshipsWithOtherMethods": "El método de Newton-Raphson está relacionado con el método de la secante, que es una versión que no requiere la derivada, y con el método de bisección, que aunque es más estable, converge más lentamente. También está vinculado con el método del punto fijo, ya que ambos son métodos iterativos utilizados para encontrar soluciones de ecuaciones.",
            "formula": "x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}",
            "algorithm": [
              "Definir la función f(x) y su derivada f'(x).",
              "Seleccionar un valor inicial x0.",
              "Definir la tolerancia y el número máximo de iteraciones.",
              "Para cada iteración hasta el máximo permitido:",
              "\tEvaluar f(x_n) y f'(x_n).",
              "\tVerificar que f'(x_n) no sea cero para evitar división por cero.",
              "\tCalcular x_{n+1} aplicando la fórmula de Newton-Raphson.",
              "\tSi la diferencia entre x_{n+1} y x_n es menor que la tolerancia, detener el proceso y devolver x_{n+1} como la raíz aproximada.",
              "\tActualizar x_n con x_{n+1}.",
              "Si se alcanza el número máximo de iteraciones sin converger, finalizar el método con un mensaje de error."
            ],
            "example": [],
            "applications": "El método de Newton-Raphson es útil en desarrollo web, automatización de tareas y análisis de datos, ya que permite resolver problemas de optimización y encontrar valores óptimos en algoritmos: 1. Análisis de datos: Se usa para optimizar modelos de aprendizaje automático ajustando parámetros en funciones de costo. 2. Automatización de tareas: Puede ser útil para encontrar umbrales óptimos en sistemas de monitoreo o calibración automática. 3. Desarrollo web: En motores de búsqueda o sistemas de recomendación, ayuda a ajustar parámetros de personalización en tiempo real."
          },
          {
            "id": 3,
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
            "id": 4,
            "title": "Método del Punto Fijo",
            "description": "El método del punto fijo es un procedimiento iterativo utilizado para encontrar soluciones de ecuaciones de la forma f(x) = 0 reformulándolas en la forma x = g(x). La idea central es que, dada una función g(x), si existe un punto x tal que g(x) = x, entonces x es un punto fijo de la función y una posible solución de la ecuación original.",
            "methodBackground": "El método del punto fijo se basa en la teoría de los puntos fijos, utilizada en diversas áreas de las matemáticas, incluyendo análisis funcional y sistemas dinámicos. Su aplicación numérica ha sido clave en la resolución de ecuaciones no lineales, permitiendo reformular problemas en una forma que facilite su resolución sin necesidad de calcular derivadas, como ocurre en el método de Newton.",
            "relationshipsWithOtherMethods": "Este método está relacionado con otros algoritmos iterativos, como el método de Newton-Raphson y el método de la secante, aunque se diferencia porque no requiere la derivada de la función. También se vincula con el método de Jacobi y el método de Gauss-Seidel en la resolución de sistemas de ecuaciones.",
            "formula": "x_{n+1} = g(x_n)",
            "algorithm": [
              "Definir la función g(x) de iteración.",
              "Seleccionar un valor inicial x0.",
              "Definir la tolerancia para la convergencia y el número máximo de iteraciones.",
              "Para cada iteración hasta el máximo permitido:",
              "\tCalcular x1 = g(x0).",
              "\tVerificar si la diferencia entre x1 y x0 es menor que la tolerancia, en cuyo caso detener el proceso y devolver x1 como la raíz aproximada.",
              "\tActualizar x0 con x1 para la siguiente iteración.",
              "Si se alcanza el número máximo de iteraciones sin converger, finalizar el método con un mensaje de error."
            ],
            "example": [],
            "applications": "El método del punto fijo se puede utilizar en diversas aplicaciones dentro de la ingeniería en tecnologías computacionales: 1. Análisis de datos: en la modelización de problemas donde se requiere encontrar parámetros óptimos en modelos de predicción iterativos. 2. Automatización de tareas: en el ajuste de algoritmos de aprendizaje automático, donde ciertos hiperparámetros pueden ser ajustados iterativamente. 3. Desarrollo web: puede aplicarse en la optimización de funciones iterativas en sistemas de recomendación o motores de búsqueda personalizados."
          },
          {
            "id": 5,
            "title": "Método de Gauss y Gauss-Jordan",
            "description": "El método de Gauss y el método de Gauss-Jordan son algoritmos numéricos utilizados para resolver sistemas de ecuaciones lineales. Ambos métodos se basan en la eliminación de incógnitas mediante operaciones elementales sobre las filas de una matriz aumentada del sistema. La diferencia principal es que el método de Gauss reduce la matriz a una forma triangular superior, mientras que el método de Gauss-Jordan la lleva a la forma escalonada reducida.",
            "methodBackground": "Ambos métodos llevan el nombre del matemático alemán Carl Friedrich Gauss, quien los utilizó para resolver sistemas de ecuaciones lineales en sus investigaciones. El método de Gauss-Jordan es una extensión del método de Gauss y fue desarrollado por el matemático Wilhelm Jordan. Estos algoritmos son fundamentales en muchas aplicaciones científicas, desde la resolución de circuitos eléctricos hasta el análisis de datos y aprendizaje automático.",
            "relationshipsWithOtherMethods": "Estos métodos están relacionados con otras técnicas de álgebra lineal, como la descomposición LU y el método de Jacobi, que también buscan soluciones de sistemas lineales. Además, son una alternativa a métodos iterativos como el método de Gauss-Seidel.",
            "formula": "No Aplica, Es Un Algorimto.",
            "algorithm": [
              "Construir la matriz aumentada [A|b].",
              "Para cada fila en la matriz:",
              "\tSeleccionar el pivote en la columna actual.",
              "\tIntercambiar filas si es necesario para evitar errores numéricos.",
              "\tNormalizar la fila dividiéndola por el pivote.",
              "\tHacer ceros por debajo del pivote (método de Gauss) o en toda la columna (método de Gauss-Jordan).",
              "Si se usa el método de Gauss, aplicar sustitución regresiva para obtener la solución del sistema.",
              "Si se usa el método de Gauss-Jordan, el sistema ya estará resuelto cuando la matriz sea escalonada reducida."
            ],
            "example": [],
            "applications": "Los métodos de Gauss y Gauss-Jordan tienen diversas aplicaciones en la ingeniería en tecnologías computacionales: 1. Análisis de datos: se pueden utilizar para resolver sistemas de ecuaciones que aparecen en regresión lineal múltiple, un modelo clave en la predicción de datos. 2. Automatización de tareas: en optimización de costos y recursos, los sistemas de ecuaciones se usan para minimizar tiempos de ejecución en tareas repetitivas. 3. Desarrollo web: se pueden emplear en la distribución de carga en servidores, donde el balanceo de carga puede modelarse con sistemas de ecuaciones."
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
