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