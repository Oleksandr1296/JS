 function upperCase (str) {
     var str1=" ";
    str1+=str[0].toUpperCase();
    for (i=0;i<str.length;i++) 
    {
        if ( str[i].localeCompare(" ") === 0 ) {
            str1+= str[i];
            i++;
            str1+=str[i].toUpperCase();
        }
        else {
            str1+= str[i];
        }
    }
     console.log( str1);
}
 upperCase("abacddebc sfs sdf sdf drwe");
