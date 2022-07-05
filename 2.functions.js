"use strict";
exports.__esModule = true;
exports.getName = exports.fetchData = exports.printFormat = exports.format = exports.addStrings = void 0;
//Typing Parameters
function addNumbers(a, b) {
    return a + b;
}
//module.exports = addNumbers; // TS doesn't like module.exports so we write as below.
exports["default"] = addNumbers;
// const Functions (you can also add a default value to a parameter like str2: string = "")
var addStrings = function (str1, str2) {
    if (str2 === void 0) { str2 = ""; }
    return "".concat(str1, " ").concat(str2);
};
exports.addStrings = addStrings;
// Union Types |
var format = function (title, param) {
    return "".concat(title, " ").concat(param);
};
exports.format = format;
//Void Types (Functions where you don't return anything)
var printFormat = function (title, param) {
    console.log((0, exports.format)(title, param));
};
exports.printFormat = printFormat;
// Promise Functions
var fetchData = function (url) {
    return Promise.resolve("Data from ".concat(url));
};
exports.fetchData = fetchData;
// If you get an error saying Promise is not defined open tsconfig.json and change target to "target":"esnext"
// REST Parameters
function introduce(salutation) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    return "".concat(salutation, " ").concat(names.join(" "));
}
// TypeScript enforce types at compile time not at runtime.
function getName(user) {
    var _a, _b;
    return "".concat((_a = user === null || user === void 0 ? void 0 : user.first) !== null && _a !== void 0 ? _a : "first", " ").concat((_b = user === null || user === void 0 ? void 0 : user.last) !== null && _b !== void 0 ? _b : "last");
}
exports.getName = getName;
//Interface this with some js code Ex:2b.js-function-tests.js
// Running th code in Terminal:
// node 2b.js-function-tests.js // Cannot run js files as it says "Cannot find module './1.functions.js'"
// Compile the file first and then run the code in Terminal:
// npx tsc 2.functions.ts
// node 2b.js-function-tests.js
