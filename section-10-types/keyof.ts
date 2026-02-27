type User = {
  name: string;
  age: number;
  sex: boolean;
};

type UserKeys = keyof User;

let validKey: UserKeys;
validKey = 'name'; //autocomplete feature based on user keys

function getProp<T extends object>(obj: T, key: keyof T) {
  const val = obj[key];
  if (val === undefined || val === null) {
    throw new Error('Accessing undefined or null value!');
  }
  return val;
}

const test = { name: 'kek', age: 189 };
const val = getProp(test, 'age');
console.log(val);
