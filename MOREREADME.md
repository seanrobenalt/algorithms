## Not part of Khan course

---

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

Write the Math.round, Math.ceil and Math.floor functions and make them work as the JS Engine already does.

![Solution](/src/math.js)

---

Suppose we could access yesterday's stock prices as an array, where:

The indices are the time in minutes past trade opening time, which was 9:30am local time.
The values are the price in dollars of Apple stock at that time.
So if the stock cost $500 at 10:30am, stockPricesYesterday[60] = 500.

Write an efficient function that takes stockPricesYesterday and returns the best profit I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.

For example:

```javascript
var stockPricesYesterday = [10, 7, 5, 8, 11, 9];

getMaxProfit(stockPricesYesterday);
// returns 6 (buying for $5 and selling for $11)
```

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

---
