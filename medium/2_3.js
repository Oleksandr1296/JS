 function CombinationsOfString (str) {
    var arr=[];
    for (i=0;i<str.length;i++) {
        for (j=1;j<= str.length-i;j++)
        {
            arr.push(str.substr(i,j));
        }
    }
    console.log(arr);
}
console.log(CombinationsOfString("dogs"));
