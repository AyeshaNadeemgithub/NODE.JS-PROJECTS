import inquirer from "inquirer";
// let Input = await inquirer.prompt([{
//     name:'userAnswer',
//     type:'string',
//     message:'what is the name of National Animal of Pakistan?'
// }]);
// function quiz(question:string , correctAnswer:string){
//     if(Input.userAnswer.toLowerCase() === correctAnswer.toLowerCase()){
//         console.log('correct answer!');
//     }else{console.log('try again!');}
// }
// quiz('what is the name of National Animal of Pakistan?','Markhor');
let Input = await inquirer.prompt([{
        name: 'userAnswer',
        type: 'string',
        message: 'what is the name of National Animal of Pakistan?'
    }]);
function quiz(correctAnswer) {
    if (Input.userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        console.log('correct answer!');
    }
    else {
        console.log('try again!');
    }
}
quiz('Markhor');
