function mergeAndSort(array1, array2) {
    // 1. Merge the two arrays using the spread operator (...)
    const merged = [...array1, ...array2];

    // 2. Sort the merged array in ascending order
    // Note: We provide a compare function (a, b) => a - b
    merged.sort((a, b) => a - b);

    return merged;
}

// Example:
mergeAndSort([3, 1, 6], [4, 19]);
//returns [1, 3, 4, 6, 19]