let mySentence = "Help me, JS";
console.log("Length is", mySentence.length);
console.log("Char at 3 is", mySentence.charAt(3));
console.log("CharCode at 3 is", mySentence.charCodeAt(3));

let sentence1 = "Hi, Luqman.";
let sentence2 = "Anything for boys?";

let fullSentence = sentence1.concat(' ', sentence2, " ", "Nothing dey");
console.log(fullSentence);

console.log("Uppercase:", mySentence.toLowerCase());

let anotherSentence = "  Hi, howdy?  ";
console.log("Length", anotherSentence.length);

console.log(anotherSentence.trim());
console.log("Length", anotherSentence.trim().length);


console.log(anotherSentence.trimStart());
console.log("Length", anotherSentence.trimStart().length);


console.log(anotherSentence.trimEnd());
console.log("Length", anotherSentence.trimEnd().length);

let num = "15";
// padStart and padEnd only work on strings
console.log("Pad Start:", num.padStart(4, "0"));
console.log("Pad End:", num.padEnd(4, "x"));

let newSentence = "I am a girl and also a boy";
console.log("Replace:", newSentence.replace("girl", "boy"));

// replace is case sensitive
console.log("Replace:", newSentence.replace("Am", "was"));

// to make to case insensitive, we can use regex
console.log("Replace:", newSentence.replace(/And/i, "but"));


let samSentece = "I am the father of my children and I am also the mother of my children";

// replace will only replace the first occurence in the string
console.log("Replacing two words using .replace()", samSentece.replace("children", "son"));

console.log("Replacing two words using .replaceAll()", samSentece.replaceAll("children", "son"));

console.log("Replacing two words using global regex:", samSentece.replace(/am/g, "was"));

let halimaSentence = "This is a sentence";
let halimaSlice = halimaSentence.slice(5, 11);
console.log(halimaSlice);

let halimaSlice2 = halimaSentence.slice(5);
console.log(halimaSlice2);

let halimaSlice3 = halimaSentence.slice(-5, -2);
console.log(halimaSlice3);

function deleteLastElem() {
    let inputNum = document.querySelector('#inputNum');
    // console.log(inputNum.value);
    let slice = inputNum.value.slice(0, -1);
    console.log(slice);

    inputNum.value = slice;
}

let nathSentence = "I am a student";
// substring is the same as slice but does not accept negative
let nathSubstring = nathSentence.substring(2, 10);
console.log(nathSubstring);

// substring will return empty for negative
let nathSubstring2 = nathSentence.substring(-5, -3);
console.log(nathSubstring2);

let hakeemSentence = "I am in Software Engineering Department";
// substr arguments are start and length to extract
let hakeemSubstr = hakeemSentence.substr(2, 7);

console.log(hakeemSubstr);

let finalFinal = "Hi there"
console.log(finalFinal.repeat(2));

// split is used to split a string into an array
console.log(finalFinal.split(" "));
console.log(finalFinal.split(""));

let anotherFinal = "Hi, there, sjsj, jaj"
console.log(anotherFinal.split(","));











