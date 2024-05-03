/*

*/
var a=[10,20,39,41, 80, 90];
var temp = a[0];
a[0] = a[a.length-1];
a[a.length-1] = temp;

// for(i=a.length-1;i>=0;i--)
// {
//     if(a[i]%2 == 0){
//         console.log(a[i]);
//     }
// }

for(i=0;i<a.length;i++)
{
    if(a[i]%2 == 0){
        console.log(a[i]);
    }
}