console.log("Hello World")
//String methods
const myVariable="mathematics";
console.log(myVariable.length);
console.log("Hello World".length);
console.log(myVariable.charAt(0)); //m
console.log(myVariable.charAt(3)); //h
console.log(myVariable.indexOf("mat")); //0
console.log(myVariable.indexOf("the")); //2 
console.log(myVariable.lastIndexOf("mat")); //5
console.log(myVariable.slice(3,5)); //he
console.log(myVariable.slice(5)); //matics
console.log(myVariable.slice(5,6)); //m
console.log(myVariable.toLowerCase());
console.log(myVariable.toUpperCase());
console.log(myVariable.includes("div")); //false
console.log(myVariable.split(""));
console.log(myVariable.split("t"));
console.log("hello everyone".split(" "));
//Number datatype and methods
const myNumber=42;
console.log(myNumber);
const myFloat=40.01;
console.log(myFloat);
const myString="42";
const number=NaN;
console.log(myNumber===myString); //false
console.log(Number(myString)===myNumber); //true
console.log(Number("hi")); //NaN
console.log(Number(true)); //1
console.log(Number(false)); //0
console.log(Number.isInteger(45)); //true
console.log(Number.isInteger("45")); //false
console.log(Number.isInteger(true)); //false
console.log(Number.parseFloat(myNumber)); //42
console.log(Number.parseFloat(myString)); //42
console.log(Number.parseFloat("hello")); //NaN
console.log(Number.parseFloat("45.01acd")); //45.01
console.log(Number.parseFloat("45.01acd").toFixed(1)); //45.0 (typeof String)
console.log(Number.parseInt(myString)) //42
console.log(typeof myNumber.toString()); //String
console.log(Number.isNaN(number)); //true  determines if passed value is NaN and type of Number(true)
console.log(Number.isNaN("hi")); //false
console.log(isNaN("hello")); // true it just checks if the passed value is NaN and does not worry about its type
//Math methods and parameters
console.log(Math.PI);
console.log(Math.round(Math.PI)); //3
console.log(Math.ceil(3.5)); //4
console.log(Math.floor(3.5)); //3
console.log(Math.pow(2,6)); //64
console.log(Math.pow(2,10)); //1024
console.log(Math.min(2,5,9)); //2
console.log(Math.min(2,0.5,9)); //0.5
console.log(Math.max(2,0.5,9)); //9
console.log(Math.random()); // returns number between 0 to 1, does not include 1
console.log(Math.floor(Math.random()*10)+1); // to generate random number between 1 to 10; if +1 not included it will return between 0 to 10. Also you can replace 10 with any maximum number u want
//Return random letter from your name
const myName="Jagadeswari";
const len=myName.length;
let pointer= Math.floor(Math.random() * len); //+1 is not included as we need to get numbers between 0 and length of name.
console.log(myName.charAt(pointer));
console.log(`string literal example ${myName}`); 
console.log(Number(50)?"It is Number":"Not a number"); // Ternary operator example
//Functions or methods

function sum(num1, num2){
    if(num2===undefined){
        if(num1===undefined)
            return "Value not passed";
        return num1+num1;
    }
    return num1+num2;
}

console.log(sum()); //prints Value not passed

function getUsernameFromEmail(email){
    if(email===undefined)
        return "email not provided";
    return email.slice(0,email.indexOf("@"));
}
console.log(getUsernameFromEmail("jaga.dhana@email.com")); //jaga.dhana

//Anonamus Fuction declaration
 const mul = function(a, b){
    return a * b;
 }

 console.log(mul(2,4));

 //Arrow Function
 const toProperCase = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
 }

 console.log(toProperCase("jOhnnY"));


 //var, let, const scope
 //var - function scope
 //let and const block scope

 //global scope and local scope (function scope and block scope)

 //global scope
 var x = 5;
 let y = 7;
 const z =10;

 console.log(`Global Scope ${x}`); //5
 console.log(`Global Scope ${y}`); //7
 console.log(`Global Scope ${z}`); //10

 function scope(){

    var x = 9;
    let y = 8;
    const z =4;
    {
        var x = 1;
        let y = 2;
        const z =3;
        console.log(`Block Scope ${x}`); //1
        console.log(`Block Scope ${y}`); //2
        console.log(`Block Scope ${z}`); //3

    }

    console.log(`Function Scope ${x}`); //1  -> because var is function scope the value of x is retained after the block execution
    console.log(`Function Scope ${y}`); //8
    console.log(`Function Scope ${z}`); //4
 }
 scope();

 //Arrays
 const myArray = [];
 myArray[0] =  "Esh";
 myArray[1] = 37;
 myArray[2] = true;

console.log(myArray); // Print all the elements in a array
console.log(myArray[myArray.length -1]); //print last element in a array

myArray.push("120 dream land, dreamworld 444"); // returns length of the Array
console.log(myArray); //Add elements to the array (4) ['Esh', 37, true, '120 dream land, dreamworld 444']

console.log(myArray.pop()); //removed last element from the Array 120 dream land, dreamworld 444
console.log(myArray); //(3) ['Esh', 37, true]

//add and remove elements at front of the Array

console.log(myArray.unshift("0001")); // adds element to the begining of the Array and returns the length of the Array //4
console.log(myArray); //(4) ['0001', 'Esh', 37, true]
console.log(myArray.shift()); //removes element from the begining of the Array 0001
console.log(myArray); //(3) ['Esh', 37, true]

//splice method (begining index, no of elements, item to be inserted)
console.log(myArray.splice(1)); // removes all the elements from index 1 till the end
console.log(myArray); //['Esh']

myArray.push(37);
myArray.push(true);

console.log(myArray.splice(1,1,45)); //removes 37 and insert 45 in its position prints-> 37
console.log(myArray); //(3) ['Esh', 45, true]

//slice method
console.log(myArray.slice(2)); //[true]
console.log(myArray); //(3) ['Esh', 45, true]
console.log(myArray.slice(0,1)); //['Esh']  -> does not include last ending index
console.log(myArray); //(3) ['Esh', 45, true]

//reverse method
myArray.reverse();
console.log(myArray); //(3) [true, 45, 'Esh']

//join method
let newString1 = myArray.join();
console.log(newString1); //true,45,Esh
let newString2 = myArray.join("-");
console.log(newString2); //true-45-Esh
let newString3 = myArray.join("");
console.log(newString3); //true45Esh

//concat method
const myArrayA = ['a','b','c'];
const myArrayB = ['d','e','f'];
console.log(myArrayA.concat(myArrayB)); //(6) ['a', 'b', 'c', 'd', 'e', 'f']
const myArrayC = ['g','h','i'];
console.log(myArrayA.concat(myArrayB,myArrayC)); //(9) ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']

//spread operator
console.log([myArrayA,myArrayB]); //(2) [Array(3), Array(3)] -> returns new array containing two arrays
console.log([...myArrayA,...myArrayB]); //(6) ['a', 'b', 'c', 'd', 'e', 'f'] spread operator uses the contents of the array

//Object
const myObject={
    name: "Esh",
    age: 38,
    hobbies: ["Eat","Sleep","Dance","Chat"],
    beverage: {
        morning: "Tea",
        afternoon: "Green Tea",
        evening: "Coffee"
    },
    print: function() {
        return `hello ${this.name}`;
    }
}

console.log(myObject); //{name: 'Esh', age: 38, hobbies: Array(4), beverage: {…}}
console.log(myObject.name);//Esh
console.log(myObject["age"]); //38
console.log(myObject["hobbies"]);//(4) ['Eat', 'Sleep', 'Dance', 'Chat']
console.log(myObject["hobbies"][2]);//Dance
console.log(myObject["beverage"].morning); //Tea
console.log(myObject["beverage"]["afternoon"]); //Green Tea
console.log(myObject["beverage"]);//{morning: 'Tea', afternoon: 'Green Tea', evening: 'Coffee'}
console.log(myObject.print());

const vehicle ={
    wheels: 4,
    engine: function(){
        return "Vrrooom";
    }
}
console.log(vehicle); //{wheels: 4, engine: ƒ}
const car = Object.create(vehicle);
console.log(car); //{}
car.door = 4;
console.log(car); //{door: 4}
car.engine = function(){
    return "Woosh";
}
console.log(car.engine()); //Woosh
const tesla = Object.create(car);
tesla.engine = function(){
    return "shhhhh";
}
console.log(tesla.engine()); //shhhhh
console.log(Object.keys(car)); //(2) ['door', 'engine'] -> displays keys within the object
console.log(Object.values(car)); //(2) [4, ƒ] -> displays values of the object
var i=1;
for(let key in car){
    console.log(`${key} ${car[key]}`); 
} //door 4  engine function(){ return "Woosh";}  wheels 4

car.headlights = 2;
console.log(car);
console.log(car.hasOwnProperty("headlights")); //true
delete car.headlights; //deletes the property from the object
console.log(car.hasOwnProperty("headlights")); //delete

//destructuring objects
const {wheels:myWheels} = car;
console.log(car); //{door: 4, engine: ƒ}
console.log(myWheels); //4
const {door} = car;
console.log(door); //4
console.log(car); //{door: 4, engine: ƒ}

const wheelsCount= function({wheels}){
    return `No of wheels: ${wheels}`;
}
console.log(wheelsCount(car)); //4 ->  object is passed as argument but function takes only wheels key as argument

//class
class Pizza{
    #crust;
    constructor(pizzaSize,pizzaType){
        this._size=pizzaSize;  //_ in the property names indicate to other developers that it needs to be treated as private variable and should be accessed by get and set methods.
        this._type=pizzaType;
        this.#crust="original"; //# indicates it is a private variable and cannot be accessed outside the class, but it is not supported by all the browsers.
        this._toppings=[];
    }
    get pizzaCrust(){
        return this.#crust;
    }

    set pizzaCrust(pizzaCrust){
        this.#crust=pizzaCrust;
    }

    getToppings(){
        return this._toppings;
    }

    setToppings(topping){
        this._toppings.push(topping);
    }

    bake(){
        console.log(`Baking a ${this._size} ${this._type} ${this.#crust} crust pizza with ${this._toppings} toppings`);
    }
}

const pizza = new Pizza("small","Veg Garden");
pizza.pizzaCrust="Thin"; //set method is called
//pizza.bake(); //Baking a small Veg Garden Thin crust pizza
console.log(pizza.pizzaCrust); //get method is called 
pizza.setToppings("olives");
pizza.setToppings("mushroom");
pizza.bake();
console.log(pizza.getToppings());
//console.log(pizza.#crust);// Uncaught SyntaxError: Private field '#crust' must be declared in an enclosing class (at main.js:272:13)
console.log(pizza.crust); //undefined
//Factory functions
function pizzaFactory(pizzaType){
    const type=pizzaType;
    const size = "medium";
    return{
        bake : ()=>{
            console.log(`Pizza Factory currently baking ${type} pizza of size ${size}`);
        }
    };
}

const myPizza = pizzaFactory("Pepproni");
myPizza.bake(); //Pizza Factory currently baking Pepproni pizza of size medium

//JSON JavaScript Object Notation
const employee ={
    name: "Eswari",
    age: 38,
    address: "111 dreamland, Dreamworld 444",
    display: function() {
        console.log(`${this.name} of age ${this.age} resides at ${this.address}`);
    }

}

employee.display();
console.log(employee);
const jsonObject = JSON.stringify(employee);
console.log(jsonObject); //{"name":"Eswari","age":38,"address":"111 dreamland, Dreamworld 444"} 
console.log(typeof jsonObject); //string
const backToEmployee = JSON.parse(jsonObject);
console.log(backToEmployee); //{name: 'Eswari', age: 38, address: '111 dreamland, Dreamworld 444'}
console.log(typeof backToEmployee); //object

//Types of error - Reference error, Syntax Error, Type error
//Strict mode is enabled using 'use strict' at the begining of the script page.
/*
    "use strict";
    variable = "Dave";
    console.log(variable); //Uncaught ReferenceError: variable is not defined

    Object..create(car); //Uncaught SyntaxError: Unexpected token '.'

    const name = "Esh";
    name="change"; //main.js:351 Uncaught TypeError: Assignment to constant variable.
 */
//"use strict";
const makeError= () =>{
    try{
       const name="D";
       name="E";
       //throw new customError("This is custom Error Message"); -> throwing custome error
       //throw new Error("Custom Error"); -> Generic Error

    }catch(err){
        console.error(err);//main.js:360 TypeError: Assignment to constant variable.
        console.error(err.name); // TypeError
        console.error(err.message); //Assignment to constant variable
        console.error(err.stack);//TypeError: Assignment to constant variable.
        console.table(err);
        console.warn(err);
    }finally{
        console.log("..finally");
    }
}
makeError(); 

function customError(errorMessage){
    this.name="Custom Error";
    this.message =errorMessage;
    this.stack = this.name +":"+ this.message;
}


//DOM - Document Object Model
const view1 = document.getElementById("view1");
console.log(document.querySelector("#view2"));

const views = document.getElementsByClassName("view"); // returns HTMLCollection
const sameViews = document.querySelectorAll(".view"); // returns as NodeList
console.log(views);
console.log(sameViews);

const divs =view1.getElementsByTagName("div");
console.log(divs);
const evenDivs = document.getElementById("view1").querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs);
for(let i=0;i<evenDivs.length;i++){
    evenDivs[i].style.backgroundColor ="red";
}
const navText = document.querySelector("nav h1");
console.log(navText); //<h1>My Page</h1>
navText.textContent="Hello World";

const navBar = document.querySelector("nav");
navBar.innerHTML="<h1> Hello!</h1> <p> This content will be aligned to the right</p>";
navBar.style.justifyContent ="space-evenly"; //flex-start flex-end space-between

//DOM Tree navigation
console.log(evenDivs[0]);
console.log(evenDivs[0].parentElement);//
console.log(evenDivs[0].parentElement.children); //HTMLCollection(12) [div, div, div, div, div, div, div, div, div, div, div, div]
console.log(evenDivs[0].parentElement.childNodes); //NodeList(25) [text, div, text, div, text, div, text, div, text, div, text, div, text, div, text, div, text, div, text, div, text, div, text, div, text]
console.log(evenDivs[0].parentElement.hasChildNodes());
console.log(evenDivs[0].parentElement.lastChild);
console.log(evenDivs[0].parentElement.lastElementChild);
console.log(evenDivs[0].parentElement.firstChild);
console.log(evenDivs[0].parentElement.firstElementChild);
console.log(evenDivs[0].nextSibling);
console.log(evenDivs[0].nextElementSibling);
console.log(evenDivs[0].nextElementSibling.nextElementSibling);
console.log(evenDivs[0].previousSibling);
console.log(evenDivs[0].previousElementSibling);

view1.style.display="none";
view2.style.display="flex";
view2.style.flexDirection="row";
view2.style.flexWrap ="wrap";
view2.style.margin="10px";

while(view2.lastChild){
    view2.lastChild.remove();
}

const createDivs= (parent, iter)=>{
    const newDiv = document.createElement("div");
    newDiv.textContent=iter;
    newDiv.style.color="#FFF";
    newDiv.style.backgroundColor="orange";
    newDiv.style.width = "100px";
    newDiv.style.height = "100px";
    newDiv.style.margin="10px";
    newDiv.style.display="flex";
    newDiv.style.justifyContent="center";
    newDiv.style.alignItems="center";
    parent.append(newDiv);
}

for(let i=1;i<=12;i++){
    createDivs(view2,i);
}

//Event listener syntax
//addEventListener(event, fuction, userCapture)

const view2Div = view2.querySelector("div");
console.log(view2Div);
const doSomething = () => {
    //console.log("Doing something");
   view2Div.textContent="clicked";
}

view2Div.addEventListener("click",doSomething,false);
view2Div.removeEventListener("click",doSomething,false);

view2Div.addEventListener("click",(event)=>{
    alert("hi");
    console.log(event.target);
    event.target.textContent="clicked";
},false);


//readystatechange -> I am commenting the below code as HTML is modified
/*document.addEventListener("readystatechange",(event) =>{
    if(event.target.readystate==="complete"){
        console.log("readystate : complete");
        initApp();
    }
});

const initApp = () =>{
    const view = document.querySelector("#view2");
    const div = view.querySelector("div");
    const h2 = div.querySelector("h2");

    view.addEventListent("click",(event)=>{
        event.stopPropagation(); 
        view.style.backgroundColor = "purple"}); 
    div.addEventListent("click",(event)=>{div.style.backgroundColor = "blue"});
    h2.addEventListent("click",(event)=>{
        //h2.textContent="clicked"
        const myText =  event.target.textContent;
        myText === "hello" ? (event.target.textContent ="clicked") : (event.target.textContent = "hello");
    }); //if userCapture is set to false then the event bubble propogation will go from inside to outside. Meaning if h2 is clicked, the textcontent wil change to clicked and div bg color will change to blue and view bg color to purple.
    //incase of true it will propogate from outside to inside. Inorder to stop the propagation we need to use event.stopPropagation();
};*/

//Web Storage API ==> LocalStorage and Session Storage
const userObj = {
    name: "User1",
    age: 38,
    display : function (){
        console.log("hello");
    },
    hobbies : ["dance","sing","craft"],
}

sessionStorage.setItem("sesionStorageObject",JSON.stringify(userObj)); //object is converted to JSON object and stored, if not done it will be converted to string type and stored, it would be difficult to access the data as objects
//sessionStorage.removeItem("sessiontorageObject") //remove particular item, it returns null if the item name is not found
//sessionStorage.clear() //clears all the items
//sessionStorage.length; //No of items in the sessionstorage
console.log(JSON.parse(sessionStorage.getItem("sesionStorageObject")));

localStorage.setItem("localStorageObject",JSON.stringify(userObj)); //object is converted to JSON object and stored, if not done it will be converted to string type and stored, it would be difficult to access the data as objects
//localStorage.removeItem("localStorageObject") //remove particular item, it returns null if the item name is not found
//localStorage.clear() //clears all the items
//localStorage.length; //No of items in the localstorage
console.log(JSON.parse(localStorage.getItem("localStorageObject")));

//module

import guitar from "./Guitar.js";
import { shredding as shred, plucking } from "./Guitar.js";
//import * as Guitara from "./Guitar.js";
import User from "./User.js";
const userObj1 = new User("email@email.com","Esh");
console.log(userObj1);
userObj1.greetings();
guitar(); //Guitars.default.guitar();
shred(); //Guitars.shredding();
plucking();//Guitars.plucking();

//High Order Function
//It takes argument as function or returns a function
//forEach(), map(), filter(), reduce()

//Callback ==> chain of events, a function takes a callback function as an argument and calls it at the end of the function
function firstFunction(parameter, callback){
    //do stuff
    callback();
}
//callback hell - callbacks are not prefered  Promises replaces CALLBAck because it becomes to hard to follow when we have interlinked callbacks like below.
//AKA CAllback HELL
/*firstFunct(arg, function(){
    //do stuff
    secondFunction(arg,function(){

    });
});*/

//Promises
//JS usually synchronous meaning doing one thing at a time
//Promises are asynchronous -> promises allow other part of js code to be executed while it is working on other task
// 3 states : Pending, Fulfilled, Rejected

const myPromise = new Promise((resolve, reject) => {
    const error = false;
    if(!error)
    {
        resolve("Yes! resolved the promise");
    }
    else{
        reject("No, rejected the promise.");
    }
});

console.log(myPromise); //Promise {<fulfilled>: 'Yes! resolved the promise'} it returns the state of the Promise not the value
// if error is true ==> Promise {<rejected>: 'No, rejected the promise.'}
//to get the value instead of state using THENABLE
myPromise.then((value) => console.log(value)); //Yes! resolved the promise 
//you can call a chain of thenable passing value from one to another
myPromise.then((value) => {return value + 1;}).then((value)=>console.log(value)); //Yes! resolved the promise1
myPromise.then((value) => {return value + 1;}).then((value)=>console.log(value)).catch(err => console.error(err));  //main.js:569 No, rejected the promise.

const nextPromise = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("nextPromise is resolved")
    }, 3000);
})

nextPromise.then((value) => console.log(value));
myPromise.then((value) => console.log(value));

//FetchAPI
const userFetch = fetch("https://jsonplaceholder.typicode.com/users"); //fetch returns a promise
console.log(userFetch);
fetch("https://jsonplaceholder.typicode.com/users").then(response => { return response.json();})
.then((data) =>{
    //console.log(data)
    data.forEach((user) => console.log(user))
} );

//Async and Await
const userData = {
    userList: []
};

const coolFuc = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    userData.userList = data;
    console.log(userData.userList);
};

coolFuc();
console.log(userData.userList);

//Fetch second argument
const dadJoke = async () => {
    const response = await fetch("https://icanhazdadjoke.com/",{
        method : "GET",
        headers : {
            Accept:"application/json"
        }
    });
    const joke = await response.json();
    console.log(joke);
}
dadJoke();

const jokeObj = {
    "id": "Lmjqzsr49pb",
    "joke": "What did the Zen Buddist say to the hotdog vendor? Make me one with everything.",
 };

 const postObject = async (jokeObj) =>{
    const response = await fetch("https://httpbin.org/post", {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(postObject)
    });
    const jsonResponse = await response.json();
    console.log(jsonResponse);
 }
 postObject();