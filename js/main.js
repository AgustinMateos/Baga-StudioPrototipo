const carrouselItem__1 = document.getElementById("carrouselItem__1"),
carrouselItem__2 = document.getElementById("carrouselItem__2"),
carrouselItem__3 = document.getElementById("carrouselItem__3"),
carrouselItem__4 = document.getElementById("carrouselItem__4"),
navBar = document.querySelector(".navbar"),
cuerpoIndex = document.querySelector(".cuerpo"),
cardsContainer = document.getElementById("carouselExampleControls");


/*Video pop up en la pimer imagen del carrousel*/


let div1 = document.createElement("div1");

function abrirVideo1() {
    cardsContainer.classList.add("desaparecer");
    navBar.classList.add("desaparecer");
    cuerpoIndex.classList.remove("cuerpo");
    div1.innerHTML = `   <div class="video__container">
                            <video src="./videos/video1.mp4" controls autoplay muted></video>
                            <button type="button" id="btnCerrar" onclick="cerrarVideo1()" class="btnCerrar" value="Cerrar">x</button>
                        </div>`
    document.body.appendChild(div1)
}

function cerrarVideo1() {
    div1.innerHTML = "";
    navBar.classList.remove("desaparecer");
    cardsContainer.classList.remove("desaparecer");
    cuerpoIndex.classList.add("cuerpo");
}

carrouselItem__1.addEventListener("click", () => {
    abrirVideo1();
})


/*Video pop up en la segunda imagen del carrousel*/

let div2 = document.createElement("div2");

function abrirVideo2() {
    cardsContainer.classList.add("desaparecer");
    navBar.classList.add("desaparecer");
    cuerpoIndex.classList.remove("cuerpo");
    div2.innerHTML = `   <div class="video__container">
                            <video src="./videos/video2.mp4" controls autoplay muted></video>
                            <button type="button" id="btnCerrar" onclick="cerrarVideo2()" class="btnCerrar" value="Cerrar">x</button>
                        </div>`
    document.body.appendChild(div2)
}

function cerrarVideo2() {
    div2.innerHTML = "";
    navBar.classList.remove("desaparecer");
    cardsContainer.classList.remove("desaparecer");
    cuerpoIndex.classList.add("cuerpo");
}

carrouselItem__2.addEventListener("click", () => {
    abrirVideo2();
})

/*Video pop up en la tercera imagen del carrousel*/

let div3 = document.createElement("div3");

function abrirVideo3() {
    cardsContainer.classList.add("desaparecer");
    navBar.classList.add("desaparecer");
    cuerpoIndex.classList.remove("cuerpo");
    div3.innerHTML = `   <div class="video__container">
                            <video src="./videos/video3.mp4" controls autoplay muted></video>
                            <button type="button" id="btnCerrar" onclick="cerrarVideo3()" class="btnCerrar" value="Cerrar">x</button>
                        </div>`
    document.body.appendChild(div3)
}

function cerrarVideo3() {
    div3.innerHTML = "";
    navBar.classList.remove("desaparecer");
    cardsContainer.classList.remove("desaparecer");
    cuerpoIndex.classList.add("cuerpo");
}

carrouselItem__3.addEventListener("click", () => {
    abrirVideo3();
})



/*Video pop up en la cuarta imagen del carrousel*/

let div4 = document.createElement("div4");

function abrirVideo4() {
    cardsContainer.classList.add("desaparecer");
    navBar.classList.add("desaparecer");
    cuerpoIndex.classList.remove("cuerpo");
    div4.innerHTML = `   <div class="video__container">
                            <video src="./videos/video2.mp4" controls autoplay muted></video>
                            <button type="button" id="btnCerrar" onclick="cerrarVideo4()" class="btnCerrar" value="Cerrar">x</button>
                        </div>`
    document.body.appendChild(div4)
}

function cerrarVideo4() {
    div4.innerHTML = "";
    navBar.classList.remove("desaparecer");
    cardsContainer.classList.remove("desaparecer");
    cuerpoIndex.classList.add("cuerpo");
}

carrouselItem__4.addEventListener("click", () => {
    abrirVideo4();
})