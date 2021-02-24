// Preconditions: Sorted array or linkedlist
// objective: find a set of elements that aren't contiguous fulfilling certain constraints

const smallest_subarray_with_given_sum = function(s, arr) {
  let minLength = +Infinity;
  let start = 0;
  let windowSum = 0;
  for(let end = 0; end < arr.length; end++){
  	windowSum += arr[end];
  	while(windowSum >= s){
  		minLength = Math.min(minLength, end-start+1);
  		windowSum -= arr[start];
  		start++;
  	}
  }
  if(minLength === +Infinity)
  	return 0;
  	return minLength;
};

const longest_substring_with_k_distinct = function(str, k) {
  const hash = {};
  let maxLength = -Infinity;
  let start = 0;
  let uniqueCharInHash = 0;

  for(let end = 0; end < str.length; end++){
      if(!(str[end] in hash)){
        hash[str[end]] = 0;
      }
      hash[str[end]]++;
      if(hash[str[end]] === 1)
        uniqueCharInHash++;
      while(uniqueCharInHash > k){
        hash[str[start]]--;
        if(hash[str[start]] === 0)
          uniqueCharInHash--;
        start++;
      }
      if(uniqueCharInHash === k){
        maxLength = Math.max(maxLength, end-start+1);
      }
    }
    return maxLength;

};

const fruits_into_baskets = function(fruits) {
  let hash = {};
  let maxFruits = 0;
  let start = 0;
  for(let end = 0; end < fruits.length; end++){
    if(!(fruits[end] in hash))
      hash[fruits[end]] = 0;
    hash[fruits[end]]++;
    while(Object.keys(hash).length > 2){
      hash[fruits[start]]--;
      if(hash[fruits[start]] === 0)
        delete hash[fruits[start]];
      start++;
    }
    maxFruits = Math.max(maxFruits, end-start+1);
  }
  return maxFruits;
};

const non_repeat_substring = function(str) {
  let charFreq = {};
  let start = 0;
  let maxLength = -Infinity;
  for(let end = 0; end < str.length; end++){
    if(!(str[end] in charFreq))
      charFreq[str[end]] = end;
    else{
      start = charFreq[str[end]]+1;
      charFreq[str[end]] = end;
    }
    maxLength = Math.max(maxLength, end-start+1);
  }
  return maxLength;
};