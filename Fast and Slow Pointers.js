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

//Happy number
const find_happy_number = function(num) {
  let fast = findSquare(findSquare(num));
  let slow = findSquare(num);
  while(fast !== slow){
  	if(fast === 1)
  		return true;
  	fast = findSquare(findSquare(fast));
  	slow = findSquare(slow);
  }
  if(fast === 1)
  	return true
  return false;
};

//helper function to find sum of squares of digits
function findSquare (num){
	let sum = 0;
	while(num > 0){
		sum += (num%10)*(num%10);
		num = Math.floor(num/10);
	}
	return sum;
}


//Middle of the LinkedList (easy)
const find_middle_of_linked_list = function(head) {
  let fast = head;
  let slow = head;
  while(fast !== null && fast.next !== null){
  	fast = fast.next.next;
  	slow = slow.next;
  }
  return slow;
}
