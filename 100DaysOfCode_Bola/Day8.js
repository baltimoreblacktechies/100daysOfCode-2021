// Bubble sort 
function swap(arr, idx1, idx2){
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
    return arr 
  }

  function bubbleSort(arr){
    for(let i = arr.length-1; i > 0; i--){
      for(let j = 0; j < i; j++){
        console.log(arr[i], arr[j])
        if(arr[j] > arr[i]) {
          swap(arr, j, i)
          }
      }
    }
  return arr 
  }