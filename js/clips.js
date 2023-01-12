

const material = [
    {id:1,nombre:"Titulo 1",artista:"Artista 1",img:"../imagenes/AgujasPortada.jpg",video:"../videos/video1.mp4"},
    {id:2,nombre:"Titulo 2",artista:"Artista 2",img:"../imagenes/AlbedrioCover.jpg",video:"../videos/video2.mp4"},
    {id:3,nombre:"Titulo 3",artista:"Artista 3",img:"../imagenes/BrisaCover.jpg",video:"../videos/video3.mp4"},
    {id:4,nombre:"Titulo 4",artista:"Artista 4",img:"../imagenes/NiñoEtcCover.jpg",video:"../videos/video1.mp4"},
    {id:5,nombre:"Titulo 5",artista:"Artista 5",img:"../imagenes/EspumaCover.jpg",video:"../videos/video2.mp4"},
    {id:6,nombre:"Titulo 6",artista:"Artista 6",img:"../imagenes/GramatikCover.jpg",video:"../videos/video3.mp4"},
    {id:7,nombre:"Titulo 7",artista:"Artista 7",img:"../imagenes/Con el todo y si el nada.00_02_16_23.Still020.jpg",video:"../videos/video1.mp4"},
    {id:8,nombre:"Titulo 8",artista:"Artista 8",img:"../imagenes/JeroJonesCover.jpg",video:"../videos/video2.mp4"},
    {id:9,nombre:"Titulo 9",artista:"Artista 9",img:"../imagenes/MujerCebraCover.jpg",video:"../videos/video3.mp4"}
    ];


const imagenesContainer = document.getElementById("imagenes__container"),
cuerpo = document.querySelector(".cuerpo"),
navBar = document.querySelector(".navBar"),
nombresDeArtistasContainer = document.querySelector(".works__nombresDeArtistas__container"),
footer = document.querySelector(".works__footer");

let div = document.createElement("div");

function cerrarVideo() {
    div.innerHTML = "";
    navBar.classList.remove("desaparecer");
    nombresDeArtistasContainer.classList.remove("desaparecer");
    footer.classList.remove("desaparecer");
    mostrarMaterial();
    cuerpo.classList.add("cuerpo");
}

function abrirVideo(id){
    imagenesContainer.innerHTML = "";
    navBar.classList.add("desaparecer");
    nombresDeArtistasContainer.classList.add("desaparecer");
    footer.classList.add("desaparecer");
    cuerpo.classList.remove("cuerpo");
    const video = material.find (r => r.id == id);
    div.innerHTML = `<div class="video__container">
                        <video src="${video.video} " controls muted autoplay></video>
                        <button type="button" id="btnCerrar" onclick="cerrarVideo()" class="btnCerrar" value="Cerrar">x</button>
                    </div>
                    `
    document.body.appendChild(div)      
    
}




function mostrarMaterial(){
    for (const imagen of material) {
        const { id , nombre , img , artista } = imagen
        const imagenesHtml = `
        <div class="card__container"  onclick="abrirVideo(${id})">
        <div class="imagen__container">
            <img src="${img}">
        </div>
        <div class="card__info">
            <h3>${nombre}</h3>
            <p>${artista}</p>
        </div>
    </div>`

    imagenesContainer.innerHTML += imagenesHtml
    }
}

mostrarMaterial();