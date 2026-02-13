function getWelcomeMessage(name) {
    return "Hello, " + name + "!";
}
function doDiv(a , b) {b
    return a / b;

}
function doMulti(a , b) {
    return a * b;
}
function main() {
    alert("Welcome");
    let username = prompt("What is your name:");
    alert(getWelcomeMessage(username));
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));
    alert(num1 + " ÷ " + num2 + " = " + doDiv(num1, num2));
    alert(num1 + " × " + num2 + " = " + doMulti(num1, num2)); 
}