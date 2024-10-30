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
    const subjectTitle = await askQuestion("Please enter the Subject Title: ");
    const classSchedule = await askQuestion("Please enter the Class Schedule (Time, Days): ");
    const classroom = await askQuestion("Please enter the Classroom: ");
    const classInstructor = await askQuestion("Please enter the Class Instructor: ");
    const studentName = await askQuestion("Please enter your name: ");

    // Log the information to the console
    console.log(`${studentName} is currently enrolled in ${subjectTitle} with a class schedule of ${classSchedule} at room ${classroom}. The instructor for the subject is ${classInstructor}.`);

    // Close the readline interface
    rl.close();
}

collectUserInfo(); // Starts the program