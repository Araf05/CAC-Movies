const btnRegistrarse = document.querySelector("#btnIrRegistrarse");

btnRegistrarse.addEventListener("click", function() {
        if (typeof window !== 'undefined') {
        window.location.href = "./pages/registrarse.html";
    }
});
