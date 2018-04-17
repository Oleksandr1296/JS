 function MaxAndMin(arr,lenghtN) {
     var min,max;
      min=arr[0];
      max=arr[0];
     for ( var i=0; i < lenghtN; i++)
     {

         if (arr[i]>max)
         {
             max=arr[i];
        }
         if (arr[i]<min)
         {
             min=arr[i];
         }
     }
     console.log("max:",max,"  min:",min);
}
var arr = [1,2,3,4,5,6,78,-77];
 MaxAndMin (arr,arr.length);
