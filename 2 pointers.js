// Preconditions: Sorted array or linkedlist
// objective: find a set of elements that aren't contiguous fulfilling certain constraints

//Pair with Target Sum
const pair_with_targetsum = function (arr, target_sum) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    if (arr[left] + arr[right] > target_sum) right--;
    else if (arr[left] + arr[right] < target_sum) left++;
    else return [left, right];
  }
  return [];
};

// Remove duplicates in place and return the length of the non-duplicate array
const remove_duplicates = function (arr) {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[j] !== arr[i]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
};

//Squaring a sorted Array
const make_squares = function (arr) {
  let result = new Array(arr.length);
  let i = arr.length - 1;
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    if (Math.abs(arr[right]) >= Math.abs(arr[left])) {
      result[i--] = arr[right] * arr[right];
      right--;
    } else {
      result[i--] = arr[left] * arr[left];
      left++;
    }
  }
  return result;
};

//Triplet Sum Close to Target
const triplet_sum_close_to_target = function (arr, target_sum) {
  arr.sort((a, b) => a - b);
  let closestSum = +Infinity;
  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;
    while (left < right) {
      sum = arr[i] + arr[left] + arr[right];
      if (sum < target_sum) left++;
      else if (sum > target_sum) right--;
      else return sum;
      if (Math.abs(closestSum - target_sum) > Math.abs(sum - target_sum))
        closestSum = sum;
      else if (
        Math.abs(closestSum - target_sum) === Math.abs(sum - target_sum)
      ) {
        closestSum = Math.min(sum, closestSum);
      }
    }
  }
  return closestSum;
};

//Triplets with Smaller Sum
const triplet_with_smaller_sum = function (arr, target) {
  let count = 0;
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;
    while (left < right) {
      if (arr[i] + arr[left] + arr[right] >= target) {
        right--;
      } else {
        count += right - left;
        left++;
      }
    }
  }
  return count;
};

//Subarrays with Product Less than a Target
//red red red red red red red red red red red red

// IMportant thing I learned while solving this problem was about arrays. WHen we Push some array to another, we are passing by reference
// Use parentArray.push(array.slice(0)) or parentArray.push(array.concat()) to pass it by value

const find_subarrays = function (arr, target) {
  let result = [];
  for (let i = 1; i <= arr.length; i++) {
    let array = [];
    let product = 1;
    let left = 0;
    for (let j = 0; j < arr.length; j++) {
      array.push(arr[j]);
      product *= arr[j];
      if (j >= i - 1) {
        if (product < target) {
          result.push(array.concat());
        }
        array.shift();
        product = product / arr[left];
        left++;
      }
    }
  }
  return result;
};

// The below one is much better imo. Both are my code btw
const find_subarrays = function (arr, target) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let product = 1;
    for (let j = i; j < arr.length; j++) {
      product *= arr[j];
      if (product < target) result.push(arr.slice(i, j + 1));
      else break;
    }
  }
  return result;
};

// red red red red red red red red red red
// Dutch National Flag Problem
const dutch_flag_sort = function (arr) {
  let left = 0;
  let right = arr.length - 1;
  for (let i = 0; i <= right; i++) {
    if (arr[i] === 0) {
      [arr[i], arr[left]] = [arr[left], arr[i]];
      left++;
    } else if (arr[i] === 2 && i < right) {
      [arr[i], arr[right]] = [arr[right], arr[i]];
      right--;
      i--;
    }
  }
};

// Problem Challenge 1
const search_quadruplets = function (arr, target) {
  let result = [];
  arr.sort((a, b) => a - b);
  let left;
  let right;
  let sum;
  for (let i = 0; i < arr.length - 3; i++) {
    if (i > 0 && arr[i] == arr[i - 1]) continue;
    for (let j = i + 1; j < arr.length - 2; j++) {
      if (j > i + 1 && arr[j] == arr[j - 1]) continue;
      left = j + 1;
      right = arr.length - 1;
      while (left < right) {
        sum = arr[i] + arr[j] + arr[left] + arr[right];
        if (sum < target) left++;
        else if (sum > target) right--;
        else {
          result.push([arr[i], arr[j], arr[left++], arr[right--]]);
          while (left < right && arr[left] == arr[left - 1]) left++;
        }
      }
    }
  }
  return result;
};
//Problem Challenge 2
// Comparing Strings containing Backspaces (medium)

//red red red red red red red red red red red
const backspace_compare = function (str1, str2) {
  let stringA = "";
  let stringB = "";
  for (let char of str1) {
    if (char !== "#") stringA = stringA.concat(char);
    else {
      stringA = stringA.slice(0, stringA.length - 1);
    }
  }
  for (let char of str2) {
    if (char !== "#") stringB = stringB.concat(char);
    else {
      stringB = stringB.slice(0, stringB.length - 1);
    }
  }
  //console.log("A : ", stringA);
  //console.log("B : ", stringB);
  return stringA === stringB;
};
console.log(backspace_compare("xy#z", "xyz#"));

// the solution below is more efficient as it linear time O(M+N) in this case
const backspace_compare = function (str1, str2) {
  function nextValidIndex(str, index) {
    let backspace = 0;
    while (index >= 0) {
      if (str[index] == "#") backspace++;
      else if (backspace > 0) backspace--;
      else break;
      index--;
    }
    return index;
  }
  let p1 = nextValidIndex(str1, str1.length - 1);
  let p2 = nextValidIndex(str2, str2.length - 1);
  while (p1 >= 0 && p2 >= 0) {
    if (str1[p1] !== str2[p2]) return false;
    p1 = nextValidIndex(str1, p1 - 1);
    p2 = nextValidIndex(str2, p2 - 1);
  }
  return true;
};

// What the fuck was I even trying to do here
// It has such an easy solution but it never occured to me before

var backspaceCompare = function (s, t) {
  let stack1 = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "#") {
      if (stack1.length) stack1.pop();
    } else stack1.push(s[i]);
  }
  let stack2 = [];
  for (let i = 0; i < t.length; i++) {
    if (t[i] == "#") {
      if (stack2.length) stack2.pop();
    } else stack2.push(t[i]);
  }
  if (stack1.length !== stack2.length) return false;
  for (let i = 0; i < stack1.length; i++) {
    if (stack1[i] !== stack2[i]) return false;
  }
  return true;
};

//Problem Challenge 3
//Given an array, find the length of the smallest subarray in it which when sorted will sort the whole array.
const shortest_window_sort = function (arr) {
  let array = [...arr];
  arr.sort((a, b) => a - b);
  let left = 0;
  while (left < array.length) {
    if (arr[left] !== array[left]) break;
    left++;
  }
  if (left === array.length) return 0;
  let right = array.length - 1;

  while (left < right) {
    if (arr[right] !== array[right]) break;
    right--;
  }
  return right - left + 1;
};
//Incomplete
// The above method has O(NlogN) but we can do better than this

//red red red red red red red red red red
//teal teal teal teal teal teal teal teal teal
function shortest_window_sort(arr) {
  let low = 0,
    high = arr.length - 1;
  // find the first number out of sorting order from the beginning
  while (low < arr.length - 1 && arr[low] <= arr[low + 1]) {
    low += 1;
  }

  if (low === arr.length - 1) {
    // if the array is sorted
    return 0;
  }

  // find the first number out of sorting order from the end
  while (high > 0 && arr[high] >= arr[high - 1]) {
    high -= 1;
  }

  // find the maximum and minimum of the subarray
  let subarrayMax = -Infinity,
    subarrayMin = Infinity;
  for (k = low; k < high + 1; k++) {
    subarrayMax = Math.max(subarrayMax, arr[k]);
    subarrayMin = Math.min(subarrayMin, arr[k]);
  }

  // extend the subarray to include any number which is bigger than the minimum of the subarray
  while (low > 0 && arr[low - 1] > subarrayMin) {
    low -= 1;
  }
  // extend the subarray to include any number which is smaller than the maximum of the subarray
  while (high < arr.length - 1 && arr[high + 1] < subarrayMax) {
    high += 1;
  }

  return high - low + 1;
}
