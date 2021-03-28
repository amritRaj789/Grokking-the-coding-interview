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

//iterative solution

const find_paths = function (root, sum){
	let stack = [[root, 0, []]];
	let result = [];
	while(stack.length !== 0){
		temp = stack.pop();
		node = temp[0];
		currSum = temp[1];
		arr = temp[2];
		if(node.left === null && node.right === null){
			if(currSum + node.value === sum)
				result.push([...arr, node.value])
		}
		else{
			if(node.right)
				stack.push([node.right, currSum+node.value, [...arr, node.value]])
			if(node.left)
				stack.push([node.left, currSum+node.value, [...arr, node.value]])
		}
	}
	return result;
}
//Similar Problems
// Given a Binary Tree, return all root-to-leaf paths


const list_all_paths = function(root){
	let stack = [[root, []]]
	let result = [];
	while(stack.length !== 0){
		temp = stack.pop();
		node = temp[0];
		arr = temp[1];
		if(node.left === null && node.right === null){
			result.push([...arr, node.value])
		}
		else{
			if(node.left)
				stack.push([node.left, [...arr, node.value]])
			if(node.right)
				stack.push([node.right, [...arr, node.value]])
		}
	}
	return result;
}

/*Problem 3
Sum of Path Numbers
Given a binary tree where each node can only have a digit (0-9) value, each root-to-leaf path will represent a number. 
Find the total sum of all the numbers represented by all paths.
*/
const find_sum_of_path_numbers = function(root){
	let totalSum = 0;
	let stack = [[root, 0]];
	while(stack.length !== 0){
		temp = stack.pop();
		node = temp[0];
		num = temp[1];
		newNum = num*10 + node.value;
		if(node.left === null && node.right === null){
			totalSum += newNum;
		}
		else{
			if(node.left)
				stack.push([node.left, newNum])
			if(node.right)
				stack.push([node.right, newNum])
		}
	}
	return totalSum;
}

/*Problem 4
Path with a Given Sequence
Given a binary tree and a number sequence, find if the sequence is present as a root-to-leaf path in the given tree.
*/
const find_path = function(root, sequence){
	let stack = [[root, []]];
	while(stack.length !== 0){
		temp = stack.pop();
		node = temp[0];
		arr = [...temp[1], node.value];
		if(node.left === null && node.right === null){
			if(arr.length === sequence.length){
				present = true;
				for(let i = 0; i < sequence.length; i++){
					if(sequence[i] !== arr[i]){
						present = false;
						break;
					}
				}
				if(present)
					return true;
			}
		}
		else{
			if(node.left)
				stack.push([node.left, arr]);
			if(node.right)
				stack.push([node.right, arr]);
		}
	}
	return false;
}

// alternate BFS Solution

const find_path = function (root, sequence){
	let queue = [root];
	let level = 0;
	while(queue.length !== 0){
		if(level >= sequence.length)
			return false;
		count = queue.length;
		present_for_this_level = false;
		while(count > 0){
			temp = queue.shift();
			if(temp.value === sequence[level])
				present_for_this_level = true;
			if(temp.left)
				queue.push(temp.left);
			if(temp.right)
				queue.push(temp.right);
			count--;
		}
		if(!present_for_this_level)
				return false;
		level++;
	}
	return true;
}