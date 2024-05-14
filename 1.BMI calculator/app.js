import inquirer from "inquirer";
let answer = await inquirer.prompt([{
        name: "weight",
        type: "number",
        message: "enter your weight in kg"
    },
    {
        name: "height",
        type: "number",
        message: "enter your height in meters"
    }
]);
let bmi = answer.weight / (answer.height * answer.height);
console.log(`your BMI is ${bmi}`);
