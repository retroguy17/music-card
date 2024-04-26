function playpause(){
    isPlaying ? playpause():playtrack()
}

function playtrack(){
    track.play();
    isPlaying=true;
    play_pause_btn.innerHTML=`<i class="fas fa-pause-circle fa-5x"></i>`
}

function pausetrack(){
    track.pause();
    isPlaying=false;
    play_pause_btn.innerHTML=`<i class="fas fa-play-circle fa-5x"></i>`
}
console.log(track)