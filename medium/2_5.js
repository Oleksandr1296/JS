 function FirstWorldUP (str) {
    var i=0;
   while (true) {
       var target=str[i];
       pos =0;
       var FoundPOs =str.indexOf(target,pos);
       pos= FoundPOs+1;
       var FoundPOs =str.indexOf(target,pos);
       if(FoundPOs==-1)
       {
           console.log(str[pos-1]);
           break;
       }
       i++;
       if (i==str.length)
       {
           console.log("not found");
           break;
       }
   }
}
FirstWorldUP("abacddebc");
