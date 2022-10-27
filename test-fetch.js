/* // INFO REST COUNTRIES API

const url = "https://restcountries.com/v3.1/capital/{capital}"
;

// VARIABLES PARA SELECCIONAR LOS ELEMENTOS DE LA PAGINA   

const busqueda = document.querySelector("#input");
const envio = document.querySelector("#submit");
const respuesta = document.querySelector("#respuesta");

// FUNCION PARA MOSTRAR EL RESULTADO

const muestraResultado = (res) => {
const capital = res[0].capital;
respuesta.innerHTML = `<p>${capital}</p>`;

}

// FUNCION PARA ASYNC GET REQUEST
const recibeInfo = async () => {

    const buscaPais = busqueda.value;
    const endpoint = `${url}${buscaPais}`;

    try {
        const response = await fetch(endpoint, {cache: "no-cache"});
        if(response.ok){
            const jsonResponse = await response.json();

            //funcion para mostrar la informacion
            muestraResultado (jsonResponse);
        }
    } catch (error) {
        console.log(error);
    }
}

envio.addEventListener("click", recibeInfo) */




///////////////////////////////////////////


// URL
const url = "https://pokeapi.co/api/v2/pokemon/5/"

fetch(url)
// PROMESAS
.then(response => response.json() )
.then(data => {

    let element = document.getElementById("elem")
    element.innerHTML = `
    <p>${data.name}</p>
    <p>${data.order}</p>
    <img src="${data.sprites.front_default}"/>
    `;

    console.log(data )
})
.catch(err=>console.log(err))