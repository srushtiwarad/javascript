function replaceSmiles(str) {
    return str.replaceAll(":)", ":(");
}

// Example
let input = ":) :) :) All smiles here :)";
let result = replaceSmiles(input);

console.log(result);
// ":( :( :( All smiles here :("