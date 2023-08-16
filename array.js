var fruits = ["Apple", "Grape", "Pinnaple", "Cherry"];
console.log("look my fruits " + fruits);

console.log(fruits.lenght);

console.log(fruits[0]);

console.log(fruits[2]);

// Adding values to an array

var new_fruits = fruits.push("Strawberry");
console.log(fruits);

// Removing values from array

var remove_strawberry = fruits.pop("Strawberry");
console.log(fruits);

// Ading in the first position

var new_lenght = fruits.unshift("Strawberry");
console.log(fruits);

// Removing the first element

var erase_fruit = fruits.shift("Apple");
console.log(fruits);

// Known the position

var position = fruits.indexOf("Cherry");

position