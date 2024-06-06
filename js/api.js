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
        throw new error("Hay un error de conexion", error)
    }
}


let divNuevo = ""

console.log("andando 1")
function nuevoUsuario(usuario)
{
    let div= document.getElementById("api")
    divNuevo= document.createElement("div")

    divNuevo.innerHTML=
    `   <img src="${usuario.picture.large}"></img>
        <p>Nombre: ${usuario.name.first}</p>
        <p>Apellido: ${usuario.name.last}</p>`
    div.appendChild(divNuevo)

}


async function imprimir()
{
    try
    {
        for (let i=0;i<6;i++)
                    
            {
                
                let usuario = await api()
                nuevoUsuario(usuario)
    
            }
    }
    catch (error)
    {
        throw new error ("Hay un error de conexion", error)
    }

}

imprimir()
