var arr=[100,30,10,20,50,40];
var size=arr.length;
var res=arra(arr);

function arra(arr){
    var sum=0;
    for(let i=0;i<size;i++)
    {
        console.log(arr[i]);
        sum=sum+arr[i];
    }
    console.log("sum of array : ",sum);

    var mirror=[];
    for(let i=0;i<size;i++)
    {
        mirror[i]=arr[i];
    }
    console.log("mirror array : ",mirror);

    var oindex=[];
    let y=0;
    for(let i=0;i<size;i+=2)
    {
        oindex[y]=arr[i];
        y++;
    }
    console.log("odd index values : ",oindex);

    var eindex=[];
    let t=0;
    for(let i=1;i<size;i+=2)
    {
        eindex[t]=arr[i];
        t++;
    }
    console.log("even index values : ",eindex);

    var temp=0;
    for(let i=0;i<size;i++)
    {
        for(let j=i+1;j<size;j++)
        {
            if(arr[i]>arr[j])
            {
                temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
    }
    console.log("sorted array : ",arr);

    for(let i=0;i<eindex.length;i++)
    {
        console.log("index is : ",i);
        console.log("value is : ",eindex[i]);
    }
    
}