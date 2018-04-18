function BinarySearch(date,target,start,end,ret) {
    var date, target, start, end;
    const middle = Math.floor((start + end+1 ) / 2);
    if (target < date[middle]) {
        ret.push(date[middle]);
        return BinarySearch(date, target, start, middle,ret);
    }
    if (target > date[middle]) {
        ret.push(date[middle]);
        return BinarySearch(date, target, middle, end,ret);
    }
    if (target === date[middle]) {
        ret.push(date[middle]);
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

