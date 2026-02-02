function getLength(val: string): string;
function getLength(val: any[]): number;
function getLength(val: string | any[]) {
  if (typeof val === 'string') {
    const numberOfWords = val.split(' ').length;
    return `${numberOfWords} words`;
  }
  return val.length;
}

const numWords = getLength('Does this work ?');
const numItems = getLength(['sport', 'cookies', 'food']);
console.log(numWords);
console.log(numItems);
