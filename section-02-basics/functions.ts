function add(a: number, b: number): number {
  return a + b;
}

add(10, 50);

function log(message: string): void {
  console.log('LOG', message);
}

function logAndThrow(errorMessage: string): never {
  console.error(errorMessage);
  throw new Error(errorMessage);
}

function performJob(callbackFn: (msg: string, count: number) => void) {
  // do something interesting
  const msg = 'daco';
  const count = 1;
  callbackFn(msg, count);
}

performJob(log);

const logMsg = (msg: string) => {
  console.log(msg);
};

type User = {
  name: string;
  age: number;
  greet: () => string;
};

const user: User = {
  name: 'Matej',
  age: 35,
  greet() {
    console.log('Hello there');
    return 'yo';
  },
};

user.greet();
