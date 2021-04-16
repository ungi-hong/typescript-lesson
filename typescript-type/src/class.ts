abstract class Person {
  static species = "Homo sapiens";
  static isAdult(age: number) {
    if (age > 17) return true;
    return false;
  }

  constructor(public readonly name: string, protected age: number) {}

  incrementAge() {
    // Person.species;
    this.age += 1;
  }

  greeting(this: Person) {
    console.log(`Hello! My name is ${this.name}. I an ${this.age} year old`);
    this.explainJob();
  }
  abstract explainJob(): void;
}

// let person2 = Person;
// const quill = new Person("Quill", 38);
// quill.incrementAge();

// quill.greeting();

class Teacher extends Person {
  private static instance: Teacher;
  explainJob() {
    console.log(`I am a teacher and I teach ${this.subject}`);
  }
  get subject(): string {
    if (!this._subject) {
      throw new Error("There is no subject.");
    }
    return this._subject;
  }
  set subject(value) {
    if (!value) {
      throw new Error("There is no subject.");
    }
    this._subject = value;
  }
  private constructor(name: string, age: number, private _subject: string) {
    super(name, age);
  }
  static getInstance() {
    if (Teacher.instance) return Teacher.instance;

    Teacher.instance = new Teacher("Quill", 38, "Math");
    return Teacher.instance;
  }

  // greeting() {
  //   console.log(
  //     `Hello! My name is ${this.name}. I an ${this.age} year old. I teach ${this._subject}.`
  //   );
  // }
}

// const teacher = new Teacher("Quill", 38, "Math");
// console.log(teacher.subject);

// Math.random();
// console.log(Person.species);

// teacher.greeting();
// const teacher = Teacher.getInstance();
// const teacher2 = Teacher.getInstance();
// console.log(teacher, teacher2);
