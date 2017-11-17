var factorial = (n) => {
	// base case:
	if (n <= 1) {
	    return 1;
	} else {
	    return n*factorial(n-1);
	}
};

println("The value of 0! is " + factorial(0) + ".");
println("The value of 5! is " + factorial(5) + ".");
println("The value of 10! is " + factorial(10) + ".");
println("The value of 8! is " + factorial(8) + ".");
Program.assertEqual(factorial(0), 1);
Program.assertEqual(factorial(5), 120);
Program.assertEqual(factorial(10), 3628800);
Program.assertEqual(factorial(8), 40320);
