<<<<<<< HEAD
function playpause(){
    isPlaying ? playpause():playtrack()
=======
const music_list=[
    {
    song_name:"dandelions",
    song:"../objects/Dandelions_320(PaglaSongs).mp3",
    img:"https://www.google.com/imgres?q=dandelions%20slowed%20%2B%20reverb%20images&imgurl=https%3A%2F%2Fsource.boomplaymusic.com%2Fgroup10%2FM00%2F03%2F29%2Ffb6a444f04b04f7aba33d98b659705b1_464_464.jpg&imgrefurl=https%3A%2F%2Fwww.boomplay.com%2Fsongs%2F112300788&docid=k1Eo_kLMIpba9M&tbnid=6ABWkmYUHqfHIM&vet=12ahUKEwjhhIy3xN2FAxXjRmwGHa5MAa0QM3oECF8QAA..i&w=464&h=464&hcb=2&ved=2ahUKEwjhhIy3xN2FAxXjRmwGHa5MAa0QM3oECF8QAA"
},
    {
    song_name:"perfect",
    song:"../objects/Darling-Just-Hld-My-Hand_320(PaglaSongs).mp3",
    img:"https://images.genius.com/35fad95b68ee49ae50eb71a918075e75.1000x1000x1.png"

},
    {
    song_name:"summertime sadness",
    song:"../objects/Summertime-Sadness_320(PaglaSongs).mp3",
    img:"../objects/pexels-ganinph-7790348.jpg"

},
    {
    song_name:"love me like you do",
    song:"../objects/Love-Me-Like-You-Do_320(PaglaSongs).mp3",
    img:"../objects objects/eline.jpg"
},
     {
    song_name:"Senorita Shawn Mendes",
    song:"../music-card/objects/Senorita-Shawn-Mendes_320(PaglaSongs).mp3",
    img:"../music-card/objects/senorita.jpg",
     }
]

import {} from ".."



let container=document.querySelector(".container");
 
let song_name=document.querySelector(".track_name");
let seek_slider=document.querySelector(".seek_slider");
let image=document.getElementById("image");
let track=document.createElement("audio")

console.warn(music_list[0]);
function firstsong(){
    track.load();
    song_name.textContent=music_list[2].song_name;
    track.src=music_list[2].song;
    





>>>>>>> cdfef4e140067200c1eeff0f5a041ea550c5d554
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