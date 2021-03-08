// Given 2 intervals there will be six different ways the two intervals can relate to each other
/*
1. a and b dont overlap. a is to the left of b
2. a and b overlap, b ends after a 
3. a completely overlaps b
4. a and b overlap, a ends after b
5. b completely overlaps a
6. a and b dont overlap, b is to the left of a

*/
red red red red red red red red
//Problem 1
//Given a list of intervals, merge all the overlapping intervals to produce a list that has only mutually exclusive intervals.


/*class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
  print_interval() {
    process.stdout.write(`[${this.start}, ${this.end}]`);
  }
}
*/
function merge(intervals) {
  if (intervals.length < 2) {
    return intervals;
  }
  // sort the intervals on the start time
  intervals.sort((a, b) => a.start - b.start);

  const mergedIntervals = [];
  let start = intervals[0].start,
    end = intervals[0].end;
  for (i = 1; i < intervals.length; i++) {
    const interval = intervals[i];
    if (interval.start <= end) { // overlapping intervals, adjust the 'end'
      end = Math.max(interval.end, end);
    } else { // non-overlapping interval, add the previous interval and reset
      mergedIntervals.push(new Interval(start, end));
      start = interval.start;
      end = interval.end;
    }
  }
  // add the last interval
  mergedIntervals.push(new Interval(start, end));
  return mergedIntervals;
}

/*merged_intervals = merge([new Interval(1, 4), new Interval(2, 5), new Interval(7, 9)]);
result = "";
for(i=0; i < merged_intervals.length; i++) {
  result += merged_intervals[i].get_interval() + " ";
}
console.log(`Merged intervals: ${result}`)*/


/*Problem 2
Insert a given new interval to a given sorted array of non-overlapping intervals*/


function insert(intervals, new_interval) {
  let merged = [],
    i = 0;

  // skip and add to output) all intervals that come before the 'new_interval'
  while (i < intervals.length && intervals[i].end < new_interval.start) {
    merged.push(intervals[i]);
    i += 1;
  }

  // merge all intervals that overlap with 'new_interval'
  while (i < intervals.length && intervals[i].start <= new_interval.end) {
    new_interval.start = Math.min(intervals[i].start, new_interval.start);
    new_interval.end = Math.max(intervals[i].end, new_interval.end);
    i += 1;
  }

  // insert the new_interval
  merged.push(new_interval);

  // add all the remaining intervals to the output
  while (i < intervals.length) {
    merged.push(intervals[i]);
    i += 1;
  }

  return merged;
}


/*
Problem 3 Intervals Intersection

Given 2 intervals, find the intersection of these two intervals. 
Each list consists of disjoint intervals sorted on their start time.
*/

function merge (intervals_a, intervals_b){
	let result = [];
	let p1 = 0;
	let p2 = 0;
	while(p1 < intervals_a.length && p2 < intervals_b.length){
		const intervalA = intervals_a[p1];
		const intervalB = intervals_b[p2];
		if(intervalA.end < intervalB.start){
			p1++;
		}
		else if(intervalB.end < intervalA.start){
			p2++;
		}
		else{
			const start = Math.max(intervalA.start, intervalB.start);
			const end = Math.min(intervalA.end, intervalB.end);
			result.push(new Interval(start, end));
			if(intervalA.end < intervalB.end)
				p1++;
			else if(intervalB.end < intervalA.end)
				p2++;
			else{
				p1++;
				p2++;
			}
		}
	}
	return result;
}