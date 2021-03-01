/*
The fast and slow pointer approach, also known as the hare and tortoise algorithm, is a pointer
algorithm that uses two pointers which move through the array (or sequence/LinkedList) at different speeds.
This approach is quite useful when dealing with cyclic LinkedLists or arrays

*/

// LinkedList Cycle (easy)
const has_cycle = function(head) {
	let fast = head;
	let slow = head;
	while(fast.next !== null && fast.next.next !== null){
		slow = slow.next;
		fast = fast.next.next;
		if(fast === slow)
			return true;
	}
	return false;
}

red red red red red red red red
// Start of Linked List Cycle
const find_cycle_start = function(head){
	let length = find_cycle_length(head);
	let p1 = head;
	let p2 = head;
	while(length > 0){
		p2 = p2.next;
		length--;
	}
	while(p1 !== p2){
		p1 = p1.next;
		p2 = p2.next;
	}
	return p1;
};
// helper function
function find_cycle_length (head){
	let fast = head;
	let slow = head;
	while(fast !== null && fast.next !== null){
		fast = fast.next.next;
		slow = slow.next;
		if(fast === slow)
			break;
	}
	let current = slow;
	let k = 0;
	while(true){
		current = current.next;
		k++;
		if(current === slow)
			break;
	}
	return k;
}