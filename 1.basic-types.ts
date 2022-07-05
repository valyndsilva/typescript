//Specifying Basic Types
const myValue: string = "jack";

let myVariable: number = 1;
myVariable += 1;

let myBoolean: boolean = true;

let myRegex: RegExp = /foo/;

console.log(myVariable);

// Typing Arrays
const names: string[] = myValue.split("");
let myNames: Array<string> = ["a"]; // Another way of writing an array using generic type Array<string>
let numbers: number[] = [1, 2, 3];
const myNumbers: Array<number> = [1, 2, 3]; // Another way of writing an array using generic type Array<number>

//Typing Objects
interface Person {
  first: string;
  last: string;
}

const myPerson: Person = {
  first: "jack",
  last: "herrington",
};

// Record type is a TypeScript utility type that creates an object type that has properties of type Keys with corresponding values of type Type
// Record<key,value>
const data: Record<number, string> = {
  10: "megan",
  20: "lori",
};

data[5] = "joe";

//Conditionals and Expressions
if (data[5] === "joe") {
}

// Loops
for (let i = 0; i < 10; i++) {
  console.log(i);
}

myNumbers.forEach((a) => console.log(a));
const multipliedValues = myNumbers.map((a) => a * 10);
