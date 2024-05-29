const email = document.querySelector("#email");
const password = document.querySelector("#password");
const form = document.querySelector(".formLogin");
const errorEmail = document.querySelector("#errorEmail");
const errorPass = document.querySelector("#errorPass");
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


form.addEventListener("submit", e=> {
    e.preventDefault();
    limpiarMensajes();
    if(email.value == "") {
        estiloInput(email, false);
        errorEmail.textContent = "* Email requerido";
    } else {
        if(!validarEmail()) {
        errorEmail.textContent = "* El email ingresado no es valido";
        }
    } 
    if(password.value == "") {
        estiloInput(password, false);
        errorPass.textContent = "* Password requerido";
    } else {   
        if(!validarPassword()) {
            errorPass.textContent = "* La contraseña debe tener entre 8 y 16 caracteres";
        }
    }
})

function limpiarMensajes() {
    errorEmail.textContent = "";
    errorPass.textContent = "";
}


function validarPassword() {
    console.log(password.value.length);
    if((password.value.length >= 8) && (password.value.length <= 16)) {
        estiloInput(password, true);
        return true;
    }
    estiloInput(password, false);
    return false;
}

function validarEmail() {
    if(regexEmail.test(email.value)) {
        estiloInput(email, true);
        return true;
    }
    estiloInput(email, false);
    return false;
}

function estiloInput(input, esCorrecto) {
    if(esCorrecto){
        input.classList.remove("incorrecto");
        input.classList.add("correcto"); 
    } else {
        input.classList.remove("correcto");
        input.classList.add("incorrecto");
    }
    
}