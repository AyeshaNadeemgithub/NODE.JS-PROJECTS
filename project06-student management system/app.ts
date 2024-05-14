import inquirer from "inquirer";

class student {
     
    id: number;
    name: string;
    courses: string[];
    balance: number;

    constructor (name : string){
        this.id = Math.floor(10000 + Math.random()* 90000);
        this.name = name;
        this.courses = [];
        this.balance = 1000;
    }
    //method to enroll a student
    enrollCourse(course:string){
        this.courses.push(course);
    }
    //method to view balance
    viewBalance(){
        console.log(`balance of ${this.name} is $${this.balance}`);

        }
        //method is pay fees
    payFees(amount : number){
        this.balance -= amount;
         console.log(`$${amount} Fees successfully paid for ${this.name}`);
            console.log(`Remaining Balance : $${this.balance}`);
            
        }
//method to show status
showStatus(){
    console.log(`ID : ${this.id}`);
    console.log(`NAME : ${this.name}`);
    console.log(`COURSE : ${this.courses}`);
    console.log(`BALANCE : ${this.balance}`);
    
}
}
//class to manage students
class studentManager{
    students:student[]

    constructor(){
        this.students = [];

    }
    //method to add new students
addStudent(name:string){
        let newStudent = new student(name);
        this.students.push (newStudent);
        console.log(`student: ${name} added successfully. student ID ${newStudent.id}`);
    }

    //method to find a student by id
findStnds(id:number){
    return  this.students.find(std => std.id === id);
}

//method to enroll student in course
enrollStudent(id:number, course:string){
let student = this.findStnds(id);
if(student){
    student.enrollCourse(course);
    console.log(`"${student.name}" enrolled in "${course}" successfully.`);
    
}
}
//method to view balance
viewBal(id : number){
    let student = this.findStnds(id);
    if(student){
        student.viewBalance()
    }else{console.log('student not found, enter correct student id');
    }
}
//method to pay fees
payStdFees(id:number, amount : number){
    let student = this.findStnds(id);
    if(student){
        student.payFees(amount);
    }else{console.log('cannot find student ID');
    }
}
//method to display status
showStdStatus(id:number){
    let student = this.findStnds(id);
    if(student){
        student.showStatus();
    }

}

}

async function main(){
    console.log("\nWLCOME TO STUDENT MANAGEMENT SYSTEM\n");
    console.log("*".repeat(50));
    
    let student_manager = new studentManager();
    // while loop to keep program running 
    while(true){
        let answer = await inquirer.prompt([
            {
                name:"choice",
                type:"list",
                message:"select an option",
                choices:[
                    'Add Student',
                    'Enroll Student',
                    'Pay Fees',
                    'View Student Balance',
                    'Show Status',
                    'Exit'
                ]
            }
        ]);
// i am using switch case instaed of if else for better coding
switch(answer.choice){

case 'Add Student':
    let name_input= await inquirer.prompt({
        name:'name',
        type:'input',
        message:' Enter a Student Name:'

    });
    student_manager.addStudent(name_input.name);
    break;
case 'Enroll Student':
    let course_input =  await inquirer.prompt([{
        name:'id',
        type:'number',
        message:'Enter a Student ID:'
    },
    {
        type:'input',
        name:'course',
        message:'Enter a Course Name:'
    }]);
    student_manager.enrollStudent(course_input.id,course_input.course);
    break;
case 'Pay Fees':
    let pay_fees = await inquirer.prompt([{
        name:'id',
        type:'number',
        message:'Please Enter ID:'
    },
    {   name:'amount',
        type:'number',
        message:'Please Enter Amount:'

    }]);
    student_manager.payStdFees(pay_fees.id,pay_fees.amount);
    break;
case 'View Student Balance':
    let view_balance = await inquirer.prompt([{
        name:'id',
        type:'number',
        message:'Please Enter ID:'
    }
    ]);
    student_manager.viewBal(view_balance.id);
    break;
case 'Show Status':
    let show_status = await inquirer.prompt({
    name:'id',
    type:'number',
    message:'Please Enter ID:'
    }
    );
    student_manager.showStdStatus(show_status.id);
    break;
case 'Exit':
    console.log("Exiting...");
    process.exit();

}

    }
}
main();