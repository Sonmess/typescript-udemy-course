type DataStore = {
  [key: string]: number | boolean;
};

let someObj: Record<string, number | boolean>; // it's the same as DataStore type

let store: DataStore = {};
store.id = 5;
store.isOpen = false;
// store.name = 'Kek'; not allowed

let roles = ['admin', 'guest', 'editor'] as const;
// roles.push('kek'); not allowed
const firstRole = roles[0];
console.log(firstRole);

const dataEntries = {
  entry1: 0.51,
  entry2: -1,
} satisfies Record<string, number>;
// dataEntries.entry3 = 9; not allowed