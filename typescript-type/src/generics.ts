function copy<T extends { name: string }, U extends keyof T>(
  // extends keyofとは TはUキーのユニオン型と言う意味
  value: T,
  key: U
): T {
  value["name"];
  return value;
}
// extendsは制約をつけるとき

// as 型をもっと絞るとき
// console.log(copy({ name: "Quill" }) as { name: string });

console.log(copy({ name: "Quill", age: 38 }, "name"));
type K = keyof { name: string; age: number };

class LightDatabase<T extends string | number | boolean> {
  private data: T[] = [];
  add(item: T) {
    this.data.push(item);
  }
  remove(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }
  get() {
    return this.data;
  }
}
const stringLightDatabase = new LightDatabase();
stringLightDatabase.add("Apple");
stringLightDatabase.add("Banana");
stringLightDatabase.add("Grape");
console.log(stringLightDatabase.get());

interface TmpDatabase<T> {
  id: number;
  data: T[];
}

const tmpDatabase: TmpDatabase<number> = {
  id: 3,
  data: [32],
};

interface Todo {
  title: string;
  text: string;
}

//utility型 typescriptに内蔵されているかた
type Todoable = Partial<Todo>;
type ReadTodo = Readonly<Todo>;

const fetchData: Promise<string> = new Promise((resolve) => {
  setTimeout(() => {
    resolve("hello"), 3000;
  });
});

fetchData.then((data) => {
  data.toUpperCase();
});

const vegetables: Array<string> = ["tomato", "Broccoli", "Asparagus"];

interface ResponseData<T extends { message: string } = any> {
  data: T;
  status: number;
}
let tmp: ResponseData;

interface Vegetables {
  readonly tomato: string;
  pumpkin: string;
}

// mapptedTypesと言 　型にロジックを入れるというやり方だからややこしくなりやすい
type MappedTypes = {
  -readonly [P in keyof Vegetables]-?: P;
};

type ConditionalTypes = "tomato" extends string ? number : boolean;

// { tomato: infer R } inferはanyと同じ
// { tomato: infer R }に{ tomato: "tomato" }を代入できるか
// inferは型推論してくれる。なのでinfer R は"tomato"型 なのでConditionalTypeInferは "tomato"(R)型になる

type ConditionalTypeInfer = { tomato: "tomato" } extends { tomato: infer R }
  ? R
  : boolean;

// 'tomato'だったときと"pumpkinだったときの二つを考えるその答えの方がユニオン型になる

type DistributiveConditionalTypes<T> = T extends "tomato" ? number : boolean;
let tmp4: DistributiveConditionalTypes<"tomato" | "pumpkin">;
let tmp4_1: DistributiveConditionalTypes<"tomato">;
let tmp4_2: DistributiveConditionalTypes<"pumpkin">;
let tmp5: NonNullable<string | null>;

// infer Rが帰ってくる 関数を入れて帰り値の肩を返す
const foo = () => "foo";

type A = ReturnType<typeof foo>; // string
type B = ReturnType<typeof window.setTimeout>; // number
type C = ReturnType<() => void>; // void

// type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
