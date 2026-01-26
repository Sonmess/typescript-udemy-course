interface Authenticatable {
  email: string;
  password: string;

  login(): void;
  logout(): void;
}

interface AuthenticatableAdmin extends Authenticatable {
  role: 'editor admin' | 'main admin' | 'dev admin';
}

let user: Authenticatable;

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

class AuthUser implements Authenticatable {
  constructor(
    public email: string,
    public password: string,
    public age: number
  ) {
    console.log(`Creating new user :${email}, age: ${age}, pass: ${password}`);
  }

  login(): void {
    throw new Error('Method not implemented.');
  }

  logout(): void {
    throw new Error('Method not implemented.');
  }
}

console.log(new AuthUser('Kek@email.com', '1234', 35));
