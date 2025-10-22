const myArray = [1, 3, 5, 7, 9];
console.log(myArray);

// checking the length of an array
console.log(myArray.length);
console.log(typeof myArray);

// convert an array to string
let myArrayString = myArray.toString();
console.log(myArrayString);
console.log(typeof myArrayString);

// get an item at a specified index
console.log(myArray.at(2));
console.log(myArray.at(20));

// join is used to join the elements of an array
console.log(myArray.join(" and "));

// concat is used to join two or more array
const myArr1 = [1, 5, 7];
const myArr2 = [3, 9, 18];
const myArr3 = [-1, -5, -8];

const concatArray = myArr1.concat(myArr2, myArr3);
console.log(concatArray);

// pop is used to remove the last element of an array
const newArr = [2, 5, 90, 77];
console.log(newArr);

let deletedItem = newArr.pop();
console.log(newArr);
console.log(deletedItem);

// push is used to add element to the end of the array
newArr.push(23);
console.log(newArr);

newArr.push(100, 200, 300);
console.log(newArr);


const anotherArray = [10, 29, 88, 76];
console.log(anotherArray);

// shift is used to remove element from the beginning of the array
let deletedShiftItem = anotherArray.shift();
console.log(anotherArray);
console.log(deletedShiftItem);

// unshift is used to add element to the beginning of the array
anotherArray.unshift(901)
console.log(anotherArray);
anotherArray.unshift(902, 999);
console.log(anotherArray);

const myDelArray = [10, 34, 87, 82];
console.log(myDelArray);
delete myDelArray[2];
console.log(myDelArray);

// slice is used to extract the specified range from the array
const sliceArray = [92, 90, 11, 45, 87, 24, 901, 984];
const newSliceArray = sliceArray.slice(2, 5);
console.log(newSliceArray);
// slice does not modify the original array
console.log(sliceArray);

// splice is used to remove and add to the array at the same time
// splice will modify the original array
const fruits = ["Banana", 'Orange', "Apple", "Mango"];
fruits.splice(1, 2)
console.log(fruits);

const animals = ["Dog", 'Cat', "Chimpazee", "Gorilla", "Rat"];
animals.splice(1, 3, "Tortoise", "Monkey", "Lion", "Tiger");
console.log(animals);

// flat is used to bring the arrays down into a single unit
const finalArray = [[1, 2, 4, 5], [2, 9, 10], [11, 12]];
let flatArray = finalArray.flat();
console.log(flatArray);

// flat will not modify the original array
console.log(finalArray);

const finalArray2 = [[1, 2, 4, 5], [2, 9, [10, 11, [[11, 80]]], 10], [11, 12]];
console.log(finalArray2.flat());












