class ListNode<T> {
  public next?: ListNode<T>;
  constructor(public value: T) {}
}

class LinkedList<T> {
  private root?: ListNode<T>;
  private tail?: ListNode<T>;
  private length = 0;

  add(value: T) {
    const node = new ListNode<T>(value);
    if (!this.root || !this.tail) {
      this.root = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  getNumberOfElements() {
    return this.length;
  }

  print() {
    let current = this.root;
    while (current) {
      console.log(`Node => ${current.value}`);
      current = current.next;
    }
  }
}

const numberList = new LinkedList<number>();
const nameList = new LinkedList<string>();
numberList.add(10);
numberList.add(-3);
numberList.add(5);
numberList.print();
console.log('Length of elements = ' + numberList.getNumberOfElements());
