*Notes from Khan Academy's <a href="https://www.khanacademy.org/computing/computer-science/algorithms">course
</a>on algorithims.*

**Algorithm** - A set of steps for a computer program to accomplish a task.

- Used to solve a problem and do so efficiently.

**Linear search** - on an array of *n* elements, might have to make as many as *n* guesses.

eg.

```javascript
  var doLinearSearch = function(array) {
    for (var guess = 0; guess < array.length; guess++) {
      if (array[guess] === targetValue) {
        return guess; // found what you were looking for
      }
    }
    return -1; // didn't find what you were looking for
  }
```

**Binary search** - looking for a target by halving the search portion. For example, you are searching an array of 32 elements, your first guess should be 16. If you are incorrect, you have just reduced your search portion by half.

**base-2 logarithm of** *n* - written as lg *n* - the number of times we repeatedly halve, starting at *n*, until we get the value of 1.

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

**Asymptotic Analysis** - allows algorithms to be compared independently of programming language or system. Compare rate of growth with size of input. Constant factors and low-order terms don't tell us about the rate of growth of running time so they can be dropped when determining speed.

**big-Theta of** *n* - When we say a running time is Θ(n), we are saying that once *n*
gets large enough, we increase *n* by a constant. We are saying we have an **asymptotically
tight bound** on the running time, because it matters for only large values of *n*. Tight bound because we've nailed the running time to within a constant factor above and below.

**Constant growth** - A function has constant growth if its output does not change based on the input, the *n*. (find those that have no *n* in their expression)

**Linear growth** - A function has linear growth if its output increases linearly with the size of *n*. (find those where *n* is never raised to a power, 1 being the exception)

**Polynomial growth** - A function has polynomial growth if its output increases according to a polynomial expression. (find those where *n* is raised to a constant power)

**Exponential growth** - A function has exponential growth if its output increases according to an exponential expression. (find those where a constant is raised to some expression involving *n*)

**Linearithmic functions** - those that multiply linear terms by a logarithm. Lesser bases grow more quickly than higher bases.

Rate of growth for these types:

1. Constant functions
2. Logarithmic functions
3. Linear functions
4. Linearithmic functions
5. Polynomial functions
6. Exponential functions

eg.

Slowest growing | - | - | - | - | Fastest growing
--- | --- | --- | --- | --- | ---
1 | *n* | *n*^2 | *n*^3 | (3/2)^*n* | 2^*n*

**Big-O notation** - running time grows at most this much, but could grow more slowly. Used for asymptotic upper bounds - bounds growth of the running time from above only.

**Big-omega notation** - use when we want to say that an algorithm takes at least a certain amount of time, without providing an upper bound. Used for asymptotic lower bounds - bounds growth of the running time from below only.

*Note: if a run time is the same by big-O and big-omega, then it is also big-Theta*

**Recursion** - an algorithm designed to solve a problem by solving a smaller instance of the same problem, unless the problem is so small that it can be solved directly.

---
## Binary Search

Write a program that takes an array and a target value, and searches the array for the target value.

![Solution](/src/binarySearch.js)

---
## Exercise In Sorting

Visualize the swapping strategy of selection sort.

Write a program that takes an array of integers and step-by-step swaps each integer until the array is sorted in ascending order. Create a visualization of this that shows how each step sorted the integer.

![Solution](/src/selectionSort.js)

*Runtime: Θ(n^2) for the calls to `indexOfMinimum`, Θ(n) for the calls to `swap`, and Θ(n) for the loop in `selectionSort`. Increasing the input size will increase the runtime exponentially.*

![result](/img/sortResult.png)

---
## Insertion Sort

Write a function that takes three parameters - an array, an index, and a value - and inserts the value at the index into the array.

![Solution](/src/insertionSort.js)

Write a program that utilizes the above function to loop over an array, and insert each new item into the subarray before the new item.

![Solution](/src/insertionSortTwo.js)

Runtime:

- Worst case: Θ(n^2).
- Best case: Θ(n).
- Average case for a random array: Θ(n^2).
- "Almost sorted" case: Θ(n).

---

## Factorial Function

**Factorial** - the product of the integers 1 through *n*.

Write an iterative factorial function.

![Solution](/src/factorial.js)

Write a recursive factorial function.

**Rescursive** - a function that calls itself inside of the function. Recursive aka referring to itself.

![Solution](/src/recursive.js)

Use recursion to determine whether a word is a palindrome.

![Solution](/src/palindrome.js)

Write a recursive function that takes two arguments and computes the value of the first argument raised to the power of the second argument.

![Solution](/src/powers.js)

Write a recursive function that solves the Towers of Hanoi. The idea is that there are *n* number of disks on a peg. There are three pegs total. You must move *n* number of disks from a certain peg to a target peg. The disks are organized from largest on the bottom to the smallest on the top. The trick is that you can't have a smaller disk underneath a larger disk. So you have to find the spare peg, move *n - 1* disks to the spare peg, then move the large disk to the target peg, and finally move the *n - 1* disks to the target peg, while the order of disks remains largest on the bottom to smallest on the top.
Here's a visualization:

![Hanoi](/img/hanoi.png)

![Solution](/src/hanoi.js)

---

## Merge and Quicksort Algorithms

Employ a divide and conquer style of solving the problem:

1. **Divide** the problem into a number of subproblems that are smaller instances of the same problem.

2. **Conquer** the subproblems by solving them recursively. If they are small enough, solve the subproblems as base cases.

3. **Combine** the solutions to the subproblems into the solution for the original problem.
