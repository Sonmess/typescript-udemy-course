const inputEl = document.getElementById('user-name') as HTMLInputElement | null;
const inputAge = document.getElementById('user-age')!;
const inputSex = document.getElementById('user-sex') as HTMLInputElement;

if (inputEl) {
  console.log(inputEl.value);
}

console.log(inputAge);
console.log(inputSex?.value);
