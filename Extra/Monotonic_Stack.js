/* Monotonic Stack is the best time complexity solution for many “range queries in an array” problems. Because every element in the array could only enter the monotonic stack once, the time complexity is O(N). (N represents the length of the array).
For every “range query” problem, it could be sure to maintain a range using a normal array/list. However, we will do many repetitive operations to get information from every range. The time complexity is very high and the solution is always not good enough to pass an interview.
Using monotonic stack to maintain a range can save lots of time. Because it only updates information within the range based on new adding elements and avoids repetitive operations of existing elements. To be more precisely, the monotonic stack helps us maintain maximum and and minimum elements in the range and keeps the order of elements in the range. Therefore, we don’t need to compare elements one by one again to get minima and maxima in the range. At mean while, because it keeps the elements’ order, we only need to update the stack based on newest adding element. */

/* If a problem is suitable to use monotonic stack, it must have at least three characters:
1. It is a “range queries in an array” problem.
2. The minima/maxima element or the monotonic order of elements in a range is useful to get answer of every range query.
3. When a element is popped from the monotonic stack, it will never be used again. */
