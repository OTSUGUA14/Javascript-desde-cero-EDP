const $ = selector => document.querySelector(selector)

const $inputMsj = $('#input-msj')
const $btnClosedChat = $('#btn-closed-chat')
const $btnWarning = $('#btn-warning')
const $btnSend = $('#btn-send')
const $contenedorMsj = $('#contedor-msj')

$btnSend.addEventListener('click', () => {
    sendMenssage($inputMsj.value)
    $inputMsj.value = ""
})
$inputMsj.addEventListener('keydown', (event) =>{
    if(event.key === "Enter"){
        sendMenssage($inputMsj.value)
        $inputMsj.value = ""
    }
})


function sendMenssage(message){
    const p = document.createElement('p')
    p.innerText = message
    p.classList.add('msj-persona')
    $contenedorMsj.appendChild(p)
    validateMsj(message.toLowerCase())
}

function validateMsj(messageP){
    console.log(messageP)
    if(messageP === "/ayuda") messageBot("Mis comandos son: \n /Contactos\n/Portfolio\n/Proyectos")
    else if(messageP === "/contactos") messageBot("Mis formas de contactarme son las siguientes:")
    else if(messageP === "/portfolio") messageBot("Mi portfolio es el siguiente:")
    else if(messageP === "/proyectos") messageBot("Mis proyectos están en: ")
    else messageBot("Perdona no entendí que necesitas")
}

function messageBot(messageBot){
    const p = document.createElement('p')
    p.innerText = messageBot
    p.classList.add('msj-bot')
    $contenedorMsj.appendChild(p)
}

$btnClosedChat.addEventListener("click",() =>{
    const chat=$('#chat')
    chat.classList.add('invisible')
})