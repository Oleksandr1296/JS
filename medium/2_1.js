 function reverseNum (number) {
var res=0;
     for(var i = 0; number > 1; i++) {
       number= Math.floor(number);
       res=res*10+(number%10);
       number=number/10;
     }
  return res;
}
console.log(reverseNum(1234) );
