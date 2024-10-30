// Import the readline module to handle user input
const readline = require('readline');

// Create an interface for input and output using readline
const rl = readline.createInterface({
    input: process.stdin,  // Standard input (keyboard)
    output: process.stdout // Standard output (console)
});

// Function to ask questions and return user input
function askQuestion(query) {
    return new Promise(resolve => rl.question(query, resolve));
}

// Main function for the favorite number guessing game
async function favoriteNumberGame() {
    // Set the favorite number to 22
    const favNumber = 22;
    let guess = 0; // Variable to hold the user's guess

    // Welcome message for the user
    console.log("Favorite Number Guessing!");
    console.log("Guess the favorite number.");

    // Use a while loop to keep asking for guesses until the correct number is guessed
    while (guess !== favNumber) {
        // Prompt the user for their guess and parse it as an integer
        guess = parseInt(await askQuestion("Enter your guess: "), 10);

        // Check if the guess is lower than the favorite number
        if (guess < favNumber) {
            console.log("Your guess is too low. Try again.");
        // Check if the guess is higher than the favorite number
        } else if (guess > favNumber) {
            console.log("Your guess is too high. Try again.");
        // If the guess is correct
        } else {
            console.log("Congratulations! You guessed it right!");
        }
    }

    // Close the readline interface to end the program
    rl.close();
}

// Start the game by calling the main function
favoriteNumberGame();