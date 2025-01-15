let op = "";
let op2 = "";
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
    let finalValue;
    switch(op){
        case "+": 
            finalValue = add(num1, num2) 
            break;
        case "-":
            finalValue = subtract(num1, num2)
            break;
        case "*":
            finalValue = multiply(num1, num2)
            break;
        case "/":
            finalValue = divide(num1, num2)
            break
    }
    return finalValue;
}

const nums = document.querySelectorAll(".clickable");
const input = document.querySelector("input")
nums.forEach((btn) => {
    btn.addEventListener("click", () => {
        input.value += btn.textContent //The value attribute either sets or returns value of an attribute
        if(Number.isInteger(Number(btn.textContent)) && action == ""){
            op += btn.textContent 
            console.log(op);
        }
        else if(action != "" && Number.isInteger(Number(btn.textContent))){
            op2 += btn.textContent
            console.log(op2)
        }
    })
})

const ops = document.querySelectorAll(".ops")
ops.forEach((btn) => {
    btn.addEventListener("click", () =>{
        input.value += btn.textContent;
        op = Number(op);
        action = btn.textContent;
    })
})

const final = document.querySelector("#finish");
final.addEventListener("click", () =>{
    op2 = Number(op2);
    console.log(op)
    console.log(op2)
    console.log(action)
    input.value = operator(action, op, op2);
})

const erase = document.querySelector("#erase");
erase.addEventListener("click", () => {
    input.value = "";
    op = ""
    op2 = ""
    action = ""
})