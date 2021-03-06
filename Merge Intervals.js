// Given 2 intervals there will be six different ways the two intervals can relate to each other
/*
1. a and b dont overlap. a is to the left of b
2. a and b overlap, b ends after a 
3. a completely overlaps b
4. a and b overlap, a ends after b
5. b completely overlaps a
6. a and b dont overlap, b is to the left of a

*/

//Problem 1
//Given a list of intervals, merge all the overlapping intervals to produce a list that has only mutually exclusive intervals.