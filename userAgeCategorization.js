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

// Main function to collect user information and categorize age
async function collectUserInfo() {
    const studentName = await askQuestion("Please enter your name: ");
    const age = await askQuestion("Please enter your age: ");

    const ageNumber = parseInt(age); // Converts age to a number

    // Age categorization using nested if-else statements
    let ageCategory;

    if (ageNumber < 5) {
        ageCategory = "Toddler (under 5 years)";
    } else if (ageNumber >= 5 && ageNumber <= 12) {
        ageCategory = "Child (5-12 years)";
    } else if (ageNumber >= 13 && ageNumber <= 19) {
        ageCategory = "Teenager (13-19 years)";
    } else if (ageNumber >= 20 && ageNumber <= 35) {
        ageCategory = "Young Adult (20-35 years)";
    } else if (ageNumber >= 36 && ageNumber <= 60) {
        ageCategory = "Middle-Aged (36-60 years)";
    } else {
        ageCategory = "Senior (over 60 years)";
    }

    console.log(`${studentName}, you are categorized as: ${ageCategory}`); // Logs the appropriate message

    // Close the readline interface
    rl.close();
}

// Start the program
collectUserInfo();