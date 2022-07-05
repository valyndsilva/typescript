// import addNumbers, { addStrings, getName } from "./2.functions";

//default imports
import addNumbers from "./2.functions";
//destructured imports
import { addStrings, getName } from "./2.functions";

console.log(addNumbers(1, 2));
console.log(addStrings("a", "b"));
console.log(addStrings("a"));

console.log(getName({ first: "jack", last: "herrington" }));
