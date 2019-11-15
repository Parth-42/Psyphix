const parallax = document.getElementsByClassName("landingMain");

document
  .getElementsByClassName("landingMain")
  .addEventListener("scroll", function() {
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.7 + "px";
  });

function join() {
  var name = document.getElementById("tourName").value;
  document.getElementById("overText").innerHTML =
    "Would you like to join the Tournament ?";

  document.getElementById("overlay").style.display = "block";
}

function no() {
  document.getElementById("overlay").style.display = "none";
}

function yes() {
  document.getElementById("overText").innerHTML = "Event Joined Successfully.";
  document.getElementById("overText").style.color = "green";
  document.getElementById("close").style.display = "none";
  document.getElementById("open").style.display = "none";
}

function close() {
  document.getElementById("overlay").style.display = "none";
}
