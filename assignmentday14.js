"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

// Soal 1

// Membuat fungsi getFullName  
function getFullName(person) {
    // Mengembalikan gabungan firstName dan lastName dengan spasi  
    return "".concat(person.firstName, " ").concat(person.lastName);
}
var person = { firstName: "Ryan", lastName: "Hendrawan" };
var fullName = getFullName(person);
console.log(fullName);
// Soal 2
// Membuat fungsi wrapInArray dengan generic type T  
function wrapInArray(item) {
    // Mengembalikan item dalam bentuk array  
    return [item];
}
var numberArray = wrapInArray(24);
var stringArray = wrapInArray("Indonesia");
var booleanArray = wrapInArray(true);
console.log(numberArray);
console.log(stringArray);
console.log(booleanArray);
