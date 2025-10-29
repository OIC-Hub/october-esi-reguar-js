const myArray = [10, 29, 89, 11, 12];

console.log(Array.isArray(myArray));

const a = 2;
console.log(Array.isArray(a));

console.log(Object.keys(myArray));
console.log(Object.entries(myArray));

// fill will modify the original array
console.log(myArray.fill('❤️'));

const myVariable = [12, 9, 34, 67, 89];
console.log(myVariable.join(" and "));

console.log(myVariable.includes(100));
console.log(myVariable.includes(67));

// the second argument specifies the index to start from
console.log(myVariable.includes(12, 2));

const newArray = [11, 23, 98, 99, 23, 5];

let someCheck = newArray.some(function(value, index, array){
    return value > 10;
});
console.log(someCheck);

let someCheck2 = newArray.some(function(value, index, array){
    return value > 100;
});
console.log(someCheck2);

const students = [
    {
        name: 'Niyi',
        balance: 1000
    },
    {
        name: 'Tao',
        balance: 50
    },
    {
        name: 'Sodeeq',
        balance: 0
    },
    {
        name: 'Sule',
        balance: 400
    },
    {
        name: 'Zainab',
        balance: 0
    }
];

let someCheck3 = students.some(function(value, index, array){
    // console.log(value);
    
    return value.balance > 0;
});
console.log(someCheck3);

const newArray2 = [11, 23, 98, 99, 23, 5];

let everyCheck = newArray2.every(function(value, index, array){
    return value > 10;
});
console.log(everyCheck);

const findArray = [11, 23, 98, 99, 23, 5];
let findCheck = findArray.find(function(value, index, array){
    return value > 20;
});
console.log(findCheck);


const filterArray = [11, 23, 98, 99, 23, 5];
let filterCheck = filterArray.filter(function(value, index, array){
    return value > 20;
});
console.log(filterCheck);


const reduceArray = [11, 23, 98, 99, 23, 5];

let reduceCheck = filterArray.reduce(function(total, value, index, array){
    return total + value;
}, 0);
console.log(reduceCheck);


const students2 = [
    {
        name: 'Niyi',
        balance: 1000
    },
    {
        name: 'Tao',
        balance: 50
    },
    {
        name: 'Sodeeq',
        balance: 0
    },
    {
        name: 'Sule',
        balance: 400
    },
    {
        name: 'Zainab',
        balance: 0
    }
];

let filterCheck2 = students2.filter(function(value, index, array){
    // console.log(value);
    if(value.balance > 0){
        return value.name
    }  
});
console.log(filterCheck2);

let reduceStudents = filterCheck2.reduce(function(total, value, index, array){
    return `${total + value.name},`
}, '');

console.log(reduceStudents.slice(0, -1));

