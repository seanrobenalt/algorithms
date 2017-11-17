var highestProducts = (arr) => {

  if (arr.length < 3) {
    throw new Error('Less than 3 items!');
  }

  var highest = Math.max(arr[0], arr[1]);
  var lowest  = Math.min(arr[0], arr[1]);

  var highestProductOf2 = arr[0] * arr[1];
  var lowestProductOf2  = arr[0] * arr[1];

  var highestProductOf3 = arr[0] * arr[1] * arr[2];

   // walk through items, starting at index 2
  for (var i = 2; i < arr.length; i++) {
    var current = arr[i];

        /* do we have a new highest product of 3?
           it's either the current highest,
           or the current times the highest product of two
           or the current times the lowest product of two */
    highestProductOf3 = Math.max(
      highestProductOf3,
      current * highestProductOf2,
      current * lowestProductOf2
    );

        // do we have a new highest product of two?
    highestProductOf2 = Math.max(
      highestProductOf2,
      current * highest,
      current * lowest
    );

        // do we have a new lowest product of two?
    lowestProductOf2 = Math.min(
      lowestProductOf2,
      current * highest,
      current * lowest
    );

        // do we have a new highest?
    highest = Math.max(highest, current);

        // do we have a new lowest?
    lowest = Math.min(lowest, current);
  }
  return highestProductOf3;
};
