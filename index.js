function convertHexToRGB() {
let hexInput = document.getElementById('hexInput').value;
    let resultElement = document.getElementById('result');


    let hexRegex = /^#([0-9A-Fa-f]{3}){1,2}$/;
    if (!hexRegex.test(hexInput)) {
        resultElement.textContent = 'Invalid HEX color';
        return;
    }

    
    let hex = hexInput.replace(/^#/, '');

    
    let bigint = parseInt(hex, 16);
    let r = (bigint >> 16) & 255;
let g = (bigint >> 8) & 255;
    let b = bigint & 255;

    let rgbColor = `RGB(${r}, ${g}, ${b})`;
    resultElement.textContent = `RGB Color: ${rgbColor}`;
}