let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        if (display.value === "") {
            return
        } else {
            display.value = eval(display.value);
        }
        display.value = eval(display.value);
    } catch (error) {
        return 
    }
}


function apagarUltimoDigito() {
    display.value = display.value.slice(0, -1)
}
