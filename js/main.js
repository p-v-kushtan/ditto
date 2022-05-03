function calcHeight(e) {
  return document.getElementById(e).style.height = 'calc(100vh - ' +  document.querySelector('.header').offsetHeight + 'px)';
}
calcHeight("nav");


function myFunction() {

  var header = document.getElementById("header");
  var x = document.getElementById("nav");
  var subNav = document.getElementById("myLinks");
  var currentPressed = document.getElementById("element1");
  var subNav2 = document.getElementById("anotherLinks");
  var currentPressed2 = document.getElementById("element2");
  var main = document.getElementById("main");

  if (x.style.display === "flex") {
    x.style.display = "none";
    main.style.display = "flex";
    header.classList.toggle("change");
    subNav.style.display = "none";
    currentPressed.style.textDecoration = "none";
    subNav2.style.display = "none";
    currentPressed2.style.textDecoration = "none";
  } else {
    x.style.display = "flex";
    main.style.display = "none";
    header.classList.toggle("change");
  }
}

function dropSubNav() {

  var x = document.getElementById("myLinks");
  var currentPressed = document.getElementById("element1");


  if (x.style.display === "flex") {
    x.style.display = "none";
    currentPressed.style.textDecoration = "none";

  } else {
    x.style.display = "flex";
    currentPressed.style.textDecoration = "underline";

  }
}

function anotherSubNav() {

  var x = document.getElementById("anotherLinks");
  var currentPressed = document.getElementById("element2");


  if (x.style.display === "flex") {
    x.style.display = "none";
    currentPressed.style.textDecoration = "none";

  } else {
    x.style.display = "flex";
    currentPressed.style.textDecoration = "underline";

  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY2FsY0hlaWdodChlKSB7XHJcbiAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGUpLnN0eWxlLmhlaWdodCA9ICdjYWxjKDEwMHZoIC0gJyArICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJykub2Zmc2V0SGVpZ2h0ICsgJ3B4KSc7XHJcbn1cclxuY2FsY0hlaWdodChcIm5hdlwiKTtcclxuXHJcblxyXG5mdW5jdGlvbiBteUZ1bmN0aW9uKCkge1xyXG5cclxuICB2YXIgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkZXJcIik7XHJcbiAgdmFyIHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdlwiKTtcclxuICB2YXIgc3ViTmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUxpbmtzXCIpO1xyXG4gIHZhciBjdXJyZW50UHJlc3NlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWxlbWVudDFcIik7XHJcbiAgdmFyIHN1Yk5hdjIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFub3RoZXJMaW5rc1wiKTtcclxuICB2YXIgY3VycmVudFByZXNzZWQyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbGVtZW50MlwiKTtcclxuICB2YXIgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcclxuXHJcbiAgaWYgKHguc3R5bGUuZGlzcGxheSA9PT0gXCJmbGV4XCIpIHtcclxuICAgIHguc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgbWFpbi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICBoZWFkZXIuY2xhc3NMaXN0LnRvZ2dsZShcImNoYW5nZVwiKTtcclxuICAgIHN1Yk5hdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICBjdXJyZW50UHJlc3NlZC5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwibm9uZVwiO1xyXG4gICAgc3ViTmF2Mi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICBjdXJyZW50UHJlc3NlZDIuc3R5bGUudGV4dERlY29yYXRpb24gPSBcIm5vbmVcIjtcclxuICB9IGVsc2Uge1xyXG4gICAgeC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICBtYWluLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIGhlYWRlci5jbGFzc0xpc3QudG9nZ2xlKFwiY2hhbmdlXCIpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZHJvcFN1Yk5hdigpIHtcclxuXHJcbiAgdmFyIHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15TGlua3NcIik7XHJcbiAgdmFyIGN1cnJlbnRQcmVzc2VkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbGVtZW50MVwiKTtcclxuXHJcblxyXG4gIGlmICh4LnN0eWxlLmRpc3BsYXkgPT09IFwiZmxleFwiKSB7XHJcbiAgICB4LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIGN1cnJlbnRQcmVzc2VkLnN0eWxlLnRleHREZWNvcmF0aW9uID0gXCJub25lXCI7XHJcblxyXG4gIH0gZWxzZSB7XHJcbiAgICB4LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgIGN1cnJlbnRQcmVzc2VkLnN0eWxlLnRleHREZWNvcmF0aW9uID0gXCJ1bmRlcmxpbmVcIjtcclxuXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhbm90aGVyU3ViTmF2KCkge1xyXG5cclxuICB2YXIgeCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5vdGhlckxpbmtzXCIpO1xyXG4gIHZhciBjdXJyZW50UHJlc3NlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWxlbWVudDJcIik7XHJcblxyXG5cclxuICBpZiAoeC5zdHlsZS5kaXNwbGF5ID09PSBcImZsZXhcIikge1xyXG4gICAgeC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICBjdXJyZW50UHJlc3NlZC5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwibm9uZVwiO1xyXG5cclxuICB9IGVsc2Uge1xyXG4gICAgeC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICBjdXJyZW50UHJlc3NlZC5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwidW5kZXJsaW5lXCI7XHJcblxyXG4gIH1cclxufVxyXG4iXX0=
