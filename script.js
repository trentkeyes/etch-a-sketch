let container = document.querySelector('#container');
const gridButton = document.querySelector('.gridButton');
const picker = document.querySelector('#colorPick');
const rainbow = document.querySelector('.rainbow');
const shade = document.querySelector('.shade');
const eraser = document.querySelector('.eraser');

let color = 'black';
let shaded;

function randomColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`
}

function populateBox(width) {
    let containerWidth = width;
    let containerSize = Math.pow(containerWidth, 2);
    for (let i = 0; i < containerSize; i++) {
        let divSize = 768 / containerWidth + "px";
        let square = document.createElement("div");
        square.setAttribute("class", "square");
        square.style.width = divSize;
        square.style.height = divSize;
        container.appendChild(square);
        square.addEventListener('mouseover', function (e) {
            if (color == shaded && Number((e.target.style.backgroundColor)[16]) >= 1 && Number((e.target.style.backgroundColor)[16]) <= 8) {
                let oldShade = Number((e.target.style.backgroundColor)[16]);
                let newShade = oldShade + 1
                e.target.style.backgroundColor = `rgba(0, 0, 0, .${newShade})`;
                console.log(e.target.style.backgroundColor)
            } else if (color == shaded && e.target.style.backgroundColor == 'rgba(0, 0, 0, 0.9)') {
                e.target.style.backgroundColor = 'black';
            } else if (color == shaded && e.target.style.backgroundColor !== 'black') {
                e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.1)'
            } else if (color == rainbow) {
                e.target.style.backgroundColor = randomColor();
            } else {
                e.target.style.backgroundColor = color;

            }
            console.log(color)
        });
    }
}

populateBox(40);

gridButton.addEventListener('click', () => {
    let input = Number(prompt("How many squares per side? (max 100) *Clears Picture*"));
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
    color = rainbow;
});

shade.addEventListener('click', function (e) {
    color = shaded;
});

eraser.addEventListener('click', function (e) {
    color = "white";
});