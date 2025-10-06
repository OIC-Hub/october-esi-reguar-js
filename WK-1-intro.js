console.log("I am appearing in my external js");

let firstName = "Oga Niyi";

document.getElementById('name').innerHTML = firstName;

var lastName = "Ajagbe";
let lastNameElem = document.getElementById('lastName');
console.log(lastNameElem);

lastNameElem.innerHTML = "<h1>Hello Kiekie</h1>";