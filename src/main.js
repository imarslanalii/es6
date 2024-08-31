"use strict";

// var a = "test"

// console.log(a)

// function testVar(){
//     let a = 30
//     if(true){
//         let a = 50
//         console.log(a)
//     }
//     console.log(a)
// }

// testVar()

// function testLet(){
//     let a = 30
//     if(true){
//         let a = 50
//         console.log(a)
//     }
//     console.log(a)
// }
// testLet()

// for (let i = 0; i < 10;  i++){
//     console.log(i)
// }
// console.log(i)

// const color = []

// color.push('red')
// color.push('black')

// console.log(color)

// constructor 

// class user{
//     constructor(username, email){
//         this.username = username
//         this.email = email
//     }

//     static (countUser){
//         console.log('There are 10 users')
//     }

//     register(){
//         console.log(this.username+'is now registered')
//     }
// }

// // let dob = new User('bob', 'bob@gmail.com')

// // Bob.register()

// user.countUser()

// function greet($greetings){
//     console.log($greetings)
// }

// greet('Hello')


let args1 = [1,2,3];
let args2 = [4,5,6];

function test(){
  console.log(args1+','+args2);
}

//test.apply(null, args);
test(...args1,...args2);

console.log('hello world')