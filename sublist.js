
function areListsIdentical(list1, list2) {
    // First check if they have the same length
    if (list1.length !== list2.length) {
        return "Not identical";
    }

    // Check each element in the same position
    for (let i = 0; i < list1.length; i++) {
        if (list1[i] !== list2[i]) {
            return "Not identical";
        }
    }

    return "Identical";
}

// Example with print statement
let list1 = [1, 2, 3];
let list2 = [1, 2, 3];
let result = areListsIdentical(list1, list2);
console.log("List 1:", list1);
console.log("List 2:", list2);
console.log("Result:", result);
