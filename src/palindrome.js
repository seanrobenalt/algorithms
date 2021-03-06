// Returns the first character of the string str
var firstCharacter = (str) => {
    return str.slice(0, 1);
};

// Returns the last character of a string str
var lastCharacter = (str) => {
    return str.slice(-1);
};

// Returns the string that results from removing the first
//  and last characters from str
var middleCharacters = (str) => {
    return str.slice(1, -1);
};

var isPalindrome = (str) => {
    // base case #1
    var len = str.length;
    if (len === 0 || len === 1) {
        return true;
    }
    // base case #2
    if (firstCharacter(str) !== lastCharacter(str)) {
        return false;
    }
    // recursive case
    return true;
};

var checkPalindrome = (str) => {
    println(`Is this word a palindrome? ${str}`);
    println(isPalindrome(str));
};

checkPalindrome("a");
Program.assertEqual(isPalindrome("a"), true);
checkPalindrome("motor");
Program.assertEqual(isPalindrome("motor"), false);
checkPalindrome("rotor");
Program.assertEqual(isPalindrome("rotor"), true);
checkPalindrome("racecar");
Program.assertEqual(isPalindrome("racecar"), true);
checkPalindrome("blah");
Program.assertEqual(isPalindrome("blah"), false);
