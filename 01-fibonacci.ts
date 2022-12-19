// Write a function `fib(n)` that takes in a number as an argument.
// The function should return the n-th number of the Fibonacci sequence.

// The 1st and 2nd number of the sequence is 1.
// To generate the next number of the sequence, we sum the previous two.

// n:      1, 2, 3, 4, 5, 6,  7,  8,  9, ...
// fib(n): 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

// Classic recursive implementation
// const fib = (n: number): number => {
//   if (n <= 2) return 1;
//   return fib(n - 1) + fib(n - 2);
// };

// console.log(fib(6)); // => 8
// console.log(fib(7)); // -> 13
// console.log(fib(8)); // -> 21

// Time Complexity - O(2^n) - exponential
// Space Complexity - O(n) - linear

// // // // // // // // // // // // // // //

// Memoized recursive implementation
//  js object, keys will be arg to fn, value return value

interface Memo1 {
  [n: number]: number;
}

const memoFib = (n: number, memo: Memo1 = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = memoFib(n - 1, memo) + memoFib(n - 2, memo);
  return memo[n];
};

console.log(memoFib(6)); // => 8
console.log(memoFib(7)); // -> 13
console.log(memoFib(8)); // -> 21
console.log(memoFib(50)); // -> 12586269025

// Time Complexity - O(n) - linear
// Space Complexity = O(n) - linear
