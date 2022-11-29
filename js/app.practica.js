/*Variables */
const formulario = document.getElementById('enviar-mail');
const bntEnviar  = document.getElementById('enviar');
const resetBtn =document.getElementById('resetBtn');
const email  = document.getElementById('email');
const asunto  = document.getElementById('asunto');
const mensaje  = document.getElementById('mensaje');
const error = document.getElementsByClassName('error');
const gifSpiner = document.getElementById('spinner');
const loaders = document.getElementById('loaders');

/* Eventlisteners*/
eventListeners();
function eventListeners(){
    document.addEventListener('DOMContentLoaded',inicioApp);
    email.addEventListener('blur',validarCampo);
    asunto.addEventListener('blur',validarCampo);
    mensaje.addEventListener('blur',validarCampo);
    formulario.addEventListener('submit', enviarFormulario);
    resetBtn.addEventListener('click',resetFormulario);


}


/* funciones */
//deshabilitar el btn enviar
function inicioApp(e){
    bntEnviar.disabled=true;
}

function validarCampo(e){
    e.preventDefault();
    validarLongitud(this);

    if(this.type==='email'){
          validarCorreo(this);
    }
    activarBtnEnviar();

}

function validarLongitud(campo){
    if(campo.value.length>0){
        campo.style.borderBottom='2px solid #4caf50';
        campo.classList.remove('error');    
    }else{
        campo.style.borderBottom='2px solid red';
        campo.classList.add('error');   
    }

}
function validarCorreo(campo){
    if(email.value.indexOf('@')!==-1){
        email.style.borderBottom='2px solid #4caf50';
        email.classList.remove('error');    
    }else{
        email.style.borderBottom='2px solid red';
        email.classList.add('error');   
    }
}


function activarBtnEnviar(){
    if(email.value.length>0 && asunto.value.length>0 && mensaje.value.length>0 ){
        if(error.length===0){
            bntEnviar.disabled=false;
        }

    }   
}

function enviarFormulario(e){

      mostrarLoadersGif();
      e.preventDefault();
}

function mostrarLoadersGif(){
    const enviado = document.createElement('img');
    enviado.src="img/mail.gif";
    enviado.style.width="180";

    gifSpiner.style.display="block";
    setTimeout(function(){
        gifSpiner.remove();
        loaders.appendChild(enviado);

        setTimeout(function(){
            loaders.remove();
            resetFormulario();
        },3000);
        
    },3000);

}

function resetFormulario(){
    formulario.reset();
}