
class DSA {
    item = [];
    constructor(x, y) {
        this.item = [x, y];
    }

    isempty() {
        return this.item.length == 0;
    }

    // push(element) {
    //     this.item.push(element);
    // }

    // pop() {
    //     if (this.isempty()) {
    //         return "stack is empty";
    //     } else {
    //         this.item.pop();
    //     }
    // }

    pop(x){
        if(this.isempty()){
            return "stack is empty";
        }
        else {
            var lastIndex = this.item.length - 1;
            this.item = this.item.filter((data, index) => index != lastIndex);
        
            // this.item.length.map((data,index)=>{
            // })
            //  var ar=[];
            // for(let i=0;i<this.item.length-1;i++)
            //     {
            //         ar[i]=this.item[i];
            //     }
            //     this.item=ar;
        }
    }
    push(x){
        if(this.isempty()){
            this.item[0]=x;
        }
        else{
            this.item[this.item.length]=x;
        }
    }


    peek() {
        if (this.isempty()) {
            return "stack underflow";
        }
        else {
            return this.item[this.item.length - 1];
        }
    }

    size() {
        if (this.isempty()) {
            return "stack is empty";
        }
        else {
            return this.item.length;
        }
    }

    printstack() {
        if (this.isempty()) {
            return "no elements in the stack";
        }
        else {
            for (let i = 0; i < this.item.length; i++) {
                console.log(this.item[i]);
            }
        }
    }


}


const st = new DSA(10, 20);

console.log(st.isempty());

st.push(10);
st.push(60);
st.push(40);
st.push(30);
st.push(80);
st.push(50);

console.log(st.peek());
console.log(st.pop());
st.printstack();
// console.log(st.peek());
// console.log(st.size());
// console.log(st.isempty());
// st.printstack();
