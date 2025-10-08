let a = 5;
a += 8;

console.log(a);
document.getElementById('result').innerHTML = a;

let num2 = 7;
num2 -= 9;

console.log(num2);

let num3 = 6;
num3 *= 7;
console.log(num3);

let num4 = 10;
num4 /= 2;
console.log(num4);

let num5 = 5;
num5 **= 4;
console.log(num5);

let num6 = 7;
num6 %= 3;
console.log(num6);

let mynum1 = 10;
let mynum2 = 7;

console.log(mynum1 > mynum2);
console.log(6 > 9);
console.log(6 < 7);
console.log(-1 < -5);

console.log(6 >= 6);
console.log(6 <= 9);

console.log(7 <= 2);

console.log(6 == 6);
console.log(6 == "6");

console.log(6 == 9);

console.log(6 === 6);
console.log("6" === 6);
console.log(7 === "5");

console.log(5 != 5);
console.log(5 != 7);
console.log(5 != "5");
console.log(5 !== 5);
console.log(5 !== "5");

let b = 5 > 7 ? 6 : 4;
console.log(b);

let c = 10 > 7 ? "Yes, it is" : "No, it is not";
console.log(c);

console.log((5 > 7) && (2 < -9));
console.log((9 > 7) && (2 < -9));
console.log((9 > 7) && (2 < 4));


console.log((5 > 7) || (2 < -9));
console.log((9 > 7) || (2 < -9));
console.log((9 > 7) || (2 < 4));

console.log(!(5 > 7) || (2 < -9));
console.log((9 > 7) || !(2 < -9));
console.log(!(9 > 7) || !(2 < 4));
console.log(!(9 > 7) && !(2 < 4));

console.log(5 + "5");
console.log("5" + 5);
console.log(5 + 5 + "5");
console.log(5 + 5 + 5 + "5" + 5 + 5);

console.log(5 + "Ade");

let aa = 10;
console.log(typeof aa);

let bb = "10";
console.log(typeof bb);

console.log(typeof true);
console.log(typeof false);

let firstname = "Oga";
let lastname = "Niyi";
let fullname = firstname + " " + lastname;
console.log(fullname);

let fullname2 = `${firstname} ${lastname}`
console.log(fullname2);

let age = 10;
console.log(`Ade is ${age} years old`);

let userAge = prompt("How old are you?");
console.log(`You are ${userAge} years old`);


























