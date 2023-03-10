let charHex = ['A', 'B', 'C', 'D', 'E', 'F', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const btnColor = document.querySelector('#btn-color')
const btnHex = document.querySelector('#btn-hex')
const hexCode = document.querySelector('#hex')
const textCopied = document.querySelector('.copied')

btnColor.addEventListener('click', changeColor)
btnHex.addEventListener('click', copyToClipboard)

function changeColor(){
    let chars = []
    for(let i = 0; i < 6; i++){
        let char = Math.floor(Math.random() * charHex.length)
        chars.push(charHex[char])
    }
    chars.unshift('#')
    let hexColor = chars.join('')

    document.body.style.backgroundColor = hexColor
    hexCode.textContent = `${hexColor}`
}

function hideText(){
        textCopied.classList.toggle('active')
}

function copyToClipboard(){
    navigator.clipboard.writeText(hexCode.textContent)
    if (textCopied.classList.contains("active") == false){
        textCopied.classList.toggle('active')
        setTimeout(hideText, 2000)
    }
}