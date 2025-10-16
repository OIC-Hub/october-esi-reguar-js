function aaa() {
    console.log(this); 
}

aaa();

console.log(this);

const person = {
    firstName: "Kikelomo",
    lastName: "Suweba",
    year: 2010,
    occupation: 'student',
    fullName: function() {
        return `${this.firstName} ${this.lastName}`
    },
    age: function(){
        return new Date().getFullYear() - this.year
    }
}

console.log(person.fullName());
console.log(person.age());

function logInput(elem){
    console.log(elem.innerHTML);
    
}

function logInput2(elem){
    console.log(elem);
    
}

let a = 10;
let b = 15;
if(a > b){
    console.log("Yes, a is greater than b");
}

if(b > a){
    console.log("Yes, b is greater than a");
}


let passMark = 50;
let score = 49;

if (score >= passMark) {
    console.log("Yes, you passed the exam.");
    
} else {
    console.log("See you again next year.");  
}

let gradeForm = document.getElementById('gradeForm');

gradeForm.addEventListener('submit', function(event) {
    event.preventDefault();

    let studentScore = document.querySelector('#studentScore');
    let score = studentScore.value;

    let grade = '';

    if (score < 0 || score > 100) {
        grade = 'Invalid score. Enter between 0 and 100';
    } else if(score >= 70 && score <= 100){
        grade = 'A';
    } else if(score >= 60 && score <= 69){
        grade = 'B';
    } else if(score >= 50 && score <= 59){
        grade = 'C';
    } else if(score >= 45 && score <= 49){
        grade = 'D';
    } else if(score >= 40 && score <= 44){
        grade = 'E';
    } else{
        grade = 'F';
    }

    document.querySelector('#grade').innerHTML = grade;

})


let gradeForm2 = document.forms['gradeForm2'];
console.log(gradeForm2);

gradeForm2.addEventListener('submit', function(event) {
    event.preventDefault();

    let studentScore2 = gradeForm2['studentScore2'];
    let score = studentScore2.value;

    let grade = '';

    if (score < 0 || score > 100) {
        grade = 'Invalid score. Enter between 0 and 100';
    } else if(score >= 70 && score <= 100){
        grade = 'A';
    } else if(score >= 60 && score <= 69){
        grade = 'B';
    } else if(score >= 50 && score <= 59){
        grade = 'C';
    } else if(score >= 45 && score <= 49){
        grade = 'D';
    } else if(score >= 40 && score <= 44){
        grade = 'E';
    } else{
        grade = 'F';
    }

    document.querySelector('#grade2').innerHTML = grade;

})


let c = 4;
switch(c){
    case 5:
        console.log(`c is 5`);
        break;
    case 4:
        console.log(`c is 4`);
        break;
    case 3:
        console.log(`c is 3`);
        break;
    case 2:
        console.log(`c is 2`);
        break;
    case 1:
        console.log(`c is 1`);
        break;
    case 0:
        console.log(`c is 0`);
        break;
    default:
        console.log(`c is invalid`);
}

let newScore = 85;
switch(true){
    case newScore > 100 || newScore < 0:
        console.log('Invalid grade');
        break;
    case newScore >= 70 && newScore <= 100:
        console.log('A');
        break;
    case newScore >= 60 && newScore <= 69:
        console.log('B');
        break;
    case newScore >= 50 && newScore <= 59:
        console.log('C');
        break;
    case newScore >= 45 && newScore <= 49:
        console.log('D');
        break;
    case newScore >= 40 && newScore <= 44:
        console.log('E');
        break;
    default:
        console.log('F');
        
        
}


