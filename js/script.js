const turnOnOff = document.querySelector(".spenta-accesa");
const lampadinaOff = document.querySelector(".lampadina-off")
const lampadinaOn = document.querySelector(".lampadina-on")
const buttonOnOff = document.getElementById("on-off");

buttonOnOff.addEventListener("click", function () {

        buttonOnOff.innerHTML = ("Spegni");
        lampadinaOff.src = "./img 2/yellow_lamp.png";
});
