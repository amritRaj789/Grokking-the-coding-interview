/*Any problem involving the traversal of a tree in a level-by-level order can be efficiently solved using this approach.
We will use a Queue to keep track of all the nodes of a level before we jump onto the next level.
Space complexity of the algorithm will be O(W), where W is the maximum number of nodes on any level
*/



/*class Queue {
	constructor(){
		this.list = [];
	}
	length(){
	return this.list.length;
	}
	enqueu(value){
		this.list.push(value);
	}
	dequeue(){
		return this.list.shift();
	}
	isEmpty(){
		return (this.list.length === 0)
	}
}*/




/*PROBLEM 1
Binary Tree Level Order Traversal 
Given a binary tree, populate an array to represent its level-by-level traversal.
*/

class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null; 
  }
};

const traverse = function(root) {
  let result = [];
  let queue = [root];
  let count;
  while(queue.length !== 0){
  	let arr = [];
  	count = queue.length;
  	while(count > 0){
  		let temp = queue.shift();
  		arr.push(temp.value);
  		count--;
  		if(temp.left)
  			queue.push(temp.left)
  		if(temp.right)
  			queue.push(temp.right);
  	}
  	result.push(arr);
  }
  return result;
}

/*PROBLEM 2
Reverse Level Order Traversal
Lowest level comes first.
Given a binary tree, populate an array to represent its level-by-level traversal in reverse order, i.e., the lowest level comes first. You should populate the values of all nodes in each level from left to right in separate sub-arrays.
Given a binary tree, populate an array to represent its level-by-level traversal in reverse order, i.e., the lowest level comes first. You should populate the values of all nodes in each level from left to right in separate sub-arrays.*/

const traverse = function(root) {
  result = [];
  let stack = [];
  let queue = [root];
  let count;
  while(queue.length !== 0){
  	let arr = [];
  	count = queue.length;
  	while(count > 0){
  		let temp = queue.shift();
  		arr.push(temp.value);
  		if(temp.left)
  			queue.push(temp.left);
  		if(temp.right)
  			queue.push(temp.right);
  		count--;
  	}
  	stack.push(arr);
  }
  for(let i = stack.length-1; i >= 0; i--){
  	result.push(stack[i]);
  }
  return result;
}


/*Problem 3

First travel left to right, then right to left; for each level
ZigZag traversal
*/
const traverse = function(root) {
  let result = [];
  let queue = [root];
  let count;
  let odd = 1;
  while(queue.length !== 0){
  	let arr = [];
  	count = queue.length;
  	while(count > 0){
  		let temp = queue.shift();
  		arr.push(temp.value);
  		count--;
  		if(temp.left)
  			queue.push(temp.left)
  		if(temp.right)
  			queue.push(temp.right);
  	}
  	if(odd%2 === 1){
  		result.push(arr);
  		odd++;
  	}
  	else{
  		let reversearr = [];
  		for(let i = arr.length-1; i >= 0; i--){
  			reversearr.push(arr[i]);
  		}
  		result.push(reversearr);
  		odd++;
  	}
  }
  return result;
}