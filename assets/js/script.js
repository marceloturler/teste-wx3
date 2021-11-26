
var image = document.querySelector("#img_banner");
var radio_buttons = document.getElementsByName("slide");

function changeImage(radio) {
  if (radio.checked)
    image.src = radio.value;
}

radio_buttons.forEach(el => {
  el.addEventListener("onclick", changeImage(this));
})


