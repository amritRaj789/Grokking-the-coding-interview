/*The Levenshtein distance is a string metric for measuring difference between two sequences. 
Informally, the Levenshtein distance between two words is the minimum number of 
single-character edits (i.e. insertions, deletions or substitutions) required to change one word into the other.*/

			K	I 	T	T	E 	N 

		0 	1	2	3	4	5	6

	S	1	1	2	3	4	5	6

	I	2	2	1	2	3	4	5

	T	3	3	2	1	2	3	4

	T	4	4	3	2	1	2	3

	I	5	5	4	3	2	2	3

	N	6	6	5	4	3	3	2

	G	7	7	6	5	4	4	3

/*// Classical problem based on this algorithm
Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.
You have the following three operations permitted on a word:
1) Insert a character
2) Delete a character
3) Replace a character
*/
let minDistance = function (word1, word2){
	let m = word1.length;
	let n = word2.length;
	let dp = Array(m+1).fill(null).map(() => Array(n+1).fill(0));
	for(let i = 1; i <= m; i++){
		dp[i][0] = i;
	}
	for(let i = 1; i <= n; i++){
		dp[0][i] = i;
	}
	for(let i = 1; i <= m; i++){
		for(let j = 1; j <= n; j++){
			value1 = dp[i-1][j] + 1;
			value2 = dp[i][j-1] + 1;
			value3 = word1[i-1] === word2[j-1] ? dp[i-1][j-1] : dp[i-1][j-1] + 1;
			dp[i][j] = Math.min(value1, value2, value3);
		}
		
	}
	return dp[m][n];
}