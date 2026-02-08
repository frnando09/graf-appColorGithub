const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");

const redNum = document.getElementById("redNum");
const greenNum = document.getElementById("greenNum");
const blueNum = document.getElementById("blueNum");

const colorPicker = document.getElementById("colorPicker");

const colorBox = document.getElementById("colorBox");
const hexCode = document.getElementById("hexCode");

function updateFromRGB() {
    const r = parseInt(red.value);
    const g = parseInt(green.value);
    const b = parseInt(blue.value);

    // Sincronizar números
    redNum.value = r;
    greenNum.value = g;
    blueNum.value = b;

    // Color RGB
    colorBox.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    // HEX
    const hex =
        "#" +
        r.toString(16).padStart(2, "0") +
        g.toString(16).padStart(2, "0") +
        b.toString(16).padStart(2, "0");

    hexCode.textContent = hex.toUpperCase();
    colorPicker.value = hex;
}

function updateFromPicker() {
    const hex = colorPicker.value;

    // HEX a RGB
    const r = parseInt(hex.substring(1, 3), 16);
    const g = parseInt(hex.substring(3, 5), 16);
    const b = parseInt(hex.substring(5, 7), 16);

    // Actualizar sliders
    red.value = r;
    green.value = g;
    blue.value = b;

    updateFromRGB();
}

// Sliders
red.addEventListener("input", updateFromRGB);
green.addEventListener("input", updateFromRGB);
blue.addEventListener("input", updateFromRGB);

// Inputs numéricos
redNum.addEventListener("input", () => {
    red.value = Math.min(255, Math.max(0, redNum.value));
    updateFromRGB();
});

greenNum.addEventListener("input", () => {
    green.value = Math.min(255, Math.max(0, greenNum.value));
    updateFromRGB();
});

blueNum.addEventListener("input", () => {
    blue.value = Math.min(255, Math.max(0, blueNum.value));
    updateFromRGB();
});

// Color picker
colorPicker.addEventListener("input", updateFromPicker);
