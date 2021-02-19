// Write a function called minSubArrayLen  
// which accepts two parameters - an array of positive integers and a positive integer. 
// This function should return the minimal length of a contiguous subarray of which
// the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.
// Examples:
// minSubArrayLen([2, 3, 1, 2, 4, 3], 7) --> 2 (4, 3)
// minSubArrayLen([2, 1, 6, 5, 4 ], 9) --> 2  (5, 4)
// minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 65, 33, 19], 52) --> 1 (62)
// minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39) --> 3 
// minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55) --> 5 
// minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) --> 3 
// minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95) --> 0

// Time Complexity O(N)
// Space Complexity O(1)

// My Solution: 
function minSubArrayLen(arr, num) {
    if(arr.length === 0) return 0;
    if(arr[0] >= num) return 1;
    
    let j = 0;
    let k = 0;
    let min = 0;
    let temp = arr[j];  
  
    while (k < arr.length) {
      if(temp < num){
        k++ 
        temp = temp + arr[k]
      }
      if(temp >= num){
        temp = temp - arr[j]
       
        if(min === 0 || (k-j+1) < min){
          min = k-j+1
        }
        j++ 
      }
    }
    return min 
  }

// Write a function called findLongestSubstring, 
// findLongestSubstring,  which accepts a string and 
// returns the length of the longest substring with all distinct characters.
// findLongestSubstring('rithmschool') // 0
// findLongestSubstring('thisisawesome') // 7
// findLongestSubstring('thecatinthehat') // 6 
// findLongestSubstring('bbbbb') // 1 
// findLongestSubstring('longestsubstring') // 8 
// findLongestSubstring('thisishowwedoit') // 6

// Given Solution: 

function findLongestSubstring(str) {
    let longest = 0;
    let seen = {};
    let start = 0;
   
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (seen[char]) {
        start = Math.max(start, seen[char]);
      }
      // index - beginning of substring + 1 (to include current in count)
      longest = Math.max(longest, i - start + 1);
      // store the index of the next char so as to not double count
      seen[char] = i + 1;
    }
    return longest;
  }
