// // const fruits=new Map([
// //     ['apple',500],
// //     ['oranges',895],
// //     ['banana',562]



// // ]
    
// // )
// const fruits=new Map();
// fruits.set('apple',742);
// fruits.set('oranges',900);
// fruits.set('banana',801);

// console.log(fruits);
// fruits.set('oranges',700);
// console.log(fruits);
// console.log(fruits.get('apple'));
// //tel size of map
// console.log(fruits.size);
// // Map.delete()
// // console.log(fruits.delete('apple'));
// console.log(fruits.has());


// let text=""
// fruits.forEach(function(value,key){
//     text+=key+""+value
// })
// console.log(text);
// let Text=""
// for (const x of fruits.entries()){
//     Text+=x;
    
// }
// console.log(Text);
// let Text1=""
// for (const x of fruits.keys()){
//     Text1+=x;
    
// }
// console.log(Text1);
// let Text2=""
// for (const x of fruits.values()){
//     Text2+=x;
    
// }
// console.log(Text2);



// const apple={name:'Apple'};
// const banana={name:"Banana"};
// const oranges={name:'Orange'};
// const fruits=new Map();
// fruits.set(apple,645);
// fruits.get("apple");


// an array is collecton of an Object
// const fruits=[
//     {name:"apple",quantity:30},
//     {name:"banana",quantity:78},{name:"kiwi",quantity:89},

// ];
// // callback function to groub Element
// function myCallback({quantity}){
//     return quantity>200?"ok":"low";

// }
// const result=Map.groupBy(fruits,myCallback);
// console.log(result);

// Js Destructruring
// const person{
//     firstName:"jac",lastName:"john",age:50
//  };
//  let{firstName,lastName}=person;
//  console.log(person);

// Allias creation 


// const person={
//     firstName:"jac",lastName:"john",age:50
//  };
// //  let{firstName,lastNamecountry="US"}=person;
// let{lastName:name}=person;

 
//  console.log(name);


// string dstructuring



// let name="hindustantimesnews";
// let[a1,a2,a3,a4,a5]=name;
// console.log(name)

// const fruits=["Banana","Orange","Aplle","Mangos"];
// // let[fruit1,fruit2]=fruits;

// // console.log(fruits)


// // let[fruit1,,,fruit2]=fruits;

// // console.log(fruits)
// let{[0]:fruit1,[1]:fruit2} =fruits
// console.log(fruit2,fruit1)



// const numbers=[10,20,30,40,50,60,70];

// const[a,b,...rest]=numbers
// console.log(a,b,)



// const fruits=new Map(["Banana",500],["Orange",897],["Aplle",879]["Mangos",879]);
// let text="";
// for(const[key,value]of fruits){
//     test+=key+'='+value;
// }
// console.log(test);

// let x=5;
// let z=Math.pow(x,2);
// console.log(x)


// console.log(x**=2);




///Array 


// const fruits=["Banana","Orange","Aplle","Mangos"];
// fruits.includes("mangos");
// Start the search at position 3:
// console.log(mangos)







////////////////////////////////////////////////////////////////////////////

// Trailing comma ------- have been legalin aaray litrals.
const arr=[
    "one",
    "two",
    "three",,
];
console.log(arr.length)






















