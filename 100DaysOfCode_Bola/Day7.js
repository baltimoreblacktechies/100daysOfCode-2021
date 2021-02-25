// Write a function called binarySearch which accepts a sorted array and a value and returns 
// the index at which the value exists.
// Otherwise, return -1
// This algorithm should be more efficient than linearSearch

function binarySearch(arr, val){
    if(arr.length < 1) return -1 
    let p1 = 0
    let p2 = arr.length 
    let mid 
   while(p1 < p2){ 
      mid = Math.floor((p2 + p1)/2)
      if(arr[mid] === val) return mid
      if(arr[p1] === val) return p1 
      if(arr[p2] === val) return p2 
  
      if(arr[mid] > val){
        p2 = mid - 1 
      }
      if(arr[mid] < val){
         p1 = mid + 1 
      }
   }
   return -1
  }