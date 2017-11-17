**Big O**

Big O Notation is the language we use for talking about how long an algorithm takes to run. With Big O Notation we express the runtime in terms of *how quickly it grows relative to the input, as the input gets arbitrarily large*.

meaning:

1. **how quickly the runtime grows** - it's hard to say the *exact runtime of an algorithm*. It depends on the speed of the processor, what else the computer is running, etc. So instead of trying to give an exact runtime, we instead try to describe runtime using Big O Notation to talk about *how quickly the runtime grows*.

2. **relative to the input** - since we cannot give an exact runtime - which we would describe by exact seconds it takes to run - but are measuring *how quickly the runtime grows*, we need to express our speed in terms of something else. With Big O Notation, we use the size of the input, which we call "*n*". So we say things like the runtime grows "on the order of the size of the input" (*O(n)*) or "on the order of the square of the size of the input" (*O(n^2)*).

3. **as the input gets arbitrarily large** - Our algorithm may have steps that seem expensive when *n* is small but are eclipsed eventually by other steps as *n* gets huge. For Big O analysis we care more about the stuff that grows fastest as the input grows, because everything else is quickly eclipsed as *n* gets very large.

- any function requiring just one step will run in "constant time" or *O(1)*

```javascript
function printFirstItem(arrayOfItems) {
    console.log(arrayOfItems[0]);
}
```

- no matter how big the input is here, it always only takes that one step to find the first item in the array.

---

```javascript
function printAllItems(arrayOfItems) {
    arrayOfItems.forEach(function(item) {
        console.log(item);
    });
}
```

- this function runs in *O(n)* time where *n* is the number of items in the array. If the array has 6 items we have to print 6 times, if it has 6 million items we have to print 6 million times.

---

```javascript
function printAllPossibleOrderedPairs(arrayOfItems) {
    arrayOfItems.forEach(function(firstItem) {
      arrayOfItems.forEach(function(secondItem) {
          console.log(firstItem, secondItem);
      });
    });
}
```

- this function runs in "quadratic time" or *O(n^2)*. Each loop runs in *O(n)* time where *n* is the number of items in the array. Since we have to do two loops here, we have to print *n* times twice, which *n* * *n* or *n^2*. If the array has 10 items, then we are printing 100 times.

---

- *n* could be the actual input or the size of the input, ie. an integer or an array.

ex. both of these functions have *O(n)* runtime, but have different input types.

```javascript
function sayHiNTimes(n) {
    for (var i = 0; i < n; i++) {
        console.log('hi');
    }
}

function printAllItemsInArray(theArray) {
    theArray.forEach(function(item) {
        console.log(item);
    });
}
```

---

- in Big O, we always drop constants, ie.

```javascript
function printAllItemsTwice(theArray) {
    theArray.forEach(function(item) {
        console.log(item);
    });

// once more, with feeling
    theArray.forEach(function(item) {
        console.log(item);
    });
}
```

- this function runs in *O(2n)* but we drop the constants so it is just *O(n)*.

ex.

```javascript
function printFirstItemThenFirstHalfThenSayHi100Times(theArray) {
    console.log(theArray[0]);

    var middleIndex = Math.floor(theArray.length / 2);
    var index = 0;

    while (index < middleIndex) {
        console.log(theArray[index]);
        index++;
    }

    for (var i = 0; i < 100; i++) {
        console.log('hi');
    }
}
```

- this function runs in *O(1 + n/2 + 100)* which we call *O(n)*. Why? For Big O, we are looking at what happens **as n gets arbitrarily large**. As *n* gets really big, adding 100 or dividing by 2 has a decreasingly significant effect.

---

**drop the less significant terms**

ex.

```javascript
function printAllNumbersThenAllPairSums(arrayOfNumbers) {

    console.log('these are the numbers:');
    arrayOfNumbers.forEach(function(number) {
        console.log(number);
    });

    console.log('and these are their sums:');
    arrayOfNumbers.forEach(function(firstNumber) {
        arrayOfNumbers.forEach(function(secondNumber) {
            console.log(firstNumber + secondNumber);
        });
    });
}
```

- here our runtime is *O(n + n^2)*, which we just call *O(n^2)*. Even if it was *O(n^2/2 + 100n)* it would still be called *O(n^2)*.

**Similarly**:

  - *O(n^3 + 50n^2 + 10000)* is *O(n^3)*
  - *O((n + 30) * (n + 5))* is *O(n^2)*

- we get away with this because the less significant terms quickly become much less significant as *n* gets big.

---

- in Big O, we are usually talking about the worst case, but sometimes, the worst case is significantly worse than the best case:

```javascript
function contains(haystack, needle) {

  // does the haystack contain the needle?
  for (var i = 0; i < haystack.length; i++) {
      if (haystack[i] === needle) return true;
  }

  return false;
}
```

- if we have 100 items in the haystack but the first case is the needle, it would return in just one iteration.

- in general, we'd say this is *O(n)* runtime and the "worst case" part would be implied. to be more specific we could say that this is worst case *O(n)* and best case *O(1)*

---

- to talk about space complexity, we just look at the total size (relative to the input) of any new variables we are allocating.

ex.

```javascript
function sayHiNTimes(n) {
    for (var i = 0; i < n; i++) {
        console.log('hi');
    }
}
```

- this func takes *O(1)* space because we don't allocate any new variables.

another ex.

```javascript
function arrayOfHiNTimes(n) {
  var hiArray = [];
  for (var i = 0; i < n; i++) {
      hiArray[i] = 'hi';
  }
  return hiArray;
}
```

- this func takes *O(n)* space (the size of the new array scales with the size of the input).

---

**usually when talking about space complexity we are talking about additional space**, so we don't include space taken up by the input. For example, the below func takes *O(1)* space even though the input has *n* items.

```javascript
function getLargestItem(arrayOfItems) {
    var largest = -Number.MAX_VALUE;
    arrayOfItems.forEach(function(item) {
        if (item > largest) {
            largest = item;
        }
    });
    return largest;
}
```

---

- sometimes there is a tradeoff between saving time and saving space, so you have to decide which one you are optimizing for.

**a great engineer knows how to strike the right balance between runtime, space, implementation time, maintainability, and readability.**

src: [interview cake](https://www.interviewcake.com/article/javascript/big-o-notation-time-and-space-complexity)

---

*Notes from Khan Academy's <a href="https://www.khanacademy.org/computing/computer-science/algorithms">course
</a>on algorithims.*

# Key Terms

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

**Tree** - A graph with no cycles (paths that start and end at the same place).

**Node** - The vertices in a tree, root node is the top node and all other nodes are child nodes.

---
# Code Challenges

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

---

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

---

Write a recursive factorial function.

**Rescursive** - a function that calls itself inside of the function. Recursive aka referring to itself.

![Solution](/src/recursive.js)

---

Use recursion to determine whether a word is a palindrome.

![Solution](/src/palindrome.js)

---

Write a recursive function that takes two arguments and computes the value of the first argument raised to the power of the second argument.

![Solution](/src/powers.js)

---

Write a recursive function that solves the Towers of Hanoi. The idea is that there are *n* number of disks on a peg. There are three pegs total. You must move *n* number of disks from a certain peg to a target peg. The disks are organized from largest on the bottom to the smallest on the top. The trick is that you can't have a smaller disk underneath a larger disk. So you have to find the spare peg, move *n - 1* disks to the spare peg, then move the large disk to the target peg, and finally move the *n - 1* disks to the target peg, while the order of disks remains largest on the bottom to smallest on the top.
Here's a visualization:

![Hanoi](/img/hanoi.png)

![Solution](/src/hanoi.js)

---

## Merge and Quicksort Algorithms

### Merge

Employ a divide and conquer style of solving the problem:

1. **Divide** the problem into a number of subproblems that are smaller instances of the same problem.

2. **Conquer** the subproblems by solving them recursively. If they are small enough, solve the subproblems as base cases.

3. **Combine** the solutions to the subproblems into the solution for the original problem.

Write a function that uses merge sort and takes three arguments, an array, an index to start at and an index to end at. Elements in the array should be sorted in ascending order after getting passed to the function.

#### Runtime

1. **Divide** - This step takes Θ(1) time or constant time because all it does is find midpoint of array.
2. **Conquer** - This step takes *n*/2 time and with each time you make a recursive call, the runtime increases by 2, thus taking 2(*n*/2).
3. **Combine** - This step takes Θ(*n*) time as it merges a total of *n* elements.

Total runtime after discarding low-order terms and constants: Θ(*n* lg *n*).

![Solution](/src/merge.js)

---

### Quicksort

Also employs a divide and conquer style of solving a problem. Quicksort works in place, while merge sort makes a copy. In quicksort, all the work is done in the divide step. Quicksort outperforms merge sort, although its worst case runtime is as bad as selection and insertion sort.

1. **Divide** - select any element in an array and call it the **pivot**. Rearrange the elements in the array so that all elements <= **pivot** are to the left of the **pivot**. This is called **partitioning**. It doesn't matter if the elements to the left or right are sorted relative to each other, the point of this step is just to get all elements on their respective sides of the **pivot**.

2. **Conquer** - recursively sort the elements on the left and right side of **pivot**.

3. **Combine** - No need for this step, as all the elements will be sorted after the second step.

Write a program that uses quicksort to sort an array in ascending order.

![Solution](/src/quickSort.js)

---

### Graphs

A **graph** consists of vertices and lines. **Vertices** are the points or data of the graph. Lines in a graph are called **edges**. One vertex can be connected to another vertex via an edge. Denote an edge connecting vertices *u* and *v* by the pair (*u*, *v*). In an **undirected** graph, connections go both ways so you can denote the pair as (*v*, *u*) as well.

Vertices connected by an edge are **adjacent** or **neighbors**. A **path** is the route that a vertex is connected to another vertex. If you're trying to connect to a vertex that is further removed than the immediate neighbor, you say that there is a **path** of *n* edges between the vertices. When a path goes from a particular vertex back to itself, it is called a **cycle**.

A **weighted graph** is a graph whose edges have numeric values or **weight**.

A **directed graph** is one with edges that do not go both ways. A **directed acyclic graph** has no cycles. When denoting connections in this type of graph, order matters. We say that an edge leaves one vertex and enters another. Thus, (*u*, *v*) denotes that the *u* edge is where the connection is coming from and the *v* edge is where the connection ends.

An **edge list** is a way to represent a graph in an array:

```javascript
var edgeList = [ [0,1], [0,6], [0,8], [1,4], [1,6], [1,9], [2,4], [2,6], [3,4],     [3,5],[3,8], [4,5] ];
```

If we want to find whether a particular graph contains a particular edge, we have to search through `edgeList`.

Below is an **adjacency matrix**:

```javascript
[ [0, 1, 0, 0, 0, 0, 1, 0, 1, 0],
  [1, 0, 0, 0, 1, 0, 1, 0, 0, 1],
  [0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 0, 1, 0],
  [0, 1, 1, 1, 0, 1, 0, 0, 0, 1],
  [0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 0, 0, 1, 0, 0, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 0, 0, 1, 0, 0] ]
```

This is a *V* x *V* matrix of 0s and 1s. If you want to locate an edge, put in the row *i*, column *j* entry. Query this by saying **graph[i][j]**, which takes constant time. An adjacency matrix takes up more space than an edge list.

**adjacency lists** - combo of edge list and adjacency matrix. For each vertex *i*, store an array of the vertices adjacent to it.

```javascript
[ [1, 6, 8],
  [0, 4, 6, 9],
  [4, 6],
  [4, 5, 8],
  [1, 2, 3, 5, 9],
  [3, 4],
  [0, 1, 2],
  [8, 9],
  [0, 3, 7],
  [1, 4, 7] ]
```

Space required:
**edge list** - Θ(*E*) where *E* is number of edges.
**adjacency matrix** - Θ(*V*^2) where *V* is number of vertices.
**adjacency list** - Θ(*V* + *E*)

Runtime for searching:
**edge list** - O(*E*)
**adjacency matrix** - O(1)
**adjacency list** - O(*d*) where *d* is the degree of each vertex.

---

Store the graph in an edge list, adjacency matrix and adjacency list.

![Solution](/src/graphs.js)

---

### Breadth-first Search (BFS)

Finds shortest paths from a given **source vertex** to all other vertices, in terms of the number of edges in the paths.

This type of search assigns two values to each vertex *v*. A **distance**, giving the minimum number of edges in any path from the source vertex to vertex *v*. And the **predecessor** vertex of *v* that will lead to the shortest path to the source vertex.

Write a program that performs breadth-first search on a graph and returns an array of objects describing each vortex.

*Runtime: breadth-first search spends O(V + E) time visiting vertices.*

![Solution](/src/bfs.js)

---

## Not part of Khan course

Write the Math.round, Math.ceil and Math.floor functions and make them work as the JS Engine already does.

![Solution](/src/math.js)

---

Suppose we could access yesterday's stock prices as an array, where:

The indices are the time in minutes past trade opening time, which was 9:30am local time.
The values are the price in dollars of Apple stock at that time.
So if the stock cost $500 at 10:30am, stockPricesYesterday[60] = 500.

Write an efficient function that takes stockPricesYesterday and returns the best profit I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.

For example:

    var stockPricesYesterday = [10, 7, 5, 8, 11, 9];

    getMaxProfit(stockPricesYesterday);
    // returns 6 (buying for $5 and selling for $11)

![Solution](/src/getMaxProfit.js)

- one pass through finds answer

O(*n*) time and O(1) space.

---

Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of integers and returns an array of the products.

![Solution](/src/getProducts.js)

- we take two passes through our input array and the array we build always has the same length as the input array

O(*n*) time and O(1) space.

**Good strategy: Start with a brute force solution, look for repeat work in that solution, and modify it to only do that work once.**

---

Given an array of integers, find the highest product you can get from three of the integers.

![Solution](/src/highestProducts.js)

O(*n*) time and O(1) space.
