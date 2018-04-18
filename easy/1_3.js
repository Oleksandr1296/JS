 function MaxAndMin(arr) {
     var sum=0;
     for ( var i=0; i < arr.length; i++)
     {
        sum+=arr[i];
     }
     var res=sum/arr.length;
     return res;
}
var arr = [1,2,3,4,5,6,7,8,9];
console.log( MaxAndMin (arr,arr.length));
