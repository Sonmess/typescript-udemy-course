let hobbies = ['Sports', 'Cooking'];

let users: (string | number)[];

users = [1, 'matej'];
users = [5, 1];
users = ['Matej', 'klek'];

let loosers: Array<string | number>;
loosers = [1, 'kek'];
loosers = [5, 1];
loosers = ['matej', 'kek'];

let possibleResults: number[]; // [1, -1]
possibleResults = [1, -1];
possibleResults = [5, 10, 15]; //not good even though is the correct type
let possibleResults2: [number, number]; // [1, -1]

let user = {
  name: 'matej',
  age: 35,
};

let user2: {
  name: string;
  age: number;
  sex: boolean;
  role: {
    description: string;
    kind: string;
  };
} = {
  name: 'matej',
  age: 35,
  sex: false,
  role: {
    description: 'Keko',
    kind: 'admin',
  },
};

let val: {} = false; // not null

let data: Record<string, number | string>;
data = {
  entry: 1,
  entry2: '2',
};
