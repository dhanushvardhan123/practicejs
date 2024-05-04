// function add(x,y){
//     var z = x + y;
//     return z;
// }
var a = 12 ;
var add = function (x,y){
    var z = x + y;
    return z;
}
var result = add(2,5);
console.log(result);

function f1(x)
{
    console.log(x);
    x(10,34,78);
}
var f2 = function(a,b,c)
{
    console.log("hii",a,b,c)
    console.log("inside f2");
};
f1(f2);
