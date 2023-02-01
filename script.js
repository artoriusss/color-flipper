let colorsArr = [
    ["black", "#000000"],
    ["silver", "#C0C0C0"],
    ["gray", "#808080"],
    ["white", "#FFFFFF"],
    ["maroon", "#800000"],
    ["red", "#FF0000"],
    ["purple", "#800080"],
    ["fuchsia", "#FF00FF"],
    ["green", "#008000"],
    ["lime", "#00FF00"],
    ["olive", "#808000"],
    ["yellow", "#FFFF00"],
    ["navy", "#000080"],
    ["blue", "#0000FF"],
    ["teal", "#008080"],
    ["aqua", "#00FFFF"]
]

const btnColor = document.getElementById('btn-color')
const hexColor = document.getElementById('hex-color')
const colorName = document.getElementById('color')
const hexCode = document.getElementById('hex')

btnColor.addEventListener('click', changeColor)



function changeColor(){
    let randomNum = Math.floor(Math.random() * colorsArr.length) // Get a random array with a color and its HEX code.
    document.body.style.backgroundColor = colorsArr[randomNum][1]
    colorName.textContent = `${colorsArr[randomNum][0]}` // Changes the color name.
    hexCode.textContent = `${colorsArr[randomNum][1]}` // Changes the HEX code.
}