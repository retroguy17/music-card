import {music} from "../music card/song details/song_det"


console.log(music[0])
let container=document.querySelectorAll("container");
 
let song_name=document.querySelectorAll("track_name");
let seek_slider=document.querySelectorAll("seek_slider");
let track_index=0
let image=document.getElementById("image");

let td=document.createElement("img")
td.src=music[].song_img
