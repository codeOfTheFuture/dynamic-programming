// Write a function `canConstruct(target, wordBank)` that accepts a target string and an array of strings.

// The function should return a boolean indicating whether or not the `target` can be constructed by concatenating elements of the `wordBank` array.

// You may reuse elements of `wordBank` as many times as needed.

interface Memo6 {
  [target: string]: boolean;
}

const canConstruct = (target: string, wordBank: string[], memo: Memo6 = {}) => {
  if (target in memo) return memo[target];
  if (target === "") return true;

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);

      if (canConstruct(suffix, wordBank, memo) === true) {
        memo[target] = true;
        return true;
      }
    }
  }

  memo[target] = false;
  return false;
};

// Brute force
// m = target.length
// n = wordBank.length
// time: O(n^m * m) - Exponential
// space: O(m^2) - Quadratic

// Memoized
// m = target.length
// n = wordBank.length
// time: O(n * m^2) - Quadratic
// space: O(m^2) - Quadratic

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // true
console.log(
  canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
); // false
console.log(
  canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
); // true
console.log(
  canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
  ])
); // false
