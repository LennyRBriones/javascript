var mycar = {
    brand: "Ford",
    model: "Fusion",
    year: 2008,
    cardetail: function () {
        console.log(`My Car is a ${this.model} ${this.year}`);
    }
}

mycar.cardetail();


