function numbersFrom(n) {
    var str=' ';
        return (n !== 0) ? str+=n +(",")+ numbersFrom(n - 1) : 0;
}
 console.log(numbersFrom(29));
