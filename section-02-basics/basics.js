(function () {
    var userName;
    var userAge = 35;
    userName = 'Matej';
    function add(a, b) {
        if (b === void 0) { b = 5; }
        return a + b;
    }
    console.log(add(10));
    console.log(add('5'));
})();
