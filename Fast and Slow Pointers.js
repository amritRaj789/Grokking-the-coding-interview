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