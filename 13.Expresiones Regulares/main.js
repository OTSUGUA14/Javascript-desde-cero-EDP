const regexNombre = /^[a-zA-ZÀ-ÿ\s]{4,20}$/
const regexDni = /^[0-9][^\.a-zA-Z]{6,7}$/
const regexEmail = /^[a-zA-Z0-9\.\-_]+@[a-zA-Z]+\.(com|net|gov.ar)$/
const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!#%*?&]{8,24}$/



const $ = selector => document.querySelector(selector)

const $nombre = $('#nombre')
const $dni = $('#dni')
const $email = $('#email')
const $password = $('#password')
const $btnEnviar = $('#enviar')

const valueRegex = {
    nombre:false,
    dni:false,
    email:false,
    password:false
}


$btnEnviar.addEventListener('click', (event) => {
    event.preventDefault();

    regexNombre.test($nombre.value) ? valueRegex.nombre = true : valueRegex.nombre = false
    regexDni.test($dni.value) ? valueRegex.dni = true : valueRegex.dni = false
    regexEmail.test($email.value) ? valueRegex.email = true : valueRegex.email = false
    regexPassword.test($password.value) ? valueRegex.password = true : valueRegex.password = false

    if(valueRegex.nombre && valueRegex.dni && valueRegex.email && valueRegex.password){
        console.log("pasaste");

    }else{
        console.log("no pasaste");
    }
    console.log(valueRegex);
})