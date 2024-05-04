function print(x) {
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
    console.log(x);
}
function write(y) {
    console.log(y)
    y()
}

write(print);