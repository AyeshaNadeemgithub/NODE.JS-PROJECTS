import inquirer from "inquirer"
import chalk from "chalk"

class player{
    name:string
    fuel:number=100
    constructor(name:string){
        this.name = name
    }
    fuelDecrease() {
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
    fuelIncrease() {
        this.fuel = 100
    }
}
class opponent{
    name:string
    fuel:number=100
    constructor(name:string){
        this.name = name
    }
    fuelDecrease() {
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
}
console.log('WELCOME TO AN ADVENTURE GAME');
 console.log('*'.repeat(50));
let playerName = await inquirer.prompt({
    name:'name',
    type:'input',
    message:'Please enter your Name',
});

let opponentName = await inquirer.prompt({
    name:'option',
    type:'list',
    message:'Select your Opponent',
    choices:[
        'cereal killer',
        'zombie',
        'dracola'
    ]
});

 let p1 = new player(playerName.name)
 let o1 = new opponent(opponentName.option)
 
 
do {

 if (opponentName.option == "cereal killer") {
    console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)}`);
    
    let ask = await inquirer.prompt({
        type: "list",
        name: "opt",
        message: "Select Your Opponent",
        choices: ["Attack", "boost energy", "Run For Your Life.."],
    });
    if (ask.opt == "Attack") {
        let num = Math.floor(Math.random() * 2)
        if (num > 0) {
            p1.fuelDecrease()
            console.log(chalk.bold.red`${p1.name} Fuel is ${p1.fuel}`)
            console.log(chalk.bold.green`${o1.name} Fuel is ${o1.fuel}`)
            if (p1.fuel <= 0) {
                console.log(chalk.bold.italic.red("You Loose, Better Luck Next Time"))
                process.exit()
            }
        }
        if (num <= 0) {
            o1.fuelDecrease()
            console.log(chalk.bold.red`${o1.name} Fuel is ${o1.fuel}`);
            console.log(chalk.bold.green`${p1.name} Fuel is ${p1.fuel}`)
            if (o1.fuel <= 0) {
                console.log(chalk.bold.green.italic("You Win"))
                process.exit()
            }
        }
    }
    if (ask.opt == "boost energy") {
        p1.fuelIncrease()
        console.log(chalk.bold.italic.green(`You Drink Health Portion, Your Fuel is ${p1.fuel}`))
    }
    if (ask.opt == "Run For Your Life..") {
        console.log(chalk.bold.red.italic("You Loose, Better Luck Next Time"));
        process.exit()
    }
}


if (opponentName.option == "zombie") {
    console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)}`);
    
    let ask = await inquirer.prompt({
        type: "list",
        name: "opt",
        message: "Select Your Opponent",
        choices: ["Attack", "boost energy", "Run For Your Life.."],
    });
    if (ask.opt == "Attack") {
        let num = Math.floor(Math.random() * 2)
        if (num > 0) {
            p1.fuelDecrease()
            console.log(chalk.bold.red`${p1.name} Fuel is ${p1.fuel}`)
            console.log(chalk.bold.green`${o1.name} Fuel is ${o1.fuel}`)
            if (p1.fuel <= 0) {
                console.log(chalk.bold.italic.red("You Loose, Better Luck Next Time"))
                process.exit()
            }
        }
        if (num <= 0) {
            o1.fuelDecrease()
            console.log(chalk.bold.red`${o1.name} Fuel is ${o1.fuel}`);
            console.log(chalk.bold.green`${p1.name} Fuel is ${p1.fuel}`)
            if (o1.fuel <= 0) {
                console.log(chalk.bold.green.italic("You Win"))
                process.exit()
            }
        }
    }
    if (ask.opt == "boost energy") {
        p1.fuelIncrease()
        console.log(chalk.bold.italic.green(`You Drink Health Portion, Your Fuel is ${p1.fuel}`))
    }
    if (ask.opt == "Run For Your Life..") {
        console.log(chalk.bold.red.italic("You Loose, Better Luck Next Time"));
        process.exit()
    }
}


if (opponentName.option == "dracola") {
    console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)}`);
    
    let ask = await inquirer.prompt({
        type: "list",
        name: "opt",
        message: "Select Your Opponent",
        choices: ["Attack", "boost energy", "Run For Your Life.."],
    });
    if (ask.opt == "Attack") {
        let num = Math.floor(Math.random() * 2)
        if (num > 0) {
            p1.fuelDecrease()
            console.log(chalk.bold.red`${p1.name} Fuel is ${p1.fuel}`)
            console.log(chalk.bold.green`${o1.name} Fuel is ${o1.fuel}`)
            if (p1.fuel <= 0) {
                console.log(chalk.bold.italic.red("You Loose, Better Luck Next Time"))
                process.exit()
            }
        }
        if (num <= 0) {
            o1.fuelDecrease()
            console.log(chalk.bold.red`${o1.name} Fuel is ${o1.fuel}`);
            console.log(chalk.bold.green`${p1.name} Fuel is ${p1.fuel}`)
            if (o1.fuel <= 0) {
                console.log(chalk.bold.green.italic("You Win"))
                process.exit()
            }
        }
    }
    if (ask.opt == "boost energy") {
        p1.fuelIncrease()
        console.log(chalk.bold.italic.green(`You Drink Health Portion Your Fuel is ${p1.fuel}`))
    }
    if (ask.opt == "Run For Your Life..") {
        console.log(chalk.bold.red.italic("You Loose, Better Luck Next Time"));
        process.exit()
    }
}
} while(true);