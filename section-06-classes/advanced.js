"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User2 {
    firstName;
    lastName;
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
const user2 = new User2('John', 'Doe');
console.log(user2.fullName);
console.log(user2);
class User3 {
    _firstName = '';
    _lastName = '';
    set firstName(name) {
        if (name.length < 2) {
            throw new Error('First name must be at least 2 characters long.');
        }
        this._firstName = name;
    }
    set lastName(name) {
        if (name.length < 2) {
            throw new Error('Last name must be at least 2 characters long.');
        }
        this._lastName = name;
    }
}
const user3 = new User3();
user3.firstName = 'Keko';
user3.lastName = 'Fuco';
console.log(user3);
class Employee extends User3 {
    jobTitle;
    constructor(jobTitle) {
        super();
        this.jobTitle = jobTitle;
    }
    generateLabel() {
        return `Label: ${this.jobTitle} - ${this._lastName}`;
    }
}
const emplyee = new Employee('Dement');
emplyee.firstName = 'Matej';
emplyee.lastName = 'Bohac';
console.log(emplyee.generateLabel());
class UIElement {
    identifier;
    constructor(identifier) {
        this.identifier = identifier;
    }
    clone(targetLocation) {
        // some logic
    }
}
class SideDrawerElement extends UIElement {
    identifier;
    position;
    constructor(identifier, position) {
        super(identifier);
        this.identifier = identifier;
        this.position = position;
    }
}
const element = new SideDrawerElement('neviem', 'left');
console.log(element);
//# sourceMappingURL=advanced.js.map