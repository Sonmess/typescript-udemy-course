"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let names = ['Max', 'Matej'];
let names2 = ['Kuk', 'Puk'];
let store = {};
store.name = 'Max';
store.isInstructor = true;
let nameStore = {};
nameStore.firstName = 'Matej';
nameStore.lastName = 'Bohac';
function merge(a, b) {
    return [a, b];
}
const ids = merge(1, 2);
const listOfNames = merge('matej', 'keko');
console.log(ids, listOfNames);
function anotherMerge(a, b) {
    return [a, b];
}
const anotherList = anotherMerge(12, 'keko');
console.log(anotherList);
function mergeObj(a, b) {
    return { ...a, ...b };
}
const mergedObjects = mergeObj({ test: 'test' }, { pokemon: 'bulbasaur', pokedex: 1 });
console.log(mergedObjects);
class User {
    id;
    constructor(id) {
        this.id = id;
    }
}
const user = new User('Matej');
const user2 = new User(999);
const user3 = new User({ identifier: '007' });
//# sourceMappingURL=generics.js.map