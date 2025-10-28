let i = 1;
while(i <= 10){
    console.log(i);
    i++;
}

const myArray = [15, 20, 15, 80];
let j = 0;
while(j < myArray.length){
    console.log(myArray[j]);

    j++;
}

let multTable = document.querySelector('#multTable');

let a = 1;
while(a <= 12){
    multTable.innerHTML += `<br>Multiplication Table ${a}<br>`;
    let b = 1;
    while(b <= 12){
        // console.log(i, j);
        multTable.innerHTML += `${a} x ${b} = ${a * b}<br>`
        b++;
    }
    a++;
}

let c = 1;
do{
    console.log(c);
    c++;
} while(c <= 10);

let d = 11;
do{
    console.log(d);
    d++;
} while(d <= 10);


const newArray = [10, 40, 69];
for(let value of newArray){
    console.log(value);
}

let sum = 0;
for(let value of newArray){
    // console.log(value);
    sum += value;
}

console.log(sum);

const students = [
    {
        name: "Kasali",
        score: 10
    },
    {
        name: "Deborah",
        score: 12
    },
    {
        name: "Samuel",
        score: 40
    },
    {
        name: "Sogo",
        score: 50
    }
];

let totalScore = 0;
for(let value of students){
    // console.log(value);
    totalScore += value.score;
    
}

console.log(totalScore);

const myObj = {
    firstName: "Toyibu",
    middleName: "Olaniyi",
    age: 11,
    occupation: "Engineer"
}

for(let key in myObj){
    // console.log(key);
    console.log(myObj[key]);  
}
