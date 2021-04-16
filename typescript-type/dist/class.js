"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    static isAdult(age) {
        if (age > 17)
            return true;
        return false;
    }
    incrementAge() {
        // Person.species;
        this.age += 1;
    }
    greeting() {
        console.log(`Hello! My name is ${this.name}. I an ${this.age} year old`);
        this.explainJob();
    }
}
Person.species = "Homo sapiens";
// let person2 = Person;
// const quill = new Person("Quill", 38);
// quill.incrementAge();
// quill.greeting();
class Teacher extends Person {
    constructor(name, age, _subject) {
        super(name, age);
        this._subject = _subject;
    }
    explainJob() {
        console.log(`I am a teacher and I teach ${this.subject}`);
    }
    get subject() {
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
    static getInstance() {
        if (Teacher.instance)
            return Teacher.instance;
        Teacher.instance = new Teacher("Quill", 38, "Math");
        return Teacher.instance;
    }
}
// const teacher = new Teacher("Quill", 38, "Math");
// console.log(teacher.subject);
// Math.random();
// console.log(Person.species);
// teacher.greeting();
// const teacher = Teacher.getInstance();
// const teacher2 = Teacher.getInstance();
// console.log(teacher, teacher2);
