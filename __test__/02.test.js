const {
    esBisiesto,
    esMayor,
    esPrimo,
    verificarCalificacion,
    verificarNumero
} = require('../02.Condicionales/02-condicionales.js')
const { default: expect } = require('expect')

describe( "esBisiesto", () =>{
    it( "Debe devolver si un numero es Bisiesto", ()=> {
        expect(esBisiesto(2020)).toBe(true)
        expect(esBisiesto(2024)).toBe(true)
        expect(esBisiesto(2022)).toBe(false)
    })
})
describe( "esMayor", () =>{
    it( "Debe devolver el mayor de los tres numeros", ()=> {
        expect(esMayor(10,21,99)).toEqual(99)
        expect(esMayor(1,5,3)).toEqual(5)
        expect(esMayor(55,40,20)).toEqual(55)
    })
})
describe( "verificarCalificacion", () =>{
    it( "Debe devolver Aprobó o Desaprob", ()=> {
        expect(verificarCalificacion(80)).toBe("Aprobó")
        expect(verificarCalificacion(50)).toBe("Reprobó")
        expect(verificarCalificacion(60)).toBe("Aprobó")
    })
})
describe( "verificarNumero", () =>{
    it( "Debe devolver si el numero es positivo, negativo o cero", ()=> {
        expect(verificarNumero(7)).toBe("Es positivo")
        expect(verificarNumero(-4)).toBe("Es negativo")
        expect(verificarNumero(0)).toBe("Es cero")
    })
})

describe( "esPrimo", () =>{
    it( "Debe devolver true si el numero es primo", ()=> {
        expect(esPrimo(7)).toBe(true)
        expect(esPrimo(4)).toBe(false)
        expect(esPrimo(3)).toBe(true)
    })
})