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

/*
Problem 4 Conflicting Appointments
Given an array of intervals representing "N" appointments, find out if a person can attend all the appointments
*/

function can_attend_all_appointments (intervals){
	intervals.sort((a, b) => a.start - b.start);
	for(let i = 0; i < intervals.length-1; i++){
		if(intervals[i].end > intervals[i+1].start)
			return false;
	}
	return true;
}

/*
Problem Challenge 1 : Minimum Meeting Rooms
Given a list of intervals representing the start and end time of "N" meetings, find the minimum number of rooms required to hold all the meetings.
*/

// Have skipped it for now. Gotta learn Heaps for this one first


/*
Problem Challenge 2 : Maximum CPU Load
We are given a list of Jobs. Each job has a Start time, an End time, and a CPU load when it is running. Our goal is to find the maximum CPU load at any time if all the jobs are running on the same machine.

*/
// Similar to above problem so will have to skip it for now


/*Problem Challenge 3: Employee Free Time (hard)
For ‘K’ employees, we are given a list of intervals representing each employee’s working hours. Our goal is to determine if there is a free interval which is common to all employees. You can assume that each list of employee working hours is sorted on the start time.
*/

function find_employee_free_time (schedule){
	let result = [];
	let array = [];
	schedule.forEach(list => array.push(...list));
	array.sort((a, b) => a.start - b.start);
	for(let i = 0; i < array.length-1; i++){
		if(array[i].end < array[i+1].start){
			result.push(new Interval(array[i].end, array[i+1].start));
		}
	}
	return result;
}

// It is O(Nlog(N)). But we can do even better i.e O(NLog(k)) by using minHeap which I will learn later