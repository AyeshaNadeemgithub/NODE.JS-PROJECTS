#! /usr/bin/env node
import inquirer from "inquirer";
  let todos = []

let condition = true;

while (condition){
let todoQuestions = await inquirer.prompt(
[
    {
    name:"q1",
    type:"input",
    message:"what would you like to add in todo list"

},
{
    name:"q2",
    type:"confirm",
    message:"what would you like to add more in todo list?",
    default:"true"
}
]
);
todos.push(todoQuestions.q1);
console.log(todos);
condition = todoQuestions.q2;
}
