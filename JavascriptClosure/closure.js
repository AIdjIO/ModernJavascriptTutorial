// const myName = 'Terminator'

// function printName(){
//     console.log(myName)
// }

// printName()

function outerFunction(outerVariable){
    const outer2='I\'ll be back'
    return function innerFunction(innerVariable){
        console.log('Outer Variable: ' + outerVariable)
        console.log('inner Variable: ' + innerVariable)
        console.log(outer2)
    }
}

const newFunction = outerFunction('outside')
newFunction('inside')

// function outerFunction(url){
//     fetch(url).then(()=>{
//         console.log(url)
//     }).catch((error)=>console.log(error))
// }

// let f

// if (true){

//     let i = 1;
//     f = ()=>{
//         console.dir(i)
//     }
// }

// console.dir(f)

let f = ()=>{
    let i = 1
    let j = 2
    return () => {
        console.log(i)
        console.log(j)
    }
}

console.dir(f());

for (var i=0; i<3;i++){
    setTimeout( () => {
        console.log(i);
    },5000)
}

console.log('after the loop')