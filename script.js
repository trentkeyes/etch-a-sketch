const container = document.querySelector('#container');
const picker = document.querySelector('#colorPick');
const gridButton = document.querySelector('.gridButton');
const square = document.querySelector('#squares')


//function resetBox() {
gridButton.addEventListener('click', function buttonClick(e) {
    let input = Number(prompt("How many squares per side?"));
    if (input) {
        containerWidth = input;
        let containerSize = Math.pow(containerWidth, 2);
        for (let i = 0; i < containerSize; i++) {
            let box = container.querySelector('#squares');
            console.log(box);
            container.removeChild(box);

        } console.log(square);
        console.log(container);

        populateBox();
    }
});
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
        square.setAttribute("id", "squares");
        square.style.backgroundColor = "white";
        square.style.width = divSize;
        square.style.height = divSize;
        container.appendChild(square);
        // picker.addEventListener('input', function (e) {
        //     e.target.value;
        // });
        square.addEventListener('mouseover', function (e) {
            e.target.style.backgroundColor = randomColor();

        });
    }
}

populateBox();

