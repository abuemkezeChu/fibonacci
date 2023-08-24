'use strict'

// Using loops

const fibonacci = (num) => {
  let num1 = 0
  let num2 = 1
  let sum
  let arr = [num1,num2]
  for(let i = 2; i < num; i++){
    sum = num1 + num2
    num1 = num2
    num2 = sum
    arr.push(sum)
  }
  return arr
}

const ans = fibonacci(8)
console.log(ans);
