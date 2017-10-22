var merge = function(array, p, q, r) {
    var a = [],
        b = [],
        c = p,
        d, e;
    for (d = 0; c <= q; d++, c++) {
        a[d] = array[c];
    }
    for (e = 0; c <= r; e++, c++) {
        b[e] = array[c];
    }
    c = p;
    for (e = d = 0; d < a.length && e < b.length;) {
        if (a[d] < b[e]) {
            array[c] = a[d];
            d++;
        } else {
            array[c] = b[e];
            e++;
        }
        c++;
    }
    for (; d < a.length;) {
        array[c] = a[d];
        d++;
        c++;
    }
    for (; e < b.length;) {
        array[c] = b[e];
        e++;
        c++;
    }
};

// Takes in an array and recursively merge sorts it
var mergeSort = function(array, p, r) {
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
