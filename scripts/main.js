/**
 * JAIME FERNÁNDEZ CALVO
 * https://github.com/jaimecamocha/ExamenT5DWECDIW.git
 */

const formulario = document.querySelector("#formulario");
const nombre = document.querySelector("#nombre");
const correo = document.querySelector("#correo");
const adInfo = document.querySelector("#adInfo");
const reserva = document.querySelector("#reserva");
const info = document.querySelector("#info");
const txtmsj = document.querySelector("#txtmsj");
const errores = document.querySelector("#errores");
let msjerrores = [];


//validación del formulario
const validar = evento =>{
    evento.preventDefault();
    msjerrores = [];

    if(nombre.value.trim().length === 0){
        msjerrores.push('El nombre es un campo obligatorio');
    } 

    if(!/^[a-zA-Z0-9]*$/.test(nombre.value.trim())){
        msjerrores.push('Un nombre propio comienza siempre por una letra mayúscula y no contiene números');
    }


    if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(correo.value.trim())){
        msjerrores.push('Introduzca una dirección de correo válida');
    }

    if(txtmsj.value.trim() < 10){
        msjerrores.push('Mensaje demasiado corto');
    }

    if (msjerrores.length === 0 && confirm("¿Desea enviar el formulario?")){
        formulario.submit();
    } else if (msjerrores.length > 0){
        errores.textContent = "";
        console.log(msjerrores);
        msjerrores.forEach(function(mensaje){
            const miLi = document.createElement("li");
            miLi.textContent = mensaje;
            errores.appendChild(miLi);
        })
    }
}

formulario.addEventListener("submit", validar);


// información adicional y reservas
function informacion(){
    if(adInfo.checked){
        alert("Enviaremos informacion adicional al correo indicado en el formulario")
    }else{
        alert("Reserva completada. Enviaremos los billetes a tu correo electronico")
    }
}

info.addEventListener("click", informacion);
