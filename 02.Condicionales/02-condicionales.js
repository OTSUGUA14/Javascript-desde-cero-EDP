function verificarNumero(numero){
    // Escribe un programa que tome un número como entrada y muestre "Es positivo" si el número es mayor que cero,
    // "Es negativo" si es menor que cero y "Es cero" si es igual a cero.
    // Tu código 👇:
    
    if (numero==0){
        return "Es cero"
    }else if(numero>0){
        return "Es positivo"
    }else{
        return "Es negativo"
    }
}


function esBisiesto(anio){
    // Escribe un programa que determine si un año es bisiesto o no. (true o false)
    // Un año es bisiesto si es divisible entre 4, excepto aquellos que son divisibles entre 100 pero no entre 400.
    // Tu código 👇:
    if (anio%4==0){
        return true
    }else{
        return false
    }
}

function verificarCalificacion(calificacion){
    // Escribe un programa que determine si un estudiante aprobó o reprobó un examen.
    // El estudiante aprueba si su calificación es mayor o igual a 60.
    // Devolver "Aprobó" o "Reprobó"
    // Tu código 👇:
    return calificacion>=60 ? "Aprobó": "Reprobó"
}

function esMayor(num1, num2, num3){
    // Escribe un programa que determine el mayor de tres números dados.
    // Devolver el numero mayor
    // Tu código 👇:
    if (num1 >num2 && num1>num3){
        return num1
    }
    else if (num2 >num1 && num2>num3){
        return num2
    }
    else {return num3}
            

}


function esPrimo(num){
    // Escribe un programa que determine si un número dado es primo.
    // Devolver true o false
    // Tu código 👇:
    contador=0
    for (let i = 1; i < num; i++) {
        if (num%i==0){
            contador+=1
        }
    }
    return contador==1 ? true : false
}

module.exports = {
    verificarCalificacion,
    verificarNumero,
    esBisiesto,
    esMayor,
    esPrimo
}