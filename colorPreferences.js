// Import the readline module to handle user input
const readline = require('readline');

// Create an interface for input and output using readline
const rl = readline.createInterface({
    input: process.stdin,  // Standard input (keyboard)
    output: process.stdout // Standard output (console)
});

// Create an array to store the user's favorite colors
let favoriteColors = [];

// Function to ask questions and return user input
function askQuestion(query) {
    return new Promise(resolve => rl.question(query, resolve));
}

// Function to get user input and update the colors array
async function getColorPreferences() {
    // Prompt the user to input their favorite colors
    while (favoriteColors.length < 3) {
        const color = await askQuestion(`Enter your favorite color (${favoriteColors.length + 1}/3): `);
        favoriteColors.push(color); // Add the color to the array
        console.log(`Updated colors list: ${favoriteColors.join(", ")}`); // Print the updated array
    }

    // Notify the user that they have reached the limit
    console.log("You have reached the limit of 3 favorite colors.");

    // Print the final list of the user's favorite colors
    console.log(`Your final list of favorite colors: ${favoriteColors.join(", ")}`);
    
    // Close the readline interface to end the program
    rl.close();
}

// Start the color preferences input process
getColorPreferences();