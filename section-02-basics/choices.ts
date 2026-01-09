enum Role {
  Admin,
  Editor,
  Guest,
}

let userRole: Role;
userRole = 0;
userRole = Role.Admin;

let userAdmin: 'admin' | 'editor' | 'guest' = 'admin';

let possibleResults3: [1 | -1, 1 | -1];
possibleResults3 = [1, -1];

type AnotherRole = 'admin' | 'editor' | 'guest' | 'reader';

let anotherUser: AnotherRole;
anotherUser = 'reader';

type User = {
  name: string;
  age: number;
  role: Role;
  permissions: string[];
};
