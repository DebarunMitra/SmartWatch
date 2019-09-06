/*
Author: Debarun Mitra
Technology Used:HTML,css,javaScript,Bootstrap,jQuery
Objective: Create a smartwatch which able to show time, check message, play music and has a stopwatch
*/
/*music player content start*/
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
    document.getElementById("poster").src=songs[currentSong].poster;
}
/*music player content stop*/
$(document).ready(function(){
        /*message start*/
  $("#msgBtn").click(function(){
  console.log('message');
    $("#musicBtn").css("background-color","#373762");
      $("#msgBtn").css("background-color","#00FFCC");
        $("#swBtn").css("background-color","#373762");
        $("#musicMainDiv").css("display","none");
        $("#musicMainDiv").children().hide();
        $("#swMainDiv").css("display","none");
        $("#msgMainDiv").css("display","block");
  });
      /*message stop*/
    /*music player start*/
$("#musicBtn").click(function(){
console.log('music');
  $("#musicBtn").css("background-color","#00FFCC");
    $("#msgBtn").css("background-color","#373762");
      $("#swBtn").css("background-color","#373762");
      $("#swMainDiv").css("display","none");
      $("#msgMainDiv").css("display","none");
      $("#musicMainDiv").css("display","block");
      $("#musicMainDiv").children().show();
playSong();
});
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
  /*music player end*/

  /*message start*/
$("#swBtn").click(function(){
console.log('stopwatch');
$("#musicBtn").css("background-color","#373762");
$("#msgBtn").css("background-color","#373762");
$("#swBtn").css("background-color","#00FFCC");
$("#musicMainDiv").css("display","none");
$("#musicMainDiv").children().hide();
$("#msgMainDiv").css("display","none");
$("#swMainDiv").css("display","block");
});
/*message stop*/
});
