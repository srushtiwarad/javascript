function maxPeople(carriageArea, personArea) {
    return Math.floor(carriageArea / personArea);
}

// Example with print statement
let carriageArea = 100;
let personArea = 5;
let result = maxPeople(carriageArea, personArea);
console.log("The maximum number of people the carriage can hold is", result);