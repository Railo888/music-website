let mySong = document.getElementById("mySong");
let icon = document.getElementById("icon");

const playMusic = icon.addEventListener('click', function() { 
   if(mySong.paused) {
    mySong.play();
    icon.src = "./images/pause.png";
   }
   else {
    mySong.pause();
    icon.src = "./images/play.png";
   }
});

playMusic();