"use strict";
function copy(
// extends keyofとは TはUキーのユニオン型と言う意味
value, key) {
    value["name"];
    return value;
}
// extendsは制約をつけるとき
// as 型をもっと絞るとき
// console.log(copy({ name: "Quill" }) as { name: string });
console.log(copy({ name: "Quill", age: 38 }, "name"));
class LightDatabase {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
    remove(item) {
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
const tmpDatabase = {
    id: 3,
    data: [32],
};
const fetchData = new Promise((resolve) => {
    setTimeout(() => {
        resolve("hello"), 3000;
    });
});
fetchData.then((data) => {
    data.toUpperCase();
});
const vegetables = ["tomato", "Broccoli", "Asparagus"];
let tmp;
let tmp4;
let tmp4_1;
let tmp4_2;
let tmp5;
// infer Rが帰ってくる 関数を入れて帰り値の肩を返す
const foo = () => "foo";
// type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
