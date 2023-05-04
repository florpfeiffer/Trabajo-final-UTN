let espacio1=document.querySelector('.espacio1')
let espacio2=document.querySelector('.espacio2')
let espacio3=document.querySelector('.espacio3')

let piezas=document.querySelector('.piezas');
let foto1=document.querySelector('.foto1');
let foto2=document.querySelector('.foto2');
let foto3=document.querySelector('.foto3');



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
    <img src= ${infoObtenida} alt="Fotos puzzle"/>
    `

    foto1.style.display="none"

})

espacio2.addEventListener('drop', (event) => {
    let infoObtenida = event.dataTransfer.getData("Text");

    espacio2.innerHTML=`
    <img src= ${infoObtenida} alt="Fotos puzzle"/>
    `

    foto2.style.display="none"    

})

espacio3.addEventListener('drop', (event) => {
    console.log("drop");
    let infoObtenida = event.dataTransfer.getData("Text");

    espacio3.innerHTML=`
    <img src= ${infoObtenida} alt="Fotos puzzle"/>
    `

    foto3.style.display="none"
})

















function reinicio() {
    window.location.reload();
}