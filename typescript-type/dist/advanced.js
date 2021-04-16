"use strict";
var _a, _b;
// interface EngineerBlogger extends Engineer, Blogger {}
const quill = {
    name: "Quill",
    role: "front-end",
    follower: 1000,
};
function toUpperCase(x) {
    // if (typeof x === "string") {
    //   x.toUpperCase();
    // }
    // return x
    return typeof x === "string" ? x.toUpperCase() : x;
}
//関数のオーバーロード
const upperHello = toUpperCase(0);
function describeProfile(nomadWorker) {
    console.log(nomadWorker.name);
    if ("role" in nomadWorker) {
        console.log(nomadWorker.role);
    }
    if ("follower" in nomadWorker) {
        console.log(nomadWorker.follower);
    }
}
class Dog {
    constructor() {
        this.kind = "dog";
    }
    speak() {
        console.log("bow-bow");
    }
}
class Bird {
    constructor() {
        this.kind = "bird";
    }
    speak() {
        console.log("tweet-tweet");
    }
    fly() {
        console.log("flutter");
    }
}
function havePet(pet) {
    pet.speak();
    switch (pet.kind) {
        case "bird":
            pet.fly();
    }
    if (pet instanceof Bird) {
        pet.fly();
    }
}
havePet(new Dog());
//型アサーション jsxやvueはasを使用した方がタグがhtml上で使われているのでわかりづらくなる
// const input = <HTMLInputElement>document.getElementById("input");
const input = document.getElementById("input");
input.value = "initial input value";
const designer = {
    name: "Quill",
    role: "afa",
};
const downloadedData = {
    id: 1,
};
console.log((_a = downloadedData.user) === null || _a === void 0 ? void 0 : _a.name);
//Nullish Coalescing
const userData = (_b = downloadedData.user) !== null && _b !== void 0 ? _b : "no-user";
// レストパラメーター
function advancedFn(...args) { }
advancedFn(0, 3, 3);
//constアサーション
let milk = "milk";
let drink = milk;
//number[]からタプル型に変わる,readonlyがつく。pushなどができない。
const array = [10, 20];
const peter = {
    name: "peter",
    age: 38,
};
