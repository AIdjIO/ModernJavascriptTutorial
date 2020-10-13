//  Object literal
var myBook = {
title:'My First Book',
author:'Me',
year:'this year',
getSummary: function(){
    return `${this.title} was written by ${this.author} in ${this.year}`
}
}

console.log(myBook.getSummary());
// Get the keys of object literal
console.log(Object.keys(myBook));
// Get the values of object literal
console.log(Object.values(myBook))

// Constructor
function BookConstructor(title,author, year){
    // console.log('Book initialised');
    this.title = title;
    this.author = author;
    this.year = year;

    this.getSummary = function(){
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
}

// Instantiate an Object
const book1 = new BookConstructor('Book One', 'John Doe', '2001');
const book2 = new BookConstructor('Book Two', 'Jane Doe', '2006');

console.log(book1);
console.log(book1.getSummary())

// Prototype

function BookPrototype(title,author, year){
    this.year = year;
    this.title = title;
    this.author = author;
}
BookPrototype.prototype.getSummary = function (){
    return `${this.title} was written by ${this.author} in ${this.year}`
}
BookPrototype.prototype.getAge = function (){
    const age = new Date().getFullYear() - this.year;
    return `${this.title} is ${age} years old`;
}
BookPrototype.prototype.revise = function(newYear){
    this.year = newYear;
}

book3 = new BookPrototype('My 3rd Book', 'Me again', '2005')

console.log(book3.getSummary());
console.log(book3.getAge());
book3.revise('2020');
console.log(book3);

// Inheritance
function Magazine(title,author, year, month){
    BookPrototype.call(this, title, author, year)
    this.month = month
}

// Inherit prototype
Magazine.prototype = Object.create(BookPrototype.prototype)

//  Use Magazine Constructor
Magazine.prototype.constructor = Magazine;

const mag1 = new Magazine('Mag One', 'John Doe', '2013', 'January')

console.log(mag1);
console.log(mag1.getSummary());

// Object of Prototype
const BookProtos = {
    getSummary: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`
    },
    getAge: function (){
        const age = new Date().getFullYear() - this.year;
        return `${this.title} is ${age} years old`;
    }
}

// Create Object version 1
// const BookProto1 = Object.create(BookProtos);
// BookProto1.title = 'Book One';
// BookProto1.author = 'John Doe';
// BookProto1.year = '2013';

const BookProto1 = Object.create(BookProtos, {
    title: { value: 'Book One' },
    author: { value: 'John Doe' },
    year: { value: '2013' }
});

console.log(BookProto1);

// ES6 way on creating object
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
        getSummary(){
            return `${this.title} was written by ${this.author} in ${this.year}`
        }
        getAge (){
            const age = new Date().getFullYear() - this.year;
            return `${this.title} is ${age} years old`;
        }
        revise(newYear){
            this.year = newYear
        }

        static topBookStore(){
            return 'Avocado'
        }
    }


 // Instantiate Object
 const book_1 = new Book('Book One', 'John Doe', '2013');

 console.log(book_1)
 book_1.revise('2019')
 console.log(book_1)

 console.log(Book.topBookStore())


 // Magazine subclass
 class Magazine1 extends Book {
     constructor(title, author, year, month){
         super(title, author, year);
         this.month = month
     }
 }

 const mag_1 = new Magazine1('Magone', 'John Doe', '2013', 'January');
 
 console.log(mag1.getSummary());


// polymorphism
// overriding an inherited method by defining it again in inherited class
