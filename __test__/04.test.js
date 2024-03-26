const { 
    bienvenida,
    calc,
    temp,
    checkPassword,
    stringInverso,
} = require('../04.Funciones/04-funciones.js')

describe('Bienvenida', () =>{
    it('La función creada debe retornar el saludo de bienvenida', () =>{
        expect(bienvenida("Leonardo", 'Avila')).toBe("Bienvenido Leonardo Avila")
        expect(bienvenida("Pablo", 'Perez')).toBe("Bienvenido Pablo Perez")
        expect(bienvenida("Lucas", 'Zarandon')).toBe("Bienvenido Lucas Zarandon")
    })
})

describe('Calc', () =>{
    it('La funcion creada deberia actuar como calculadora', () =>{
        expect(calc(1, "+", 2)).toEqual(3)
        expect(calc(2, "-", 1)).toEqual(1)
        expect(calc(2, "*", 2)).toEqual(4)
        expect(calc(2, "/", 2)).toEqual(1)
    })
})

describe('temp', () =>{
    it('deberia devolver la recomendacion correspondiente', () =>{
        expect(temp(23,18,60)).toBe('El día está lindo, recomendable un paraguas')
        expect(temp(13,3,30)).toBe('Es recomendable salir con abrigo')
        expect(temp(13,1,80)).toBe('Es recomendable salir con abrigo, recomendable un paraguas')
    })
})

describe('checkPassword', () =>{
    it('Deberia devolver un nuevo array con los string correspondientes', () =>{
        expect(checkPassword("12345678")).toEqual("La contraseña es segura")
        expect(checkPassword("goku123")).toEqual("La contraseña es insegura")
        expect(checkPassword("*P4SSW0RD2024#")).toEqual("La contraseña es segura")
    })
})

describe('stringInverso', () =>{
    it('Deberia devolver el string pasado a la inversa', () =>{
        expect(stringInverso('Hola')).toBe('aloH')
        expect(stringInverso('Buenos dias')).toBe("said soneuB")
        expect(stringInverso('Casa del futuro')).toBe("orutuf led asaC")
    })
})