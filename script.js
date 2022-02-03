let container = document.querySelector('#container');
const gridButton = document.querySelector('.gridButton');
const picker = document.querySelector('#colorPick');
const rainbow = document.querySelector('.rainbow');

let color = 'black';

function randomColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`
}

function blackShade(opacity) {
    return `rgb(0, 0, 0, ${opacity})`
}
let counter = 1;
function populateBox(width) {
    let containerWidth = width;
    let containerSize = Math.pow(containerWidth, 2);
    // color = randomColor();
    for (let i = 0; i < containerSize; i++) {
        let divSize = 768 / containerWidth + "px";
        let square = document.createElement("div");
        square.setAttribute("class", "square");
        square.style.width = divSize;
        square.style.height = divSize;
        container.appendChild(square);
        square.addEventListener('mouseover', function (e) {
            if (color) {
                e.target.style.backgroundColor = color;
            } else {
                e.target.style.backgroundColor = randomColor();
            }

        });
    }
}

populateBox(16);

gridButton.addEventListener('click', () => {
    let input = Number(prompt("How many squares per side? (max 100)"));
    if (input) {
        if (input > 100) {
            input = 100;
        }
        while (container.firstChild) {
            container.removeChild(container.firstChild)
        }
    }
    populateBox(input)
});

picker.addEventListener('input', function (e) {
    color = e.target.value;
});

rainbow.addEventListener('click', function (e) {
    color = false;
});