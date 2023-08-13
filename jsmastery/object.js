// object = A group of properties and methods
//          properties = what an object has 
//          methods = what an object can do 
//          use to access properties/methods

const car1 = {
    model: "Mustang",
    color: "red",
    year: 2023,

    drive : function(){
        console.log("You drive a car"); 
    },
    break : function(){
        console.log("You stepped on the break"); 
    }
}

const car2 = {
    model: "Corvette",
    color: "yellow",
    year: 2024,

    drive : function(){
        console.log("You drive a car"); 
    },
    break : function(){
        console.log("You stepped on the break"); 
    }
}

console.log(car2.model);
console.log(car2.color);
car2.drive();