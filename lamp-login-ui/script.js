let lampOn = false;

function toggleLamp(){

lampOn = !lampOn;

const loginCard = document.getElementById("loginCard");

if(lampOn){

document.body.style.background="#1c1f24";
loginCard.classList.add("active");

}
else{

document.body.style.background="#121417";
loginCard.classList.remove("active");

}

}