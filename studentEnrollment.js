// Import the readline module to handle user input
const readline = require('readline');

// Create an interface for input and output using readline
const rl = readline.createInterface({
    input: process.stdin,  // Standard input (keyboard)
    output: process.stdout // Standard output (console)
});

// Initialize arrays for each subject
const DSA = [];
const PL = [];
const Networks = [];

// Function to display the main menu for subjects
function displaySubjects() {
    console.log("\nSelect a subject to enroll a student:");
    console.log("(A) DSA");
    console.log("(B) PL");
    console.log("(C) Networks");
}

// Function to display operations menu
function displayOperations() {
    console.log("\nSelect an operation:");
    console.log("(A) Enroll");
    console.log("(B) Unenroll");
    console.log("(C) Select Another Subject");
    console.log("(D) Exit");
}

// Function to enroll a student
async function enrollStudent(subjectArray) {
    const name = await askQuestion("Enter the name of the student to enroll: ");
    subjectArray.push(name); // Add the student to the subject array
    console.log(`${name} has been enrolled in the subject.`);
}

// Function to unenroll a student
async function unenrollStudent(subjectArray) {
    if (subjectArray.length === 0) {
        console.log("No students are currently enrolled in this subject.");
        return;
    }

    console.log("Currently enrolled students:");
    subjectArray.forEach((student, index) => {
        console.log(`${index + 1}. ${student}`);
    });

    const name = await askQuestion("Enter the name of the student to unenroll: ");
    const index = subjectArray.indexOf(name);

    if (index !== -1) {
        subjectArray.splice(index, 1); // Remove the student from the subject array
        console.log(`${name} has been unenrolled from the subject.`);
    } else {
        console.log(`${name} is not enrolled in this subject.`);
    }
}

// Function to ask questions and return user input
function askQuestion(query) {
    return new Promise(resolve => rl.question(query, resolve));
}

// Main function to run the enrollment system
async function runEnrollmentSystem() {
    let running = true;
    let currentSubject;

    while (running) {
        displaySubjects();
        const subjectChoice = await askQuestion("Select a subject (A/B/C): ");
        const upperSubjectChoice = subjectChoice.toUpperCase(); // Call toUpperCase after awaiting

        switch (upperSubjectChoice) {
            case 'A':
                currentSubject = DSA;
                break;
            case 'B':
                currentSubject = PL;
                break;
            case 'C':
                currentSubject = Networks;
                break;
            default:
                console.log("Invalid subject choice. Please try again.");
                continue;
        }

        let operationRunning = true;

        while (operationRunning) {
            displayOperations();
            const operationChoice = await askQuestion("Select an operation (A/B/C/D): ");
            const upperOperationChoice = operationChoice.toUpperCase(); // Call toUpperCase after awaiting

            switch (upperOperationChoice) {
                case 'A':
                    await enrollStudent(currentSubject);
                    break;
                case 'B':
                    await unenrollStudent(currentSubject);
                    break;
                case 'C':
                    operationRunning = false; // Exit the operations loop to select another subject
                    break;
                case 'D':
                    console.log("\nEnrolled students in DSA:", DSA);
                    console.log("Enrolled students in PL:", PL);
                    console.log("Enrolled students in Networks:", Networks);
                    running = false; // Exit the main loop
                    operationRunning = false; // Exit the operations loop
                    break;
                default:
                    console.log("Invalid operation choice. Please try again.");
            }
        }
    }

    // Close the readline interface to end the program
    rl.close();
}

// Start the enrollment system
runEnrollmentSystem();