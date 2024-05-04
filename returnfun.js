function outerFunction(x) {
    console.log("outer function....");

    function innerFunction(y) {
      return x + y;
    }
    console.log("below inner function..")
    return innerFunction;
  }
  
  const addFive = outerFunction(5);
  var result = addFive(10);
  console.log(result); // 15