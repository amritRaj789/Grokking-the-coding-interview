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



// Problem 4
// Number Range

/*Given an array of numbers sorted in ascending order, find the range of a given number ‘key’. 
The range of the ‘key’ will be the first and last position of the ‘key’ in the array.
Write a function to return the range of the ‘key’. If the ‘key’ is not present return [-1, -1].*/

const find_range = function (arr, key){
	let left = 0;
	let right = arr.length-1;
	while(left <= right){
		mid = Math.floor((left+right)/2);
		if(arr[mid] === key){
			let leftBound = mid;
			let rightBound = mid;
			while(leftBound >= 0 && arr[leftBound] === key){
				leftBound--;
			}
			while(rightBound < arr.length && arr[rightBound] === key){
				rightBound++;
			}
			return [leftBound+1, rightBound-1]
		}
		else if(key < arr[mid])
			right = mid-1;
		else
			left = mid+1;
	}
	return [-1, -1]
}
// the above method is bad if we have a large number of key present in the array.


// this is O(2logN) but is better than the above if N is large
const find_range = function (arr, key){
	let left = 0;
	let right = arr.length-1;
	let rightBound = -1;
	while(left <= right){
		mid = Math.floor((left+right)/2);
		if(key > arr[mid])
			left = mid+1;
		else if(key < arr[mid])
			right = mid-1;
		else{
			rightBound = mid;
			left = mid+1;
		}
	}
	if(rightBound === -1)
		return [-1, -1];
	left = 0;
	right = arr.length-1;
	let leftBound = -1;
	while(left <= right){
		mid = Math.floor((left+right)/2);
		if(key > arr[mid])
			left = mid+1;
		else if(key < arr[mid])
			right = mid-1;
		else{
			leftBound = mid;
			right = mid-1;
		}
	}
	return [leftBound, rightBound];
}



// Problem 5
// Search in a Sorted Infinite Array

/*Given an infinite sorted array (or an array with unknown size), find if a given number ‘key’ is present in the array. 
Write a function to return the index of the ‘key’ if it is present in the array, otherwise return -1.
Since it is not possible to define an array with infinite (unknown) size, 
you will be provided with an interface ArrayReader to read elements of the array. ArrayReader.get(index) will return the number at index; 
if the array’s size is smaller than the index, it will return Integer.MAX_VALUE.*/

const search_in_infinite_array = function (reader, key){
	if(reader.get(0) > key)
		return -1;
	let left = 0;
	let right = 1;
	while(reader.get(right) < key){
		newLeft = right+1;
		right += (right-left+1)*2;
		left = newLeft;
	}
	while(left <= right){
		mid = Math.floor((left+right)/2);
		if(reader.get(mid) === key)
			return mid
		else if(key < reader.get(mid))
			right = mid-1;
		else
			left = mid+1;
	}
	return -1;
}
// here we first have to know the bounds for the binary search. 
// leftbound is easy to know, for rightbound we will increase it exponentially
// time complexity : O(logN + logN) = O(2logN) = O(logN)



// Problem 6
// Minimum Difference Element

/*Given an array of numbers sorted in ascending order, find the element in the array 
that has the minimum difference with the given ‘key’.*/

// this is similar to floor of a number and ceiling of a number. find those 2 value and use them

const search_min_diff_element = function (arr, key){
	let left = 0;
	let right = arr.length-1;
	while(left <= right){
		mid = Math.floor((left+right)/2);
		if(arr[mid] === key)
			return key
		else if(key < arr[mid])
			right = mid-1;
		else
			left = mid+1;
	}
	if((arr[left] - key) < (key-arr[right]))
		return arr[left]
	return arr[right];
}


//Problem 7
// Bitonic Array Maximum
/*
Find the maximum value in a given Bitonic array. 
An array is considered bitonic if it is monotonically increasing and then monotonically decreasing. 
Monotonically increasing or decreasing means that for any index i in the array arr[i] != arr[i+1].*/


const find_max_in_bitonic_array = function (arr){
	let left = 0;
	let right = arr.length-1;
	while(left <= right){
		mid = Math.floor((left+right)/2);
		if(mid === 0 || mid === arr.length-1)
			return arr[mid]
		if(arr[mid] > arr[mid+1] && arr[mid] > arr[mid-1])
			return arr[mid];
		else if(arr[mid] > arr[mid-1] && arr[mid] < arr[mid+1]) // mid is in the monotonically incerasing half
			left = mid+1;
		else 		// mid is in the monotonically decresing half
			right = mid-1;
	}
}
// this is my way but it can be improved as shown below

const find_max_in_bitonic_array = function (arr){
	let left = 0;
	let right = arr.length-1;
	while(left !== right){
		mid = Math.floor((left+right)/2);
		if(arr[mid] > arr[mid+1])
			right = mid;
		else
			left = mid+1;
	}
	retunr arr[left];
}


//Problem Challenge 1

// Search in Bitonic Array


/*Given a Bitonic array, find if a given ‘key’ is present in it. 
An array is considered bitonic if it is monotonically increasing and then monotonically decreasing. 
Monotonically increasing or decreasing means that for any index i in the array arr[i] != arr[i+1].
Write a function to return the index of the ‘key’. If the ‘key’ is not present, return -1.*/

const search_bitonic_array = function (arr, key){
	let left = 0;
	let right = arr.length-1;
	while(left !== right){
		mid = Math.floor((left+right)/2);
		if(arr[mid] === key)
			return mid;
		if(arr[mid] > arr[mid+1])
			right = mid;
		else
			left = mid+1;
	}
	let start = 0;
	let end = left;
	while(start <= end){
		mid = Math.floor((start+end)/2);
		if(arr[mid] === key)
			return mid;
		else if(key < arr[mid])
			start = mid-1;
		else
			end = mid+1;
	}
	start = left;
	end = arr.length-1;
	while(start <= end){
		mid = Math.floor((start+end)/2);
		if(arr[mid] === key)
			return mid;
		else if(key < arr[mid])
			start = mid+1;
		else
			end = mid-1;
	}
	return -1
}
// first find the maximum element, then do binary search for each of the increasing/decreasing part of the array
// O(3logN) if key is in the descending half else O(2logN) if key is in the ascending half


// Problem Challenge 2
// Search in Rotated Array

/*Given an array of numbers which is sorted in ascending order and also rotated by some arbitrary number, 
find if a given ‘key’ is present in it.
Write a function to return the index of the ‘key’ in the rotated array. If the ‘key’ is not present, 
return -1. You can assume that the given array does not have any duplicates.*/

const search_rotated_array = function(arr, key){
	let left = 0;
	let right = arr.length-1;
	
	while(left <= right){
		mid = Math.floor((left+right)/2);
		if(arr[mid] === key)
			return mid;
		if(arr[left] <= arr[mid]){	// sorted in descending order
			if(key <= arr[left] && key > arr[mid])
				right = mid-1;
			else
				left = mid+1;
		} 
		else{		// sorted in ascending order
			if(key <= arr[right] && key > arr[mid])
				left = mid+1
			else
				right = mid-1;
		}
	}
	return -1;
}