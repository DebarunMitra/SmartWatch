/*
Author: Debarun Mitra
Technology Used:HTML,css,javaScript,Bootstrap,jQuery
Objective: Create a smartwatch which able to show time, check message, play music and has a stopwatch
*/
/*music player content start*/
const songs = [{
    song: "media/Absolute_Night.mp3",
    name: "Absolute_Night",
    singer: "Unknown",
    poster: "media/Poster1.jpg"
  },
  {
    song: "media/In_my_City.mp3",
    name: "In_my_City",
    singer: "Unknown",
    poster: "media/Poster2.jpg"
  },
  {
    song: "media/working.mp3",
    name: "worKing",
    singer: "Unknown",
    poster: "media/Poster3.jpg"
  }
];
const message = [{
    id: 1,
    sender: "Arjun",
    msg: "Hi Debarun, Good morning.",
    color: "#ff6666"
  },
  {
    id: 2,
    sender: "Robin",
    msg: "Hi Debarun, Lets go for the ride...",
    color: "#99ff99"
  },
  {
    id: 3,
    sender: "John Rambo",
    msg: "Hi Debarun, Good morning! Hi Debarun, Tomorrow evening I will come.",
    color: "#ff80df"
  },
  {
    id: 4,
    sender: "Satyajit",
    msg: "Hi Debarun, Good morning, Have a nice day",
    color: "#99ff99"
  },
  {
    id: 5,
    sender: "Retesh",
    msg: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    color: "#ff80df"
  }
];
const lapData=new Array();
let songName = document.getElementById("songName");
let singerName = document.getElementById("singerName");
let fillBar = document.getElementById("fill");
let mins = document.getElementById("min");
let secs = document.getElementById("sec");
let cents = document.getElementById("cent");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");
let lap = document.getElementById("lap"),
  currentTimer = 0,
  interval = 0,
  count = 0, countLap = 1,hr,sc,mn,
  timeHour, weekDay,jt,jap,minCount=0,initSec=0;initMin=0,initCents=0,lpCount=1,
  ele = document.querySelector('.msg-content');
ele.innerHTML = ele.innerHTML.replace(/,/g, ',<br/>');
let date = new Date();
let song = new Audio();
let lastUpdateTime = new Date().getTime();
let currentSong = 1,tm;
function msgBox(v) {
  let msgFilter = message.filter((item) => item.id === v).map((v, k) => v).forEach((v, k) => {
    document.getElementById("msgMainDiv").style.display = 'none';
    document.getElementById("msgRead").style.display = 'block';
    document.getElementById("msgName").innerHTML = v.sender;
    document.getElementById("msgIcon").style.backgroundColor = v.color;
    document.getElementById("msgIcon").innerHTML =v.sender.charAt(0);
    document.getElementById("msgContent").innerHTML = v.msg;
  });
}

function getDayTime() {
  let h = date.getHours();
  let min = date.getMinutes();
  let day = date.getDay();
  let ampm, h1, time, p;
  const days = new Array('SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THRUSDAY', 'FRIDAY', 'SATURDAY');
  (h >= 12) ? ampm = 'PM': ampm = 'AM';
  (min < 10) ? min = "0" + min: min = min;
  h = h % 12;
  h1 = h;
  if (h == 0) {
    h = 12;
    p = 0;
  } else if (h < 10) {
    h = h;
    p = h;
  }
  (h1 < 10) ? h1 = "0" + h1: h1 = h1;
  time = h1 + ":" + min + " " + ampm;
  jt= h1 + ":" + min ;jap=ampm;
  timeHour = time;
  weekDay = days[day];
}

function playSong() {
  song.src = songs[currentSong].song;
  songName.textContent = songs[currentSong].name;
  singerName.textContent = songs[currentSong].singer;
  document.getElementById("poster").src = songs[currentSong].poster;
}
/*music player content stop*/

/*stopwatch start*/
function add() {
    initCents++;
    if (initCents >= 60) {
        initCents = 0;
        initSec++;
        if (initSec >= 60) {
            initSec= 0;
            initMin++;
        }
    }
    mins.textContent = initMin ? (initMin > 9 ?initMin : "0" + initMin) : "00";
    secs.textContent = initSec ? (initSec > 9 ? initSec : "0" + initSec) : "00";
    cents.textContent = initCents > 9 ? initCents : "0" + initCents;
    timer();
    }
    function timer() {
    tm=setTimeout(add, 10);
}

/* Start button */
start.onclick = timer;

/* Stop button */
stop.onclick = function() {
    clearTimeout(tm);
}
/* Clear button */
reset.onclick = function() {
    mins.textContent = "00";
    secs.textContent = "00";
    cents.textContent = "00";
    initCents= 0; initSec = 0; initMin = 0;
}
lap.onclick = function() {
lapData.push({id:countLap,lapmin:initMin,lapsec:initSec,lapcent:initCents});
countLap++;
}
/*stopwatch stop*/

$(document).ready(function() {
  getDayTime();
  $("#startTime > span:nth-child(1)").html(jt);
  $("#startTime > span:nth-child(2)").html(jap);
  $("#weekDay").html(weekDay);
  $("#content-title > .title").html();
  $("#content-title > .time").html();
  $("#start").click(function() {
  });
  $("#stop").click(function() {
  });
  $("#reset").click(function() {
    document.getElementById("lapCount").innerHTML = 'LAP&nbsp;:&nbsp;' + 0;
    count = 0;
  });
  $("#lap").click(function() {
    count = count + 1;
    document.getElementById("lapCount").innerHTML = 'LAP&nbsp;:&nbsp;' + count;
  });
  /*message start*/
    $("#msgBtn").click(function() {
    $("#homeScreen,#musicMainDiv,#bottomBtnNext,#main,#swMainDiv,.message-read,#lapRow,#bottomBtnBack").css("display", "none");
    $("#msgRow").empty();
    $("#content-title > .title").html("MESSAGE");
    $("#content-title > .time").html(timeHour);
    $("#musicBtn").css("background-color", "#373762");
    $("#msgBtn").css("background-color", "#0080ff");
    $("#swBtn").css("background-color", "#373762");
    $("#musicMainDiv").children().hide();
    $("#msgMainDiv").css("display", "block");
    $.each(message, function(index, value) {
      if (index < 6) {
        let row = '<tr>' + '<th>' +
          '<p class="msg-icon" style="background-color:' + value.color + ';">' +
          '<span class="icon-let">' + value.sender.charAt(0) + '</span>' +
          '</p >' + '</th>' + '<td>' +
          '<p class="msg-list-name" style="cursor:pointer;" onclick="msgBox(' + value.id + ')">' + value.sender + '</p>' + '</td>' + '</tr>';
          $('#msgRow').append(row).last();
      }
    });
  });
  /*message stop*/
  /*music player start*/
  $("#musicBtn").click(function() {
    $("#homeScreen,#swMainDiv,#bottomBtnNext,#msgMainDiv,.message-read,#lapRow,#bottomBtnBack").css("display", "none");
    $("#content-title > .title").html("MUSIC");
    $("#content-title > .time").html(timeHour);
    $("#musicBtn").css("background-color", "#0080ff");
    $("#msgBtn").css("background-color", "#373762");
    $("#swBtn").css("background-color", "#373762");
    $("#musicMainDiv").css("display", "block");
    $("#musicMainDiv").children().show();
    $("#main").css("display", "block");
    playSong();
      //  $.ajax({
      //   url:"https://api.spotify.com/v1/playlists/4Xnj1bYhUS8Rb8cKDUASCO",
      //   type: "GET",
      //   responseType:'application/json',
      //   dataType:'jsonp'
      // }).done(function(data){
      //     console.log(data);
      // });
});
  $("#musicPause").click(function() {
    $("#musicPause").css("display", "none");
    $("#musicPlay").css("display", "block");
    song.pause();
  });
  $("#musicPlay").click(function() {
    $("#musicPlay").css("display", "none");
    $("#musicPause").css("display", "block");
    song.play();
  });
  $("#musicPrev").click(function() {
    $("#musicPause").css("display", "none");
    $("#musicPlay").css("display", "block");
    song.pause();
    currentSong--;
    if (currentSong < 0) {
      currentSong = 2;
    }
    $(".img-poster").attr("src", songs[currentSong].poster);
    playSong();
  });
  $("#musicNext").click(function() {
    $("#musicPause").css("display", "none");
    $("#musicPlay").css("display", "block");
    song.pause();
    currentSong++;
    if (currentSong > 2) {
      currentSong = 0;
    }
    $(".img-poster").attr("src", songs[currentSong].poster);
    playSong();
  });

  song.addEventListener('timeupdate', function() {
    let position =(song.currentTime / song.duration);
    fillBar.style.width = position * 100 + '%';
    $('#handle').css("margin-left",position+'%');
  });
  /*music player end*/
  /*stopwatch start*/
  $("#lapRow").empty();
  $("#swBtn").click(function() {
    $("#homeScreen,#musicMainDiv,#msgMainDiv,.message-read,#main").css("display", "none");
    $("#content-title > .title").html("TIMER");
    $("#content-title > .time").html(timeHour);
    $("#musicBtn").css("background-color", "#373762");
    $("#msgBtn").css("background-color", "#373762");
    $("#swBtn").css("background-color", "#0080ff");
    //$("").css("display", "none");
    $("#musicMainDiv").children().hide();
    $("#swMainDiv").css("display", "block");
    $("#bottomBtnNext").css("display", "block");
  });
  $("#bottomBtnNext").click(function() {
      $("#lapRow").empty();
    $("#swMainDiv,#bottomBtnNext,#startTime,#weekDay,#musicMainDiv,#msgMainDiv,.message-read,#main").css("display", "none");
    $("#bottomBtnBack,#lapStoreList").css("display", "block");
    $.each(lapData, function(index, value) {
      if (index < countLap) {
        let row = '<tr>'+'<td scope="row" ><p class="lap-id">#'+value.id+'</p></td>'+'<td><p class="lap-text">'+value.lapmin+':'+value.lapsec+':'+value.lapcent+'</p></td>'+'</tr>';
        $('#lapRow').append(row).last();
      }
    });
  });
  $("#bottomBtnBack").click(function() {
    $("#swMainDiv,#bottomBtnNext,#lapRow").css("display", "block");
    $("#bottomBtnBack,#lapStoreList,#startTime,#weekDay,#musicMainDiv,#msgMainDiv,.message-read,#main").css("display", "none");
      $("#lapRow").empty();
  });
  /*stopwatch stop*/
});
