
////////////////////////////////////
// Linking a JavaScript File
let js = "JavaScript is amazing";
console.log(40 + 8 + 23 +10);
alert(js);

////////////////////////////////////
// Values and Variables
console.log("Jonas");
let age=23;
console.log("Age:",age);
console.log("Sex:",'Male');
console.log("Weight:",65.5,'KG');
//let firstName = "Matilda";

//console.log(firstName);
console.log("Age:",25);
console.log("Sex:",'Female');
console.log("Weight:",55.7,'KG');

/// Variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";
console.log(person);
console.log(myFirstJob);
console.log(myCurrentJob);
alert(PI);

////////////////////////////////////
// Data Types
let javascriptIsFun = true;
console.log(javascriptIsFun);

//console.log(typeof true);
console.log(typeof javascriptIsFun);
//console.log(typeof 23);
//console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(javascriptIsFun);

let year = 1991;
console.log(year);
console.log(typeof year);

//console.log(typeof null);

////////////////////////////////////
//
///let, const and var
//let age = 30;
//age = 31;

const birthYear = 1990;
console.log(birthYear);
// birthYear = 1990;
//const job;
let job3 = 'developer';
var job = 'programmer';
job = 'teacher'
console.log("Job:",job);
console.log(typeof job);
lastName = 'Schmedtmann';
console.log(lastName);
console.log(job3);
////////////////////////////////////
// Basic Operators
// Math operators
const now = 2021;
const ageJonas = now - 1994;
const ageSarah = now - 2002;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const fName = 'Jonas';
const lName = 'Schmedtmann';
console.log(fName + ' ' + lName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
console.log(x);
x--;
console.log(x);
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1994 > now - 2002);

////////////////////////////////////
// Operator Precedence
const noww = 2037;
const ageJon = noww - 1991;
const ageSara = noww - 2018;

console.log(noww - 1991 > noww - 2018);

let a, b;
a = b = 25 - 10 - 5; // x = y = 10, x = 10
console.log(a, b);

const averageAge = (ageJon + ageSara) / 2;
console.log(ageJon, ageSara, averageAge);

// Strings and Template Literals
/*
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);

console.log(`My name is marzan
and i love to learn new things
ok bye. . .`);

const jon = `hello i am ${firstName}, ${year-birthYear} year old and i am a ${job}!!!`;
console.log(jon);
*/
// Taking Decisions: if / else Statements
const ages = 15;

if (ages >= 18) {
  console.log('Sarah can start driving license 🚗');
} else {
  const yearsLeft = 18 - ages;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYeaR = 2012;

let century;
if (birthYeaR <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

const AGE = 20;
if(AGE >=18){
  console.log('Sarah can start driving license 🚗');
}else{
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`)
}

// Type Conversion and Coercion

// type conversion

const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('jonas'));
console.log(Number('1994'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');
console.log('23' > '18');

let n = '1' + 1; // '11'
n = n - 1;
console.log(n);
