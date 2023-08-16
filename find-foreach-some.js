var items = [
    { name: "Bike", price: 3000 },
    { name: "TV", price: 2500 },
    { name: "Book", price: 320 },
    { name: "Cellphone", price: 10000 },
    { name: "Laptop", price: 20000 },
    { name: "Keyboard", price: 500 },
    { name: "Headphones", price: 1700 },
]

// find

var finditem = items.find(function (item) {
    return item.name === "Laptop"
});

finditem;



// forEach

items.forEach(function (item) {
    console.log(item.name);
});


items.forEach(function (item) {
    console.log(item.price);
});


// some

var cheapitems = items.some(function (item) {
    return item.price <= 700;
});

cheapitems;