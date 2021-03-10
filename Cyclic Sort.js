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

/*
Problem 2: Find all the missing numbers
We are given an unsorted array containing numbers taken from the range 1 to ‘n’. The array can have duplicates, 
which means some numbers will be missing. Find all those missing numbers.
*/

const find_missing_numbers = function(nums) {
  missingNumbers = [];
  let i = 0;
  while(i < nums.length){
  	while(nums[i] !== nums[nums[i]-1]){
  		const temp = nums[nums[i] - 1];
  		nums[nums[i] - 1] = nums[i];
  		nums[i] = temp;
  	}
  	i++;
  }

  for(let j = 0; j < nums.length; j++){
  	if(nums[j] !== j+1)
  		missingNumbers.push(j+1);
  }
  return missingNumbers;
};

/*
Problem 3: Find the Duplicate Number
We are given an unsorted array containing ‘n+1’ numbers taken from the range 1 to ‘n’. The array has only one duplicate but it can be repeated multiple times. 
Find that duplicate number without using any extra space. You are, however, allowed to modify the input array.
*/

const find_duplicate = function (nums){
	let i = 0;
	while(i < nums.length){
		while(nums[i] !== i+1){
			if(nums[i] === nums[nums[i] - 1])
				return nums[i];
			const temp = nums[nums[i] - 1];
			nums[nums[i] - 1]  = nums[i];
			nums[i] = temp;
		}
		i++;
	}
}

/*
Problem 4: Find all Duplicate Numbers
We are given an unsorted array containing ‘n’ numbers taken from the range 1 to ‘n’. \
The array has some numbers appearing twice, find all these duplicate numbers without using any extra space.
*/

const find_all_duplicates = function(nums) {
	let result = [];
	let i = 0;
	while(i < nums.length){
		while(nums[i] !== nums[nums[i]-1]){
			const temp = nums[nums[i] -  1];
			nums[nums[i] - 1] = nums[i];
			nums[i] = temp;
		}
		i++;
	}
	for(let j = 0; j < nums.length; j++){
		if(nums[j] !== j+1)
			result.push(nums[j]);
	}
	return result;
};

/*
Problem Challenge 1: Find the Corrupt Pair
We are given an unsorted array containing ‘n’ numbers taken from the range 1 to ‘n’. 
The array originally contained all the numbers from 1 to ‘n’, but due to a data error, one of the numbers got duplicated which also resulted in one number going missing. Find both these numbers.
*/

const find_corrupt_numbers = function(nums) {
  let i = 0;
  while(i < nums.length){
  	while(nums[i] !== nums[nums[i] - 1]){
  		const temp = nums[nums[i] - 1];
  		nums[nums[i] - 1] = nums[i];
  		nums[i] = temp;
  	}
  	i++;
  }
  for(let j = 0; j < nums.length; j++){
  	if(nums[j] !== j+1){
  		return [nums[j], j+1]
  	}
  }
}

/*
Problem Challenge 2: Find the smallest missing Positive Number
Given an unsorted array containing numbers, find the smallest missing positive number in it

*/

const find_first_smallest_missing_positive = function(nums) {
  for(let i = 0; i < nums.length; i++){
  	if((0 <= nums[i]) (nums[i] < nums.length) && (nums[i] !== i)){
  		const temp = nums[nums[i]];
  		nums[nums[i]] = nums[i];
  		nums[i] = temp;
  		i = i-1;
  	}
  }
  let j = 1;
  while(j < nums.length){
  	if(nums[j] !== j)
  		return j
  	j++;
  }
  return j;
};


/*
Problem Challenge 3: 
Given an unsorted array containing numbers and a number ‘k’, find the first ‘k’ missing positive numbers 
in the array.
*/
red red red red red red red
const find_first_k_missing_positive = function(nums, k) {
	let i = 0;
	while(i < nums.length){
		const j = nums[i];
		if(nums[i] < nums.length && nums[i] >= 0 && nums[i] !== nums[j]){
			[nums[i], nums[j]] = [nums[j], nums[i]];
		}
		else
			i++;
	}

	let result = [];
	let extraNumbers = new Set();
	extraNumbers.add(nums[0]);
	i = 1;
	while(i < nums.length && result.length < k){
		if(nums[i] !== i){
			result.push(i);
			extraNumbers.add(nums[i]);
		}
		i++;
	}
	let possibleNumber = nums.length;
	while(result.length < k){
		if(!(extraNumbers.has(possibleNumber)))
			result.push(possibleNumber);
		possibleNumber++;
	}
	return result;

}