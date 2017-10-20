# Notes On Algorithms

**Algorithm** - A set of steps for a computer program to accomplish a task.

- Used to solve a problem and do so efficiently.

**Linear search** - on an array of *n* elements, might have to make as many as *n* guesses.

**Binary search** - looking for a target by halving the search portion. For example, you are searching
an array of 32 elements, your first guess should be 16. If you are incorrect, you have just reduced
your search portion by half.

**base-2 logarithm of** *n* - written as lg *n* - the number of times we repeatedly halve, starting
at *n*, until we get the value of 1.

eg.

*n* | lg *n*
--- | ---
1 | 0
2 | 1
4 | 2
8 | 3
16 | 4
32 | 5
64 | 6
128 | 7
256 | 8
512 | 9
1024 | 10
1,048,576 | 20
2,097,152 | 21

**Asymptotic Analysis** - allows algorithms to be compared independently of programming language
 or system.

---
## Binary Search

Write a program that takes an array and a target value, and searches the array for the target value.

![Solution](/src/binarySearch.js)

---
## Exercise In Sorting

Visualize the swapping strategy of selection sort.

Write a program that takes an array of integers and step-by-step swaps each integer until the array
is sorted in ascending order. Create a visualization of this that shows how each step sorted the integer.

![Solution](/src/selectionSort.js)

![result](/img/sortResult.png)
---
