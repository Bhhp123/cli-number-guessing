#! /usr/bin/env node
import inquirer from 'inquirer';
let numberToGuess = Math.floor(Math.random() * 5) + 1; // Generate a random number between 1 and 5
let attempts = 0;
async function guessNumber() {
    console.log('\n\t\x1b[34m\x1b[1m Bilawal Hussain\'s Number Guessing Game \x1b[0m');
    console.log('\t-----------------------------------------');
    const answer = await inquirer.prompt({
        type: 'number',
        name: 'guess',
        message: '\x1b[36m\x1b[1mGuess a number between 1 and 5 (or type 0 to exit):\x1b[0m',
    });
    if (answer.guess === 0) {
        console.log('\t\t\x1b[33m\x1b[1mExiting game. Goodbye!\x1b[0m');
        return;
    }
    attempts++;
    if (answer.guess === numberToGuess) {
        console.log(`\x1b[32m\x1b[1mCongratulations! You guessed the number in ${attempts} attempts.\x1b[0m`);
    }
    else if (answer.guess < numberToGuess) {
        console.log('\t\t\x1b[33m\x1b[1mToo low! Try again.\x1b[0m');
        await guessNumber();
    }
    else {
        console.log('\t\t\x1b[31m\x1b[1mToo high! Try again.\x1b[0m');
        await guessNumber();
    }
}
guessNumber();
