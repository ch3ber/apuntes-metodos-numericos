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
            "example": ['/img/biseccion.png'],
            "applications": "El método de bisección tiene diversas aplicaciones en desarrollo web, automatización de tareas y análisis de datos: 1. Análisis de datos: Puede utilizarse para optimizar modelos de predicción cuando se requiere encontrar un valor óptimo en un intervalo específico. 2. Automatización de tareas: Se puede aplicar en la calibración de parámetros en scripts automatizados, por ejemplo, ajustando umbrales de decisión en sistemas de monitoreo. 3. Desarrollo web: En motores de búsqueda o sistemas de recomendación, el método puede emplearse para ajustar dinámicamente parámetros como tasas de conversión o métricas de clasificación."
          },
          {
            "id": 2,
            "title": "Método de Newton-Raphson",
            "description": "El método de Newton-Raphson es un algoritmo numérico para encontrar raíces de funciones de la forma f(x) = 0. Se basa en una aproximación iterativa utilizando la derivada de la función para calcular mejores estimaciones de la raíz. Es ampliamente utilizado debido a su rapidez y eficiencia en problemas de análisis numérico y optimización.",
            "methodBackground": "El método de Newton-Raphson fue desarrollado por Isaac Newton y posteriormente formalizado por Joseph Raphson en el siglo XVII. Es una de las técnicas más utilizadas en cálculo numérico debido a su rapidez en la convergencia, especialmente cuando se inicia con una buena aproximación inicial.",
            "relationshipsWithOtherMethods": "El método de Newton-Raphson está relacionado con el método de la secante, que es una versión que no requiere la derivada, y con el método de bisección, que aunque es más estable, converge más lentamente. También está vinculado con el método del punto fijo, ya que ambos son métodos iterativos utilizados para encontrar soluciones de ecuaciones.",
            "formula": "x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}",
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
            "example": ['/img/newtonraphson.jpeg'],
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
            "example": ['/img/secante-1.jpg', '/img/secante-2.jpg'],
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
            "example": ['/img/punto-fijo.jpg'],
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
            "example": ['/img/gauss.jpeg'],
            "applications": "Los métodos de Gauss y Gauss-Jordan tienen diversas aplicaciones en la ingeniería en tecnologías computacionales: 1. Análisis de datos: se pueden utilizar para resolver sistemas de ecuaciones que aparecen en regresión lineal múltiple, un modelo clave en la predicción de datos. 2. Automatización de tareas: en optimización de costos y recursos, los sistemas de ecuaciones se usan para minimizar tiempos de ejecución en tareas repetitivas. 3. Desarrollo web: se pueden emplear en la distribución de carga en servidores, donde el balanceo de carga puede modelarse con sistemas de ecuaciones."
          }
        ]
    },
    {
      id: 2,
      title: "Parcial 2",
      description: "Parcial 2 de la materia de Métodos Numéricos",
      content: [
        {
          "id": 7,
          "title": "Métodos de Gauss-Seidel y Jacobi",
          "description": "Los métodos de Gauss-Seidel y Jacobi son algoritmos iterativos utilizados para resolver sistemas de ecuaciones lineales de la forma Ax = b, donde A es una matriz de coeficientes, x es el vector de incógnitas y b es el vector de términos independientes. Son ampliamente utilizados en análisis numérico debido a su eficiencia en sistemas grandes y dispersos.",
          "methodBackground": "El método de Jacobi fue desarrollado por Carl Gustav Jacobi en el siglo XIX, mientras que el método de Gauss-Seidel fue propuesto por Philipp Ludwig von Seidel como una mejora del método de Jacobi. Ambos métodos son fundamentales en el análisis numérico y se aplican en simulaciones, resolución de ecuaciones diferenciales y optimización. Matemáticamente, estos métodos pertenecen a la familia de métodos iterativos porque generan una aproximación progresiva de la solución en lugar de calcularla directamente como lo hace la eliminación de Gauss-Jordan. Son útiles cuando la matriz A es grande y dispersa (contiene muchos ceros), lo que reduce el costo computacional.",
          "relationshipsWithOtherMethods": "Estos métodos están relacionados con: 1. Eliminación de Gauss y Gauss-Jordan, que resuelven sistemas de ecuaciones lineales mediante eliminación de filas pero son más costosos computacionalmente. 2. Método de Gradiente Conjugado, que es otro método iterativo para matrices grandes y dispersas. 3. Método de relajación sucesiva (SOR), que es una mejora del Gauss-Seidel para acelerar la convergencia.",
          "formula": "x_i^{(k+1)} = \\frac{1}{a_{ii}} \\left( b_i - \\sum_{j \\neq i} a_{ij} x_j^{(k)} \\right)",
          "algorithm": [
            "Definir la matriz A y el vector b del sistema Ax = b.",
            "Seleccionar un vector inicial x0 con valores aproximados.",
            "Definir la tolerancia para la convergencia y el número máximo de iteraciones.",
            "Para cada iteración hasta el máximo permitido:",
            "\tPara cada variable xi, calcular su nuevo valor usando la ecuación iterativa.",
            "\tSi se usa el método de Jacobi, utilizar únicamente los valores de la iteración anterior.",
            "\tSi se usa el método de Gauss-Seidel, actualizar cada xi en cuanto se calcule.",
            "\tVerificar si la diferencia entre iteraciones es menor que la tolerancia, en cuyo caso detener el proceso y devolver la solución aproximada.",
            "Si se alcanza el número máximo de iteraciones sin converger, finalizar el método con un mensaje de error."
          ],
          "example": [],
          "applications": "Los métodos iterativos como Jacobi y Gauss-Seidel pueden aplicarse en: 1. Desarrollo Web y Pruebas QA: Para modelar la carga de trabajo distribuida en servidores de microservicios y optimizar tiempos de respuesta. 2. Testing y Debugging: Para analizar errores en simulaciones de software que requieren resolver múltiples ecuaciones interdependientes. 3. Desarrollo de Apps: Para ajustar parámetros en sistemas de recomendación basados en múltiples variables. 4. Monitoreo de Registros en Memoria: Para predecir tendencias en el consumo de memoria de una aplicación basándose en datos de ejecución. 5. Hacking y Ciberseguridad: En la resolución de sistemas de ecuaciones en algoritmos de criptografía y análisis de patrones de tráfico de red. 6. Análisis de Datos: En modelos de predicción basados en ecuaciones diferenciales, como optimización de modelos de machine learning."
        },
        {
          "id": 8,
          "title": "Método de Montante",
          "description": "El método de Montante es un algoritmo numérico basado en la regla del determinante que se emplea para la resolución de sistemas de ecuaciones lineales. Su principal ventaja es que evita el uso de fracciones en los cálculos intermedios, lo que lo hace más estable y eficiente en comparación con otros métodos basados en transformaciones matriciales, como Gauss-Jordan.",
          "methodBackground": "El método de Montante se originó como una alternativa mejorada para resolver sistemas de ecuaciones lineales sin los problemas numéricos asociados a la división en cada paso, como sucede en la eliminación de Gauss-Jordan. Fue desarrollado por Carlos Montante, quien ideó este procedimiento basado en determinantes sucesivos que facilitan la reducción escalonada de la matriz. Matemáticamente, el método tiene aplicaciones en álgebra computacional y análisis numérico. En la práctica, es útil en problemas de optimización, simulaciones y cálculos en tiempo real, donde la estabilidad y precisión de los cálculos son críticas.",
          "relationshipsWithOtherMethods": "El método de Montante está directamente relacionado con otros algoritmos de resolución de sistemas de ecuaciones: 1. Eliminación de Gauss y Gauss-Jordan: Ambos métodos transforman la matriz aumentada a una forma escalonada, pero Montante evita divisiones innecesarias y es más estable en términos numéricos. 2. Descomposición LU: Utiliza factorizaciones matriciales para resolver sistemas de ecuaciones, pero requiere más cálculos que Montante. 3. Método de Jacobi y Gauss-Seidel: Son métodos iterativos utilizados cuando la matriz es grande y dispersa, mientras que Montante es un método directo. 4. Regla de Cramer: También se basa en determinantes, pero es menos eficiente en sistemas grandes.",
          "formula": "A'_{ij} = \\frac{A_{ij} \\cdot P_{anterior} - A_{i,k} \\cdot A_{k,j}}{P_{anterior}}",
          "algorithm": [
            "Construir la matriz aumentada del sistema de ecuaciones.",
            "Inicializar el pivote anterior como 1.",
            "Para cada pivote en la diagonal principal:",
            "\tActualizar el pivote actual.",
            "\tTransformar la matriz utilizando la regla de Montante.",
            "\tNormalizar la fila pivote estableciendo el pivote en 1.",
            "Una vez diagonalizada la matriz, extraer las soluciones de la última columna."
          ],
          "example": ['/img/parcial-2/montante.png'],
          "applications": "El método de Montante puede aplicarse en áreas como: 1. Desarrollo web y pruebas QA: Para modelar la carga de servidores con múltiples variables y restricciones. 2. Testing y debugging: Para analizar errores en simulaciones de software que involucran múltiples ecuaciones interdependientes. 3. Análisis de datos y monitoreo en memoria: Para detectar anomalías en patrones de consumo de memoria en aplicaciones. 4. Ciberseguridad y hacking: En criptografía, donde se requiere resolver sistemas de ecuaciones en análisis de claves. 5. Optimización en desarrollo de apps: Para optimizar la asignación de recursos en un sistema con múltiples restricciones."
        },
        {
          "id": 9,
          "title": "Método de Interpolación y Método de Lagrange",
          "description": "La interpolación numérica es un conjunto de métodos matemáticos utilizados para estimar valores de una función desconocida a partir de un conjunto de datos conocidos. Su objetivo principal es construir una función que pase exactamente por los puntos dados y permita evaluar valores intermedios. El método de interpolación de Lagrange es una técnica que usa un polinomio interpolador, calculado como la combinación lineal de funciones base denominadas polinomios de Lagrange, los cuales están diseñados para garantizar que el polinomio resultante pase exactamente por los puntos dados.",
          "methodBackground": "El método de interpolación ha sido un área de estudio fundamental en análisis numérico desde tiempos de Newton y Gauss, quienes desarrollaron técnicas basadas en diferencias finitas. El método de Lagrange fue desarrollado por Joseph-Louis Lagrange en el siglo XVIII y se basa en la construcción de un polinomio interpolador utilizando pesos basados en productos de términos lineales. Este método es ampliamente utilizado en el análisis de datos, gráficos computacionales, procesamiento de señales y optimización. Su importancia radica en que permite encontrar aproximaciones precisas de funciones desconocidas basándose solo en valores discretos, sin necesidad de conocer la ecuación original.",
          "relationshipsWithOtherMethods": "El método de Lagrange está relacionado con otras técnicas de interpolación y ajuste de datos, tales como: 1. Interpolación de Newton: Utiliza diferencias divididas para construir el polinomio interpolador. 2. Interpolación spline: En lugar de un solo polinomio, usa varios polinomios de grado menor para suavizar la aproximación. 3. Regresión polinómica: Busca ajustar una función a un conjunto de puntos minimizando el error, pero no necesariamente pasa por todos los puntos. 4. Interpolación de Hermite y Bézier: Métodos utilizados en gráficos computacionales para suavizar curvas.",
          "formula": "P(x) = \\sum_{i=0}^{n} L_i(x) y_i,  L_i(x) = \\prod_{\\substack{j=0 \\\ j\\neq i}}^{n} \\frac{x - x_j}{x_i - x_j}",
          "algorithm": [
            "Definir los puntos conocidos (x_i, y_i).",
            "Construir los polinomios base de Lagrange L_i(x).",
            "Para cada L_i(x), calcular su valor en el punto de evaluación x.",
            "Multiplicar cada L_i(x) por su correspondiente y_i y sumarlos para obtener P(x).",
            "Retornar el valor interpolado P(x)."
          ],
          "example": [],
          "applications": "El método de interpolación de Lagrange es útil en varias áreas de desarrollo de software e ingeniería computacional: 1. Desarrollo Web y Pruebas QA: Para interpolar datos de carga en servidores y detectar cuellos de botella. 2. Testing y Debugging: Para predecir valores de métricas de rendimiento de aplicaciones basadas en registros previos. 3. Monitoreo de Registros en Memoria: Para estimar el consumo de memoria de una aplicación a lo largo del tiempo basándose en datos históricos. 4. Hacking y Ciberseguridad: En análisis de tráfico de red, interpolando valores faltantes en datos de paquetes capturados. 5. Análisis de Datos: Para interpolar valores faltantes en bases de datos de tiempo real y mejorar modelos de predicción."
        },
        {
          "id": 10,
          "title": "Método de Regresión Polinómica",
          "description": "La regresión polinómica es un tipo de regresión utilizada en análisis de datos para modelar la relación entre una variable independiente x y una variable dependiente y mediante un polinomio de grado n. Este método es una extensión de la regresión lineal y se emplea cuando la relación entre las variables no es lineal, lo que permite obtener modelos más precisos en ciertos contextos.",
          "methodBackground": "La regresión polinómica surge como una extensión de la regresión lineal clásica para modelar datos curvilíneos. Se ha utilizado en estadística y machine learning para ajustar modelos a datos no lineales y mejorar predicciones en diversos campos, desde la economía hasta la inteligencia artificial.",
          "relationshipsWithOtherMethods": "La regresión polinómica está relacionada con: 1. Regresión lineal: Es un caso particular cuando el polinomio es de grado 1. 2. Interpolación polinómica: Aunque ambas usan polinomios, la interpolación busca pasar exactamente por los puntos mientras que la regresión minimiza el error total. 3. Regresión logística: Se usa cuando la variable de salida es binaria (clasificación). 4. Redes neuronales: Las capas no lineales en redes neuronales pueden aproximar modelos similares a la regresión polinómica.",
          "formula": "y = b_0 + b_1 x + b_2 x^2 + \\dots + b_n x^n + \\varepsilon",
          "algorithm": [
            "Recolectar los datos de entrenamiento: lista de valores x y y.",
            "Construir la matriz de diseño con potencias de x.",
            "Calcular los coeficientes resolviendo un sistema de ecuaciones lineales.",
            "Evaluar el modelo en nuevos valores de x para hacer predicciones.",
            "Validar el modelo midiendo el error de ajuste."
          ],
          "example": [],
          "applications": "El método de regresión polinómica es útil en diversas aplicaciones dentro del análisis de datos y desarrollo de software: 1. Desarrollo Web: Optimización del rendimiento de una API analizando tiempos de respuesta en función de la carga del servidor. 2. Testing y Debugging: Predicción de métricas de rendimiento en aplicaciones basadas en datos históricos. 3. Monitoreo de Memoria: Estimación del consumo de memoria en una aplicación basándose en tendencias previas. 4. Hacking y Ciberseguridad: Análisis de tráfico de red interpolando valores faltantes en paquetes capturados. 5. Análisis de Datos: Modelado de relaciones no lineales entre variables en machine learning y predicción de tendencias."
        },
        {
          "id": 11,
          "title": "Método de Regresión Lineal Múltiple",
          "description": "La regresión lineal múltiple es una técnica estadística utilizada para modelar la relación entre una variable dependiente y y múltiples variables independientes x_1, x_2, ..., x_n. Se emplea cuando una sola variable no es suficiente para explicar un fenómeno y es necesario incluir varias características en el modelo.",
          "methodBackground": "La regresión lineal múltiple es una extensión de la regresión lineal simple, desarrollada en el siglo XIX y utilizada en diversas áreas de la ciencia y la ingeniería. Su aplicación ha crecido con la disponibilidad de datos y el avance de la computación, facilitando su implementación en inteligencia artificial, análisis de datos y optimización de procesos.",
          "relationshipsWithOtherMethods": "La regresión lineal múltiple está relacionada con: 1. Regresión Lineal Simple: Se usa cuando hay solo una variable predictora (x). 2. Regresión Polinómica: Modela relaciones no lineales al incluir términos de x^2, x^3, .... 3. Redes Neuronales: Un modelo más complejo que generaliza la regresión con múltiples capas. 4. Regresión Logística: Similar a la regresión múltiple, pero usada para clasificación en lugar de regresión.",
          "formula": "y = b_0 + b_1 x_1 + b_2 x_2 + \\dots + b_n x_n + \\varepsilon",
          "algorithm": [
            "Definir los datos de entrenamiento con variables independientes x_1, x_2, ..., x_n y la variable dependiente y.",
            "Construir la matriz de diseño con los valores de x y añadir un término de intersección (b_0).",
            "Calcular los coeficientes de regresión resolviendo el sistema de ecuaciones normal mediante métodos matriciales o mínimos cuadrados.",
            "Evaluar el modelo en nuevos datos de entrada para hacer predicciones.",
            "Validar el modelo utilizando métricas de error como el R^2 y el error cuadrático medio."
          ],
          "example": [],
          "applications": "El método de regresión lineal múltiple es útil en diversas aplicaciones dentro del análisis de datos y desarrollo de software: 1. Desarrollo Web: Optimización del rendimiento de una API analizando tiempos de respuesta en función de la carga del servidor. 2. Testing y Debugging: Predicción de métricas de rendimiento en aplicaciones basadas en datos históricos. 3. Monitoreo de Memoria: Estimación del consumo de memoria en una aplicación basándose en tendencias previas. 4. Hacking y Ciberseguridad: Análisis de tráfico de red interpolando valores faltantes en paquetes capturados. 5. Análisis de Datos: Modelado de relaciones entre múltiples variables en machine learning y predicción de tendencias."
        }
      ]
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
