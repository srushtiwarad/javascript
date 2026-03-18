function checkResult(marks) {
    if (marks >= 40) {
        return "Pass";
    } else {
        return "Fail";
    }
}

// 👉 Call the function
let result = checkResult(45);
console.log(result);