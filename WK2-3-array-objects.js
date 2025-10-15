// array
const cars = ["Bentley", "BMW", "Benz", "Range Rover", "Honda", "Tesla"];
console.log(cars);

console.log(cars[0]);
console.log(cars[4]);

cars[4] = "Kia";
console.log(cars[4]);

cars[10] = 99;
console.log(cars);

// object
const myObj = {
    firstName: "Oga",
    lastName: "Niyi",
    age: 9,
    occupation: "Hunter",
}

// square bracket notation
console.log(myObj['firstName']);
console.log(myObj['lastName']);

// dot notation
console.log(myObj.age);

const newArr = [
    1, 2, [10, 20, 30], 58, 99, {name: "Oga", age: 9}, true,
    [10, [100, 200, 300], [[13, 15, 17], 400, 500]],
    [
        {model: "BMW", year: 2020, mileage: [10, 24, 36]},
        {model: "Benz", year: 2021},
        {model: "Tesla", year: 2022, mileage: [
            [
                1, 4, [[
                    100, 200, 300, {
                        name: "Oga",
                        age: 9
                    }
                ]]
            ]
        ]}
    ]
]

console.log(newArr[7][2][0][1]);
console.log(newArr[8][0].mileage[1]);
console.log(newArr[8][0]['mileage'][1]);
console.log(newArr[8][2]['mileage'][0][2][0][3]['name']);


console.log(typeof cars);
console.log(typeof myObj);





