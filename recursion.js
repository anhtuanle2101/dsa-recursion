/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length===0) return;
  if (nums.length===1) return nums[0];
  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length===1) return words[0].length;

  return (words[0].length >= longest(words.slice(1))) ? words[0].length : longest(words.slice(1));
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length===0) return "";
  if (str.length===1) return str.charAt(0);

  return str.charAt(0)+everyOther(str.slice(2));
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length===0) return true;

  if (str.charAt(0) === str.charAt(str.length-1)){
    return isPalindrome(str.slice(1, str.length-1));
  }

  return false;
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx=0) {
  if (arr.length===0) return -1;

  if (arr[0] === val){
    return idx;
  }

  return findIndex(arr.slice(1), val, idx+1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str.length === 0) return;
  if (str.length === 1) return str.charAt(0);

  return str.charAt(str.length-1) + revString(str.slice(0, str.length-1));
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  const rs = [];
  function recursionHelper(obj){
    for (let value of Object.values(obj)){
      if (value === Object(value)){
        recursionHelper(value);
      }else if (typeof value === 'string'){
        rs.push(value);
      }
    }
  }
  recursionHelper(obj);
  return rs;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left=0, right=arr.length) {
  if (right<left) return -1;
  const idx = left+ Math.floor((right-left)/2);
  if (right===left && arr[left]===val) return left;
  if (right===left && arr[left]!==val) return -1;
  
  if (arr[idx] === val){
    return idx;
  }else if (arr[idx] > val){
    return binarySearch(arr, val, left, idx-1);
  }else if (arr[idx] < val){
    return binarySearch(arr, val, idx+1, right);
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
