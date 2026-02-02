let names: string[] = ['Max', 'Matej'];
let names2: Array<string> = ['Kuk', 'Puk'];

type DataStore<T> = {
  [key: string]: T;
};

let store: DataStore<string | boolean> = {};
store.name = 'Max';
store.isInstructor = true;

let nameStore: DataStore<string> = {};
nameStore.firstName = 'Matej';
nameStore.lastName = 'Bohac';

function merge<T>(a: T, b: T) {
  return [a, b];
}

const ids = merge<number>(1, 2);
const listOfNames = merge('matej', 'keko');
console.log(ids, listOfNames);

function anotherMerge<T, U>(a: T, b: U) {
  return [a, b];
}

const anotherList = anotherMerge<number, string>(12, 'keko');
console.log(anotherList);

function mergeObj<T extends object, U extends object>(a: T, b: U) {
  return { ...a, ...b };
}

const mergedObjects = mergeObj(
  { test: 'test' },
  { pokemon: 'bulbasaur', pokedex: 1 },
);
console.log(mergedObjects);

class User<T> {
  constructor(public id: T) {}
}

const user = new User('Matej');
const user2 = new User(999);
const user3 = new User<{ identifier: string }>({ identifier: '007' });
