//function Declaration Hoisted
function greet(name){
    return `Hello ${name}`
}

console.log(greet("Rohit"));



//Function Expression Not Hoisted
let greet2 = function(name){
    return `Hello ${name}`
}

console.log(greet2("RAM"));



//Arrow Function callbacks
let greet3 = (name) =>{
    return `Hello I am ${name}`
}

console.log(greet3("Surya"));
