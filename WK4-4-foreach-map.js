const myArray = [10, 13, 67, 45, 88];

let total = 0;
let arrayElem = document.querySelector('#arrayElem');
myArray.forEach(function(value, index, array){
    // console.log(value);
    total += value;
    arrayElem.innerHTML += `<h3 class="red">${value}</h3>`;
});

console.log(total);

const array2 = ['Kiekie', 'Deborah', 'Jibola', 'Akeem', 'Abdulhakeem'];

let names = document.querySelector('#names');

// we are storing in a variable because it is returning an array
let arrayMap = array2.map(function(value, index, array){
    return `<h6>${value}</h6>`
});

console.log(arrayMap);

names.innerHTML = arrayMap.join('');


const people = [
    {
        name: "Jagunlabi Michael",
        age: 11,
        occupation: 'Jagun Jagun',
        image: 'on.jpg'
    },
    {
        name: "Abdulhakeem Wasiu",
        age: 12,
        occupation: 'Agbe',
        image: 'on.jpg'
    },
    {
        name: "Akeem Tunde",
        age: 111,
        occupation: 'Musician',
        image: 'off.jpg'
    },
    {
        name: "Deborah Tafa",
        age: 141,
        occupation: 'Oga Wife',
        image: 'on.jpg'
    },
    {
        name: "Sogo Ogunmepon",
        age: 12,
        occupation: 'Civilian',
        image: 'off.jpg'
    },
    {
        name: "Tobi Alao",
        age: 171,
        occupation: 'Footballer',
        image: 'on.jpg'
    },
    {
        name: "Niyi Wasiu",
        age: 141,
        occupation: 'Engineer',
        image: 'on.jpg'
    },
    {
        name: "Luqman Bello",
        age: 11,
        occupation: 'Cobbler',
        image: 'off.jpg'
    }
];

let peopleText = document.getElementById('people');

peopleText.innerHTML = people.map(function(value, index, array){
    // console.log(value);
    return `
    <div class="eachItem">
        <img src="images/${value.image}">
        <p class="itemName">${value.name}</p>
        <p>Age: ${value.age}</p>
        <p>Occupation: ${value.occupation}</p>
    </div>
    `
}).join('');