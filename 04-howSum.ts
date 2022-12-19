// Write a function `howSum(targetSum, numbers)` that takes in a targetSum and an array of numbers as arguments.

// The function should return an array containing any combination of elements that add up to exactly the targetSum.  If there is no combination that adds up to the targetSum, then return null.

// If there are multiple combinations possible, you may return any single one.

// Brute force implementation
// const howSum = (targetSum: number, numbers: number[]): number[] | null => {
//   if(targetSum === 0) return [];
//   if(targetSum < 0) return null;

//   for(let num of numbers) {
//     const remainder = targetSum - num;
//     const remainderResult: number[] | null = howSum(remainder, numbers);

//     if(remainderResult !== null) {
//       return [ ...remainderResult, num ]
//     }
//   }

//   return null;
// }

// m = target sum
// n = numbers.length
// Time Complexity - O(n^m * m) - Exponential
// Space Complexity - O(m)

// // // // // // // // // // // // // / // // // // // // //

// Memoized recursive implementation
interface Memo4 {
  [targetSum: number]: number[] | null;
}

const howSum = (targetSum: number, numbers: number[], memo: Memo4 = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderResult = howSum(remainder, numbers);

    if (remainderResult !== null) {
      memo[targetSum] = [...remainderResult, num];
      return memo[targetSum];
    }
  }

  memo[targetSum] = null;
  return null;
};

// m = target sum
// n = numbers.length
// Time Complexity - O(n*m^2) - Quadratic
// Space Complexity - O(m^2) - Quadratic

console.log(howSum(5, [2, 3])); // [3, 2, 2]
console.log(howSum(7, [5, 3, 4, 7])); // [4, 3]
console.log(howSum(7, [2, 4])); // null
console.log(howSum(8, [2, 3, 5])); // [2, 2, 2, 2]
console.log(howSum(300, [7, 14])); // null
