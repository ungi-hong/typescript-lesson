"use strict";
//クラスをデコレーションするものがdecorator
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// 部分的にデコレーションすることも可能
//クラスの定義時に生成されている
// デコレーターファクトリー
// デコレーターを返すための関数
// デコレーターの引数に複数入れたい、入れるとエラーになる
function Logging(message) {
    return function (constructor) {
        console.log(message);
        console.log(constructor);
    };
}
// newは予約語
function Component(template, selector) {
    console.log("aiueo");
    return function (constructor) {
        return class extends constructor {
            constructor(...args) {
                super(...args);
                const mountedElement = document.querySelector(selector);
                const instance = new constructor(32);
                if (mountedElement) {
                    mountedElement.innerHTML = template;
                    mountedElement.querySelector("h1").textContent = instance.name;
                }
            }
        };
    };
}
// プロパティデコレーター クラスの中で部分的に適用させる
// staticだったらクラス じゃなかったらproperty
function PropertyLogging(target, propertyKey) {
    console.log("propertyLogging");
    // プロトタイプがtargetに入る
    console.log(target);
    console.log(propertyKey);
}
// PropertyDescriptor
// ブラウザが裏側が持っているもの
// value writable enumerable configurable
function methodLogging(target, propertyKey, descriptor) {
    console.log("methodLogging");
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
}
function enumerable(isEnumerable) {
    return function (_target, _propertyKey, _descriptor) {
        return { enumerable: isEnumerable };
    };
}
function AccessorLogging(target, propertyKey, descriptor) {
    console.log("AccessorLogging");
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
}
function ParameterLogging(target, propertyKey, parameterIndex) {
    console.log("ParameterLogging");
    console.log(target);
    console.log(propertyKey);
    console.log(parameterIndex);
}
// componentがさきに動いている。デコレーターは下から上へ実行される。
// デコレーターファクトリーは上から下へ
let User = class User {
    constructor(_age) {
        this._age = _age;
        this.name = "Quill";
        console.log("User was created!");
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
    greeting(message) {
        console.log("");
    }
};
__decorate([
    PropertyLogging
], User.prototype, "name", void 0);
__decorate([
    AccessorLogging
], User.prototype, "age", null);
__decorate([
    enumerable(false),
    methodLogging,
    __param(0, ParameterLogging)
], User.prototype, "greeting", null);
User = __decorate([
    Logging("Logging user"),
    Component("<h1>{{name}}</h1>", "#app")
], User);
let user1 = new User(32);
let user2 = new User(20);
console.log(user1);
