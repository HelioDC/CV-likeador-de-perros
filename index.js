const perroActualElement = document.getElementById("perroActual");
const API ="https://dog.ceo/api/breeds/image/random";
const spinner = document.getElementById("spinner");
spinner.classList.add("escondido");
document.getElementById("like").addEventListener("click",() =>{ rankingPerros("+")})
document.getElementById("dislike").addEventListener("click",() =>{ rankingPerros("-")})
document.getElementById("saltar").addEventListener("click",nuevoPerro);

const contenedorLikePerros = document.getElementById("contenedorLikePerros");
const contenedorDislikePerros = document.getElementById("contenedorDislikePerros");
contenedorLikePerros.classList.add("escondido");
contenedorDislikePerros.classList.add("escondido");

perroActualElement.addEventListener("load",() =>{
    perroActualElement.classList.toggle("escondido",false);
    spinner.classList.toggle("escondido",true);
})
async function nuevoPerro(){
    spinner.classList.toggle("escondido",false);
    perroActualElement.classList.toggle("escondido",true);
    res = await fetch(API);
    const resJson = await res.json();
    console.log(resJson);
    perroActualElement.src = resJson.message;
}

function rankingPerros(ranking){
    const nuevaImagen = document.createElement("img");
    nuevaImagen.src = perroActualElement.src;
    if(ranking === "+"){
        contenedorLikePerros.appendChild(nuevaImagen);
        contenedorLikePerros.classList.toggle("escondido",false);
    }
    else{
        contenedorDislikePerros.appendChild(nuevaImagen);
        contenedorDislikePerros.classList.toggle("escondido",false);
    }
    

    nuevoPerro();
}

// Ejecución nuevoPerro
nuevoPerro();