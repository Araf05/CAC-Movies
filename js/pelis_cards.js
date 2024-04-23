const listadoPeliculasDOM = document.querySelector("#listado-peliculas");
const botonAnteriorDOM = document.querySelector("#anterior");
const informacionPaginaDOM = document.querySelector("#informacion-pagina");
const botonSiguienteDOM = document.querySelector("#siguiente");
const plantillaCard = document.querySelector("#plantilla-card").content.firstElementChild;
const elementosPorPagina = 8;
let paginaActual = 1;

const baseDeDatos = [
    {
        "id": 1,
        "title": "The Beekeeper",
        "image": "./assets/img/peli_1.jpg",
        "alt": "The Beekeeper"
    },
    {
        "id": 2,
        "title": "Badland Hunters",
        "image": "./assets/img/peli_2.jpg",
        "alt": "Badland Hunters"
    },
    {
        "id": 3,
        "title": "The Marvels",
        "image": "./assets/img/peli_3.jpg",
        "alt": "The Marvels"
    },
    {
        "id": 4,
        "title": "Wonka",
        "image": "./assets/img/peli_4.jpg",
        "alt": "Wonka"
    },
    {
        "id": 5,
        "title": "Aquaman",
        "image": "./assets/img/peli_5.jpg",
        "alt": "Aquaman"
    },
    {
        "id": 6,
        "title": "Migration",
        "image": "./assets/img/peli_6.jpg",
        "alt": "Migration"
    },
    {
        "id": 7,
        "title": "60 Minutes",
        "image": "./assets/img/peli_7.jpg",
        "alt": "60 Minutes"
    },
    {
        "id": 8,
        "title": "Wish",
        "image": "./assets/img/peli_8.jpg",
        "alt": "Wish"
    },
    {
        "id": 9,
        "title": "The Masked Saint",
        "image": "./assets/img/peli_9.jpg",
        "alt": "The Masked Saint"
    },
    {
        "id": 10,
        "title": "Due Justice",
        "image": "./assets/img/peli_10.jpg",
        "alt": "Due Justice"
    },
    {
        "id": 11,
        "title": "Orion and the Dark",
        "image": "./assets/img/peli_11.jpg",
        "alt": "Orion and the Dark"
    },
    {
        "id": 12,
        "title": "Genghis Khan",
        "image": "./assets/img/peli_12.jpg",
        "alt": "Genghis Khan"
    },
    {
        "id": 13,
        "title": "Lift",
        "image": "./assets/img/peli_13.jpg",
        "alt": "Lift"
    },
    {
        "id": 14,
        "title": "Atack",
        "image": "./assets/img/peli_14.jpg",
        "alt": "Atack"
    },
    {
        "id": 15,
        "title": "Mutant Ghost Wargirl",
        "image": "./assets/img/peli_15.jpg",
        "alt": "Mutant Ghost Wargirl"
    },
    {
        "id": 16,
        "title": "Poor Things",
        "image": "./assets/img/peli_16.jpg",
        "alt": "Poor Things"
    },
    {
        "id": 17,
        "title": "The five",
        "image": "./assets/img/peli_17.jpg",
        "alt": "The five"
    },
    {
        "id": 18,
        "title": "Trunk locked in",
        "image": "./assets/img/peli_18.jpg",
        "alt": "Trunk locked in"
    },
    {
        "id": 19,
        "title": "Anyone but you",
        "image": "./assets/img/peli_19.jpg",
        "alt": "Anyone but you"
    }
];

// --------***  Funciones  ***-------- //

/**
 * Función que pasa a la siguiente página
 * @return void
 */
function avanzarPagina() {
    // Incrementar "paginaActual"
    paginaActual = paginaActual + 1;
    // Redibujar
    renderizar();
}

/**
 * Función que retrocedea la página anterior
 * @return void
 */
function retrocederPagina() {
    // Disminuye "paginaActual"
    paginaActual = paginaActual - 1;
    // Redibujar
    renderizar();
}

/**
 * Función que devuelve los datos de la página deseada
 * @param {Int) pagina - Número de página
 * @return {Array<JSON>}
 */
function obtenerRebanadaDeBaseDeDatos(pagina  = 1) {
    const corteDeInicio = (pagina - 1) * elementosPorPagina;
    const corteDeFinal = corteDeInicio + elementosPorPagina;
    return baseDeDatos.slice(corteDeInicio, corteDeFinal);
}

/**
 * Función que devuelve el número total de páginas disponibles
 * @return {Int}
 */
function obtenerPaginasTotales() {
    return Math.ceil(baseDeDatos.length / elementosPorPagina);
}

/**
 * Función que gestiona los botones del paginador habilitando o
 * desactivando dependiendo de si nos encontramos en la primera
 * página o en la última.
 * @return void
 */
function gestionarBotones() {
    // Comprobar que no se pueda retroceder
    if (paginaActual === 1) {
    botonAnteriorDOM.setAttribute("disabled", true);
    } else {
    botonAnteriorDOM.removeAttribute("disabled");
    }
    // Comprobar que no se pueda avanzar
    if (paginaActual === obtenerPaginasTotales()) {
    botonSiguienteDOM.setAttribute("disabled", true);
    } else {
    botonSiguienteDOM.removeAttribute("disabled");
    }
}

/**
 * Función que se encarga de dibujar el nuevo DOM a partir de las variables
 * @return void
 */
function renderizar() {
    // Limpiamos las peliculas anteriores del DOM
    listadoPeliculasDOM.innerHTML = "";
    // Obtenemos las peliculas paginadas
    const rebanadaDatos = obtenerRebanadaDeBaseDeDatos(paginaActual);
    //// Dibujamos
    // Deshabilitar botones pertinentes (retroceder o avanzar página)
    gestionarBotones();
    // Informar de página actual y páginas disponibles
    informacionPaginaDOM.textContent = `${paginaActual}/${obtenerPaginasTotales()}`;
    // Crear un card para cada pelicula que se encuentre en la página actual
    rebanadaDatos.forEach(function (datosPelicula) {
    // Clonar la plantilla de artículos
    const miPelicula = plantillaCard.cloneNode(true);
    // Rellenamos los datos del nuevo artículo
    const miTitulo = miPelicula.querySelector("#titulo");
    miTitulo.textContent = datosPelicula.title;
    const miImagen = miPelicula.querySelector(".card-img");
    miImagen.setAttribute("src", datosPelicula.image);
    miImagen.setAttribute("alt", datosPelicula.alt);
    
    // Lo insertamos dentro de "listadoArticulosDOM"
    listadoPeliculasDOM.appendChild(miPelicula);
    });
}

// --
// Eventos
// --
botonAnteriorDOM.addEventListener("click", retrocederPagina);
botonSiguienteDOM.addEventListener("click", avanzarPagina);

// --
// Inicio
// --
renderizar(); // Mostramos la primera página nada más que carge la página
