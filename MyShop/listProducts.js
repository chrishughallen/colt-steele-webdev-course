var faker = require("faker");





    console.log("====================");
    console.log("Welcome to my shop!")
    console.log("====================");
    for(var i = 0;i<=10;i++){
        var product = faker.commerce.productName(); // Rowan Nikolaus
        var price = faker.commerce.price();
        console.log(product + " - $" + price);
    }


