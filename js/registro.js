const email = document.querySelector("#email");
const password = document.querySelector("#password");
const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const fechaNacimiento = document.getElementById('fechaNacimiento').value;
const pais = document.querySelector("#pais");

const form = document.querySelector(".formRegistro");

const errorEmail = document.querySelector("#errorEmail");
const errorPass = document.querySelector("#errorPass");
const errorNombre = document.querySelector("#errorNombre");
const errorApellido = document.querySelector("#errorApellido");
const errorFechaNacimiento = document.querySelector("#errorFechaNacimiento");
const errorPais = document.querySelector("#errorPais");

const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


form.addEventListener("submit", e=> {
    e.preventDefault();
    limpiarMensajes();
    if(email.value == "") {
        estiloInput(email, false);
        errorEmail.textContent = "* Email requerido";
    } else {
        if(!validarEmail()) {
        errorEmail.textContent = "* El email ingresado no es válido";
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
    if(nombre.value == "") {
        estiloInput(nombre, false);
        errorNombre.textContent = "* Nombre requerido";
    } else {
        if(!validarNombre()) {
        errorNombre.textContent = "* Error al ingresar el Nombre";
        }
    } 
    if(apellido.value == "") {
        estiloInput(apellido, false);
        errorApellido.textContent = "* Apellido requerido";
    } else {   
        if(!validarApellido()) {
            errorApellido.textContent = "* Error al ingresar el Apellido";
        }
    }
    if(fechaNacimiento.value == "" || fechaNacimiento.value == null) {
        estiloInput(fechaNacimiento, false);
        errorFechaNacimiento.textContent = "* Fecha de Nacimiento requerida";
    } else {
        if(!validarFechaNacimiento()) {
        errorFechaNacimiento.textContent = "* La fecha de nacimiento ingresada no es válida";
        }
    } 
    if(pais.value == "") {
        estiloInput(pais, false);
        errorPais.textContent = "* Pais requerido";
    } else {   
        if(!validarPais()) {
            errorPais.textContent = "* Error al ingresar el pais";
        }
    }
})

function limpiarMensajes() {
    errorEmail.textContent = "";
    errorPass.textContent = "";
    errorNombre.textContent = "";
    errorApellido.textContent = "";
    errorFechaNacimiento.textContent = "";
    errorPais.textContent = "";
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

function validarNombre() {
    console.log(nombre.value.length);
    if((nombre.value.length >= 2) && (nombre.value.length <= 30)) {
        estiloInput(nombre, true);
        return true;
    }
    estiloInput(nombre, false);
    return false;
}

function validarApellido() {
    console.log(apellido.value.length);
    if((apellido.value.length >= 2) && (apellido.value.length <= 30)) {
        estiloInput(apellido, true);
        return true;
    }
    estiloInput(apellido, false);
    return false;
}

function validarFechaNacimiento() {
    const nacimiento = new Date(fechaNacimiento);
    const hoy = new Date();
    
    const edad = hoy.getFullYear() - nacimiento.getFullYear();

    if(edad < 100) {
        estiloInput(fechaNacimiento, true);
        return true;
    }
    estiloInput(fechaNacimiento, false);
    return false;
}

function validarPais() {
    if(pais != null) {
        estiloInput(pais, true);
        return true;
    }
    estiloInput(pais, false);
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