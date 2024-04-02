#! /usr/bin/env node
import inquirer from "inquirer";

// 1) Computer will genrate a random number - Done

// 2) User input for guessing number

// 3) Compare user input with computer genrated number and show result

const randomNumber = Math.floor(Math.random()* 6 + 1);

const answer = await inquirer.prompt([
    {
        name: "GuessedNumber",
        type: "number",
        message: "Please guess a number betweem 1 - 6:"
    }
]);

if (answer.GuessedNumber === randomNumber) {
    console.log("Congtratulation! you guessed right number");
} else {
  console.log("You guessed wrong number");
    
}


