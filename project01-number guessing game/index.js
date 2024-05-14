#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        name: "UserGuessedNumber",
        type: "number",
        message: "please guess a Number between 1-10:",
    },
]);
if (answer.UserGuessedNumber === randomNumber) {
    console.log('congrats, you guessed right number!');
}
else {
    console.log('try again!');
}
