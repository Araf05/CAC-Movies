async function api()
{
    try
    {
        let divApi= await fetch('https://randomuser.me/api/')
        let datos= await divApi.json()
        return datos.results[0]
    }
    catch (error)
    {

    }
}
console.log("andando 1")
function nuevoUsuario(usuario)
{
    let div= document.getElementById("api")
    let divNuevo= document.createElement("div")

    divNuevo.innerHTML=
    `   <img src="${usuario.picture.medium}"></img>
        <p>Nombre: ${usuario.name.first}</p>
        <p>Apellido: ${usuario.name.last}</p>`
    div.appendChild(divNuevo)

}

async function imprimir()
{

    for (let i=0;i<3;i++)
        {
            console.log("andando 2")
    
            let usuario= await api()
            nuevoUsuario(usuario)
    
        }
}

imprimir()