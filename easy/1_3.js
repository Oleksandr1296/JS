 function MaxAndMin(arr,lenghtN) {
     var sum=0;
     for ( var i=0; i < lenghtN; i++)
     {
        sum+=arr[i];

     }
     var res=sum/lenghtN;
     return res;
}
var arr = [1,2,3,4,5,6,7,8,9];
console.log( MaxAndMin (arr,arr.length));
