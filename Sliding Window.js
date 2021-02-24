// Preconditions: Sorted array or linkedlist
// objective: find a set of elements that aren't contiguous fulfilling certain constraints

const smallest_subarray_with_given_sum = function(s, arr) {
  let minLength = +Infinity;
  let start = 0;
  let windowSum = 0;
  for(let end = 0; end < arr.length; end++){
  	windowSum += arr[end];
  	while(windowSum >= s){
  		minLength = Math.min(minLength, end-start+1);
  		windowSum -= arr[start];
  		start++;
  	}
  }
  if(minLength === +Infinity)
  	return 0;
  	return minLength;
};