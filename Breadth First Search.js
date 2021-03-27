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

/*Problem 4
Level Averages in a Binary Tree
*/
const find_level_averages = function (root){
	let result = [];
	let queue = [root];
	let count;
	while(queue.length !== 0){
		count = queue.length;
		n = count;
		let sum = 0;
		while(count > 0){
			let temp = queue.shift();
			sum += temp.value;
			if(temp.left)
				queue.push(temp.left);
			if(temp.right)
				queue.push(temp.right);
			count--;
		}
		result.push(sum/n);
	}
	return result;
}

/*Problem 5
MinFind the minimum depth of a binary tree. 
The minimum depth is the number of nodes along the shortest path from the root node to the nearest leaf node.
*/
const find_minimum_depth = function (root){
	let result = 0;
	let queue = [root];
	while(queue.length !== 0){
		count = queue.length;
		result++;
		while(count > 0){
			temp = queue.shift();
			if(temp.left === null && temp.right === null ){
				return result
			}
			if(temp.left !== null)
				queue.push(temp.left);
			if(temp.right !== null)
				queue.push(temp.right);
			count--;
		}
	}
}


/*Problem 6
Level Order Successor
Given a binary tree and a node, find the level order successor of the given node in the tree. 
The level order successor is the node that appears right after the given node in the level order traversal.
*/
const find_successor = function (root, key){
	let queue = [root];
	while(queue.length !== 0){
		temp = queue.shift();
		if(temp.left)
			queue.push(temp.left);
		if(temp.right)
			queue.push(temp.right);
		if(temp.value === key)
			return queue.shift();
	}
}


/*Problem 7
Connect Level Order Siblings 
Given a binary tree, connect each node with its level order successor. 
The last node of each level should point to a null node.
*/
const connect_level_order_siblings = function (root){
	let queue = [root];
	while(queue.length !== 0){
		count = queue.length;
		let prev
		while(count > 0){
			let temp = queue.shift();
			if(count !==1)
				temp.next = queue[0];
			if(temp.left)
				queue.push(temp.left);
			if(temp.right)
				queue.push(temp.right);
			count--;
		}
	}
	return
}

/*Problem Challenge 1
Connect All Level Order Siblings
Given a binary tree, connect each node with its level order successor.
The last node of each level should point to the first node of the next level.
*/
const connect_all_siblings = function (root){
	let queue = [root];
	while(queue.length !== 0){
		let temp = queue.shift();
		if(temp.left)
			queue.push(temp.left)
		if(temp.right)
			queue.push(temp.right)
		temp.next = (queue.length) ? queue[0] : null;
	}
}

/*Problem Challenge 2
Right view of a Binary Tree
Given a binary tree, return an array containing nodes in its right view.
The right view of a binary tree is the set of nodes visible when the tree is seen from the right side.
*/
const tree_right_view = function(root){
	let result = [];
	let queue = [root];
	while(queue.length !== 0){
		count = queue.length;
		while(count > 0){
			temp = queue.shift();
			if(count == 1)
				result.push(temp.value);
			if(temp.left)
				queue.push(temp.left);
			if(temp.right)
				queue.push(temp.right);
			count--;
		}
	}
	return result;
}