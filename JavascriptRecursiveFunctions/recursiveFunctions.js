function countDown(n){
    for (let i=n; i>0; i--){
        console.log(i)
    }
    console.log("count down ends")
}

function countDownRecursive(n){
    if (n <=0){
        console.log("count down ends")
        return
    } else {
        console.log(n)
        countDownRecursive(n-1)
    }
}

function sumRange(n){
    let total = 0;
    for (let i=n; i>0; i--){
        total+=i;
    }
    return total;
}


function sumRangeRecursive(n, total = 0){

    if (n<=0){
        return total
    }
    return sumRangeRecursive(n-1, n + total)
}


const tree = {
    name:'John',
    children:[
        {
            name:'Jim',
            children:[]
        },
        {
            name:'Zoe',
            children: [
                {name:'Kyle', children:[]},
                {name:'Reece', children:[]}
            ]
        }
    ]
}

function printChildrenRecursive(t){
    if (t.children.length === 0 ){
        return
    }
    t.children.forEach(child=>{
        console.log(child.name);
        printChildrenRecursive(child);
    })
}

function printChildren(t){
    if (!t.children){
        return
    }
    t.children.forEach(child=>{
        console.log(child.name);
        printChildren(child)
    })
}