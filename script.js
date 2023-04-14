let videoFondo=document.querySelector("#video");

console.dir(videoFondo)

const pausarVideo=(videoAPausar)=>{

    videoAPausar.pause();
}

const reproducir=()=>{
    let video=document.getElementsByClassName("video")[0];

    video.play();
    if(video.duration < 60){
        let duracionVideo=video.duration.toFixed(0);

        document.querySelector("#duracion").textContent=`00: ${duracionVideo}`
    }
    mostrarMin()

}

const pausar=()=>{
    let video=document.querySelector(".video");
    video.pause();
}