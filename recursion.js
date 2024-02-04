/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) return 1;
  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 0) return 0;
  let current = words[0].length;
  let next = longest(words.slice(1));
  if (current > next) return current;
  return next;
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length === 0) return "";
  char = str.charAt(0);
  return char + everyOther(str.slice(2));
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length === 0) return true;
  firstChar = str.charAt(0);
  lastChar = str.charAt(str.length - 1);
  if (firstChar != lastChar) return false;
  return isPalindrome(str.slice(1, str.length - 1));
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
  if (idx === arr.length) return -1;
  if (arr[idx] === val) return idx;
  return findIndex(arr, val, idx + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str.length === 0) return "";
  char = str.charAt(str.length - 1);
  return char + revString(str.slice(0, str.length - 1));
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let strArray = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") strArray.push(obj[key]);
    if (typeof obj[key] === "object") strArray.push(...gatherStrings(obj[key]));
  }
  return strArray;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length) {
  if (left > right) return -1;
  let middle = Math.floor((left + right) / 2);
  if (arr[middle] === val) return middle;
  if (arr[middle] > val) return binarySearch(arr, val, left, middle - 1);
  return binarySearch(arr, val, middle + 1, right);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
