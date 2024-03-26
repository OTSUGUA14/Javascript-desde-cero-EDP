

//Debes crear un funcion que retorne un mensaje de bienvenida con nombre y apellido de la persona
//Ejemplo "Bienvenido Leonardo Avila" -> IMPORTANTE la funcion tiene que llamarse 'bienvenida'
//Tu código:
const bienvenida =(nombre, apellido)=> `Bienvenido ${nombre} ${apellido}`


/**********************************************************************************/
// Crea una funcion el cual cumpla la funcion de una calculadora.. tiene que recibir 3 parametros num1, operador y num2
// IMPORTANTE -> la funcion debe llamarse 'calc'
// Tu código:


    const calc=(num1,operador,num2)=>{
        if (operador=="-"){
            return num1 - num2
        }else if(operador=="+"){
            return num1+num2
        }else if (operador=="*"){
            return num1*num2
        }
        else{
            return num1/num2
        }
    }




/**********************************************************************************/
// Crea una funcion que en base a la temperaturma maxima, min y porcentaje de lluvia, diga si es necesario salir con abrigo,
// paraguas o sin nada. ejemplos
// Para max < 15 devolver 'Es recomendable salir con abrigo'
// Para max < 26 y min > 17 devolver 'El día está lindo'
// Para min > 25 'El día estará caluroso' 
// Y para cada uno de los anteriores casos, si el porcentaje de lluvia es mayor a 50 agregar al mensaje 'recomendable un paragua'
// ejemplo => max = 20 y porcentaje de lluvia = 70 => devolver "El día está lindo, recomendable un paraguas"
// IMPORTANTE -> la funcion debe llamarse 'temp'    
// Tu código:

const temp=(max , min , porcentaje)=>{
    if (max <15){
        if(porcentaje>50){
            return 'Es recomendable salir con abrigo, recomendable un paraguas'
        }else{
            return 'Es recomendable salir con abrigo'
        }
    }else if(max<26 && min>17){
        if(porcentaje>50){
            return 'El día está lindo, recomendable un paraguas'
        }else{
            return 'El día está lindo'
        }
        
    }else{
        if(porcentaje>50){
            return 'El día estará caluroso, recomendable un paraguas'
        }else{
            return 'El día estará caluroso'
        }
        
    }
}

/**********************************************************************************/

// Crea una función que reciba una contraseña, esta función tiene que determinar si contiene al menos 8 caracteres la contraseña.
// Si la contraseña contiene 8 caracteres, devolver "La contraseña es segura", en caso contrario devolver "La contraseña es insegura"
// IMPORTANTE -> la funcion debe llamarse 'checkPassword'
// Tu código:


const checkPassword=(contra)=>contra.length >=8 ? "La contraseña es segura" : "La contraseña es insegura" 


/**********************************************************************************/
// Crea una función que reciba un string como parámetro y devuelva el mismo string pero con todas las palabras en orden inverso.
// IMPORTANTE -> la funcion debe llamarse 'stringInverso'
// Tu código:

const stringInverso=(palabra)=>{
    let nuevaPalabra=""
    for (let i = palabra.length-1; i >=0 ; i--) {
        nuevaPalabra +=palabra[i]
    }
    return nuevaPalabra
}



/**********************************************************************************/

module.exports = {
    bienvenida,
    calc,
    temp,
    checkPassword,
    stringInverso,
}