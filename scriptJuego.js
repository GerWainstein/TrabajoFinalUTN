
//------juego-------

let img1 = document.getElementById("img1")
let img2 = document.getElementById("img2")
let img3 = document.getElementById("img3")
let cont1 = document.getElementById("puzzle-cont1")
let cont2 = document.getElementById("puzzle-cont2")
let cont3 = document.getElementById("puzzle-cont3")

//funciones imagenes

function inicioDeArrastre(e, img){
    e.dataTransfer.setData("Text", img)
}

function soltarElemento(e, destino){
    let id = e.dataTransfer.getData("Text");
    let imagen = document.getElementById(id)
    destino.innerHTML = "<img src='"+imagen.src+"' width='275px' height='400px' />";
    destino.removeAttribute("ondrop")  
    imagen.style.display = "none"
}

function prevenirDefault(e){
    e.preventDefault()
}

//reiniciar juego
function reinicio() {
    let botonReset = document.getElementById("reset");
    botonReset.addEventListener("click",()=> {window.location.reload()});
};

reinicio();


