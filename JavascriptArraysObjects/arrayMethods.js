const items = [
    {name:'Bike',price:100},
    {name:'TV',price:200},
    {name:'Album',price:10},
    {name:'Book',price:5},
    {name:'Phone',price:500},
    {name:'Computer',price:1000},
    {name:'Keyboard',price:25}
]


// array 'filter' method
const filteredItems = items.filter((item)=>{
    return item.price<=100;
})

console.log(filteredItems);

// array 'map' method
const itemNames = items.map(item=>{
    return item.name;
})

console.log(itemNames);

// array 'find' method
const foundItem = items.find(item=>{
    return item.name == 'Book';
})

console.log(foundItem)

// array 'forEach' method
items.forEach(item=>{
    console.log(item.price)

})

// array 'some' method
// return true if at least on item satifies the condition
const hasSomeInexpensiveItems = items.some(item=>{
    return item.price <=100
})

console.log(hasSomeInexpensiveItems)

const hasAllInexpensiveItems = items.every(item=>{
    return item.price <=100
})

console.log(hasAllInexpensiveItems)

// array 'reduce' method
// example application: return some of price of every item in array
const total = items.reduce((currentTotal, item)=>{
    return item.price + currentTotal
},0)

console.log(total);

// array 'include method
// checks if a value is in the array (returns true or false)
const itemArray = [1, 2, 3, 4, 5]

const isTwoIncluded = itemArray.includes(2);

console.log(isTwoIncluded);