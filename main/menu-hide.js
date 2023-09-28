// Menu Bar Show
let ham = document.getElementsByClassName("container")
function hamburger(ham) {
  document.getElementById("bar").classList.add("show");
  document.getElementById("contIn").classList.add("change");
}

function hamburgerClose(ham) {
  document.getElementById("bar").classList.add("change");
  document.getElementById("bar").classList.remove("show");
}

// Close the dropdown if the user clicks outside of it
// window.onclick = function (event, ham) {
//   if (!event.target.matches(['.container','.bar1','.bar2','.bar3'])) {
//     document.getElementById("bar").classList.remove("show");
//   }
// }






// Close the dropdown if the user clicks outside of it
// window.onclick = function (event, ham) {
//   if (!event.target.matches(['.container','.bar1','.bar2','.bar3'])) {
//     document.getElementById("bar").classList.remove("show");
//     document.getElementById("contOut").classList.remove("change");
//   }
// }

// Menu Bar Show W/ Animation
// let ham = document.getElementsByClassName("container")
// function hamburger(ham) {
//   ham.classList.toggle("change");
//   if (ham.classList.contains("change")) {
//     document.getElementById("bar").classList.add("show");
//   } else {
//     document.getElementById("bar").classList.remove("show");
//   }
// }




// D U M Y 

// Menu show
// When the user clicks on the button, toggle between hiding and showing the dropdown content
// function myFunction() {
//   document.getElementById("bar").classList.toggle("show");
// }

// window.onclick = function (event) {
//   if (!event.target.matches(['.container','.bar1','.bar2','.bar3'])) {
//     ham.classList.toggle("change");
//     var dropdowns = document.getElementsByClassName("menu-bar");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }