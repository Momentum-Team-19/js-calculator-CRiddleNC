console.log('connected');

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

clearButton.addEventListener('click', () => {
    mathProblem.innerText = '';
})

let question=document.getElementById('mathProblem');

equalsButton.addEventListener('click', () => {
mathProblem.innerText = eval(question.textContent);
});
