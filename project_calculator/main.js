import inquirer from "inquirer";
let input = await inquirer.prompt([
    {
        message: "select your operator",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division", "Exponent", "Modulus", "Percentage", "Percent"]
    },
    {
        message: "Enter the first number",
        type: "number",
        name: "firstNumber"
    },
    {
        message: "Enter the second number",
        type: "number",
        name: "SecondNumber"
    }
]);
if (input.operator === "Addition") {
    console.log(input.firstNumber + input.SecondNumber);
}
else if (input.operator === "Subtraction") {
    console.log(input.firstNumber - input.SecondNumber);
}
else if (input.operator === "Multiplication") {
    console.log(input.firstNumber * input.SecondNumber);
}
else if (input.operator === "Division") {
    console.log(input.firstNumber / input.SecondNumber);
}
else if (input.operator === "Exponent") {
    console.log(input.firstNumber ** input.SecondNumber);
}
else if (input.operator === "Modulus") {
    console.log(input.firstNumber % input.SecondNumber);
}
else if (input.operator === "Percentage") {
    console.log(input.firstNumber / input.SecondNumber * 100);
}
else if (input.operator === "Percent") {
    console.log(input.firstNumber * input.SecondNumber / 100);
}
else {
    console.log("invalid operation");
}
