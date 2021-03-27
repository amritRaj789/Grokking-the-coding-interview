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