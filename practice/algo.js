matrix=[[1,0,0,0],[0,3,0,0],[0,0,5,0],[0,0,0,3]]

console.log("hello i m here")
// sum of array
// function arrSum(arr){
//     sum=0
//     for (element in arr){
//         sum=sum + arr[element]
//     }
//     console.log(sum)
//     return sum
// }
// finding sum of each row and sum of row should be equal to value when i=j
// function isDiagonalMatrix(matrix){
//     var flag=true
//     for (row in matrix){
//         sum = arrSum(matrix[row])
//         if (sum!=matrix[row][row]){
//             console.log("not dia")
//             flag=false
//             return flag
//         }
//     }
//     console.log(flag)
//     return

// }

// function isDiagonalMatrix(matrix){
//     var c=2
//     var flag=true
//     for (row in matrix){
//         for (element in matrix[row]){
//             if (row!=element && 0!=c*matrix[row][element]){
//                 flag=false
//                 return flag
//             }
//         }
//     }
//     return flag
// }

// function sumTillZero(n){
//     if (n<=0){
//         return 0
//     }
//     console.log(n)
//     return n + sumTillZero(n-1)
// }

// sumTillZero(40)

//isDiagonalMatrix(matrix)
