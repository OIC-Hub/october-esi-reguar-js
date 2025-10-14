function moveOver(){
    // alert("Yes, you have");
    let element = document.getElementById('myelem');

    // console.log(element)
    element.style.color = "red";
    element.style.textAlign = "center"
}

function turnOn(){
    document.getElementById('myImg').setAttribute('src', 'images/on.jpg')
}

function turnOff(){
    document.getElementById('myImg').setAttribute('src', 'images/off.jpg')
}

let today = new Date();
console.log(today);

// get the present hour
console.log(today.getHours());

// get the present minute
console.log(today.getMinutes());

// get the present second
console.log(today.getSeconds());

// get the present year
console.log(today.getFullYear());

// get the present month
console.log(today.getMonth());

// get the present date of the month
console.log(today.getDate());

// get the present day
console.log(today.getDay());

console.log(`${today.getHours()}:${today.getMinutes()}`);







