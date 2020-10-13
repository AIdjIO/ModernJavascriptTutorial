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

// Prototype Pattern
// Dynamic Prototype Pattern

// After ES6