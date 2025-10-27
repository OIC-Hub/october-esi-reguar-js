for(let i = 1; i <= 10; i++){
    console.log(i);
    
}

let nums = document.querySelector('#nums');
for(let i = 1; i <= 10; i++){
    // nums.innerHTML += i + "<br>";
    nums.innerHTML += `${i}<br>`;
}

let oddNums = document.getElementById('oddNums');
for(let i = 1; i <= 100; i++){
    if(i % 2 === 1){
        oddNums.innerHTML += i + ",";
    }
}

let allNums = document.getElementById('allNums');
for(let i = 1; i <= 100; i++){
    if(i % 2 === 1){
        allNums.innerHTML += `${i} is odd.<br>`;
    } else {
        allNums.innerHTML += `${i} is even.<br>`;
    }
}

const myArray = [10, 15, 89, 98, 45];
for(let i = 0; i < myArray.length; i++){
    // console.log(i);
    console.log(myArray[i]);
    
}

// for(let i = 0; i <= myArray.length - 1; i++){

// }

let sum = 0;
for(let i = 0; i < myArray.length; i++){
    sum += myArray[i];    
}
console.log(sum);

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    } 
}

for (let i = 0; i < 10; i++) {    
    if (i === 5) {
        break;
    } 
    console.log(i);  
}
