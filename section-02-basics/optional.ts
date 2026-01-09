function generateError(msg?: string) {
  throw new Error(msg);
}

generateError();

type User2 = {
  name: string;
  age: number;
  role?: 'admin' | 'guest';
};

let input = null;
const providedInput = input || false;
const providedInput2 = input ?? false;
console.log(providedInput, providedInput2);
