const lamp = document.getElementById('lamp')
const lamp_toggle_El = document.getElementById('lamp_toggle')

console.log(document.querySelectorAll("#lamp_toggle span"));
console.log(document.querySelectorAll("#lamp_toggle span")[0]);

const btnTextOn = document.querySelectorAll("#lamp_toggle span")[0];
const btnTextOff = document.querySelectorAll("#lamp_toggle span")[1];

lamp_toggle_El.addEventListener('click',function () {

    if (lamp.src.includes("white_lamp.png")){
        // accende
        lamp.src = './img/yellow_lamp.png'
        lamp.alt = 'off lamp'

    }else {

        lamp.src = './img/white_lamp.png'
        lamp.alt = 'on lamp'
    }
    
    
    btnTextOn.classList.toggle('d-none')
    btnTextOff.classList.toggle('d-none')
}
)

