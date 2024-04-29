const $ = selector => document.querySelector(selector)

const regexNombre=/^[a-zA-ZÁ-ÿ\s]{1-40}$/
const regexUsuario=/^[a-zA-ZÁ-ÿ\s][^@$!%*#?&]]{1-16}$/
const regexPassword=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!#%*?&]{8,12}$/
const regexEmail=/^[a-zA-Z0-9\.\-_]+@[a-zA-Z]+\.(com|net|gov.ar)$/

// const forRegistro =document.querySelectorAll("#registro input")
// forRegistro.forEach(element =>{

// })
const $nombreRegistro = $('#nombre')
const $apellidoRegistro = $('#apellido')
const $usuarioRegistro = $('#usuario')
const $passwordRegistro = $('#password')
const $emailRegistro = $('#email')
const $btnRegistro = $('#btn-registro')
const $forRegistro=$('#for')
const valueRegex = {
    nombre:false,
    appellido:false,
    edad:false,
    usuario:false,
    password:false,
    repertit:false,
    email:false
}

$btnRegistro.addEventListener("click", (event) =>{
    event.preventDefault();
    regexNombre.test($nombreRegistro) ? valueRegex.nombre ==true : Mal("nombre")
    regexNombre.test($apellidoRegistro) ? valueRegex.appellido ==true : false
    regexUsuario.test($usuarioRegistro) ? valueRegex.usuario ==true : false
    regexPassword.test($passwordRegistro) ? valueRegex.password ==true : false
    regexEmail.test($emailRegistro) ? valueRegex.email ==true : false
})


function Mal(mal){
    const p = document.createElement('p')
    if(mal=="nombre"){
        console.log("entro")
        p.innerText="1 a 40 Chars.No puede contener números"
        $forRegistro.appendChild(p)

    }else if(mall==usuario){

    }else if(mall==password){
        
    }else if(mall==repetir){
        
    }else{

    }

}