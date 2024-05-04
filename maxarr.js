var a = [10, 20, 30, 40,90,100];

var max = a[0];
for (var i = 1; i < a.length; i++) 
{ 
    if (a[i] > max) 
    { 
        max = a[i]; 
    }
}

console.log("Maximum value:", max); 
