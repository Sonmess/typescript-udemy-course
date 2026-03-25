"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let text = 1;
function getFullName(person) {
    if ('firstName' in person &&
        'lastName' in person &&
        person.firstName &&
        person.lastName) {
        return `${person.firstName} ${person.lastName}`;
    }
    throw new Error('No firstname or last name found.');
}
const fullname1 = getFullName({});
const fullname2 = getFullName({ firstName: 'kek', lastName: 'keko' });
//# sourceMappingURL=conditional-types.js.map