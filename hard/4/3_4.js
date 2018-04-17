function FindDuplicateValues(str) {
    var res=[];
    var target=str[0];
        for   (var i=0;i< str.length;i++)
        {
            target=str[i];
            if (str.indexOf(target,i+1)!==-1)
            res.push(str[i]);
        }
    return res;
}
var arr=[1,2,3,4,5,6,1,2];
 console.log(FindDuplicateValues(arr));
var arr1=["qw","sdf","qw","sada"];
console.log(FindDuplicateValues(arr1));
