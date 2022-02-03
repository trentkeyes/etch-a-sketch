let container = document.querySelector('#container');
const gridButton = document.querySelector('.gridButton');
let square = document.getElementsByClassName('.square');

function randomColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`
}

function populateBox() {
    let containerWidth = 16;
    let containerSize = Math.pow(containerWidth, 2);

    for (let i = 0; i < containerSize; i++) {

        let divSize = 768 / containerWidth + "px";
        let square = document.createElement("div");
        square.setAttribute("class", "square");
        square.style.width = divSize;
        square.style.height = divSize;
        container.appendChild(square);
        square.addEventListener('mouseover', function (e) {
            e.target.style.backgroundColor = randomColor();

        });
    }
}

console.log(square);

populateBox();
gridButton.addEventListener('click', function buttonClick() {
    let input = Number(prompt("How many squares per side?"));
    let square = document.getElementsByClassName('.square');
    console.log(input);
    container.removeChild(square);

    containerWidth = input;
    populateBox();
});



// if (input) {
        //   let box = container.querySelectorAll('.squares');
        //  console.log(box);
        // console.log(container);
        // while (container.firstChild) {
        //     container.removeChild(container.firstChild);
        //    }