import inquirer from "inquirer";
let todos = [];
async function main() {
    let condition = true;
    while (condition) {
        let choice = await inquirer.prompt({
            name: "action",
            type: "list",
            message: "What would you like to do?",
            choices: ["Add todo", "Read todos", "Update todo", "Delete todo", "Exit"]
        });
        switch (choice.action) {
            case "Add todo":
                await addTodo();
                break;
            case "Read todos":
                readTodos();
                break;
            case "Update todo":
                await updateTodo();
                break;
            case "Delete todo":
                await deleteTodo();
                break;
            case "Exit":
                condition = false;
                console.log("Exiting...");
                break;
            default:
                console.log("Invalid choice");
                break;
        }
    }
}
async function addTodo() {
    let todo = await inquirer.prompt({
        name: "task",
        type: "input",
        message: "What would you like to add to your todo list?"
    });
    todos.push(todo.task);
    console.log("Todo added successfully!");
}
function readTodos() {
    if (todos.length === 0) {
        console.log("No todos found.");
    }
    else {
        console.log("Your todos:");
        todos.forEach((todo, index) => {
            console.log(`${index + 1}. ${todo}`);
        });
    }
}
async function updateTodo() {
    if (todos.length === 0) {
        console.log("No todos to update.");
        return;
    }
    let { index } = await inquirer.prompt({
        name: "index",
        type: "number",
        message: "Enter the index of the todo you want to update:",
        validate: input => !isNaN(input) && input > 0 && input <= todos.length
    });
    let updatedTodo = await inquirer.prompt({
        name: "task",
        type: "input",
        message: "Enter the updated todo:"
    });
    todos[index - 1] = updatedTodo.task;
    console.log("Todo updated successfully!");
}
async function deleteTodo() {
    if (todos.length === 0) {
        console.log("No todos to delete.");
        return;
    }
    let { index } = await inquirer.prompt({
        name: "index",
        type: "number",
        message: "Enter the index of the todo you want to delete:",
        validate: input => !isNaN(input) && input > 0 && input <= todos.length
    });
    todos.splice(index - 1, 1);
    console.log("Todo deleted successfully!");
}
main();
