"use strict";
let addFunc;
addFunc = (n1, n2) => {
    return n1 + n2;
};
const namebale = {
    name: "Quill",
    nickName: "Quilla",
};
// const human: Human = {
//   name: "Quill",
//   age: 38,
//   greeting(message) {
//     console.log(message);
//   },
// };
class Developer {
    constructor(name, age, experience) {
        this.name = name;
        this.age = age;
        this.experience = experience;
    }
    greeting(message) {
        console.log(message);
    }
}
// NOTE: staticはinterfaceの影響を受けない
// NOTE: interfaceはインスタンスで生まれるものだけを指定することできる。
Developer.id = 0;
const tmpDeveloper = {
    name: "Quill",
    age: 38,
    experience: 3,
    greeting(message) {
        console.log(message);
    },
};
const user = tmpDeveloper;
// NOTE: interfaceで型定義しているものだけ参照することができる。
