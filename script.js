

const colorArray = [
    "#b32e2e", "#ff4646", "#ff6c6c", "#e69c3e", "#ffaf46", "#ffc67f",
    "#e6df3e", "#fff746", "#fffa92", "#36cd4a", "#46ff5e", "#92ff9f",
    "#2e46b3", "#4667ff", "#92a4ff", "#642eb3", "#9046ff", "#bc92ff",
    "#7d279a", "#d046ff", "#e392ff", "#000000", "#2e2e2e", "#666666",
    "#9a9a9a", "#cdcdcd", "#ffffff", "#371b12", "#502a1e", "#764030",
    "#91675b", "#ad8e85" 
]

function selectColor( event ){
    const block = document.querySelector(".currentColor")
    block.style["backgroundColor"] = event.target.style["backgroundColor"] 
}

function showMenu(   ) { 
    // Вставляем в палетто заданные цвета из массива
    const palette = document.querySelector("#palette")
    colorArray.forEach( (color) => { 
        const blockPalette = document.createElement("div")
        blockPalette.className = "colorButton"
        blockPalette.style["backgroundColor"] = color
        blockPalette.addEventListener("click", selectColor )
        palette.appendChild(blockPalette)
 
    })
    // Настраеваем меню для выбора цвета
    const currentBlock = document.querySelector(".currentColor")
    currentBlock.style["backgroundColor"] = colorArray[0]
    // Добавляем меню для ластика

}

function paintBlock (event) {
    const block = document.querySelector(".currentColor")
    event.target.style["backgroundColor"] = block.style["backgroundColor"]
}

function clearBlock ( event ){

}

function printCanvas(element, height, width) {
    element.innerHTML = "";
    for (let i = 1; i <= height; ++i) {
        const divElement = document.createElement("div");
            for (var j = 1; j <= width; ++j){
                const tmp = document.createElement("div")
                tmp.addEventListener("click", paintBlock )
                tmp.className = "brickcanvas";
                divElement.appendChild(tmp);
            }
        element.appendChild(divElement);
    }
}

showMenu()
printCanvas(document.getElementById("canvas"),20,40)
