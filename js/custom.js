const modal = document.getElementById("videoModal");  // get the modal

const openModal = document.getElementById("openModal"); // get the open modal button

const closeBtn = document.getElementsByClassName("closeBtn")[0];  // get the close modal button

const turnModal = document.querySelector("#rotate"); // get the hanburger menu

const currentYear = document.querySelector(".year");

let year = new Date().getFullYear();
currentYear.textContent = `${year}`

// to turn hamburger menu 90deg
turnModal.addEventListener('click', navRotate);

function navRotate(){
  turnModal.classList.toggle("turn");
}


//lets the video auto play on open-modal button

function playVideo(){
  let video = document.getElementById("video");
  let src = video.dataset.src;

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

// global letiable for the player
let player;

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

  let pauseButton = document.getElementById("closeYut");
  pauseButton.addEventListener("click", function () {
    player.stopVideo();
  });
}

// Inject YouTube API script
let tag = document.createElement("script");
tag.src = "//www.youtube.com/player_api";
let firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);