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