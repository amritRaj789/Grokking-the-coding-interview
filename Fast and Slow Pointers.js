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


//Palindrome LinkedList (medium)
const is_palindromic_linked_list= function(head) {
  let fast = head;
  let slow = head;
  let array = [slow.value];
  while(fast.next !== null && fast.next.next !== null){
  	fast = fast.next.next;
  	slow = slow.next;
  	array.push(slow.value);
  }
  if(fast.next !== null)
  	slow = slow.next;

  while(slow !== null){
  	if(slow.value !== array.pop())
  		return false
  	slow = slow.next;
  }
  return true;

};
//but the above method uses O(N) space

//The below method uses constant space
function is_palindromic_linked_list(head) {
  if (head === null || head.next === null) {
    return true;
  }

  // find middle of the LinkedList
  let slow = head,
    fast = head;
  while ((fast !== null && fast.next !== null)) {
    slow = slow.next;
    fast = fast.next.next;
  }

  headSecondHalf = reverse(slow); // reverse the second half
  // store the head of reversed part to revert back later
  copyHeadSecondHalf = headSecondHalf;

  // compare the first and the second half
  while ((head !== null && headSecondHalf !== null)) {
    if (head.value !== headSecondHalf.value) {
      break; // not a palindrome
    }

    head = head.next;
    headSecondHalf = headSecondHalf.next;
  }
  reverse(copyHeadSecondHalf); // revert the reverse of the second half

  if (head === null || headSecondHalf === null) { // if both halves match
    return true;
  }

  return false;
}

function reverse(head) {
  let prev = null;
  while (head !== null) {
    next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
}


//Rearrange a LinkedList (medium)

const reorder = function(head) {
	let fast = head;
	let slow = head;
	while(fast !== null && fast.next !== null){
		fast = fast.next.next;
		slow = slow.next;
	}
	let headSecondHalf = reverse(slow);
	while(head.next !== headSecondHalf){
		let temp1 = head.next;
		head.next = headSecondHalf;
		let temp2 = headSecondHalf.next;
		headSecondHalf.next = temp1;
		head = temp1;
		headSecondHalf = temp2;
	}
}

function reverse(head){
	let prev = null;
	while(head !== null){
		temp = head.next;
		head.next = prev;
		prev = head;
		head = temp;
	}
  return prev;
}

//Cycle in a circular array
red red red red red red red red red red red
function circular_array_loop_exists(arr) {
  for (i = 0; i < arr.length; i++) {
    isForward = arr[i] >= 0; // if we are moving forward or not
    let slow = i,
      fast = i;

    // if slow or fast becomes '-1' this means we can't find cycle for this number
    while (true) {
      // move one step for slow pointer
      slow = find_next_index(arr, isForward, slow);
      // move one step for fast pointer
      fast = find_next_index(arr, isForward, fast);
      if (fast !== -1) {
        // move another step for the fast pointer
        fast = find_next_index(arr, isForward, fast);
      }
      if (slow === -1 || fast === -1 || slow === fast) {
        break;
      }
    }

    if (slow !== -1 && slow === fast) {
      return true;
    }
  }

  return false;
}
// The above has O(N^2) time complexity

//I still haven't found a solution for O(N) by myself

//Here's a solution I found on Leetcode 



var circularArrayLoop = function(nums) {
    //1.This array maybe has more than one cycle that we don't know,
	//so we need to run each element to check cycle. 
    for(let i = 0 ; i < nums.length ; i++){
	    //2.this cycle only can choose one direction , 
		//so we need to use 'dir' to check they all positive or negative.
        let ans = [];
        let dir = Math.sign(nums[i]);
        let j = i;
        
		//3.if this element has been checked, change it to zero.
		//if the nums[j]  == 0 , means we find this cycle and get the start point called j.
        while(nums[j] != 0 && Math.sign(nums[j]) == dir){
            let preJ = j;
            
            j += nums[j];
            j %= nums.length;
            j += j < 0 ? nums.length : 0;
            
            ans.push(preJ);
            nums[preJ] = 0;
        }
		//4.check the cycle size more than one or not
        let pos = ans.indexOf(j);
        if(ans.length > 1 && pos != -1 && pos != ans.length - 1)  return true;
    }
    
    return false;
}
