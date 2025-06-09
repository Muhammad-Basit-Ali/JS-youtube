"use strict"
//  console.log("2" > 1);
//  console.log("02" > 1);

// console.log(null > 0);    false
// console.log(null == 0);   false
// console.log(null >= 0);   ture

// console.log(undefined == 0); false
// console.log(undefined > 0);  false
// console.log(undefined < 0);  false

//===

console.log ("2" === 2);


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

//  Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = 'Kashifdotcom'

let anothername = myYoutubename;
anothername = "chaiaurcack";

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: 'user@google.com',
    pkid: 'user@pkid'
}

let userTwo = userOne;

userTwo.email = "kashif@pkid.com";

console.log(userOne.email);
console.log(userTwo.email);

