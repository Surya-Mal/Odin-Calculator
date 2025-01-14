let op = 0;
let op2 = 0;
let action = "";

function add(num1, num2){
    return num1 + num2
}

function subtract(num1, num2){
    return num1 + num2
}

function multiply(num1, num2){
    return num1 * num2
}

function divide(num1, num2){
    return num1 / num2
}

function operator(op, num1, num2){
    switch(op){
        case "+": 
            add(num1, num2) 
            break;
        case "-":
            subtract(num1, num2)
            break;
        case "*":
            multiply(num1, num2)
            break;
        case "/":
            divide(num1, num2)
            break
    }
}

const nums = document.querySelectorAll(".numbers");
const input = document.querySelector("input")
nums.forEach((btn) => {
    btn.addEventListener("click", () => {
        input.value += btn.textContent //The value attribute either sets or returns value of an attribute
    })
})