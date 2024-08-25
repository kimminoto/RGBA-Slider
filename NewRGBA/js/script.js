const redSlider = document.getElementById('red');
const greenSlider = document.getElementById('green');
const blueSlider = document.getElementById('blue');
const alphaSlider = document.getElementById('alpha');

const redValue = document.getElementById('redValue');
const greenValue = document.getElementById('greenValue');
const blueValue = document.getElementById('blueValue');
const alphaValue = document.getElementById('alphaValue');

function updateBackgroundColor() {
    const red = redSlider.value;
    const green = greenSlider.value;
    const blue = blueSlider.value;
    const alpha = alphaSlider.value;

    const bgColor = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
    document.body.style.setProperty('--bg-color', bgColor);

    redValue.textContent = red;
    greenValue.textContent = green;
    blueValue.textContent = blue;
    alphaValue.textContent = alpha;
}

redSlider.addEventListener('input', updateBackgroundColor);
greenSlider.addEventListener('input', updateBackgroundColor);
blueSlider.addEventListener('input', updateBackgroundColor);
alphaSlider.addEventListener('input', updateBackgroundColor);

updateBackgroundColor();
