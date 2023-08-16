// Function
function car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;

}

// Adding new values to function

var newcar = new car("Tesla", "Model 3", 2020);
newcar

var newcar2 = new car("Tesla", "Model X", 2018);
var newcar3 = new car("Toyota", "Yaris", 2020);

// Using loop

var brand = [
    "Abarth",
    "Alfa Romeo",
    "Aston Martin",
    "Audi",
    "Bentley",
    "BMW",
    "Cadillac",
    "Caterham",
    "Chevrolet",
    "Citroen",
    "Dacia",
    "Ferrari",
    "Fiat",
    "Ford",
    "Honda",
    "Infiniti",
    "Isuzu",
    "Iveco",
    "Jaguar"
]

var model = [
    "C-Max",
    "Fiesta",
    "Focus",
    "Mondeo",
    "Ka",
    "S-MA",
    " B-MAX",
    "Grand C-Max",
    "Tourneo Custom",
    "Kuga",
    "Galaxy",
    "Grand Tourneo Connect",
    "Tourneo Connect",
    "EcoSport",
    "Tourneo Courier",
    "Mustang",
    "Transit Connect",
    "Edge",
    "Ka+"
]

var year = [
    "1988",
    "1989",
    "1978",
    "1989",
    "1928",
    "1989",
    "1968",
    "1989",
    "1888",
    "1989",
    "1288",
    "1989",
    "1938",
    "1989",
    "1988",
    "1999",
    "1983",
    "1989",
    "1918"
]


function car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year
}

for (var i = 0; brand.length > i && model.length > i && year.length > i; i++) {
    var newcar = new car(brand[i], model[i], year[i]);
    console.log(newcar)
}