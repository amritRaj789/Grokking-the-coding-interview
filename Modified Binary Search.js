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
