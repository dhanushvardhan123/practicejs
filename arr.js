var a = [10, 20, 30, 40]
//  var temp=a[0];
//  a[0]=a[3];
//  a[1]=a[2];
//  a[2]=a[1];
//  a[3]=a[0];

//  for(var i=0;i<=3;i++)
//     {
//         console.log(a[i]);
//     }
var arr = [10, 65, 34, 89, 15];

function rever(arr) {
    var temp ;
    for (var i = 0, j = arr.length - 1; i < j; i++, j--) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}


var res = rever(arr);
console.log(res);