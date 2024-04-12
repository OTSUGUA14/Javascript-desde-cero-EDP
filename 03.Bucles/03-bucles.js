function cantidadDeVocales(phrase) {
    // Cuenta la cantidad de vocales en la frase pasada por parametros utilizando un bucle for
    // Tu código:👇
    phrase =  phrase.toLowerCase();
    
    var contadorVocales = 0;
    
    
    var vocales = ['a', 'e', 'i', 'o', 'u'];
    
    
    
    for (let i = 0; i < phrase.length; i++) {
        if (vocales.includes(phrase[i])) {
            contadorVocales++;
        }
    }
    
    
    return contadorVocales;

}

function primerDivisible(divisor, dividendo) {
    // Encuentra el primer número divisible por 'dividendo' a partir de un número dado (divisor) utilizando un bucle while
    // Tu código:👇
    vali=true
    while(vali){
        if ((dividendo%divisor)==0){
            break
        }
            divisor++

    }
    return divisor

}


function encuentraX(x) {
    //Realiza un algoritmo que recorre numeros del 1 al 100, cuando pase por el numero X pasado por parametros
    // retornar "El numero X es: ..."
    // Tu Código:👇
    for (let i = 0; i <=100; i++) {
        if (x==i){
            return "El numero X es: "+ x
        }
        
    }

}

function sumandoTodo(num) {
    // Realiza un algoritmo que el cual recorra del 0 al numero pasado por parametros, debes retornar la suma de todo los
    // numeros que se recorrio
    // Tu código:👇
    contador=0;
    for (let i = 0; i <=num; i++) {
        contador=contador+i
        
    }
    return contador
}

function BinarioADecimal(num) {
    // La funcion recibe por parametro, un numero binario pero en tipo de dato String
    // debes tomar este numero binario y ayudandote de un bucle pasarlo a binario
    // tu código:👇
    total=0
    posicion=0
    
    for (let i =(num.length-1); i >= 0; i--) {
        total+=parseInt(num[i])*(2**posicion)
        posicion+=1
    }
    return total
}

function esPrimo(numero) {
    //Escribe un programa que verifique si un número dado es primo o no.
    //Un número primo es aquel que solo es divisible por 1 y por sí mismo.
    //Si el numero pasado es primo devolve: numero " es primo." , caso contrario: numero " no es primo."
    // Tu código:👇
    contador=0
    for (let i = 1; i < numero; i++) {
        if (numero%i==0){
            contador+=1
        }
    }
    return contador==1 ? numero+" es primo." : numero+" no es primo."

}

function invertirCadena(cadena) {
    //La función toma una cadena de texto como parámetro, devuelve la cadena invertida.
    //Ejemplo: 'Hola' -> devolver 'aloH'
    //Tu codigo:👇
    cadenaInversa=""
    for (let i = cadena.length-1; i >=0; i--) {
        cadenaInversa+=cadena[i]
        
    }
    return cadenaInversa
}

module.exports = {
    encuentraX,
    sumandoTodo,
    BinarioADecimal,
    esPrimo,
    invertirCadena,
    cantidadDeVocales,
    primerDivisible
}