#! /usr/bin/env node

import inquirer from "inquirer";

const answer  = await inquirer.prompt([
  { message: "enter first number", type: "number", name: "firstNumber" },
  { message: "enanswerter second number", type: "number", name: "secondNumber" },
 { message: "select operators to perform operation" , 
 type:"list", 
 name:"operator",
choices:["addition","subtraction","multiplication","division"],},
]);
 if(answer.operator === "addition"){
    console.log(answer.firstNumber + answer.secondNumber);
 } else if(answer.operator === "subtraction"){
    console.log(answer.firstNumber - answer.secondNumber);
 }else if(answer.operator === "multiplication"){
    console.log(answer.firstNumber * answer.secondNumber);
 }else if(answer.operator === "division"){
    console.log(answer.firstNumber / answer.secondNumber);
 }else
    {console.log('pleace select valid operator');
 }