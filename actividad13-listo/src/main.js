const regexNombre=/^[a-zA-ZÀ-ÿ\s]{4,20}$/
const regexUsuario=/^[a-zA-ZÁ-ÿ\s][^@$!%*#?&]{1,16}$/
const regexPassword=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!#%*?&]{8,12}$/
const regexEmail=/^[a-zA-Z0-9\.\-_]+@[a-zA-Z]+\.(com|net|gov.ar)$/

const $ = selector => document.querySelector(selector)

const $nombre = $('#nombre')
const $usuario = $('#usuario')
const $password = $('#password')
const $repetir = $('#repetir')
const $email = $('#email')
const $btnEnviar = $('#enviar')
const $contenedorNombre = $('#contenedorNombre')
const $contenedorUsuario = $('#contenedorUsuario')
const $contenedorContra = $('#contenedorContra')
const $contenedorRepi = $('#contenedorRepi')
const $contenedorEmail = $('#contenedorEmail')

const valueRegex = {
    nombre:false,
    usuario:false,
    password:false,
    repetir:false,
    email:false
}

$btnEnviar.addEventListener('click', (event) => {
    event.preventDefault();
    regexNombre.test($nombre.value) ? (Bien("nombre"),valueRegex.nombre=true) : Mal("nombre")
    regexUsuario.test($usuario.value) ?( Bien("usuario"),valueRegex.usuario=true) : Mal("usuario")
    regexPassword.test($password.value) ? (Bien("password"),valueRegex.password=true) : Mal("password")
    $repetir.value ==$password.value ? (Bien("repetir"),valueRegex.repetir=true) : Mal("repetir")
    regexEmail.test($email.value) ? (Bien("email"),valueRegex.email=true) : Mal("email")

    if (valueRegex.nombre && valueRegex.usuario && valueRegex.password && valueRegex.repetir && valueRegex.email){
        var imagen = document.createElement("img");
        imagen.src="https://3.bp.blogspot.com/-Gykg9fBG9D8/UgVlHlmZ0oI/AAAAAAABa18/DXi-Yv9sVbc/s1600/Muchas+felicidades+3.png"
        
        var contenedorImagen = document.getElementById("contenedorImagen");
    
        contenedorImagen.appendChild(imagen);
    }
})


function Mal(mal){
    
    if(mal=="nombre"){
        var parrafos = $contenedorNombre.querySelector("p");
        if (parrafos){
        }else{
            const p = document.createElement("p")
            p.innerText="1 a 40 Chars.No puede contener números"
            p.classList.add('advertencia')
            $contenedorNombre.appendChild(p)
        }

    } 
    if(mal=="usuario"){
        var parrafos = $contenedorUsuario.querySelector("p");
        if (parrafos){
        }else{
        const p = document.createElement("p")
        p.innerText="4 a 6 dígitos,sin chars especiales ej:acentos/,$,#"
        p.classList.add('advertencia')
        $contenedorUsuario.appendChild(p)
        }
    }
    if(mal=="password"){
        
        var parrafos = $contenedorContra.querySelector("p");
        if (parrafos){
        }else{
        const p = document.createElement("p")
        p.innerText="8 a 12 dígitos (Obligarotio)"
        p.classList.add('advertencia')
        $contenedorContra.appendChild(p)
        }
        
    }
    if(mal=="repetir"){
        var parrafos = $contenedorRepi.querySelector("p");
        if (parrafos){
        }else{
        const p = document.createElement("p")
        p.innerText="Tiene que ser igual a la contraseñar"
        p.classList.add('advertencia')
        $contenedorRepi.appendChild(p)
        }
        
    }
    if(mal=="email"){
        var parrafos = $contenedorEmail.querySelector("p");
        if (parrafos){
        }else{
        const p = document.createElement("p")
        p.innerText="Ingrese un correo valido"
        p.classList.add('advertencia')
        $contenedorEmail.appendChild(p)
        }
    }

}
function Bien(bien){
    if(bien=="nombre"){
        var parrafos = $contenedorNombre.querySelector("p");
        if (parrafos){
            parrafos.remove()
        }
        
    }
    if(bien=="usuario"){
        var parrafos = $contenedorUsuario.querySelector("p");
       if (parrafos){
            parrafos.remove()
        }
    }
    if(bien=="password"){
        var parrafos = $contenedorContra.querySelector("p");
         if (parrafos){
            parrafos.remove()
        }
        
    }
    if(bien=="repetir"){
        var parrafos = $contenedorRepi.querySelector("p");
        if (parrafos){
            parrafos.remove()
        }
        
    }
    if(bien=="email"){
        var parrafos = $contenedorEmail.querySelector("p");
        if (parrafos){
            parrafos.remove()
        }

    }
}