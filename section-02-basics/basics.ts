(function () {
  let userName: string;
  let userAge = 35;

  userName = 'Matej';

  function add(a: number, b = 5) {
    return a + b;
  }
  console.log(add(10));  
})();
