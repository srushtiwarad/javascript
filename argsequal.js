function checkStrictEquality(num1, num2) {
    // Use === to check both value and type
    if (num1 === num2) {
        return "Equal";
    } else {
        return "Not equal";
    }
}

checkStrictEquality(4, 4);
//returns "Equal"
checkStrictEquality(4, "4");
//returns "Not equal" 