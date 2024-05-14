#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 2000;
let myPin = 123;

let answer = await inquirer.prompt([
    {
        name:"q1",
        message:"enter your pin",
        type: 'number'

    }
])
if(answer.q1 === myPin){
    console.log('\ncorrect pin!');
    console.log(`\nyour current balance is ${myBalance}\n`)

let operationAnswers = await inquirer.prompt([
    {
        name:"operation",
        message:"select options",
        type: 'list',
        choices:['withdraw','check balance','fast Cash']

    }
]);
console.log(operationAnswers);

if(operationAnswers.operation === 'withdraw'){
    let amountAns = await inquirer.prompt(
        [
            {
                name: 'amount',
                message:'enter your amount to withdraw',
                type: 'number'
            }
        ]
    );
 
    if(amountAns.amount > myBalance){
     console.log('\ninsufficient balance\n')
    let amountAns = await inquirer.prompt(
        [
            {
                name: 'amount',
                message:'enter amount less than current amount',
                type: 'number'
            }
        ]
    );
        if(amountAns.amount <= myBalance) {myBalance -= amountAns.amount;
    console.log(`\nyour balance is ${myBalance}\n`);}
        else(console.log('cannot proceed'))

}   else if (amountAns.amount <= myBalance){
    myBalance -= amountAns.amount;
    console.log(`\nyour balance is ${myBalance}\n`);
}


}else if(
    operationAnswers.operation === 'check balance')
{console.log(`\nyour balance is ${myBalance}`)}
else if(operationAnswers.operation === 'fast Cash'){
let cashAmount = await inquirer.prompt([{
name:'amount',
message: 'select amount to withdraw',
type: 'list',
choices:['500','1000','1500','2000']
}]);
if(cashAmount.amount === '500' ){
 myBalance -= 500
 console.log(`your balance is ${myBalance}`)
}else if(cashAmount.amount === '1000' ){
    myBalance -= 1000
    console.log(`your balance is ${myBalance}`)
}
else if(cashAmount.amount === '1500' ){
    myBalance -= 1500
    console.log(`your balance is ${myBalance}`)
}
else if(cashAmount.amount === '2000' ){
    myBalance -= 2000
    console.log(`your balance is ${myBalance}`)
}
else{console.log('cannot proceed')}
}

}else{console.log('\nwrong pin')}

            