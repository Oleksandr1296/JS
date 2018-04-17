 function reverseNum (n) {
var res=0;
     for(var i = 0; n > 1; i++) {
         n= Math.floor(n);
          res=res*10+(n%10);
         n=n/10;
     }
  return res;
}
console.log(reverseNum(1234) );
