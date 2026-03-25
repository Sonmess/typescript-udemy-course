function logger<T extends new (...args: any[]) => any>(
  target: T,
  ctx: ClassDecoratorContext,
) {
  console.log('Logger decorator');
  console.log(target);
  console.log(ctx);

  return class extends target {
    constructor(...args: any[]) {
      super(...args);
      console.log('class constructor');
      console.log(this);
    }
  };
}

function autobind(target: Function, ctx: ClassMethodDecoratorContext) {
  ctx.addInitializer(function (this: any) {
    this[ctx.name] = this[ctx.name].bind(this);
  });

  return function (this: any) {
    console.log('Executing original function');
    target.apply(this);
  };
}

function fieldLogger(target: undefined, ctx: ClassFieldDecoratorContext) {
  console.log(target);
  console.log(ctx);

  return (initialValue: any) => {
    console.log(initialValue);
    return 'kek';
  };
}

function replacer(initValue: any) {
  return function replacerDecorator(
    target: undefined,
    ctx: ClassFieldDecoratorContext,
  ) {
    return (initialValue: any) => {
      return initValue;
    };
  };
}

@logger
class Person {
  @replacer('Kekuan')
  name = 'Matej';

  @autobind
  greet() {
    console.log('Hi, I am ' + this.name);
  }
}

const matej = new Person();
const greet = matej.greet;
greet();
