var modal = document.getElementById("videoModal");  // get the modal

var openModal = document.getElementById("openModal"); // get the open modal button

var closeBtn = document.getElementsByClassName("closeBtn")[0];  // get the close modal button

var turn = document.getElementById("rotate"); // get the hanburger menu


// to turn hamburger menu 90deg
turn.addEventListener('click', navRotate);

function navRotate(){
  turn.classList.toggle("turn");
}



//lets the video auto play on open-modal button

function playVideo(){
  var video = document.getElementById("video");
  var src = video.dataset.src;

  video.src = src + '?autoplay=1'
}



// listen for open click
openModal.addEventListener('click', Modalopen);

//function fo Modalopen
function Modalopen(){
    modal.style.transform = 'translateX(+0vw)'
    modal.style.transition = 'transform 1.5s ease'
    document.body.style.overflowY = "hidden"
}

// listen for close click
closeBtn.addEventListener('click', Modalclose);

//function fo Modalopen
function Modalclose(){
  modal.style.transform = 'translateX(-100vw)'
  modal.style.transition = 'transform 1.5s ease'
  document.body.style.overflowY = "auto                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  "
}



//youtube

// https://developers.google.com/youtube/iframe_api_reference

// global variable for the player
var player;

// this function gets called when API is ready to use
function onYouTubePlayerAPIReady() {
  // create the global player from the specific iframe (#video)
  player = new YT.Player("video", {
    events: {
      // call this function when player is ready to use
      onReady: onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  // bind events

  var pauseButton = document.getElementById("closeYut");
  pauseButton.addEventListener("click", function () {
    player.stopVideo();
  });
}

// Inject YouTube API script
var tag = document.createElement("script");
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);



