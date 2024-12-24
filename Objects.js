// JSON : 
//Objects,string , number , boolean,null,undefined
// Types of Objects : 
//1.JSON Object {key:value pair},
//2.Array Objects [element1,element2,element3]
//3.functions
const s1 = {
    Name : "kiran",
    Age : 22,
    Fees_Paid : 3400.78,
    work_Experience : {
        ABC : '3 Months',
        XYZ : '2 Months'
    },
    Marks : {
        Maths : 45,
        Science : 56
    },
    Percentage : ['Sem-I: 84', 'Sem-II: 86', 'Sem-III: 88'],
    Perfomance : ()  => console.log('Good'),
}

console.log(s1 ,typeof s1)
console.log(s1.Name);
console.log(s1.Age);
console.log(s1.Fees_Paid);
console.log(s1.Marks);
console.log(s1.Name,"Marks of Maths",s1.Marks.Maths);
console.log(s1.Percentage[2]);