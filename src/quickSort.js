// Swaps two items in an array, changing the original array
var swap = (array, firstIndex, secondIndex) => {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

// partitions the array, finds a pivot and makes sure
// all elements to the left are less than, and to the right are greater than
var partition = (array, p, r) => {
    var q = p;
    for (var j = p; j < r; j++) {
          if (array[j] <= array[r]){
            swap(array, j, q);
            q++;
        }
    }
    swap(array, q, r);
    return q;
};

var array = [9, 7, 5, 11, 12, 2, 14, 3, 10, 4, 6];
var q = partition(array, 0, array.length-1);
println("Array after partitioning: " + array);
Program.assertEqual(q, 4);
Program.assertEqual(array, [5, 2, 3, 4, 6, 7, 14, 9, 10, 11, 12]);

var quickSort = (array, p, r) => {
    if (p < r) {
        var pivot = partition(array, p, r);
        quickSort(array, p, pivot - 1);
        quickSort(array, pivot, r);
    }
};

var array = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
quickSort(array, 0, array.length-1);
println("Array after sorting: " + array);
Program.assertEqual(array, [2,3,5,6,7,9,10,11,12,14]);
