const lampadinaOffOn = document.querySelector(".lampadina-off")
const buttonOnOff = document.getElementById("on-off");

buttonOnOff.addEventListener("click", function () {

    if (lampadinaOffOn.src.includes("img-2/white_lamp.png")) {
        buttonOnOff.innerHTML = ("Spegni");
        lampadinaOffOn.src = "./img-2/yellow_lamp.png";
    } else {
        buttonOnOff.innerHTML = ("Accendi");
        lampadinaOffOn.src = "./img-2/white_lamp.png";
    }
    
});