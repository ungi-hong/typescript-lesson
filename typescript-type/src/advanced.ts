interface Engineer {
  name: string;
  role: string;
}

interface Blogger {
  name: string;
  follower: number;
}

type EngineerBlogger = Engineer & Blogger;
// interface EngineerBlogger extends Engineer, Blogger {}

const quill: EngineerBlogger = {
  name: "Quill",
  role: "front-end",
  follower: 1000,
};

type NumberBoolean = number | boolean;
type StringNumber = string | number;
type Mix = NumberBoolean & StringNumber;

//関数のオーバーロード
// function toUpperCase(x: string): string;
function toUpperCase(x: number): number;
function toUpperCase(x: string | number) {
  // if (typeof x === "string") {
  //   x.toUpperCase();
  // }
  // return x
  return typeof x === "string" ? x.toUpperCase() : x;
}

//関数のオーバーロード

const upperHello = toUpperCase(0);

type NomadWorker = Engineer | Blogger;
function describeProfile(nomadWorker: NomadWorker) {
  console.log(nomadWorker.name);
  if ("role" in nomadWorker) {
    console.log(nomadWorker.role);
  }
  if ("follower" in nomadWorker) {
    console.log(nomadWorker.follower);
  }
}

class Dog {
  kind: "dog" = "dog";
  speak() {
    console.log("bow-bow");
  }
}

class Bird {
  kind: "bird" = "bird";
  speak() {
    console.log("tweet-tweet");
  }
  fly() {
    console.log("flutter");
  }
}

type Pet = Dog | Bird;

function havePet(pet: Pet) {
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
const input = document.getElementById("input") as HTMLInputElement;
input.value = "initial input value";

// HTMLElementは抽象的

//!(Non-null assertion operator) これはnullではないよという意味 as HTMLElement と同じ
// const input = document.getElementById("input")!;

// インデックスシグネチャ
interface Designer {
  name: string;
  // インデックスシグネチャ

  [index: string]: string;
}

const designer: Designer = {
  name: "Quill",
  role: "afa",
};

//optional chaining

interface DownloadedData {
  id: number;
  user?: {
    name?: {
      first: string;
      last: string;
    };
  };
}

const downloadedData: DownloadedData = {
  id: 1,
};
console.log(downloadedData.user?.name);

//Nullish Coalescing

const userData = downloadedData.user ?? "no-user";

// 下との違いは下は空文字だったりした場合falseを返してしまう。
// const userData = downloadedData.user || "no-user";

// lookUp型
type id = DownloadedData["id"];

// レストパラメーター
function advancedFn(...args: readonly [number, number, number, ...number[]]) {}
advancedFn(0, 3, 3);

//constアサーション

let milk = "milk" as const;
let drink = milk;

//number[]からタプル型に変わる,readonlyがつく。pushなどができない。
const array = [10, 20] as const;

const peter = {
  name: "peter",
  age: 38,
} as const;

// 型の中でtypeofはその型を取得するという。
type peterType = typeof peter;
