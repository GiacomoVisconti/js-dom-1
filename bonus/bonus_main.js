const lamp_on_El = document.getElementById('lamp_on')
const lamp_off_El = document.getElementById('lamp_off')
const lamp_toggle_El = document.getElementById('lamp_toggle')

lamp_toggle_El.addEventListener('click',
    function () {
        if (lamp_off_El.classList == 'd-inline-block'){
            lamp_off_El.className = 'd-none'
            lamp_on_El.className = 'd-inline-block'
        } else if(lamp_on_El.className == 'd-inline-block') {
            lamp_off_El.className = 'd-inline-block'
            lamp_on_El.className = 'd-none'
        }
    }
)

