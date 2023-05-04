/* Código del video de la página Historia*/

let videoFondo=document.querySelector("#video");

console.dir(videoFondo)

const pausarVideo=(videoAPausar)=>{

    videoAPausar.pause();
}

const reproducir=()=>{
    let video=document.getElementsByClassName("video")[0];

    video.play();
        let duracionVideo=video.duration.toFixed(0);
        console.log(video.duration.toFixed(0))

        document.querySelector("#duracion").textContent=`00:${duracionVideo}`
    
    
    setInterval(()=> {
        if (video.currentTime < 60) {
            let reproduciendo=video.currentTime.toFixed(0);
            document.querySelector("#reproduciendo").textContent =`00:${reproduciendo}`
        }
    },1000)
}

const pausar=()=>{
    let video=document.querySelector(".video");
    video.pause();
}

/* Código del juego */

let espacio1=document.querySelector('.espacio1')
let espacio2=document.querySelector('.espacio2')
let espacio3=document.querySelector('.espacio3')

let piezas=document.querySelector('.piezas');
let fotito1=document.querySelector('#fotito1');
let fotito2=document.querySelector('#fotito2');
let fotito3=document.querySelector('#fotito3');


const inicioArrastre = (evento) => {
    console.log("Se inicio el arrastre");
    let infoImagen = evento.target.src;
    evento.dataTransfer.setData("Text", infoImagen)
}

espacio1.addEventListener('dragover', (event) => {
    event.preventDefault()
})
espacio2.addEventListener('dragover', (event) => {
    event.preventDefault()
})
espacio3.addEventListener('dragover', (event) => {
    event.preventDefault()
})


espacio1.addEventListener('drop', (event) => {
    let infoObtenida = event.dataTransfer.getData("Text");

    espacio1.innerHTML=`
    <img class="imagen" src= ${infoObtenida} alt="Fotos puzzle"/>
    `

    fotito1.style.display="none"

})

espacio2.addEventListener('drop', (event) => {
    let infoObtenida = event.dataTransfer.getData("Text");

    espacio2.innerHTML=`
    <img class="imagen" src= ${infoObtenida} alt="Fotos puzzle"/>
    `

    fotito2.style.display="none"    

})

espacio3.addEventListener('drop', (event) => {
    console.log("drop");
    let infoObtenida = event.dataTransfer.getData("Text");

    espacio3.innerHTML=`
    <img class="imagen" src= ${infoObtenida} alt="Fotos puzzle"/>
    `

    fotito3.style.display="none"
})

/* Función para reiniciar el puzzle */

function reinicio() {
    window.location.reload();
}