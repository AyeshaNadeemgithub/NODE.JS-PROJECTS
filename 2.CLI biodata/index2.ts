//my this folder called simple calculator have a cli calculator, web calculator, taking input from user, and cli gender
import inquirer from "inquirer";

const answer = await inquirer.prompt([
    {
        type:'input',
        name: 'name',
        message: 'write your name'
    

    },
    {
        type:'input',
        name:'age',
        message:'write your age'
    },
    {
        type:'list',
        name:'gender',
        message:'what is your gender',
        choices: ['female', 'male', 'prefer not to say']
    }
])
console.log('your name is:' , answer.name , 'your age is:',answer.age, 'your gender is:', answer.gender);