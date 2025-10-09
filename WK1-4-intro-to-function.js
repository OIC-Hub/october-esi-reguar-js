function greeting() {
    console.log('Hello, Good morning.');
}

greeting();

function sum(a, b){
    let sum = a + b;

    console.log(sum);
    
}

sum(2, 5)
sum(12, 5)
sum(2, 15)
sum(22, 25)
sum(8, 5)

function product(num1, num2){
    let multiply = num1 * num2;

    return multiply;
}

let result = product(10, 15);

console.log(result)

var output = document.getElementById('output')
function addInput(a) {
    output.value += a;
}
