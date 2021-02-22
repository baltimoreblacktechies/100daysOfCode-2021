// Write a function called recursiveRange  which accepts a number and adds up 
// all the numbers from 0 to the number passed to the function 
function recursiveRange(num){
    if (num === 0) return 0;
    return num + recursiveRange(num - 1)
}

// Write a recursive function called fib
//  which accepts a number and returns the n th number in the Fibonacci sequence.
//  Recall that the Fibonacci sequence is the sequence of whole numbers 
// 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter 
// is equal to the sum of the previous two numbers.
function fib(num){
    if(num  <= 2) return 1 
    return fib(num-1) + fib(num-2)
  }

  // Write a recursive function called reverse
  // which accepts a string and returns a new string in reverse.
  function reverse(str){
    // add whatever parameters you deem necessary - good luck!
    if(str.length < 1) return str
    return reverse(str.slice(1)) + str[0]
  }
  