"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user;
user = {
    email: 'nejaky@mail',
    password: 'abcd',
    login() {
        console.log('logging in ' + this.email);
    },
    logout() {
        console.log(this.email + 'logging out');
    },
};
user.login();
user.logout();
class AuthUser {
    email;
    password;
    age;
    constructor(email, password, age) {
        this.email = email;
        this.password = password;
        this.age = age;
        console.log(`Creating new user :${email}, age: ${age}, pass: ${password}`);
    }
    login() {
        throw new Error('Method not implemented.');
    }
    logout() {
        throw new Error('Method not implemented.');
    }
}
console.log(new AuthUser('Kek@email.com', '1234', 35));
//# sourceMappingURL=interface.js.map