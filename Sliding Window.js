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


const length_of_longest_substring = function(str, k) {
  let hash = {};
  let start = 0;
  let maxRepeatingChar = str[0];
  let maxRepeatingCharCount = 1;
  let maxLength = -Infinity;
  for(let end = 0; end < str.length; end++){
    if(!(str[end] in hash))
      hash[str[end]] = 0;
    hash[str[end]]++;
    if(hash[str[end]] > maxRepeatingCharCount){
      maxRepeatingChar = str[end];
      maxRepeatingCharCount = hash[str[end]];
    }
    while(end-start + 1 - maxRepeatingCharCount  > k){
      hash[str[start]]--;
      if(hash[str[start]] === 0)
        delete hash[str[start]];
      start++;
    }
    maxLength = Math.max(maxLength, end-start+1);
  }

  return maxLength;
};

const length_of_longest_substring = function(arr, k) {
  let hash = [0, 0];
  let start = 0;
  let maxLength = 0;
  for(let end = 0; end < arr.length; end++){
    hash[arr[end]]++;
    while(hash[0] > k){
      hash[arr[start]]--;
      start++;
    }
    maxLength = Math.max(maxLength, end - start + 1);
  }
  return maxLength;
};

//Problem Challenge 1
const find_permutation = function(str, pattern) {
  let hash1 = {};
  for(let char of pattern){
    if(!(char in hash1))
      hash1[char] = 0;
    hash1[char]++;
  }
  let charMatched = Object.keys(hash1).length;
  let start = 0;
  for(let i = 0; i < str.length; i++){
    if(str[i] in hash1)
      hash1[str[i]]--;
    if(hash1[str[i]] === 0)
      charMatched--;
    if(i >= pattern.length){
      if(str[start] in hash1){
        hash1[str[start]]++;
        if(hash1[str[start]] === 1)
          charMatched++;
      }
          start++;
    }
    if(charMatched === 0)
      return true;
  }
  return false;
};

//Problem Challenge 2

const find_string_anagrams = function(str, pattern) {
  let result = [];
  let hash1 = {};
  let start = 0;
  for(let char of pattern){
    if(!(char in hash1))
      hash1[char] = 0;
    hash1[char]++;
  }
  let charToBeMatched = Object.keys(hash1).length;
  for(let i = 0; i < str.length; i++){
    if(str[i] in hash1)
      hash1[str[i]]--;
    if(hash1[str[i]] === 0)
      charToBeMatched--;
    if(i >= pattern.length){
      if(str[start] in hash1){
        hash1[str[start]]++;
        if(hash1[str[start]] === 1)
          charToBeMatched++;
      }
      start++;
    }
    if(charToBeMatched === 0)
      result.push(start);
  }
  return result;
};

// Problem Challenge 3

const find_substring = function(str, pattern) {
  let result = "";
  let minLength = +Infinity;
  let hash = {};
  for(let char of pattern){
    if(!(char in hash))
      hash[char] = 0;
    hash[char]++;
  }
  let matched = Object.keys(hash).length;
  let start = 0;
  for(let end = 0; end < str.length; end++){
    if(str[end] in hash)
      hash[str[end]]--;
    if(hash[str[end]] === 0)
      matched--;
    while(matched === 0){
      if(minLength > end-start+1){
        minLength = end-start+1;
        result = str.slice(start, end+1);
      }
      if(str[start] in hash){
        hash[str[start]]++;
        if(hash[str[start]] === 1)
          matched++;
      }
      start++;
    }
  }
  return result;
}