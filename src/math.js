Math.round = function(number) {
  var str = number.toString();
  var arr = str.split('.');
  if (str.includes('.')) {
    if (arr[1].charAt(0) >= 5) {
      var strResult = arr.shift();
      var intResult = parseInt(strResult);
      return intResult + 1;
    } else if (arr[1].charAt(0) < 5) {
      var getNum = arr.shift();
      var roundDown = parseInt(getNum);
      return roundDown;
    }
  }
  return number;
};

Math.ceil = function(number) {
  var str = number.toString();
  var arr = str.split('.');
  if (str.includes('.')) {
    var strResult = arr.shift();
    var intResult = parseInt(strResult);
    return intResult + 1;
  }
  return number;
};

Math.floor = function(number) {
  var str = number.toString();
  var arr = str.split('.');
  if (str.includes('.')) {
    var strResult = arr.shift();
    var intResult = parseInt(strResult);
    return intResult;
  }
  return number;
};

Test.assertEquals(Math.round(0.4), 0, 'Math.round(0.4)');
Test.assertEquals(Math.round(0.5), 1, 'Math.round(0.5)');

Test.assertEquals(Math.ceil(0.4), 1, 'Math.ceil(0.4)');
Test.assertEquals(Math.ceil(0.5), 1, 'Math.ceil(0.5)');

Test.assertEquals(Math.floor(0.4), 0, 'Math.floor(0.4)');
Test.assertEquals(Math.floor(0.5), 0, 'Math.floor(0.5)');
