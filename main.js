
const screen = document.querySelector('.screen')
const keys = document.querySelector('.keys')
const radios = document.querySelectorAll('input[type=radio]')
const all = document.querySelectorAll('*')
const buttons = document.querySelectorAll('button.button')

let currentNumber = ''
let memoryNumber = ''
let operator = ""

buttons.forEach((button) => {
    button.addEventListener('click', () => {
    let buttonInt = parseInt(button.value)
        // try use switch/case instead of if
        if(Number.isInteger(buttonInt)) {
            currentNumber += buttonInt
            screen.innerHTML = currentNumber
        }
        else if(button.value === '.') { // add function to avoir multiple coma
            currentNumber+= '.'
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
all.forEach((element) => {
    element.classList.add('theme1')
})


radios.forEach((radio) => {
    radio.addEventListener('change', () => {
        console.log(radio.value)
        all.forEach((element) => {
            element.classList.remove('theme1', 'theme2', 'theme3')
            element.classList.add(`theme${radio.value}`)
        })


    })
})