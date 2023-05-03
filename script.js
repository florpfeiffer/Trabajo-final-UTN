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

