const email = document.querySelector("#email");
const password = document.querySelector("#password");
const form = document.querySelector("#form-Login");
const errorText = document.querySelector(".error-text");
const passIncorrecto = "La contraseña debe tener entre 8 y 16 caracteres"
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


form.addEventListener("submit", e=> {
    e.preventDefault();

    if(!camposRequerido()) {
        console.log("completar todos los campos");
    }

    if(validarEmail()) {
        console.log("email Valido");
    }
    if(validarPassword()) {
        console.log("password Valido");
    }
})

function camposRequerido() {
    var errores = 0;
    if(email.value == "") {
        console.log("email requerido");
        errores++;
    }
    if(password.value == "") {
        console.log("password requerido");
        errores++;
    }

    if(errores == 0){
        return true;
    } 
    return false;
}

function validarPassword() {
    if((password.value.lenght > 8) && (password.value.lenght < 16)) {
        password.classList.remove("incorrecto");
        password.classList.add("correcto");
        return true;
    }
    errorPass.value = "passIncorrect";
    password.classList.remove("correcto");
    password.classList.add("incorrecto");
    console.log("password invalido")
    return false;
}

function validarEmail() {
    console.log(regexEmail.test(email.value));
    if(regexEmail.test(email.value)) {
        email.classList.remove("incorrecto");
        email.classList.add("correcto");
        return true;
    }
    email.classList.remove("correcto");
    email.classList.add("incorrecto");
    console.log("email invalido")
    return false;
}