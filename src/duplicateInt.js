findDuplicate = (intArray) => {

    const n = intArray.length - 1;

    // STEP 1: GET INSIDE A CYCLE
    // start at position n+1 and walk n steps to
    // find a position guaranteed to be in a cycle
    var positionInCycle = n + 1;
    for (var i = 0; i < n; i++) {

        // we subtract 1 from the current position to step ahead:
        // the 2nd *position* in an array is *index* 1
        positionInCycle = intArray[positionInCycle - 1];
    }

    // STEP 2: FIND THE LENGTH OF THE CYCLE
    // find the length of the cycle by remembering a position in the cycle
    // and counting the steps it takes to get back to that position
    const rememberedPositionInCycle = positionInCycle;
    var currentPositionInCycle = intArray[positionInCycle - 1];  // 1 step ahead
    var cycleStepCount = 1;

    while (currentPositionInCycle !== rememberedPositionInCycle) {
        currentPositionInCycle = intArray[currentPositionInCycle - 1];
        cycleStepCount += 1;
    }

    // STEP 3: FIND THE FIRST NODE OF THE CYCLE
    // start two pointers
    //   (1) at position n+1
    //   (2) ahead of position n+1 as many steps as the cycle's length
    var pointerStart = n + 1;
    var pointerAhead = n + 1;
    for (var i = 0; i< cycleStepCount; i++) {
        pointerAhead = intArray[pointerAhead - 1];
    }

    // advance until the pointers are in the same position
    // which is the first node in the cycle
    while (pointerStart !== pointerAhead) {
        pointerStart = intArray[pointerStart - 1];
        pointerAhead = intArray[pointerAhead - 1];
    }

    // since there are multiple values pointing to the first node
    // in the cycle, its position is a duplicate in our array
    return pointerStart;
}

/*
O(n) time and O(1) space, all additional values are integers which take constant space. iterate over an array a constant number of times, and each iteration takes O(n) worst case. */
