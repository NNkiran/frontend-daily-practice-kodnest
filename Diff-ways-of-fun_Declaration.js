//fucntion Declaration
function add(a,b){
    console.log(a+b);
}

add(100,200);


//function Expression
const sub = function(a,b){
    console.log(a-b);
}

sub(300,200)

//Arrow Function
const mul = (a,b)=>{
    console.log(a*b);
}
mul(10,2);

const msg = () => "Hello World!";
let res = msg();
console.log(res);

const anothermsg = () => {return "Hello World!"}; // undefined inside brackets we must use return inside to print
let resu = anothermsg();
console.log(resu);