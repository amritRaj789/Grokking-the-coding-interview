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

//Triplets with Smaller Sum
const triplet_with_smaller_sum = function(arr, target) {
  let count = 0;
  arr.sort((a, b) => a-b);
  for(let i = 0; i < arr.length-2; i++){
  	let left = i + 1;
  	let right = arr.length-1;
  	while(left < right){
  		if(arr[i] + arr[left] + arr[right] >= target){
  			right--;
  		}
  		else{
  			count += right-left;
  			left++;
  		}
  	}
  }
  return count;
};

//Subarrays with Product Less than a Target
red red red red red red red red red red red red

// IMportant thing I learned while solving this problem was about arrays. WHen we Push some array to another, we are passing by reference
// Use parentArray.push(array.slice(0)) or parentArray.push(array.concat()) to pass it by value

const find_subarrays = function(arr, target) {
	let result = [];
	for(let i = 1; i <= arr.length; i++){
		let array = [];
		let product = 1;
		let left = 0;
		for(let j = 0; j < arr.length; j++){
			array.push(arr[j]);
			product *= arr[j];
			if(j >= i-1){
				if(product < target){
					result.push(array.concat());
				}
				array.shift();
				product = product/arr[left];
				left++;
			}
		}
	}
	return result;
}

// Dutch National Flag Problem
const dutch_flag_sort = function(arr) {
	let left = 0;
	let right = arr.length-1;
	for(let i = 0; i <= right; i++){
		if(arr[i] === 0){
			[arr[i], arr[left]] = [arr[left], arr[i]];
			left++;
		}
		else if(arr[i] === 2 && i<right){
			[arr[i], arr[right]] = [arr[right], arr[i]];
			right--;
			i--;
		}
	}
};
