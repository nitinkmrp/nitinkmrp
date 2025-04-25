// // object are collection of properties and methodsclass\\\\
// class ClassName{
//     constructor(prop1,prop2){
//         this.prop1=prop1;
//         this.prop2=prop2;

//     }
// }
// let obj= new ClassName("arg1","arg2");

// // this keword refer to the object it belongs to ,soit the first property of the instance 

// class Dog {
//     constructor(dogName,weight,colour,bread){
//         this.dogName=dogName;
//         this.weight=weight;
//         this.colour=colour;
//         this.bread=bread;

//     }
// }
// let dog=new Dog("JavaScript",2.4,"brown","chihuahua");

// // In Javcona, abstraction is a core Object-Oriented Programming (OOP) concept that focuses on presenting only the essential details of an object or system while hiding the underlying implementation details and complexities


// methods 



// class Person{
//     constructor(firstname,lastname){
//         this.firstname=firstname;
//         this.lastname=lastname;
    

//     }
// }
// let p= new Person("Maaike","Van Putten")
// console.log("hi",p.firstname);


// Methods 

// class Person{
//         constructor(firstname,lastname){
//             this.firstname=firstname;
//             this.lastname=lastname;
// }
// }
// greet(){
//     console.log("hi",this.firstname);
// }
// }
// compliment(name,object){
//     return "That's awonder"+ object+"+name"
// }
// }


// Properties  -  it sometime called fields
//  class person{
//     constructor(firstname,lastname){
//        this.#firstname=firstname;
//        this.#lastname=lastname;
//     }
//  }
// let p =new Person ("?Maria","saga")


// constructor(firstname,lastname){
//     if(firstname.startsWith("M")){
//         this.#firstname=firstname;
//     } else{
//         this.#lastname=lastname;

//     }
    
//     this.#lastname=lastname;



// }

// let p = new Person("kay","moon");


// getters and setters

// class person{
//     #firstname;
//     #lastnmae;

// }
//         constructor(firstname,lastname){
//            this.#firstname=firstname;
//            this.#lastname=lastname;
//         }
//         get firstname(){
//             return this.#firstnmae;

//         }
//         set firstname(firstname){
//             this.#firstname;

//         }
//         get lastname(){
//             return this.#lastnmae;

//         }
//         set lastname(lastname){
//             this.#firstname;
//         }

// let p=new person("nitin ","patel");
// console.log(p,firstname);
// console.log(p,lastname);


// inheirtance-- resuebility of code
// class vehicle{
//     constructor(color,maxspeed,currentSpeed){
//  this.color=color;
//  this.masSpeed=maxspeed;
//  this.currentSpeed=currentSpeed;

// }

// moveBy(){
//     console.log("moving at",this.currentSpeed);
//  }
// acceleration(amount){
//     this.currentSpeed+=amount;

//    }
// }



// class Motorcycle extends vehicle{
//     constructor(color,maxspeed,currentSpeed,fuel){
//        super(color,currentSpeed,maxspeed);
//         this.fuel=fuel;
        

// }
//  doWheelie(){
//     console.log(" driving on yhe wheel!");

//  }
// }

// let motor=new Motorcycle("black",0,50,"gas")
// console.log(motor.color);
// console.log(motor.maxspeed);
// console.log(motor.currentspeed);
// console.log(motor.fuel);
// motor.move();




// we cannot access any Motorcycle specific properties or methods in our vehiclev class





// prototypes --- Prototypes in JavaScript are the mechanism by which objects inherit features from one another. Every object in JavaScript has an associated prototype, which is also an object. When trying to access a property of an object, if the property is not found directly on the object, JavaScript will search for the property in the object's prototype, and then in the prototype's prototype, and so on, until it reaches the end of the prototype chain or finds the property. 

// /class Person{
//     constructor(firstname,lastname){
//        this.firstname=firstname;
//        this.lastname=lastname;
//    }
//    greet(){
//    console.log("hi");
//    }
// }
// Person.prototype.introduce=function (){
// console.log(
//    "hi.iam ",this.firstname
// );

// }
// Person.prototype.favoriteColor="green";
// let p=new Person("nitin",
// "patel"
// );
// console.log(p.favoriteColor);
// p.introduce();
