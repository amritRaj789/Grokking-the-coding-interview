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
// recursive
const find_sum_of_path_numbers = function(root) {
	let sum = 0;
	function dfs(node, total){
		if(node.left === null && node.right === null){
			sum += total*10 + node.value;
		}
		if(node.left)
			dfs(node.left, total*10+node.value)
		if(node.right)
			dfs(node.right, total*10+node.value)
	}
	dfs(root, 0);
	return sum;
};


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

//recursive
const find_path = function(root, sequence) {
	function dfs(node, l){
		if(node == null)
			return false
    	if(node.value !== sequence[l])
			return false;
		if(l == sequence.length-1)
			return true;
		return (dfs(node.left, l+1) || dfs(node.right, l+1));
	}
	return dfs(root, 0)
};

/*Problem 5
Count paths for a Sum
Given a binary tree and a number ‘S’, find all paths in the tree such that the sum of all the node values of each path equals ‘S’. 
Please note that the paths can start or end at any node but all paths must follow direction from parent to child (top to bottom).*/



const count_paths = function (root, s){
	let count = 0;
	function check_path(start, s){
		let stack = [[start, 0]];
		while(stack.length !== 0){
			let temp = stack.pop();
			let node = temp[0];
			let newSum = temp[1] + node.value;
			if(newSum === s){
				count++;
			}
			if(newSum >= s)	//optimization to stop going deeper if sum crosses s
				continue
			else{
				if(node.left)
					stack.push([node.left, newSum]);
				if(node.right)
					stack.push([node.right, newSum]);
			}
		}
	}
	let queue = [root];
	while(queue.length !== 0){
		let currNode = queue.shift();
		check_path(currNode, s);
		if(currNode.left)
			queue.push(currNode.left)
		if(currNode.right)
			queue.push(currNode.right)
	}
	return count;
}

//recursive
const count_paths = function(root, S) {
	let paths = 0;
	function dfs(node, total){
		if(node.value + total === s){
			paths++;
		}
		else{
			if(node.left)
				dfs(node.left, total+node.value);
			if(node.right)
				dfs(node.right, total+node.value);
		}
		if(node.left)
			dfs(node.left, 0);
		if(node.right)
			dfs(node.right, 0);
	}
	dfs(root, 0);
	return paths;
};

/*Problem Challenge 1
Tree diameter
Given a binary tree, find the length of its diameter. 
The diameter of a tree is the number of nodes on the longest path between any two leaf nodes. 
The diameter of a tree may or may not pass through the root.
Note: You can always assume that there are at least two leaf nodes in the given tree.
*/
find_diameter (root){
	let maxLength = 0;
	function check_diamter (node){
		const diameter = check(node.left, 0) + check(node.right, 0) + 1;
		maxLength = Math.max(maxLength, diameter);
	}
	function check(start, height){
		if(start === null)
			return height;
		return Math.max(check(start.left, height+1), check(start.right, height+1));
	}
	let queue = [root];
	while(queue.length !== 0){
		let tempNode = queue.shift();
		if(tempNode.left !== null && tempNode.right !== null)
			check_diamter(tempNode);
		if(tempNode.left)
			queue.push(tempNode.left);
		if(tempNode.right)
			queue.push(tempNode.right);
	}
	return maxLength;
}

// recursive
find_diameter (root){
	let maxLength = 0;
	function dfs(node){
		if(node === null)
			return 0
		let leftMax = dfs(node.left);
		let rightMax = dfs(node.right);
		if(leftMax !== null && rightMax !== null)
			maxLength = Math.max(leftMax + rightMax + 1, maxLength);
		return (Math.max(leftMax, rightMax) + 1);
	}
	dfs(root);
	return maxLength;
}

/*Problem Challenge 2
Path with Maximum Sum
Find the path with the maximum sum in a given binary tree. Write a function that returns the maximum sum.
A path can be defined as a sequence of nodes between any two nodes and doesn’t necessarily pass through the root. 
The path must contain at least one node.
*/
const find_maximum_path_sum = function (root){
	let maxSum = -Infinity;
	function findMax(node){
		const total = check(node.left, 0) + check(node.right, 0) + node.value;
		maxSum = Math.max(maxSum, total);
	}
	function check(start, sum) {
		if(start === null)
			return sum
		else{
			return Math.max(check(start.right, sum+start.value), check(start.left, sum+start.value));
		}
	}
	if(root.left === null || root.right === null)
		findMax(root);
	let queue = [root];
	while(queue.length !== 0){
		let tempNode = queue.shift();
		if(tempNode.left !== null && tempNode.right !== null)
			findMax(tempNode);
		if(tempNode.left)
			queue.push(tempNode.left);
		if(tempNode.right)
			queue.push(tempNode.right);
	}
	return maxSum;
}
//this works if there are no negative numbers in the tree

// Educative's recursive solution
const find_maximum_path_sum = function (root) {
	let maxSum = -Infinity;

	function recursiveTravel (node){
		if(node === null){
			return 0;
		}
		let maxLeftTree = recursiveTravel(node.left);
		let maxRightTree = recursiveTravel(node.right);

		maxLeftTree = Math.max(maxLeftTree, 0);
		maxRightTree = Math.max(maxRightTree, 0);

		let localSum = maxLeftTree + maxRightTree + node.value;
		maxSum = Math.max(maxSum, localSum);
		return Math.max(maxLeftTree, maxRightTree) + node.value;
	}
	recursiveTravel(root);
	return maxSum;
}


// my recursive solution
const find_maximum_path_sum = function (root){
	let maxPathSum = -Infinity;
	function dfs(node){
		if(node == null)
			return 0;
		let leftSum = dfs(node.left);
		let rightSum = dfs(node.right);
		maxPathSum = Math.max(maxPathSum, leftSum + rightSum + node.value);
		let maxSum = Math.max(leftSum, rightSum) + node.value;
    return maxSum <= 0 ? 0 : maxSum;
	}
	dfs(root);
	return maxPathSum;
}