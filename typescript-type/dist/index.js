"use strict";
let hasValue = true;
let count = 10;
let float = 3.14;
let negative = -0.12;
let single = "hello";
let double = "hello";
let back = `hello`;
// 型推論 型注釈
const person = {
    name: "Jack",
    age: 21,
};
const fruits = ["Apple", "Banana", "Grape"];
// tuple型
const book = ["business", 1500, false];
// Enum 列挙型
// enum CoffeeSize {
//   SHORT,
//   TALL,
//   GRANDE,
//   VENTI,
// }
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize["SHORT"] = "SHORT";
    CoffeeSize["TALL"] = "TALL";
    CoffeeSize["GRANDE"] = "GRANDE";
    CoffeeSize["VENTI"] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
const coffee = {
    hot: true,
    size: CoffeeSize.TALL,
};
// union型
let unionType = 10;
unionType = "hello";
let unionTypes = ["10", "string"];
// literal型
const apple = "apple";
let clothSize = "large";
const cloth = {
    color: "white",
    size: "medium",
};
function add(num1, num2) {
    return num1 + num2;
}
add(3, 2);
// void 何も返さない場合
function sayHello() {
    console.log("Hello");
}
function doubleAndHandle(num, cb) {
    const doubleNum = cb(num * 2);
    console.log(num * 2);
}
doubleAndHandle(21, (doubleNum) => {
    return doubleNum;
});
let unknownInput;
let anyInput;
let text;
unknownInput = "hello";
unknownInput = 21;
unknownInput = true;
text = anyInput;
if (typeof unknownInput === "string") {
    text = unknownInput;
}
function error(message) {
    throw new Error(message);
}
