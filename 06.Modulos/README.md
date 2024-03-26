# Módulos

### **Introducción a los Módulos**

Los módulos en JavaScript son una forma de organizar y reutilizar código en aplicaciones grandes y complejas. Permiten dividir tu código en partes más pequeñas y lógicas, lo que facilita su mantenimiento y colaboración con otros desarrolladores. Los módulos también ayudan a evitar conflictos de nombres y a mantener el ámbito de variables localizado.

## **Sintaxis de los Módulos**

### Exportando Funcionalidad

Para exportar una función, variable o clase desde un módulo, puedes usar la palabra clave **`export`**. Aquí tienes un ejemplo:

```jsx
// En un archivo llamado 'miModulo.js'
export function suma(a, b) {
  return a + b;
}

export const PI = 3.14159265359;
```

### Importando Funcionalidad

Para importar funcionalidad desde otro módulo, puedes usar la palabra clave **`import`**. Aquí tienes un ejemplo de cómo importar lo que hemos exportado en el módulo anterior:

```jsx
import { suma, PI } from './miModulo.js';

console.log(suma(5, 3)); // Imprimirá 8
console.log(PI); // Imprimirá 3.14159265359
```

## **Tipos de Exportación**

### Exportación Nombrada

Puedes exportar funciones, variables o clases individualmente y luego importarlas con el mismo nombre que tienen en el módulo exportador.

```jsx
// En un archivo llamado 'miModulo.js'
export function suma(a, b) {
  return a + b;
}

// En otro archivo
import { suma } from './miModulo.js';
```

### Exportación por Defecto

Puedes exportar una única función, variable o clase como exportación por defecto. Esto significa que puedes importarla con cualquier nombre que desees.

```jsx
// En un archivo llamado 'miModulo.js'
export default function resta(a, b) {
  return a - b;
}

// En otro archivo
import operacion from './miModulo.js';
```

- ********************Ejercicios********************
    1. Crea un módulo llamado **`calculadora.js`** que exporte las funciones **`suma`**, **`resta`**, **`multiplicacion`** y **`division`**. Importa este módulo en otro archivo y realiza algunas operaciones matemáticas usando las funciones exportadas.
    2. Crea un módulo llamado **`geometria.js`** que exporte una constante llamada **`PI`** y una función llamada **`calcularAreaCirculo(radio)`**. Importa este módulo en otro archivo y utiliza la constante y la función para calcular el área de un círculo.
    3. Crea un módulo llamado **`datosPersonales.js`** que exporte un objeto con tus datos personales (nombre, edad, ciudad, etc.). Importa este módulo en otro archivo y muestra la información en la consola.