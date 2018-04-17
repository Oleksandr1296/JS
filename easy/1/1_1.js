 function PairNumbers(arr,lenghtN) {
    for ( var i=0; i < lenghtN; i++)
     {
         if (arr[i]%2!==1)
         {
           console.log(arr[i]);
        }
    }
}
var arr = [1,2,3,4,5,6,78,77];
PairNumbers (arr,arr.length);
