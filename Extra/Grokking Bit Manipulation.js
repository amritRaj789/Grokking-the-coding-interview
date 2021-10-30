// Bitwise And

// Count number of Set Bits (Bits that are 1s)

const CountSetBits = (number) => {
	let count = 0;
	while(n > 0){
		n = n & (n-1);
		count++;
	}
	return count;
}
// (n & n-1) flips the least significant 1, everything before that remains the same



// Counting Bits II
//Write a program to return an array of number of 1’s in the binary representation of every number 
//in the range [0, n].


const countingBits = function (n){
	let result = [0];
	for(let i = 1; i <= n; i++){
		let j = i;
		let count = 0;
		while(j > 0){
			j = (j & j-1);
			count++;
		}
		result.push(count);
	}
	return result;
}

// Check if Number is Even/Odd
const IsEven = n => {
    return (n & 1) === 0 ? 'Even' : 'Odd';
}

// Check if Power of 2
const isPowerOf2 = n => {
	return (!(n&n-1))
}