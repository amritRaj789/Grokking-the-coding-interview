// A huge number of coding interview problems involve dealing with 
//Permutations, Combinations of a given set of elements. This pattern describes an efficient BFS approach

// Problem 1
// Given a set with distinct elements, find all of its distinct subsets

// my way: dfs
const find_subsets = function(nums) {
	let result = [];
	function dfs(i, arr){
		if(i === nums.length){
			result.push([...arr]);
			return
		}
		dfs(i+1, [...arr, nums[i]]);
		dfs(i+1, [...arr]);
	}
	dfs(0, []);
	return result;
};

// bfs recursive
const find_subsets = function (nums){
	let result = [[]];
	function bfs(index){
		if(index === nums.length)
			return
		let length = result.length;
		for(let i = 0; i < length; i++){
			result.push([...result[i], nums[index]]);
		}
		bfs(index+1);
	}
	bfs(0);
	return result;
}

// bfs iterative
const find_subsets = function (nums){
	let result = [[]];
	for(let i = 0; i < nums.length; i++){
		let length = result.length;
		for(let j = 0; j < length; j++){
			result.push([...result[j], nums[i]]);
		}
	}
	return result;
}
// O(N*2^N) space and time


//Problem 2
// Subsets with duplicates


// bfs iterative
const find_subsets = function (nums){
	let result = [[], [nums[0]]];
	let prevLength = 1;
	let currLength;
	nums.sort((a,b) => a-b);
	for(let i = 1; i < nums.length; i++){
		currLength = result.length;
		if(nums[i] !== nums[i-1]){
			for(let j = 0; j < currLength; j++)
				result.push([...result[j], nums[i]]);
		}
		else{
			while(prevLength < currLength){
				result.push([...result[prevLength], nums[i]]);
				prevLength++;
			}
		}
		prevLength = currLength;
	}
	return result;
}
// O(n*2^n) space and time


// PERMUTATIONS
// Given a set of numbers, find all of its permutations and output them


// backtracking
let find_permutations = function (nums){
	let subsets = [];
	function backtrack(i, arr){
		if(i === nums.length){
			subsets.push([...arr]);
		}
		for(let j = 0; j < nums.length; j++){
			if(nums[j] !== false){
				let temp = nums[j];
				nums[j] = false;
				backtrack(i+1, [...arr, temp]);
				nums[j] = temp;
			}
		}
	}
	backtrack(0, []);
	return subsets;
}
// O(N*N!) time
// educative has it done it differently and I don't like their way

