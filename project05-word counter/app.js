import inquirer from "inquirer";
let answer = await inquirer.prompt({
    name: "sentence",
    type: "input",
    message: "enter a sentence to count the words:"
});
const words = answer.sentence.trim().split(" ");
console.log(words);
console.log(`your sentence word count is ${words.length}`);
