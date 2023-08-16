// Filter

var items = [
    { name: "Bike", price: 3000 },
    { name: "TV", price: 2500 },
    { name: "Book", price: 320 },
    { name: "Cellphone", price: 10000 },
    { name: "Laptop", price: 20000 },
    { name: "Keyboard", price: 500 },
    { name: "Headphones", price: 1700 },
]

var filteritems = items.filter(function (item) {
    return item.price <= 500
});

filteritems;


// Map

var items = [
    { name: "Bike", price: 3000 },
    { name: "TV", price: 2500 },
    { name: "Book", price: 320 },
    { name: "Cellphone", price: 10000 },
    { name: "Laptop", price: 20000 },
    { name: "Keyboard", price: 500 },
    { name: "Headphones", price: 1700 },
]

var nameitem = items.map(function (item) {
    return item.name
});

nameitem;