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

