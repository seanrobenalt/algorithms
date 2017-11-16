var getMaxProfit = (arr) => {

  if (arr.length < 2) {
    return 'Must be 2 values';
  }

  var minPrice = arr[0];

  var maxProfit = arr[1] - arr[0];

  for (var i = 1; i < arr.length; i++) {

    var potentialProfit = arr[i] - minPrice;

    maxProfit = Math.max(maxProfit, potentialProfit);

    minPrice = Math.min(minPrice, arr[i]);
  }
  return maxProfit;
};

getMaxProfit([10]);
