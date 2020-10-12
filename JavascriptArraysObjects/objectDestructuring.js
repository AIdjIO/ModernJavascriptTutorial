const personOne = {
    name: 'Terminator',
    age: 100,
    favoriteColor:'Red',
    address:{
        city: 'LA',
        state:'Cali'
    }
}

const personTwo = {
    name: 'Sara',
    age:50,
    // favoriteColor:'Pink',
    address:{
        city: 'over here',
        state: 'over there'
    }
}

// object destructuring syntax, variable names have to match the keys
// const {name, age} = personTwo

// object destructuring with different names
// const {name: firstName, age: year } = personTwo
// console.log(name,age, firstName,year)

// object destructuring with different names and default value
// const {name: firstName, age: year, favoriteColor = 'Yellow' } = personTwo
// console.log(name,firstName,year, favoriteColor)
// console.log(name)

// object destructuring with spread operator
// const {name: firstName, ...rest } = personTwo
// console.log(firstName, rest)

// object destructuring with nested objects#
// const {name : fistName, address: {city}} = personTwo
// console.log(city)

// const personThree = {...personOne, ...personTwo}
// console.log(personThree)

function printUser(user){
    console.log(`Name is: ${user.name}. Age is ${user.age}`);
}

printUser(personOne)

function printUserWithDestructuring({name, age, favoriteFood='nuclear battery'}){
    console.log(`Name is: ${name}. Age is ${age}. Favorite food is ${favoriteFood}`);
}

printUserWithDestructuring(personOne)