function generateStars(rating) {
    let stars = "";

    // Add a star for each rating point
    for (let i = 0; i < rating; i++) {
        stars = stars + "*";
    }

    return stars;
}

// Example with print statement
let rating = 3;
let result = generateStars(rating);
console.log("Rating:", rating);
console.log("Stars:", result);