// This pattern describes an efficient way to handle all problems involving Binary Search. We will go through a set of problems that will help us build an understanding of this pattern so that we can apply this technique to other problems we might come across in the interviews.

// Problem 1

// Order-agnostic Binary Search

const binary_search = function(arr, key) {
	if(arr[0] < arr[arr.length-1]){
		let left = 0;
		let right = arr.length-1;
		while(left <= right){
			mid = Math.floor((left + right)/2);
			if(key < arr[mid])
				right = mid-1;
			else if(key > arr[mid])
				left = mid+1;
			else
				return mid;
		}
		return -1
	} // descending
	else{
		let left = 0;
		let right = arr.length-1;
		while(left <= right){
			mid = Math.floor((left + right)/2);
			if(key < arr[mid])
				left = mid+1;
			else if(key > arr[mid])
				right = mid-1;
			else
				return mid;
		}
		return -1
	}	// ascending
};


// problem 2
// Ceiling of a Number
//Given an array of numbers sorted in an ascending order, find the ceiling of a given number ‘key’. 
//The ceiling of the ‘key’ will be the smallest element in the given array greater than or equal to the ‘key’.


const search_ceiling_of_a_number = function(arr, key) {
	if(arr[0] >= key)
		return 0
	else if(arr[arr.length-1] < key)
		return -1;
	let left = 0;
	let right = arr.length-1;
	while(left <= right){
		mid = Math.floor((left+right)/2);
		if(arr[mid] === key)
			return mid
		else if(key < arr[mid])
			right = mid-1;
		else
			left = mid+1;
	}
	return left;
};


// Similar Problem
// Floor of a given number

function search_floor_of_a_number(arr, key){
	let n = arr.length;
	if(arr[n-1] <= key)
		return n-1;
	if(arr[0] > key)
		return -1
	let left = 0;
	let right = n-1;
	while(left <= right){
		mid = Math.floor((left+right)/2);
		if(arr[mid] === key)
			return mid;
		else if(key > arr[mid])
			left = mid+1;
		else
			right = mid-1;
	}
	return right;
}


// Problem 3
// Next letter
/*Given an array of lowercase letters sorted in ascending order, find the smallest letter 
in the given array greater than a given ‘key’.
Assume the given array is a circular list, which means that the last letter is assumed 
to be connected with the first letter. This also means that the smallest letter in the 
given array is greater than the last letter of the array and is also the first letter of the array.*/


const search_next_letter = function (letters, key){
	let n = letters.length;
	if(key < letters[0] || key >= letters[n-1])
		return letters[0];
	let left = 0;
	let right = n-1;
	while(left <= right){
		mid = Math.floor((left+right)/2);
		if(letters[mid] === key)
			return letters[mid+1]
		else if(key > letters[mid])
			left = mid+1;
		else
			right = mid-1;
	}
	return letters[left]
}

console.log(search_next_letter(['a', 'c', 'f', 'h'], 'f'))
