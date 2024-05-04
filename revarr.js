var a=[10,20,30,40]


for(var i=0,j=a.length-1;i<j ;i++,j--)
    {
    var temp = a[i];
    a[i] = a[j];
    a[j] = temp;
}


console.log(a);