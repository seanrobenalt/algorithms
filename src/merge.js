var merge = (array, p, q, r) => {
    var lowHalf = [];
    var highHalf = [];

    var k = p;
    var i;
    var j;
    for (i = 0; k <= q; i++, k++) {
        lowHalf[i] = array[k];
    }
    for (j = 0; k <= r; j++, k++) {
        highHalf[j] = array[k];
    }

    k = p;
    i = 0;
    j = 0;

    while(i < lowHalf.length && j < highHalf.length) {
        if(lowHalf[i] < highHalf[j]) {
            array[k] = lowHalf[i];
            i++;
        } else {
        array[k] = highHalf[j];
        j++;
        }
        k++;
    }
    while(j < i) {
        array[k] = highHalf[j];
        j++;
        k++;
    }
    while(i < j) {
        array[k] = lowHalf[i];
        i++;
        k++;
    }
};


var array = [3, 7, 12, 14, 2, 6, 9, 11];
merge(array, 0, Math.floor((0 + array.length-1) / 2), array.length-1);
println("Array after merging: " + array);
Program.assertEqual(array, [2, 3, 6, 7, 9, 11, 12, 14]);

// Takes in an array and recursively merge sorts it
var mergeSort = (array, p, r) => {
    if (r > p) {
        var middle = Math.floor((p+r)/2);
        mergeSort(array, p, middle);
        mergeSort(array, middle + 1, r);
        merge(array, p, middle, r);
    }
};

var array = [14, 7, 3, 12, 9, 11, 6, 2];
var arrayTwo = [-1, 9, -4, 0, 3, 7, 6, -2];
mergeSort(array, 0, array.length-1);
println("Array after sorting: " + array);
Program.assertEqual(array, [2, 3, 6, 7, 9, 11, 12, 14]);
mergeSort(arrayTwo, 0, arrayTwo.length-1);
println("Array after sorting: " + arrayTwo);
Program.assertEqual(arrayTwo, [-4, -2, -1, 0, 3, 6, 7, 9]);
