/*XOR is a logical bitwise operator that returns 0 (false) if both bits are the same
and returns 1 (true) otherwise. In other words, it only returns 1 if exactly one bit 
is set to 1 out of the 2 bits in comparison.
*/
//It is surprising to know the approaches that the XOR operator enables us to solve certain
//problems. 

//For example: 

//given an array of n-1 integers in the range from 1 to n, find the one number that is missing

//usual method:

function find_missing_number(arr){
	const n = arr.length + 1;
	let total = arr.reduce((a, b) => a+b);
	return ((n*(n+1))/2) - total;
}
console.log(`Missing number is: ${find_missing_number([1, 5, 2, 6, 4])}`);

//One problem with the above method is: we can get integer overflow when n is large.
//XOR comes to the rescue.

function find_missing_number(arr){
	const n = arr.length;
	let x = 1;
	for(let i = 2; i <= n+1; i++){
		x = x ^ i;
	}
	let y = arr[0];
	for(let i = 1; i < n; i++){
		y = y ^ arr[i];
	}
	return x ^ y;
}

// Important properties of XOR

// Xor of a number with itself returns 0
// Xor of a number with 0 returns the number itself
// Xor is Associative i.e: (a^b)^c = a^(b^c)
// Xor is commutative i.e: a^b = b^a

// Problem 1
// Single Number
//In a non-empty array of integers, every number appears twice except for one, find that single number.

function find_single_number(arr){
	let x = arr[0];
	for(let i = 1; i < arr.length; i++)
		x = x^arr[i];
	return x
}


// Problem 2
// 2 single numbers

/*In a non-empty array of numbers, every number appears exactly twice except two numbers that appear only once. 
Find the two numbers that appear only once.
*/
function find_single_numbers(nums){
	let n1xn2 = 0;
	nums.forEach(num => n1xn2 = n1xn2^num);
	// finding rightmost bit that is 1
	let rightmost_bit = 1;
	while((rightmost_bit & n1xn2) === 0){
		rightmost_bit = rightmost_bit << 1;
	}
	let num1 = 0;
	let num2 = 0;
	nums.forEach((num) => {
		if((num & rightmost_bit) !== 0)
			num1 = num1 ^ num;
		else
			num2 = num2 ^ num;
	})
	return [num1, num2];
}


// Problem 3.
// Complement of Base 10 Number
//For a given positive number N in base-10, 
//return the complement of its binary representation as a base-10 integer.

function calculate_bitwise_complement(n){
	let pow2 = Math.ceil(Math.log2(n+1));
	let num = 2 ** pow2;
	return n ^ (num-1);
}

//other way:
function calculate_bitwise_complement(num){
	let bit_count = 0;
	let n = num;
	while(n > 0){
		bit_count++;
		n = n >> 1;
	}
	let all_bits_set = Math.pow(2, bit_count) - 1;
	return num ^ all_bits_set;
}