// // console.log('Hi from index! 👋');

// // DATA TYPES
// // numbers, strings, boolean, undefined, null, lists/arrays, objects

// // Primitive/immutable
// const number = 100;
// const string = 'Hello';
// const boolean = true;
// const undef = undefined;
// const nul = null;

// // Mutable
// const array = [1, 2, 3];
// const object = { color: 'red' };

// // OBJECTS
// // object = { key: value }
// const user = {
//   firstName: 'Pedro',
//   lastName: 'Gonzalez',
// };

// // dot notation
// console.log('dot notation:', user.firstName);

// // brackets notation
// console.log('brackets notation:', user['firstName']);

// const lastName = 'firstName';
// console.log('31:', user.lastName); // Gonzalez
// console.log('32:', user[lastName]); // Pedro
// console.log('33:', user.fullName); // undefined

// user.fullName = 'Pedro Gonzalez';
// console.log('36:', user.fullName); // Pedro Gonzalez
// console.log('37:', user['fullName']); // Pedro Gonzalez

// // ARRAYS
// const numbersArray = [1, 2, 3, 4, 5];
// // pos 0, 1, 2, 3, 4
// console.log(numbersArray[0]); // 1
// console.log(numbersArray[50]); // undefined

// numbersArray[2] = 20;
// numbersArray[50] = 500;
// console.log(numbersArray[50]); // 500
// console.log(numbersArray);
// console.log(numbersArray.length);

// const numbersObject = {
//   1: 10,
//   2: 20,
//   3: 30,
// };

// // console.log(numbersObject.1)
// console.log(numbersObject['1']);

// const mixObject = {
//   1: 10,
//   2: 20,
//   3: 30,
//   myKey: 'red',
//   otherKey: 100,
//   isAlive: true,
//   100: {
//     details: {
//       color: 'red',
//       name: 'ferrari',
//     },
//   },
// };

// console.log(mixObject[1]);
// console.log(mixObject[100].details.name);
// console.log(mixObject[100].details['name']);

// mixObject.title = 'My amazing title!';
// mixObject[100].details.engine = 'V12';

// console.log(mixObject);

// // FUNCTIONS
// const carObject = {
//   name: 'ferrari',
//   color: 'red',
// };
// // console.log('89 carObject', carObject);

// // mutating an internal property
// const paintCar = function () {
//   carObject.color = 'blue';
// };

// paintCar();
// console.log('97 carObject', carObject);

// // reassigning a full object
// const changeCar = function (car) {
//   const newCar = { ...car };
//   newCar.color = 'blue';
//   return newCar;
// };

// const newCar = changeCar(carObject);
// console.log('carObject', carObject);
// console.log('newCar', newCar);

// const addSpeakers = function () {
//   carObject.speakers = 'booom booooOoooOoM!';
// };

// const addSpeakersNewCar = function (car) {
//   const newCar = { ...car };
//   newCar.speakers = 'booom booooOoooOoM!';
//   return newCar;
// };

// FUNCTIONS INSIDE OBJECTS
// const cat = {
//   name: 'Garfield',
//   color: 'orange',
//   getFood: function () {
//     console.log('Hoooman give me foood 🍝');
//   },
// };

// cat.getFood();

// const person = {
//   firstName: 'Heidi',
//   lastName: 'Dodge',
//   sayFullName: function () {
//     console.log(`${this.firstName} ${this.lastName}`);
//     console.log(this);
//   },
// };

// person.sayFullName();

// ITERATE THROUGH OBJECT KEYS
// const fruit = {
//   name: 'apple',
//   color: 'green',
//   emoji: '🍏',
//   // ...
// };

// console.log(fruit.name);

// // FOR OF
// const fruitKeys = Object.keys(fruit);
// console.log(fruitKeys);

// for (const key of fruitKeys) {
//   console.log('key', key);
//   console.log('value', fruit[key]);
// }

// FOR IN
// for (const key in fruit) {
//   console.log('key', key);
//   console.log('value', fruit[key]);
// }

// IN JS EVERYTHING IS AN OBJECT
const myString = 'thanks for this amazing lecture!';
console.log(myString);
console.log(myString.__proto__);
