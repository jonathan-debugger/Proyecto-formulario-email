 // Variables

const email =document.getElementById('email');
const asunto =document.getElementById('asunto');
const mensaje =document.getElementById('mensaje');
const btnEnviar =document.getElementById('enviar');
const formularioEnviar=document.getElementById('enviar-mail');
const resetBtn = document.getElementById('resetBtn');
// Event listeners
 eventListeners();
 function  eventListeners(){
     // Inicio de la aplicacion y deshabilitar submit
     document.addEventListener('DOMContentLoaded',inicioApp);
    
     //campos del formulario
     email.addEventListener('blur',validarCampo); 
     asunto.addEventListener('blur',validarCampo); 
     mensaje.addEventListener('blur',validarCampo);   

     //Boton de enviar en el submit
     formularioEnviar.addEventListener('submit',enviarEmail);

     //Boton de reset
     resetBtn.addEventListener('click',resetFormulario);
    }
 // funciones

 function inicioApp(){
//Deshabilitar el boton de envio
btnEnviar.disabled=true;
    
 }

 //validar que el campo que tenga algo escrito
 function validarCampo(){
    //Se validala longitud del texto y que no este vacio
    validarLongitud(this);

    //Validar unicamente el email
    //console.log(this.type)
    if(this.type==='email'){
        validarEmail(this);
    }

    let errores =document.querySelectorAll('.error');
    if(email.value !=='' && asunto.value !=='' && mensaje.value !==''){
        if(errores.length === 0){   
        btnEnviar.disabled=false; 
         }
    }
}

    //Cuando se envia el correo
    function enviarEmail(e){

        const spinnerGif =document.querySelector('#spinner');
              spinnerGif.style.display="block";  

        // Gif que envia el email
        const enviado =document.createElement('img');
              enviado.src="img/mail.gif";
              enviado.style.display="block";

        //Ocultar sipinner y mostrar gif de enviado
        const loaders=document.querySelector('#loaders');
        setTimeout(function(){
            spinnerGif.style.display="none"; 
            loaders.appendChild(enviado);

                setTimeout(() => {
                   enviado.remove(); 
                   formularioEnviar.reset();
                }, 3000);

        },3000);

        e.preventDefault();
    }

//Verifica la longitud del texto en los campos
function validarLongitud(campo){
    if(campo.value.length > 0){
        campo.style.borderBottomColor="green";
        campo.classList.remove('error');
    }else{
        campo.style.borderBottomColor="red";
        campo.classList.add('error');
        inicioApp();
    }
}

function validarEmail(campo){
    if(campo.value.indexOf('@')!== -1){
        campo.style.borderBottomColor="green";
        campo.classList.remove('error');
    }else{
        campo.style.borderBottomColor="red";
        campo.classList.add('error');
        inicioApp();
    }
}

//Resetear el formulario
function resetFormulario(e){
e.preventDefault();
formularioEnviar.reset();

}