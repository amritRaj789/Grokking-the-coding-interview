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

//Squaring a sorted Array
const make_squares = function(arr) {
  let result = new Array(arr.length);
  let i = arr.length-1;
  let left = 0;
  let right = arr.length-1;
  while(left <= right){
  	if(Math.abs(arr[right]) >= Math.abs(arr[left])){
  		result[i--] = arr[right]*arr[right];
  		right--;
  	}
  	else{
  		result[i--] = arr[left]*arr[left];
  		left++;
  	}
  }
  return result;
};

//Triplet Sum Close to Target
const triplet_sum_close_to_target = function(arr, target_sum) {
  arr.sort((a,b) => a-b);
  let closestSum = +Infinity;
  for(let i = 0; i < arr.length-2; i++){
  	let left = i+1;
  	let right = arr.length-1;
  	while(left < right){
  		sum = arr[i] + arr[left] + arr[right];
  		if( sum < target_sum)
  			left++;
  		else if(sum > target_sum)
  			right--;
  		else
  			return sum;
  		if(Math.abs(closestSum - target_sum) > Math.abs(sum - target_sum))
  			closestSum = sum;
  		else if(Math.abs(closestSum - target_sum) === Math.abs(sum - target_sum)){
  			closestSum = Math.min(sum, closestSum);
  		}
  	}
  }
  return closestSum;
};