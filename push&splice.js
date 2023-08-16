//push

let numArray = [1, 2, 3, 4, 5]

function newNum() {
  numArray.push(6, 7)
  console.log(numArray)
}

newNum()


// Splice

var items = ['car', 'cellphone', 'bike', 'tv', 'book'];

items.splice(2, 1);
//The first parameter specifies the index of the element that you want to erase,
//the second one specifies hoy many elements will be delete

items;

// Updating information with Splice

var items = ['car', 'cellphone', 'bike', 'tv', 'book'];

items.splice(2, 1, 'laptop');

items;