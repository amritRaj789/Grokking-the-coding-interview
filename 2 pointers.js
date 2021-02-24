// Preconditions: Sorted array or linkedlist
// objective: find a set of elements that aren't contiguous fulfilling certain constraints


//Pair with Target Sum
const pair_with_targetsum = function(arr, target_sum) {
  let left = 0;
  let right = arr.length-1;
  while(left < right){
  	if(arr[left] + arr[right] > target_sum)
  		right--;
  	else if(arr[left] + arr[right] < target_sum)
  		left++;
  	else
  		return [left, right];
  }
  return []
}


// Remove duplicates in place and return the length of the non-duplicate array
const remove_duplicates = function(arr) {
  let i = 0;
  for(let j = 1; j < arr.length; j++){
  	if(arr[j] !== arr[i]){
  		i++;
  		arr[i] = arr[j];
  	}
  }
  return i+1;
};