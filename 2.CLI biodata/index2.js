"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//my this folder called simple calculator have a cli calculator, web calculator, taking input from user, and cli gender
const inquirer_1 = __importDefault(require("inquirer"));
const answer = await inquirer_1.default.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'write your name'
    },
    {
        type: 'input',
        name: 'age',
        message: 'write your age'
    },
    {
        type: 'list',
        name: 'gender',
        message: 'what is your gender',
        choices: ['female', 'male', 'prefer not to say']
    }
]);
console.log('your name is:', answer.name, 'your age is:', answer.age, 'your gender is:', answer.gender);
