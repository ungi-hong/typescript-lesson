// type AddFunc = (num1: number, num2: number) => number;+
interface AddFunc {
  (num1: number, num2: number): number;
}

let addFunc: AddFunc;
addFunc = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Nameable {
  name: string;
  nickName?: string;
}

const namebale: Nameable = {
  name: "Quill",
  nickName: "Quilla",
};

interface Human extends Nameable {
  age: number;
  greeting(message: string): void;
}

// const human: Human = {
//   name: "Quill",
//   age: 38,
//   greeting(message) {
//     console.log(message);
//   },
// };

class Developer implements Human {
  // NOTE: staticはinterfaceの影響を受けない
  // NOTE: interfaceはインスタンスで生まれるものだけを指定することできる。
  static id: number = 0;
  constructor(
    public name: string,
    public age: number,
    public experience: number
  ) {}

  greeting(message?: string) {
    console.log(message);
  }
}

const tmpDeveloper = {
  name: "Quill",
  age: 38,
  experience: 3,
  greeting(message: string) {
    console.log(message);
  },
};

const user: Human = tmpDeveloper;
// NOTE: interfaceで型定義しているものだけ参照することができる。
