 function FirstWorldUP (str) {
    for (var i=0;i<str.length;i++) {
       var target=str[i];
       var pos =0;
       var FoundPOs =str.indexOf(target,pos);
       pos= FoundPOs+1;
       var FoundPOs =str.indexOf(target,pos);
       if(FoundPOs==-1)
       {
           console.log(str[pos-1]);
           break;
       }
    }
}
FirstWorldUP("abacddebc");
