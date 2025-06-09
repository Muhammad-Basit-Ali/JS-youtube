const ename = "Kashif"
const repoCount = 6

// console.log(ename + repoCount + " Value");

// console.log(`Hello my name is ${ename} and my repo Count is ${repoCount}`);


const gameName = new String ('Kashif-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('s'));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-4);
console.log(anotherString);


const anotherStringTwo = "  Kashif   ";
console.log(anotherStringTwo);
console.log(anotherStringTwo.trim());

const url = "https://kashif.com/kashif%20khan"

console.log(url.replace('%20', '-'));

console.log(gameName.split('-'));