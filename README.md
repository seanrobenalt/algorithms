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
