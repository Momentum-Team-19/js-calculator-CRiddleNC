/*
//checking values in the console
console.log('connected');

//my listening statements
//gives "buttonBoxes" the value of the 'button' clicked

let buttonBoxes = document.querySelectorAll('.button');
console.log(buttonBoxes);

let mathProblem = document.querySelector ('#mathProblem');
console.log(mathProblem);

for (let box of buttonBoxes) {
    box.addEventListener('click', () => {
        let text  = document.createTextNode(box.innerText);
        mathProblem.appendChild(text);
        console.log(box.innerText);
    })
    
}
*/
//clears the display on "=" click to make room for the answer
clearButton.addEventListener('click', () => {
    mathProblem.innerText = '';
})

let question=document.getElementById('mathProblem');

//solves the problem with eval
equalsButton.addEventListener('click', () => {
mathProblem.innerText = eval(question.textContent);
});

//spicy option disallow invalid input
// gets my buttons
const buttons = document.querySelectorAll(".button");
const mathProblem = document.getElementById("mathProblem");

// Adds listners to each button
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const buttonText = button.textContent;
        const currentMathProblem = mathProblem.textContent.trim();

        // Check if the input is valid (allowed characters: digits, operators, parentheses)
        const isValidInput = /^[\d+\-*/().]+$/.test(buttonText) || buttonText === "Modulo" || buttonText === "Square";

        // If the input is valid, update the math problem text
        if (isValidInput) {
            mathProblem.textContent = currentMathProblem + buttonText;
        }
    });
});

//Add event listener for the equals button
const equalsButton = document.getElementById("equalsButton");
equalsButton.addEventListener("click", () => {
    const currentMathProblem = mathProblem.textContent.trim();

    try {
// Evaluate the math problem using eval
    const result = eval(currentMathProblem);
    mathProblem.textContent = result;
}   catch (error) {
    mathProblem.textContent = "Error";
// Handle any errors (if the math is invalid)    
}
});

// Add event listener for the clear button
const clearButton = document.getElementById("clearButton");
clearButton.addEventListener("click", () => {
    mathProblem.textContent = "";
});

// Add function to the Square key
<div class="button" data-operation="power">Square</div>