/*Problem 1
Binary Tree Path Sum
Given a binary tree and a number ‘S’, find if the tree has a path from root-to-leaf
such that the sum of all the node values of that path equals ‘S’.
*/
const has_path = function (root, number){
	let stack = [[root, 0]];
	while(stack.length !== 0){
		let temp = stack.pop();
		let node = temp[0];
		let sum = temp[1];
		sum += node.value;
		if(node.left == null){
			if(sum === number)
				return true
		}
		else
			stack.push([node.left, sum])
		if(node.right === null){
			if(sum === number)
				return true;
		}
		else
			stack.push([node.right, sum]);
	}
	return false;
}

//Recursive Solution
const has_path = function(root, sum){
	function dfs(node, num){
	    if(node === null)
	      return false
		if(node.left === null && node.right === null){
			if(num + node.value === sum)
				return true
      		return false
		}
		else{
			return dfs(node.left, num+node.value) || dfs(node.right, num+node.value)
		}
	}
  return dfs(root, 0);
}

/*Problem 2
All Paths to Sum
Given a binary tree and a number ‘S’, find all paths from root-to-leaf such that 
the sum of all the node values of each path equals ‘S’.
*/
const find_paths = function(root, sum){
	let result = [];
	function dfs(node, num, arr){
		if(node === null)
			return
		if(node.left === null && node.right === null){
			if(num + node.value === sum){
				result.push([...arr, node.value]);
			}
			return
		}
		else{
			dfs(node.left, num+node.value, [...arr, node.value]);
			dfs(node.right, num+node.value, [...arr, node.value]);
		}
	}
  	dfs(root, 0, []);
	return result;
}
