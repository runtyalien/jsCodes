//this = refrence to a particular object
//       the object depends on the immediate context


const car1 = {
    model: "Mustang",
    color: "red",
    year: 2023,

    drive : function(){
        console.log(`You drive a ${this.model}`); 
    },
    break : function(){
        console.log(`You stepped on the break`); 
    }
}

const car2 = {
    model: "Corvette",
    color: "yellow",
    year: 2024,

    drive : function(){
        console.log(`You drive a ${this.model}`); 
    },
    break : function(){
        console.log(`You stepped on the break`); 
    }
}

car1.drive();
car2.drive();