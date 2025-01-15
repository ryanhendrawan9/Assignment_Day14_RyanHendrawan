// Soal 1

// Mendefinisikan type alias Person
type Person = {
    firstName: string;
    lastName: string;
};  

// Membuat fungsi getFullName  
function getFullName(person: Person): string {  
    // Mengembalikan gabungan firstName dan lastName dengan spasi  
    return `${person.firstName} ${person.lastName}`;  
}  

const person: Person = { firstName: "Ryan", lastName: "Hendrawan" };
const fullName: string = getFullName(person);

console.log(fullName);

// Soal 2

// Membuat fungsi wrapInArray dengan generic type T  
function wrapInArray<T>(item: T): T[] {  
    // Mengembalikan item dalam bentuk array  
    return [item];  
}  

const numberArray: number[] = wrapInArray(24); 
const stringArray: string[] = wrapInArray("Indonesia"); 
const booleanArray: boolean[] = wrapInArray(true); 

console.log(numberArray); 
console.log(stringArray); 
console.log(booleanArray); 

export {};
