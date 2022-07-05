//Typing Parameters
function addNumbers(a: number, b: number): number {
  return a + b;
}
//module.exports = addNumbers; // TS doesn't like module.exports so we write as below.
export default addNumbers;

// const Functions (you can also add a default value to a parameter like str2: string = "")
export const addStrings = (str1: string, str2: string = ""): string =>
  `${str1} ${str2}`;

// Union Types |
export const format = (title: string, param: string | number): string =>
  `${title} ${param}`;

//Void Types (Functions where you don't return anything)
export const printFormat = (title: string, param: string | number): void => {
  console.log(format(title, param));
};

// Promise Functions
export const fetchData = (url: string): Promise<string> =>
  Promise.resolve(`Data from ${url}`);
// If you get an error saying Promise is not defined open tsconfig.json and change target to "target":"esnext"

// REST Parameters
function introduce(salutation: string, ...names: string[]): string {
  return `${salutation} ${names.join(" ")}`;
}

// TypeScript enforce types at compile time not at runtime.
export function getName(user: { first: string; last: string }): string {
  return `${user?.first ?? "first"} ${user?.last ?? "last"}`;
  // use optional chaining to get the value of first and last if they exist else undefined
  // use nullish coalescing ??. If undefined on one side use the other side value.
}
//Interface this with some js code Ex:2b.js-function-tests.js
// Running th code in Terminal:
// node 2b.js-function-tests.js // Cannot run js files as it says "Cannot find module './1.functions.js'"
// Compile the file first and then run the code in Terminal:
// npx tsc 2.functions.ts
// node 2b.js-function-tests.js
