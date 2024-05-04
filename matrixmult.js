var A =[
        [1, 2, 3],  
        [4, 5, 6]
                  ];
  
  var B = [
            [7, 8],     
            [9, 10],
            [11, 12]
             ];
  
  var rowsA = A.length;           
  var colsA = A[0].length;         
  var rowsB = B.length;            
  var colsB = B[0].length;        
  
  if (colsA !== rowsB) {
    console.log("Matrix multiplication is not possible with these dimensions.");
  } else {
    var C = [];
    for (var i = 0; i < rowsA; i++) {
      C[i] = [];  
      for (var j = 0; j < colsB; j++) {
        C[i][j] = 0;  
      }
    }
  
    for (var i = 0; i < rowsA; i++) {
      for (var j = 0; j < colsB; j++) {
        for (var k = 0; k < colsA; k++) {  
          C[i][j] += A[i][k] * B[k][j];   
        }
      }
    }
  
    console.log("Result of matrix multiplication:");
    console.log(C);
  }
  