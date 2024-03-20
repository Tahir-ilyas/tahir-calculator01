#! /usr/bin/env node 

import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {message:"Enter your first no", type:"number", name:"firstNumber"},
    { message: "Enter your second no", type:"number", name:"secondNumber"},

    {
        message:"select one of the operator to perform operation ",
        type:"list",
        name:"operator",
        choices:["Addiion","Subtraction","Multiplication","Division"],

    },
]);

// condition statment
if (answer.operator === "Addition"){
console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "Subtraction"){
    console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operator === "Multiplication"){
    console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.operator === "Division"){
    console.log(answer.firstNumber / answer.secondNumber);
} else {
    console.log("please select valid number")
}
