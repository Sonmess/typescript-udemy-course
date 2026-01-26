class User2 {
  constructor(
    private firstName: string,
    private lastName: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

const user2 = new User2('John', 'Doe');
console.log(user2.fullName);
console.log(user2);

class User3 {
  private _firstName: string = '';
  protected _lastName: string = '';

  set firstName(name: string) {
    if (name.length < 2) {
      throw new Error('First name must be at least 2 characters long.');
    }
    this._firstName = name;
  }

  set lastName(name: string) {
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
  constructor(public jobTitle: string) {
    super();
  }

  generateLabel() {
    return `Label: ${this.jobTitle} - ${this._lastName}`;
  }
}

const emplyee = new Employee('Dement');
emplyee.firstName = 'Matej';
emplyee.lastName = 'Bohac';
console.log(emplyee.generateLabel());

abstract class UIElement {
  constructor(public identifier: string) {}

  clone(targetLocation: string) {
    // some logic
  }
}

class SideDrawerElement extends UIElement {
  constructor(
    public identifier: string,
    public position: 'left' | 'right'
  ) {
    super(identifier);
  }
}

const element = new SideDrawerElement('neviem', 'left');
console.log(element);
