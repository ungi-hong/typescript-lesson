//クラスをデコレーションするものがdecorator

// 部分的にデコレーションすることも可能
//クラスの定義時に生成されている

// デコレーターファクトリー
// デコレーターを返すための関数
// デコレーターの引数に複数入れたい、入れるとエラーになる

function Logging(message: string) {
  return function (constructor: Function) {
    console.log(message);
    console.log(constructor);
  };
}

// newは予約語
function Component(template: string, selector: string) {
  console.log("aiueo");
  return function <T extends { new (...args: any[]): { name: string } }>(
    constructor: T
  ) {
    return class extends constructor {
      constructor(...args: any[]) {
        super(...args);

        const mountedElement = document.querySelector(selector);
        const instance = new constructor(32);

        if (mountedElement) {
          mountedElement.innerHTML = template;
          mountedElement.querySelector("h1")!.textContent = instance.name;
        }
      }
    };
  };
}

// プロパティデコレーター クラスの中で部分的に適用させる
// staticだったらクラス じゃなかったらproperty
function PropertyLogging(target: any, propertyKey: string) {
  console.log("propertyLogging");
  // プロトタイプがtargetに入る
  console.log(target);
  console.log(propertyKey);
}

// PropertyDescriptor
// ブラウザが裏側が持っているもの
// value writable enumerable configurable

function methodLogging(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  console.log("methodLogging");
  console.log(target);
  console.log(propertyKey);
  console.log(descriptor);
}

function enumerable(isEnumerable: boolean) {
  return function (
    _target: any,
    _propertyKey: string,
    _descriptor: PropertyDescriptor
  ) {
    return { enumerable: isEnumerable };
  };
}

function AccessorLogging(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  console.log("AccessorLogging");
  console.log(target);
  console.log(propertyKey);
  console.log(descriptor);
}

function ParameterLogging(
  target: any,
  propertyKey: string,
  parameterIndex: number
) {
  console.log("ParameterLogging");
  console.log(target);
  console.log(propertyKey);
  console.log(parameterIndex);
}

// componentがさきに動いている。デコレーターは下から上へ実行される。
// デコレーターファクトリーは上から下へ
@Logging("Logging user")
@Component("<h1>{{name}}</h1>", "#app")
class User {
  @PropertyLogging
  name = "Quill";
  constructor(public _age: number) {
    console.log("User was created!");
  }

  @AccessorLogging
  get age() {
    return this._age;
  }

  set age(value) {
    this._age = value;
  }
  @enumerable(false)
  @methodLogging
  greeting(@ParameterLogging message: string) {
    console.log("");
  }
}

let user1 = new User(32);
let user2 = new User(20);

console.log(user1);
