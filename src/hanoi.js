var solveHanoi = function(numDisks, fromPeg, toPeg) {
    if(numDisks === 0) {
        return true;
    }
    var sparePeg = hanoi.getSparePeg(fromPeg, toPeg);
    solveHanoi(numDisks - 1, fromPeg, sparePeg);
    hanoi.moveDisk(fromPeg, toPeg);
    solveHanoi(numDisks - 1, sparePeg, toPeg);
};

solveHanoi(5, "A", "B");
Program.assertEqual(hanoi.isSolved("B"),true);
