import inquirer from "inquirer";

let myBalance = 2000;
const myPin = 123;

async function main() {
    const pinAnswer = await inquirer.prompt({
        name: "pin",
        message: "Enter your PIN:",
        type: 'number'
    });

    if (pinAnswer.pin !== myPin) {
        console.log('\nWrong PIN!');
        return;
    }

    console.log('\nCorrect PIN!');
    console.log(`Your current balance is ${myBalance}\n`);

    const operationAnswer = await inquirer.prompt({
        name: "operation",
        message: "Select an option:",
        type: 'list',
        choices: ['Withdraw', 'Check balance', 'Fast Cash']
    });

    switch (operationAnswer.operation) {
        case 'Withdraw':
            withdraw();
            break;
        case 'Check balance':
            console.log(`Your balance is ${myBalance}`);
            break;
        case 'Fast Cash':
            fastCash();
            break;
        default:
            console.log('Invalid operation');
    }
}

async function withdraw() {
    const amountAnswer = await inquirer.prompt({
        name: 'amount',
        message: 'Enter the amount to withdraw:',
        type: 'number',
        validate: value => {
            if (value > myBalance) {
                return 'Insufficient balance';

            }
            return true;
        }
        
    });

    myBalance -= amountAnswer.amount;
    console.log(`Your balance is ${myBalance}`);
}

async function fastCash() {
    const cashAmounts = [500, 1000, 1500, 2000];
    const cashAmountAnswer = await inquirer.prompt({
        name: 'amount',
        message: 'Select amount to withdraw:',
        type: 'list',
        choices: cashAmounts.map(amount => `${amount}`)
    });

    const amount = parseInt(cashAmountAnswer.amount);
    if (myBalance < amount) {
        console.log('Insufficient balance');
        return;
    }

    myBalance -= amount;
    console.log(`Your balance is ${myBalance}`);
}

main();
