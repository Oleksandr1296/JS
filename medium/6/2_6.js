function factor(n) {
    return (n != 1) ? n * factor(n - 1) : 1;
}
 console.log(factor(5));
