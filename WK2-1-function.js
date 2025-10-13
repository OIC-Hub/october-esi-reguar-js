function convertToGramme(kg) {
    // let result = kg * 1000;
    // return result;
    return kg * 1000;
}

// let kgInput = prompt("Enter the kg you want to convert to gramme");

// let grammEquiv = convertToGramme(kgInput);

// console.log(`You entered ${kgInput}kg and the equivalent is ${grammEquiv.toLocaleString()}g`);

let mybutton = document.getElementById('mybtn');
mybutton.addEventListener('click', function(){
    alert("Yes, I have been clicked")
})


let myForm = document.getElementById('myForm');
myForm.addEventListener('submit', function(e){
    e.preventDefault();
    // alert('Form submitted');
    let userInput = document.getElementById('kginput')

    let grammeResult = convertToGramme(userInput.value)

    let grammeAnswerHtml = document.getElementById('grammeAnswerHtml');

    grammeAnswerHtml.innerHTML = `You entered ${userInput.value}kg and the equivalent is ${grammeResult.toLocaleString()}g`

})