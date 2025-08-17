// ********************************* String Methods **************************************

var fullName = "  Nehal Reda  ";
console.log(fullName.length);
var newFullName = fullName.trim();
console.log(newFullName.length);
console.log(newFullName.toUpperCase());
console.log(newFullName.toLowerCase());
console.log(newFullName.substring(0, newFullName.indexOf(" ")));
console.log(newFullName.toLowerCase().includes("Reda"));


// **************************************  Array Methods ************************************

var fruits = ["apple", "banana", "mango"];
fruits.push("orange");
fruits.unshift("kiwi");
fruits.pop();
fruits.shift();
console.log(fruits);

console.log(fruits.indexOf("mango"));

let mapFruits = fruits.map((fruit) => fruit.toUpperCase());
console.log(mapFruits);

let filterFruits = fruits.filter(
    (fruit) => fruit.startsWith("B") || fruit.startsWith("b")
);
console.log(filterFruits);

fruits.forEach((fruit, index) =>
    console.log(`Fruit ${index + 1} is ${fruit}`)
);


// ******************************************* Math *******************************************

console.log(Math.floor(Math.random() * 10) + 1);

console.log(Math.floor(5.1));
console.log(Math.ceil(5.1));
console.log(Math.round(5.1));
console.log(Math.trunc(5.1));

console.log(Math.floor(5.6));
console.log(Math.ceil(5.6));
console.log(Math.round(5.6));
console.log(Math.trunc(5.6));

console.log(Math.sqrt(64));
console.log(Math.max(3, 8, 20, 1));
console.log(Math.min(3, 8, 20, 1));


// **************************************** Ternary Operator  **********************************

var age = 20;
age >= 18 ? console.log("Adult") : console.log("Minor");


// *********************************************** Object *****************************************

var person = {
    name: "Nehal",
    age: 20,
    address: "Egypt",
    displayInfo: function () {
        console.log(this.name);
        console.log(this.age);
        console.log(this.address);
    },
    contact: {
        phone: "0106544335",
        email: "ngf122@gmail.com",
        displayContactInfo: function () {
            console.log(this.phone);
            console.log(this.email);
        },
    },
};

person.displayInfo();
person.contact.displayContactInfo();

person.address = "Cairo";
console.log("Updated Address:", person.address);


// ******************************************** Destructuring *******************************

let { name, age: myAge } = person;
let { phone } = person.contact;
console.log(name);
console.log(myAge);
console.log(phone);

let [firstFruit, secondFruit] = fruits;
console.log(firstFruit, secondFruit);


// ********************************* Spread / Rest Operators *********************************

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = [...arr1, ...arr2];
console.log(arr3);

function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 5, 7, 6));


// **************************************** Template Literal **********************************

let userName = "Nehal";
let userAge = 20;
console.log(`Hello ${userName}, you are ${userAge} years old.`);
