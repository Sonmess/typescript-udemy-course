"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let validKey;
validKey = 'name'; //autocomplete feature based on user keys
function getProp(obj, key) {
    const val = obj[key];
    if (val === undefined || val === null) {
        throw new Error('Accessing undefined or null value!');
    }
    return val;
}
const test = { name: 'kek', age: 189 };
const val = getProp(test, 'age');
console.log(val);
//# sourceMappingURL=keyof.js.map