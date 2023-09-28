let myVideo1 = document.getElementById("video1");
let myVideo2 = document.getElementById("video2");

function playPause1() {
  if (myVideo1.paused)
    myVideo1.play();
  else
    myVideo1.pause();
}

function playPause2() {
  if (myVideo2.paused)
    myVideo2.play();
  else
    myVideo2.pause();
}

function openFullscreen1() {
  if (myVideo1.requestFullscreen) {
    myVideo1.requestFullscreen();
  } else if (myVideo1.webkitRequestFullscreen) { /* Safari */
    myVideo1.webkitRequestFullscreen();
  } else if (myVideo1.msRequestFullscreen) { /* IE11 */
    myVideo1.msRequestFullscreen();
  }
}

function openFullscreen2() {
  if (myVideo2.requestFullscreen) {
    myVideo2.requestFullscreen();
  } else if (myVideo2.webkitRequestFullscreen) { /* Safari */
    myVideo2.webkitRequestFullscreen();
  } else if (myVideo2.msRequestFullscreen) { /* IE11 */
    myVideo2.msRequestFullscreen();
  }
}
