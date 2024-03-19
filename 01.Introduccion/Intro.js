// Aprendiendo a usar nuestras herramientas y lo aprendido hasta ahora!!
// Para ver el resultados de los siguientes ejercicio tendras que tener abierto la pagina/archivo index.html



// Resuelve los siguientes problemas, el resultado tiene que estar dentro dentro de document.write() - NO MODIFICAR LOS TITULOS.


// Ejercicio de Ejemplo:
/* TITULO - NO MODIFICAR*/ document.write('<div class="titulo"><p>Ejercicio de Ejemplo - Resultado:</p></div>')
// En una tienda, se vendieron 5 camisetas en un día y luego se vendieron otras 3 camisetas. ¿Cuántas camisetas se vendieron en total?
// Tu codigo 👇:
    document.write("Se vendieron en total: ")
    document.write(5+3)
//_________________________________________

/* TITULO - NO MODIFICAR*/ document.write('<br><br><div class="titulo"><p>Ejercicio N° 1 - Promedio del Estudiante | Resultado:</p></div>')
// Ejercicio N° 1:
// Un estudiante obtuvo calificaciones de 8, 7 y 9 en tres exámenes respectivamente. ¿Cuál es el promedio de sus calificaciones?
// Tu codigo 👇:
    document.write("El promedio es: ")
    document.write((8+7+9)/3)

//_________________________________________

/* TITULO - NO MODIFICAR*/ document.write('<br><br><div class="titulo"><p>Ejercicio N° 2 - Longitud de una cadena | Resultado:</p></div>')
// Ejercicio N° 2:
// Juan quiere saber cuántas letras tiene su nombre. ¿Cuál es la longitud del nombre "Juan"?
// Tu codigo 👇:
    document.write("La longitud del nombre Juan es: ")
    document.write("juan".length)

//_________________________________________

/* TITULO - NO MODIFICAR*/ document.write('<br><br><div class="titulo"><p>Ejercicio N° 3 - Metros a Pies | Resultado:</p></div>')
// Ejercicio N° 3:
// Si una distancia se mide en metros y se desea conocer su equivalencia en pies, donde 1 metro equivale a 3.281 pies, ¿cuántos pies son 10 metros?
// Tu codigo 👇:
    document.write("Dies metros son: ")
    document.write((10*3.281), " pies")

//_________________________________________

/* TITULO - NO MODIFICAR*/ document.write('<br><br><div class="titulo"><p>Ejercicio N° 4 - Descuentos | Resultado:</p></div>')
// Ejercicio N° 4:
// Un producto tiene un precio original de $100. Si hay un descuento del 20%, ¿cuál es el precio final del producto después del descuento?
// Tu codigo 👇:
document.write("El precio final del producto es: ")
document.write(20*100/100)

//_________________________________________


//  ⚠️⚠️ Resuelve los siguientes problemas, el resultado tiene que estar dentro dentro de console.log() ⚠️⚠️
//  ⚠️⚠️ Los resultados los podrás ver dentro del panel de desarrollador del mismo index.html en consola ⚠️⚠️

// Ejercicio N° 5:
// Pidele al usuario que ingrese su Nombre y Apellido - luego devuelve por consola un saludo de bienvenida concatenando su nombre y apellido.
// Ejemplo: Lionel Messi -> Bienvenido Lionel Messi 
// Tu codigo 👇:
let nombre =prompt("Ingrese su nombre y apellido")
console.log("Bienvenido ",nombre)
//_________________________________________

// Ejercicio N° 6:
// Pidele al usuario que ingrese su Nombre y Apellido - luego devuelve por consola un saludo de bienvenida concatenando su nombre y apellido.
// Ejemplo: Lionel Messi -> Bienvenido Lionel Messi 
// Tu codigo 👇:


//_________________________________________

// Ejercicio N° 7:
// Pidele al usuario que ingrese su Nombre y Apellido - luego devuelve por consola un saludo de bienvenida concatenando su nombre y apellido.
// Ejemplo: Lionel Messi -> Bienvenido Lionel Messi 
// Tu codigo 👇:


//_________________________________________


// 👇👇 NO MODIFICAR 👇👇

const footer = `

<footer>
        <a href="https://github.com/AvLeo/Javascript-desde-cero-EDP" target="_blank">REPO GITHUB</a>
        <a href="https://leo-a.notion.site/JavaScript-8243598cde1e4cc5aea0fc1eeb7a090f?pvs=74" target="_blank">Notion</a>
</footer>


`

document.write(footer)