
const screen = document.querySelector('.screen')
const keys = document.querySelector('.keys')

let currentNumber = ''
let memoryNumber = ''
let operator = ""

const buttons = document.querySelectorAll('button')
buttons.forEach((button) => {
    button.addEventListener('click', () => {
    let buttonInt = parseInt(button.innerText)
        // try use switch/case instead of if
        if(Number.isInteger(buttonInt)) {
            currentNumber += buttonInt
            screen.innerHTML = currentNumber
        }
        else if(button.value === '.') { // add function to avoir multiple coma
            currentNumber+= ','
            screen.innerText = currentNumber
        }
        else if(button.value === '+' || button.value === '*' || button.value === '-' || button.value === '/'){
            memoryNumber += currentNumber + button.value
            currentNumber = ""
            screen.innerText = ''
        } else if(button.value === 'del') {
            currentNumber = currentNumber.slice(0,-1)
            screen.innerText = currentNumber
        } else if(button.value === 'reset') {
            currentNumber = memoryNumber = screen.innerText = ""
        }
            else if(button.value === "=") {
            if(memoryNumber === '') {
                memoryNumber = currentNumber
                screen.innerText = memoryNumber
                memoryNumber = ''
                currentNumber = ''
            } else {
                memoryNumber += currentNumber
                memoryNumber = eval(memoryNumber)
                console.log(typeof memoryNumber)
                screen.innerText = memoryNumber
                memoryNumber = ''
                currentNumber = ''
            }
        }
    })
})
button.addEventListener('click', () => {
    
})









