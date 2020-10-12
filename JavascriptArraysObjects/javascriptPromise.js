let myPromise = new Promise((resolve, reject) =>{
    let a = 1+3
    if (a == 2 ){
        resolve('Success')
    } else {
        reject('Failed')
    }
})

// 'then' is called if the promise is resolved
// 'catch' is called if the promise is rejected
myPromise.then((message)=>{
    console.log('This is in the then ' + message)
}).catch(message=>{
    console.log('This is in catch '+ message)
})