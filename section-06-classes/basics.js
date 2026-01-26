"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    name;
    age;
    hobbies = [];
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Student {
    user;
    grade;
    constructor(user, grade) {
        this.user = user;
        this.grade = grade;
        this.user = user;
        this.grade = grade;
    }
}
const matej = new User('Matej', 25);
const studentMatej = new Student(matej);
console.log(matej);
console.log(studentMatej);
//# sourceMappingURL=basics.js.map