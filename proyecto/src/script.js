


regex={

    nombre:/^[a-zA-ZÀ-ÿ\s]{4,20}$/,
    apellido:/^[a-zA-ZÀ-ÿ\s]{4,20}$/,
    edad:/^[\d]{2,2}$/,
    usuario:/^[a-zA-ZÁ-ÿ\s][^@$!%*#?&]{1,16}$/,
    password:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!#%*?&]{8,12}$/,
    repetir:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!#%*?&]{8,12}$/,
    email:/^[a-zA-Z0-9\.\-_]+@[a-zA-Z]+\.(com|net|gov.ar)$/
}

const $ = selector => document.querySelector(selector)
const input=document.querySelectorAll('.registro input,#btn-registro')

function CrearBase (){
    localStorage.getItem('Base') ? -1 :localStorage.setItem('Base',JSON.stringify([]))
}
CrearBase()

const parrafo = document.getElementsByTagName('p')
input.forEach(input =>{
    input.addEventListener('keydown',()=>{
        if (input.name=="password") {
            
            contra=input.value
        }
        if (input.name=="repetir") {
            if (input.value===contra) {
                parrafo[5].classList.add('ocultar')
                valueRegex.repetir=true
            }else{
                parrafo[5].classList.remove('ocultar')
            }}
        else{
            
            validacion(input.name,input.value) 
            input.addEventListener('blur',()=> validacion(input.name,input.value))
        }})
   
    }
)

function validacion (names,value){
    if ((regex[names].test(value))) {
        valueRegex[names]=true
        for (let i = 0; i < parrafo.length; i++) {
            if (parrafo[i].getAttribute('name')==names) {
                parrafo[i].classList.add('ocultar')
                
            }
            
        }
    }else{
            
        for (let i = 0; i < parrafo.length; i++) {
        
            if (parrafo[i].getAttribute('name')==names) {
                parrafo[i].classList.remove('ocultar')
                
            }
            
        }
    }

}

const $registro=$('.registro')
const $sesion=$('#ini-sesion')
const $btnRegistro=$('#btn-registro')



const valueRegex = {
    nombre:false,
    apellido:false,
    edad:false,
    usuario:false,
    password:false,
    repetir:false,
    email:false
}

$btnRegistro.addEventListener("click", (event) =>{

    event.preventDefault();

    if (valueRegex.nombre && valueRegex.apellido && valueRegex.edad && valueRegex.usuario && valueRegex.password && valueRegex.repetir && valueRegex.email){
        const bs=JSON.parse(localStorage.getItem('Base'))
        
        $sesion.classList.remove('ocultar');
        $registro.classList.add('ocultar')
        
        
        const usua = {
            nombre: $('#nombre').value,
            apellido: $('#apellido').value,
            edad: $('#edad').value,
            usuario: $('#usuario').value,
            email: $('#email').value,
            password: $('#password').value
        }
        bs.push(usua)
        localStorage.setItem('Base',JSON.stringify(bs))
   

    }
}

)
//Login
const $usuarioLogin=$('#usuario-login')
const $passwordLogin=$('#password-login')
const $btnLogin=$('#ingreso-login')
const $falta=$('#falta')
const $contLogin=$('#ini-sesion')
const $yaIniciado=$('#iniciado')

$btnLogin.addEventListener("click",(event)=>{
    event.preventDefault()
    const db=JSON.parse(localStorage.getItem('Base'))
    const user=db.find((use)=>use.usuario === $usuarioLogin.value)
    try{

        if (user.usuario==null || user.password==null){
            $falta.classList.remove('ocultar')
        }
    }catch(error){
        $falta.classList.remove('ocultar')
        
    }

        if (user.usuario === $usuarioLogin.value && user.password === $passwordLogin.value) {
            $falta.classList.add('ocultar')
            $contLogin.classList.add('ocultar')
            $yaIniciado.classList.remove('ocultar')
        }else{
            $falta.classList.remove('ocultar')
        }
    }

)