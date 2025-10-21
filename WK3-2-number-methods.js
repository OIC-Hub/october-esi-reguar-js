let num1 = 50;
console.log(typeof num1);

let num1String = num1.toString();
console.log(typeof num1String);

console.log(num1.toExponential(2));

let myNum = 249.75642;
console.log(myNum.toFixed(1));
console.log(myNum.toFixed(2));
console.log(myNum.toFixed(3));
console.log(myNum.toFixed(6));

console.log(myNum.toPrecision(1));
console.log(myNum.toPrecision(2));
console.log(myNum.toPrecision(3));
console.log(myNum.toPrecision(4));
console.log(myNum.toPrecision(6));

let newnum = 4;
console.log(newnum.toPrecision(4));

console.log(Number(222));
console.log(Number(222.444));
console.log(Number("222"));
console.log(Number("222 is a number"));

console.log(parseInt(2));
console.log(parseInt(2.5));
console.log(parseInt("4 is a number"));
console.log(parseInt("A number is 4"));
console.log(parseInt("       4 is a number"));

console.log(parseFloat(4));
console.log(parseFloat(4.5));
console.log(parseFloat("4 is a number"));
console.log(parseFloat("4.5 is a number"));

console.log(Number.isInteger(2.5))
console.log(Number.isInteger(2))
console.log(Number.isInteger("2"))


console.log(isNaN(2));
console.log(isNaN("2"));
console.log(isNaN("2 is a number"));
console.log(isNaN(2.5));

console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);

console.log(5 / 0);
console.log(-5 / 0);

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);



if(isNaN(Number("222 is a number"))){
    console.log("You inputed not a number");
    
} else {
    console.log("You inputed a number");
}