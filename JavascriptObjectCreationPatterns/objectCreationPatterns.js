// Before ES6
// Javascript did not have formal support of class
// therefore we create an object for the basis of other objects

// Factory Pattern
var peopleFactory = function (name, age, state){
    var temp = {}
    //or other way of creating the above
    // var temp = new Object();

    temp.age = age
    temp.name = name
    temp.state=state

    temp.printPerson = function(){
        console.log(temp.name + ' ' + temp.age + ' ' + temp.state)
    };

    return temp;
};

var personFact1 = peopleFactory('Terminator', 200, 'CA')
var personFact2 = peopleFactory('Sarah', 55, 'CA')

personFact1.printPerson();
personFact2.printPerson();

// Constructor Pattern
// (functions are also objects)
var peopleConstructor = function(name, age, state){
    this.name = name;
    this.age = age;
    this.state = state;

    this.printPerson = function(){
        console.log(this.name + ' ' + this.age + ' ' + this.state)
    };
};

var personConstr1 = new peopleConstructor('Terminator', 200, 'CA')
var personConstr2 = new peopleConstructor('Sarah', 55, 'CA')

personConstr1.printPerson();
personConstr2.printPerson();

// Drawback of factory and constructor patterns is that methods are redundants
// So creating 100 objects would have their own function

// Prototype Pattern
// Allow to create function to create shared space (prototype space)
// Advantage is objects created from it are lightweight
// Disadvantage is that you have to create an empty object first and then initialise property seperately
// Also if a property is an object it can create confusion
var peopleProto = function(){
    // Creating an empty proto objects
}
    //  Creating defaults properties of people proto objects
    peopleProto.prototype.age = 0;
    peopleProto.prototype.name ="no name";
    peopleProto.prototype.city = "no city";

    peopleProto.prototype.printPerson = function(){
        console.log(this.name + ' '+ this.age + ' ' + this.city) 
    }

    var personProto1 = new peopleProto();
    // personProto1.name = 'Terminator'
    personProto1.age=100
    personProto1.city='CA'

    personProto1.printPerson();

    // find out if property is in object (whether the obecjt itself or prototype)
console.log ('name' in personProto1)
    // find out if property is in object only not the prototype
console.log(personProto1.hasOwnProperty('name'));

// Dynamic Prototype Pattern
// Combines Prototype and Constructor Pattern
var peopleProtoDynamic = function(name, age, city){
    this.age=age;
    this.name=name;
    this.city=city;

    if (typeof this.printPerson !== 'function'){
        peopleProtoDynamic.prototype.printPerson = function (){
            console.log(this.name+' '+ this.age + ' '+ this.city);
        };
    }
}

var personProtoDynamic1 = new peopleProtoDynamic('Terminator', 23, 'CA');
personProtoDynamic1.printPerson();

console.log('name' in personProtoDynamic1)
console.log(personProtoDynamic1.hasOwnProperty('name'))


// After ES6
