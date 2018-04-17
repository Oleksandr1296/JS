function BinarySearch(d,t,s,e,ret) {
    var d, t, s, e;
    const m = Math.floor((s + e+1 ) / 2);
    if (t < d[m]) {
        ret.push(d[m]);
        return BinarySearch(d, t, s, m,ret);
    }
    if (t > d[m]) {
        ret.push(d[m]);
        return BinarySearch(d, t, m, e,ret);
    }
    if (t === d[m]) {
        ret.push(d[m]);
        return ret;
    }
}
var res=[];
var arr1=[];
for   (var i=0;i<100;i++)
{
    arr1.push(i);
}
 console.log(BinarySearch(arr1,27,0,100,res));

