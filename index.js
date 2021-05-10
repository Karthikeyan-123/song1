var song = document.getElementById("song");
var play = document.getElementById("play");

play.onclick = function(){
  if(song.paused){
    song.play();
    play.src = ("images/pause.jpeg")
  }
  else{
    song.pause();
    play.src = ("images/play.jpeg")
  }
}