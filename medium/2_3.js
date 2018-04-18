 function CombinationsOfString (str) {
    var arr=[];
    for (var i=0;i<str.length;i++) {
        for (var j=1;j<= str.length-i;j++)
        {
            arr.push(str.substr(i,j));
        }
    }
    console.log(arr);
}
console.log(CombinationsOfString("dogs"));
