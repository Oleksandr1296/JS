function FindDuplicateValues(arr) {
    var res=[];
    var target=arr[0];
        for   (var i=0;i< arr.length;i++)
        {
            target=arr[i];
            if (str.indexOf(target,i+1)!==-1)
            res.push(arr[i]);
        }
    return res;
}
var arr=[1,2,3,4,5,6,1,2];
 console.log(FindDuplicateValues(arr));
var arr1=["qw","sdf","qw","sada"];
console.log(FindDuplicateValues(arr1));
