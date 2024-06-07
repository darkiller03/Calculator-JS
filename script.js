const display = document.getElementById("display");

function appendToDisplay(input) {
    if (display.value === "Error") {
        display.value = "";
    }
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value.replace(/x/g, '*').replace(/÷/g, '/'));
    } catch (error) {
        display.value = "Error";
    }
}

function toggleSign() {
    if (display.value.startsWith("-")) {
        display.value = display.value.slice(1);
    } else {
        display.value = "-" + display.value;
    }
}

function calculateSquareRoot() {
    try {
        display.value = Math.sqrt(eval(display.value));
    } catch (error) {
        display.value = "Error";
    }
}
