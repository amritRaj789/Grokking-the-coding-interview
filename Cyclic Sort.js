// An interesting approach to solving problems involving arrays containing numbers in a given range.

const cyclic_sort = function(nums) {
  let start = 0;
  while(start < nums.length){
  	while(nums[start] !== start+1){
  		const temp = nums[nums[start]-1];
  		nums[nums[start]-1] = nums[start];
  		nums[start] = temp;
  	}
  	start++;
  }
}

const cyclic_sort = function (nums){
	let i = 0;
	while(i < nums.length){
		const j = nums[i] - 1;
		if(nums[i] !== nums[j]){
			[nums[i], nums[j]] = [nums[j], nums[i]];
		}
		else
			i++;
	}
}

/* Problem 1: Find the missing number
We are given an array containing ‘n’ distinct numbers taken from the range 0 to ‘n’. 
Since the array has only ‘n’ numbers out of the total ‘n+1’ numbers, find the missing number.
*/
//Mathematics way of doing it. This one works since there is only one missing number
const find_missing_number = function(nums) {
  const sum = nums.reduce((total, num) => total + num);
  const total = (nums.length*(nums.length+1))/2;
  return total - sum;
};

//Cyclic sort way of doing it.
const find_missing_number = function (nums){
	let i = 0;
	let n = nums.length;
	while(i < n){
		while(nums[i] < n && nums[i] !== i){
			const temp = nums[nums[i]];
			nums[nums[i]] = nums[i];
			nums[i] = temp;
		}
		i++;
	}
	for(let j = 0; j < n; j++){
		if(nums[j] !== j)
			return j;
	}
	return n;
}