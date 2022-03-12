import chalk from 'chalk';
import inquirer from "inquirer"
import questions from "./questions.js"

const rubric = (score, possible) => {
    const percentage = score / possible * 100
    if (percentage < 50) {
        return `you failed ${percentage}%`
    } else {
        return `You passed. ${percentage}%`
    }
}

console.log(chalk.bgRed("This quiz is based on Web development class"))

const run = async (questions, inquirer, fn) => {
    let count = 0;
    const result = await inquirer.prompt(questions)

    if (result.q1 == "BRCC") { ++count }
    if (result.q2 == "Visual studio") { ++count }
    if (result.q3 == "Javascript") { ++count }
    if (result.q4 == "four") { ++count }

    const log = fn(count, questions.length)
    console.log(log)
}

run(questions, inquirer, rubric)