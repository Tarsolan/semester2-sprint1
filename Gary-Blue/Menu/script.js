function toggleText(occurance) {
  var text = document.getElementsByClassName("main-menu-item")[occurance];
  var arrow = document.getElementsByClassName("arrow")[occurance];
  if (text.style.display === "none") {
    text.style.display = "block";
    arrow.src = "/Gary-Blue/Pictures/arrow-up.png";
  } else {
    text.style.display = "none";
    arrow.src = "/Gary-Blue/Pictures/arrow.png";
  }
}
