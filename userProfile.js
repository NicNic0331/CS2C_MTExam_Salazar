const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to ask questions
function askQuestion(query) {
    return new Promise(resolve => rl.question(query, resolve));
}

// Main function to collect user information
async function collectUserInfo() {
    const fullName = await askQuestion("Please enter your full name (first and last name): ");
    const age = await askQuestion("Please enter your age: ");
    const favoriteNumber = await askQuestion("Please enter your favorite number: ");
    const favoriteColor = await askQuestion("Please enter your favorite color: ");

    // Log the information to the console
    console.log("\nUser  Profile:");
    console.log("Full Name: " + fullName);
    console.log("Age: " + age);
    console.log("Favorite Number: " + favoriteNumber);
    console.log("Favorite Color: " + favoriteColor);

    // Close the readline interface
    rl.close();
}

collectUserInfo(); // Starts the program