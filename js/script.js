/*
Author: Debarun Mitra
Technology Used:HTML,css,javaScript,Bootstrap,jQuery
Objective: Create a smartwatch which able to show time, check message, play music and has a stopwatch
*/
//const songs=["Absolute_Night.mp3","In_my_City.mp3","working.mp3"];
const songs=[
  {song:"media/Absolute_Night.mp3",name:"Absolute_Night",singer:"Unknown1",poster:"media/Poster1.jpg"},
  {song:"media/In_my_City.mp3",name:"In_my_City",singer:"Unknown2",poster:"media/Poster2.jpg"},
  {song:"media/working.mp3",name:"working",singer:"Unknown3",poster:"media/Poster3.jpg"}
];
let songName=document.getElementById("songName");
let singerName=document.getElementById("singerName");
let fillBar = document.getElementById("fill");
  let song=new Audio();
    let currentSong=1;
function playSong(){
    song.src=songs[currentSong].song;
    songName.textContent=songs[currentSong].name;
    singerName.textContent=songs[currentSong].singer;
    //console.log(songName);
    //song.play();
}
playSong();
function clicker()
{
  alert("ok button");
}

//playSong();
$(document).ready(function(){
  //alert("ok");
  $("#musicPause").click(function(){
    $("#musicPause").css("display","none");
        $("#musicPlay").css("display","block");
        song.pause();
  });
  $("#musicPlay").click(function(){
    $("#musicPlay").css("display","none");
        $("#musicPause").css("display","block");
        song.play();
  });
  $("#musicPrev").click(function(){
    $("#musicPause").css("display","none");
        $("#musicPlay").css("display","block");
        song.pause();
        currentSong--;
        if(currentSong < 0){
            currentSong = 2;
        }
        $(".img-poster").attr("src",songs[currentSong].poster);
        playSong();
  });
  $("#musicNext").click(function(){
    $("#musicPause").css("display","none");
        $("#musicPlay").css("display","block");
        song.pause();
        currentSong++;
        if(currentSong > 2){
            currentSong = 0;
        }
        $(".img-poster").attr("src",songs[currentSong].poster);
        playSong();
  });

/*  song.addEventListener('timeupdate',function(){
    let position=song.currentTime / song.duration;
    fillBar.style.width = position * 100 +'%';
  });*/
});
