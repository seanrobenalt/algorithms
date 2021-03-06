var insert = (array, rightIndex, value) => {
    for(var j = rightIndex; j >= 0 && array[j] > value; j--) {
        array[j + 1] = array[j];
    }
    array[j + 1] = value;
};

var insertionSort = (array) => {
    for(var i = 1; i < array.length; i++) {
        insert(array, i - 1, array[i]);
    }
};

var array = [22, 11, 99, 88, 9, 7, 42];
var arrayTwo = [-1, 32, 5, 2, 1, 27, 16];
insertionSort(array);
insertionSort(arrayTwo);
println("Array after sorting:  " + array);
Program.assertEqual(array, [7, 9, 11, 22, 42, 88, 99]);
Program.assertEqual(arrayTwo, [-1, 1, 2, 5, 16, 27, 32]);
