/*In a lot of problems, we are asked to reverse the links between a set of nodes of a LinkedList.
Often, the constraint is that we need to do this in-place, i.e. using the existing node objects and without using extra memory.

In-place reversal of a LinkedList pattern describes an efficient way to solve the above problem. */

class Node {
  constructor(value, next=null){
    this.value = value;
    this.next = next;
  }
 }

 const reverse = function(head){
 	let prev = null;
 	while(head !== null){
 		const temp = head.next;
 		head.next = prev;
 		prev = head;
 		head = temp;
 	}
 	return prev;
 }


 //Reverse A sub-list


const reverse_sub_list = function(head, p, q) {
	let node = head;
	while(p > 2){
		node = node.next;
		p--;
		q--;
	}
	let copyNode = node;
	let prev = null;
	let current = node.next;
	let copyHead = current;
	q--;
	while(q > 0){
		const temp = current.next;
		current.next = prev;
		prev = current;
		current = temp;
		q--;
	}
	copyNode.next = prev;
	copyHead.next = current;
	return head;
};
// won't work if p = 1



/* 
red red red red red red red red red red red red red red
Problem Challenge 1

Reverse every alternating K-element Sub-list 
Given the head of a LinkedList and a number ‘k’, reverse every ‘k’ sized sub-list starting from the head.
If, in the end, you are left with a sub-list with less than ‘k’ elements, reverse it too
*/
const reverse_alternate_k_elements = function(head, k) {
  let current = head;
  let prev = null;
  let copyLink1;
  let copyLink2;
  let i = 0;
  while(current){
    let count = k;
    copyLink2 = current;
    while(count > 0 && current){
      temp = current.next;
      current.next = prev;
      prev = current;
      current = temp;
      count--;
    }
    if(i == 0){
      head = prev;
      i++;
    }
    else copyLink1.next = prev;
    copyLink2.next = current;
    count = k;
    while(count > 1 && current){
      current = current.next;
      count--;
    }
    copyLink1 = current;
    current = current.next;
  }
  return head;
};


/*Problem Challenge 2

Rotate a Linked List
Given the head of a singly linked list and a number 'K', rotate the LinkedList to the right by 'K' nodes
*/const rotate = function(head, rotations) {
  // reach the end
  let fast = head;
  let k = rotations;
  while(k > 0){
  	fast = fast.next;
  	k--;
  }
  let slow = head;
  while(fast.next !== null){
  	fast = fast.next;
  	slow = slow.next;
  }
  const temp = slow.next;
  fast.next = head;
  slow.next = null;
  return temp;
};




