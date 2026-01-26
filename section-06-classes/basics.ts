class User {
  name: string;
  age: number;
  public hobbies: string[] = [];

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student {
  constructor(public user: User, public grade?: number) {
    this.user = user;
    this.grade = grade;
  }
}

const matej = new User('Matej', 25);
const studentMatej = new Student(matej);
console.log(matej);
console.log(studentMatej);
