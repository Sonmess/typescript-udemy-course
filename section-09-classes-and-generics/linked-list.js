"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ListNode {
    value;
    next;
    constructor(value) {
        this.value = value;
    }
}
class LinkedList {
    root;
    tail;
    length = 0;
    add(value) {
        const node = new ListNode(value);
        if (!this.root || !this.tail) {
            this.root = node;
            this.tail = node;
        }
        else {
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
const numberList = new LinkedList();
const nameList = new LinkedList();
numberList.add(10);
numberList.add(-3);
numberList.add(5);
numberList.print();
console.log('Length of elements = ' + numberList.getNumberOfElements());
//# sourceMappingURL=linked-list.js.map