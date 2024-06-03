#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"

console.log(chalk.magenta('\n\tWelcome to the TypeScript Quiz! Let\'s test your knowledge.\n'));

let correctAnswers = 0;

let quiz1 = await inquirer.prompt([
    {
    name: "Question",
    type: "list",
    message: "What is TypeScript",
    choices: ["A) A version of JavaScript","B) A superset of JavaScript","C) A markup language"]
}
])

if(quiz1.Question === "B) A superset of JavaScript"){
    console.log(chalk.green("Correct answer"));
    correctAnswers++;
}
else{
  console.log(chalk.red("Wrong answer"));
}
let quiz2 = await inquirer.prompt([
    {
        name: "Question",
        type: "list",
        message: "Who developed TypeScript?",
        choices: ["A) Google","B) Facebook","C) Microsoft","D) Apple"]
    }
])
if(quiz2.Question === "C) Microsoft"){
    console.log(chalk.green("Correct answer"));
    correctAnswers++;
}
else{
  console.log(chalk.red("Wrong answer"));
}
let quiz3 = await inquirer.prompt([
    {
        name: "Question",
        type: "list",
        message: "Which of the following file extensions is used for TypeScript files?",
        choices: ["A) .ts" , "B) .js" , "C) .jsx" , "D) .tsx"]
    }
])
if(quiz3.Question === "A) .ts"){
    console.log(chalk.green("Correct answer"));
    correctAnswers++;
}
else{
  console.log(chalk.red("Wrong answer"));
}
let quiz4 = await inquirer.prompt([
    {
        name: "Question",
        type: "list",
        message: "Which of the following is a benefit of using TypeScript?",
        choices: ["A) Static typing" , "B) Improved code readability and maintainability" , "C) Early error detection" , "D) All of the above"]
    }
])
if(quiz4.Question === "D) All of the above"){
    console.log(chalk.green("Correct answer"));
    correctAnswers++;
}
else{
  console.log(chalk.red("Wrong answer"));
}
let quiz5 = await inquirer.prompt([
    {
        name: "Question",
        type: "list",
        message: "Which of the following keywords is used to define a type alias in TypeScript?",
        choices: ["A) interface" , "B) type"  , "C) alias"  , "D) typedef"]
    }
])

if(quiz5.Question === "B) type"){
      console.log(chalk.green("Correct answer"));
      correctAnswers++;
}
else{
    console.log(chalk.red("Wrong answer"));
    
}

console.log(chalk.yellow(`You got ${correctAnswers} out of 5 questions correct.`));
console.log(chalk.magenta('\n\tThank you for taking the TypeScript Quiz! Have a great day!'));
