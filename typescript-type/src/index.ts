let hasValue = true;
let count: number = 10;
let float: number = 3.14;
let negative: number = -0.12;
let single: string = "hello";
let double: string = "hello";
let back: string = `hello`;

// 型推論 型注釈

const person: { name: string; age: number } = {
  name: "Jack",
  age: 21,
};

const fruits: string[] = ["Apple", "Banana", "Grape"];

// tuple型

const book: [string, number, boolean] = ["business", 1500, false];

// Enum 列挙型

// enum CoffeeSize {
//   SHORT,
//   TALL,
//   GRANDE,
//   VENTI,
// }

enum CoffeeSize {
  SHORT = "SHORT",
  TALL = "TALL",
  GRANDE = "GRANDE",
  VENTI = "VENTI",
}

const coffee = {
  hot: true,
  size: CoffeeSize.TALL,
};

// union型

let unionType: number | string = 10;
unionType = "hello";

let unionTypes: (number | string)[] = ["10", "string"];

// エイリアス（別名）
type ClothSize = "small" | "medium" | "large";

// literal型
const apple: "apple" = "apple";

let clothSize: "small" | "medium" | "large" = "large";

const cloth: {
  color: string;
  size: ClothSize;
} = {
  color: "white",
  size: "medium",
};

function add(num1: number, num2: number): number {
  return num1 + num2;
}
add(3, 2);

// void 何も返さない場合
function sayHello(): void {
  console.log("Hello");
}

function doubleAndHandle(num: number, cb: (num: number) => number): void {
  const doubleNum = cb(num * 2);
  console.log(num * 2);
}

doubleAndHandle(21, (doubleNum) => {
  return doubleNum;
});

let unknownInput: unknown;
let anyInput: any;
let text: string;
unknownInput = "hello";
unknownInput = 21;
unknownInput = true;
text = anyInput;

if (typeof unknownInput === "string") {
  text = unknownInput;
}

function error(message: string): never {
  throw new Error(message);
}
