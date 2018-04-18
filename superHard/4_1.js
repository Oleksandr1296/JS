function BubbleSort(n) {
    var res=true;
    while (res) {
        res = false;
        for (i = 0; i < n.length; i++) {
            if (n[i] < n[i + 1]) {
                var a = n[i];
                n[i] = n[i + 1];
                n[i + 1] = a;
                res = true;
            }
        }
    }
    return n;
}
var arr=[12, 345, 4, 546, 122, 84, 98,  64, 9, 1, 3223, 455,
  23, 234, 213];
console.log(BubbleSort(arr));
