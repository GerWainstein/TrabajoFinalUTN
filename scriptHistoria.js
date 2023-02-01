//video
function video(){
    let video = document.getElementById("video-historia");
    let playButton = document.getElementById("play-button");
    let pauseButton = document.getElementById("pause-button");
    let timeIndicator = document.getElementById("duration-time");
    
    playButton.addEventListener("click",()=>{ video.play() });
    
    pauseButton.addEventListener("click",()=>{ video.pause() });
    
    video.onloadedmetadata = function() {
        timeIndicator.innerHTML = "Duración video : " + (video.duration).toFixed(2).toString();
    };
};

video();
