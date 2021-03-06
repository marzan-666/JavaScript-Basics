'use strict';
/*

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: { // Destructuring Objects 
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function(starterIndex,mainIndex){
    return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];   
  },

  orderDelivery: function({
  starterIndex = 1, 
  mainIndex = 0,
  time = '20:00', 
  address,
  }){
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  }

};

restaurant.orderDelivery ({  // Destructuring Objects 
  time:'22:30',
  address: 'Puran Dhaka',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery ({
  //time:'22:30',
  address: 'Puran Dhaka',
  //mainIndex: 2,
  starterIndex: 1,
});

const {name,openingHours,categories} = restaurant;
console.log(name,openingHours,categories);

const{
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName,hours,tags);

   // default values

const {menu = [], starterMenu: starters = [] }= restaurant;
console.log(menu,starters);

// Mutating variables

let a1 = 111;
let b1 = 999;
let c1 = 888;
const obj = {a1: 23, b1: 7, c1: 14};

({a1,b1,c1} = obj ) ;

console.log(a1,b1,c1);

// Nested objects

const { fri:{open,close} } = openingHours;  // Destructuring Objects 
//console.log(fri);
console.log(open,close);

///// Destructuring Arrays
const arr = [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x,y,z] = arr ;
console.log(x,y,z);
console.log(arr);

//const [first, , second] = restaurant.categories; // putting a coma means indicatin the 3rd element
//console.log(first,second);

let [main, ,secondary] = restaurant.categories;
console.log('Before switching:',main,secondary);


// switching variables

//const temp = main;
//main = secondary;
//secondary = temp;
//console.log(main,secondary);

[main,secondary] = [secondary,main]; // switching variables 2
console.log('After switching:',main,secondary);

console.log(restaurant.order(2,0));

const [starter, mainCourse] = restaurant.order(2,0);
console.log(starter,mainCourse);

// Nested destructuring

const nested = [2, 4, [5,6]]; // nested array

//const [i, , j] = nested;
//console.log(i,j);

const [i, , [j,k]] = nested;
console.log(i,j,k); // separated values of array 

// Default values

const [p,q,r] = [8,9];
console.log(p,q,r);

const[p1=1,q1=1,r1=1] = [8,9]; // if we remove 9 the q will be 1
console.log(p1,q1,r1);

*/


/*
///// The Spread Operators

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: { 
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function(starterIndex,mainIndex){
    return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];   
  },

  orderDelivery: function({
    starterIndex = 1, 
    mainIndex = 0,
    time = '20:00', 
    address,
  }){
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta: function(ing1,ing2,ing3){
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  }

};

/////////// The Spread Operators

const arr = [7,8,9];
const badNewArr = [1,2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1,2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1,2,7,8,9,);

const newMenu = [...restaurant.mainMenu,'Gnocci']; // Gnocci added to main menu
console.log(newMenu);

// Copy Array

const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays

const menu = [...restaurant.starterMenu,...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays , strings , maps, sets, NOT objects

const str = 'Marzan';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);

// Real-life Example

//const ingredients = [prompt('Let\'s make pasta! Ingredients 1?')];
const ingredients = [  ///prompt window
  prompt("Let's make pasta! Ingredients 1?"),
  prompt("Ingredients 2?"),
  prompt("Ingredients 3?")
];
console.log(ingredients);

//restaurant.orderPasta(ingredients[0],ingredients[1],ingredients[2]);
restaurant.orderPasta(...ingredients);

// Objects

const newRestaurant = {foundedIn: 2020, ...restaurant, founder: 'Marzan'};
console.log(newRestaurant);

const restaurantCopy =  {...restaurant};
restaurantCopy.name = 'Cafe de Rio';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/


/*
/////// Rest Pattern and Parameters 

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: { 
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function(starterIndex,mainIndex){
    return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];   
  },

  orderDelivery: function({
    starterIndex = 1, 
    mainIndex = 0,
    time = '20:00', 
    address,
  }){
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta: function(ing1,ing2,ing3){
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza : function(mainIngredient, 
    ...otherIngredients){
      console.log(mainIngredient);
      console.log(otherIngredients);
    }

};

 ///1) Destructuring

 const arr = [1,2, ...[3,4]];

const [a, b, ...others] = [1,2,3,4,5]; // REST 
console.log(a,b, others);

const [pizza ,  , Risotto, ...otherfood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza,Risotto,otherfood);

// Objects

const {sat, ...weekdays} = restaurant.openingHours;
console.log(weekdays);

//// 2) Functions


const add = function (...numbers){
  console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum = sum + numbers[i];
  console.log(sum);
};
add(2,3);
add(5,3,7,2);
add(8,2,5,3,2,1,4);

const x = [23,5,7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives' , 'spinach');
restaurant.orderPizza('mushrooms');
*/


/*
////// Short circuiting (&& and ||)

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: { 
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function(starterIndex,mainIndex){
    return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];   
  },

  orderDelivery: function({
    starterIndex = 1, 
    mainIndex = 0,
    time = '20:00', 
    address,
  }){
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta: function(ing1,ing2,ing3){
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza : function(mainIngredient, 
    ...otherIngredients){
      console.log(mainIngredient);
      console.log(otherIngredients);
    }

};


// Use ANY data type, return ANY data type, short-circuiting

console.log(3 || 'Marzan');
console.log('' || 'Marzan');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null); // Hello is the first truthy value


//restaurant.numGuests = 23 ;
restaurant.numGuests = 0 ;
const guests1 = restaurant.numGuests ? restaurant.numGuests :10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('---- AND ----');

console.log(0 && 'Marzan'); // opposite of || (OR) operator
console.log(7 && 'Marzan'); // only true if all elements are true

console.log('Hello' && 23 && null && 'Marzan');

// Practical example
if(restaurant.orderPizza){
  restaurant.orderPizza('mushrooms','spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms','spinach');


///// The Nullish Coalescing Operator (??)

//restaurant.numGuest = 0; // Nullis: null and undefined
const guest = restaurant.numGuest || 10 ;
console.log(guest);

const guessCorrect = restaurant.numGuest ?? 10;
console.log(guessCorrect);
*/

////// Looping arrays , The for-of Loop
/*
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: { 
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function(starterIndex,mainIndex){
    return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];   
  },

  orderDelivery: function({
    starterIndex = 1, 
    mainIndex = 0,
    time = '20:00', 
    address,
  }){
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta: function(ing1,ing2,ing3){
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza : function(mainIngredient, 
    ...otherIngredients){
      console.log(mainIngredient);
      console.log(otherIngredients);
    }

};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for(const item of menu) console.log(item);

for(const item of menu.entries()){
  //console.log(item);
  console.log(`${item[0] +1 } : ${item[1]}`);
  
}

for(const [i,el] of menu.entries()){
  //console.log(item);
  //console.log(`${item[0] +1 } : ${item[1]}`);
  console.log(`${i+1} : ${el}`);
}
//console.log(...menu.entries());
*/

//// Enhanced Object Literals
/*
const weekdays = ['mon', 'tue', 'wed', 'thu','fri','sat', 'sun'];
const openingHours = { 
  [weekdays[3]]: { // instead of thu:
    open: 12,
    close: 22,
  },
  [weekdays[4]]: { // instead of fri:
    open: 11,
    close: 23,
  },
  [`${2+4}`]: {  // instead of sat:
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //openingHours: openingHours, // before ES6
  openingHours, // ES6 Object Literals

  order(starterIndex,mainIndex){
    return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];   
  },

  orderDelivery({
    starterIndex = 1, 
    mainIndex = 0,
    time = '20:00', 
    address,
  }){
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta(ing1,ing2,ing3){
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza(mainIngredient, 
    ...otherIngredients){
      console.log(mainIngredient);
      console.log(otherIngredients);
    }

};
*/

/*
///////////  Optional Chaining

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: { 
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function(starterIndex,mainIndex){
    return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];   
  },

  orderDelivery: function({
    starterIndex = 1, 
    mainIndex = 0,
    time = '20:00', 
    address,
  }){
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta: function(ing1,ing2,ing3){
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza : function(mainIngredient, 
    ...otherIngredients){
      console.log(mainIngredient);
      console.log(otherIngredients);
    }

};

//console.log(restaurant.openingHours.mon.open);
if(restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);
console.log(restaurant.openingHours.fri.open);

// with optional chaining

console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example

const days = ['mon', 'tue', 'wed', 'thu','fri','sat', 'sun'];

for(const day of days){
  console.log(day);
  //const open = restaurant.openingHours[day]?.open;
  //const open = restaurant.openingHours[day]?.open || 'closed'; // but for this or operator sat will show closed because it opens at 0 and 0 is falsy value
  const open = restaurant.openingHours[day]?.open ?? 'closed'; // solution and its called Nullish Coalescing , optional chaining and nullish coalescing working together
  console.log(`On ${day}, we open at ${open}`);
}

// Methods

console.log(restaurant.order?.(0,1)?? 'Method does not exist');
console.log(restaurant.orderBiriyani?.(0,1) ?? 'Method does not exist');

// Arrays

const users = [
  {name: 'Marzan', email: 'marzan@javascript.com'}
];

console.log(users[0]?.name ?? 'User Array is Empty'); // instead of using if else

if(users.length > 0) console.log(users[0].name);
else console.log('User array is Empty');
*/

/*
///// Looping Objects: Object keys , Values and Entries


const day =['mon','tue','wed','thu','fri','sat','sun'];
const openingHours = { 
  [day[3]]: { // instead of thu:
    open: 12,
    close: 22,
  },
  [day[4]]: { // instead of fri:
    open: 11,
    close: 23,
  },
  [day[5]]: {  // instead of sat:
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order(starterIndex,mainIndex){
    return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];   
  },

  orderDelivery({
    starterIndex = 1, 
    mainIndex = 0,
    time = '20:00', 
    address,
  }){
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta(ing1,ing2,ing3){
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza(mainIngredient, 
    ...otherIngredients){
      console.log(mainIngredient);
      console.log(otherIngredients);
    }

};

// Property Names
const properties =  Object.keys(openingHours);
console.log(properties);
console.log(`We are open on ${properties.length} days`);

let openStr = `We are open on ${properties.length} days`
for (const day of properties){
  openStr += ` ${day},`;
}
console.log(openStr);
for(const day of Object.keys(openingHours)){
  console.log(day);
}

// Property values

const values = Object.values(openingHours)
  console.log(values);

// Entries

const entries = Object.entries(openingHours);
console.log(entries);

for(const x of entries){
  console.log(x);
}

for(const [key,{open,close}] of entries){
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
*/

//////// SET
/*
const day =['mon','tue','wed','thu','fri','sat','sun'];
const openingHours = { 
  [day[3]]: { // instead of thu:
    open: 12,
    close: 22,
  },
  [day[4]]: { // instead of fri:
    open: 11,
    close: 23,
  },
  [day[5]]: {  // instead of sat:
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order(starterIndex,mainIndex){
    return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];   
  },

  orderDelivery({
    starterIndex = 1, 
    mainIndex = 0,
    time = '20:00', 
    address,
  }){
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta(ing1,ing2,ing3){
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza(mainIngredient, 
    ...otherIngredients){
      console.log(mainIngredient);
      console.log(otherIngredients);
    }

};

const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(orderSet);
console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Biriyani'));
orderSet.add('Garlic Bread');
console.log(orderSet);
orderSet.delete('Risotto');
console.log(orderSet);
//orderSet.clear();  // Delete all
//console.log(orderSet); 


//console.log(new Set('Marzan'));
//console.log(new Set());
//console.log(orderSet[0]); // in Set there is no index

for(const order of orderSet){
  console.log(order);
}

// Example

const staff = ['Waiter','Chef','Waiter','Manager','Chef','Waiter'];

const staffUnique = new Set(staff);
console.log(staff);
console.log(staffUnique);

const staffUnique2 =[...new Set(staff)];
console.log(staffUnique2);

console.log(new Set(['Waiter','Chef','Waiter','Manager','Chef','Waiter']).size);

console.log(new Set('Marzan Khan').size);
*/


///// Maps : Fundamentals
/*
const day =['mon','tue','wed','thu','fri','sat','sun'];
const openingHours = { 
  [day[3]]: { // instead of thu:
    open: 12,
    close: 22,
  },
  [day[4]]: { // instead of fri:
    open: 11,
    close: 23,
  },
  [day[5]]: {  // instead of sat:
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order(starterIndex,mainIndex){
    return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];   
  },

  orderDelivery({
    starterIndex = 1, 
    mainIndex = 0,
    time = '20:00', 
    address,
  }){
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta(ing1,ing2,ing3){
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza(mainIngredient, 
    ...otherIngredients){
      console.log(mainIngredient);
      console.log(otherIngredients);
    }

};


const rest = new Map();
rest.set('name','Cafe de Rio');
rest.set(1,'Firenze, Italy');
console.log(rest.set(2,'Lisbon, Portugal'));

rest.set('categories',['Italian', 'Pizzeria', 
'Vegetarian', 'Organic'])
.set('open',11)
.set('close',23)
.set(true,'We are open :D')
.set(false, 'We are closed :(');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));

//rest.clear();
rest.delete(2);

rest.set([1,2], 'Test');
console.log(rest);
console.log(rest.size);

console.log(rest.get([1,2]));

const arr = [1,2];
rest.set(arr,'Test');
console.log(rest.get(arr));
rest.set(document.querySelector('h1'),'Heading');


//// Maps : Iteration


const question = new Map([
  ['question','What is the best programming language in the world?'],
  [1,'C'],
  [2,'Java'],
  [3,'JavaScript'],
  ['correct',3],
  [true,'Correct'],
  [false,'Try Again!!!'],
]);

console.log(question);

console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));

console.log(hoursMap);

// Quiz app

for (const [key,value] of question ){
  if(typeof key === 'number'){
    console.log(`Answer ${key} : ${value}`);
  }
}

const answer = Number(prompt('Your answer'));
console.log(answer);

console.log(question.get(question.get('correct') === answer ));

console.log([...question]);

//console.log(question.entries());
console.log(...question.keys());
console.log(...question.values());
*/



/*
/////// String part 1

const day =['mon','tue','wed','thu','fri','sat','sun'];
const openingHours = { 
  [day[3]]: { // instead of thu:
    open: 12,
    close: 22,
  },
  [day[4]]: { // instead of fri:
    open: 11,
    close: 23,
  },
  [day[5]]: {  // instead of sat:
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order(starterIndex,mainIndex){
    return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];   
  },

  orderDelivery({
    starterIndex = 1, 
    mainIndex = 0,
    time = '20:00', 
    address,
  }){
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta(ing1,ing2,ing3){
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza(mainIngredient, 
    ...otherIngredients){
      console.log(mainIngredient);
      console.log(otherIngredients);
    }

};

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('8737'[0]);

console.log(airline.length);
console.log('8737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4,7)); // begin and end

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ')+1));

console.log(airline.slice(-2));
console.log(airline.slice(1,-1));

const checkMiddleSeat = function(seat){
  // B and E are middle seats
  const s = seat.slice(-1);
  if(s === 'B' || s === 'E'){
    console.log('You got the middle seat');
  }else{
    console.log('You got lucky');
  }
}

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('Marzan'));
console.log(typeof new String('Marzan'));

console.log(typeof new String('Marzan').slice(1));

/////// String part 2

console.log(airline.toLocaleLowerCase());
console.log(airline.toLocaleUpperCase());

// Fix Capitalization in name

const passenger = 'mArZan';
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase()+
passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing emails

const email = 'hello@marjan.com';
const loginEmail = 'Hello@marjan.com \n';

const lowerEmail = loginEmail.toLocaleLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replacing 

const priceGB = '288,97£';
const priceUS = priceGB.replace('£' , '$').replace(',','.');
console.log(priceUS);

const announcement = 'All passengers come to Boarding door 23. Boarding door 23!';
console.log(announcement.replace('door','gate'));
console.log(announcement.replaceAll('door','gate'));

console.log(announcement.replace(/door/,'gate'));
console.log(announcement.replace(/door/g,'gate'));

// Booleans

const plane1 = 'A320neo';
console.log(plane1.includes('A320'));
console.log(plane1.includes('Boeing'));
console.log(plane1.startsWith('Air')); // first 3 letters should be same

if(plane1.startsWith('A32') && plane1.endsWith('neo'));{
  console.log('Part of the new family');
}

// Practice

const checkBaggage = function(items){
  const baggage = items.toLocaleLowerCase();
  if(baggage.includes('knife') || baggage.includes('gun')){
    console.log('You are NOT allowed on board');
  }else{
    console.log('Welcome abroad');
  }
}

checkBaggage('I have a laptop, some food and a pocket knife');
checkBaggage('Socks and Camera');
checkBaggage('Got some snacks and a gun for protection');

/////// String part 3

console.log('a+very+nice+string'.split('+'));
console.log('Marzan Khan'.split(' '));

const [firstName,lastName] = 'Jonas Khan'.split(' ');
const newName = ['Mr.',firstName,lastName.toLocaleUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function(name){
  const names = name.split(' ');
  const namesUpper = [];

  for(const n of names){
    //namesUpper.push(n[0].toLocaleUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0],n[0].toLocaleUpperCase()));
  }
  console.log(namesUpper.join(' '));
}
capitalizeName('jessica and smith davis');
capitalizeName('marzan khan');

// Padding

const message = 'Go to gate 23!';
console.log(message.padStart(20,'+').padEnd(30,'+'));
console.log('Marzan'.padStart(20,'+').padEnd(30,'+'));

const maskCreditCard = function(number){
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length,'*');
}
console.log(maskCreditCard(43322344545454565565));
console.log(maskCreditCard('34356556456665656'));

// repeat

const message2 = 'Bad weather...All Departures Delayed...';
console.log(message2.repeat(3));

const planesInline = function(n){
  console.log(`There are ${n} planes in line ${':)'.repeat(n)}`);
}
planesInline(5);
planesInline(3);
planesInline(12);
*/

/*
////// Spring Method Practice

const getCode = str => str.slice(0,3).toUpperCase();

const flights = '_Delayed_Departure;fdffdfderer54353;tx3434424;11:25+_Arrival;fdgg34344;fdsa43443;11:45+_Delayed_Arrival;fdf4545675;faas3434;12:05+_Departure;fasd123245567;lis4554566;12:30';

for (const flight of flights.split('+')){
  //console.log(flight);
  const [type,from,to,time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''} ${type.replaceAll('_',' ')} ${getCode(from)} ${getCode(to)} (${time.replace(':','h')})`.padStart(36);
  console.log(output);
}
*/
