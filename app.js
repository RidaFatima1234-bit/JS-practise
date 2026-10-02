// Create a function calculateGrade(marks) that takes a student’s marks as a parameter and returns the grade according to these conditions:
function grade(marks){
     let numb = 75
    if (marks >90) {
        console.log("grade A" );
        } 
    else if(marks > 80){
        console.log("grade B");
    }
    else if(marks > 70){
        console.log("grade C ");
    }
        else if(marks > 65){
            console.log("grade D");
    }
    else if(marks > 50){
        console.log("grade E");
    }
    else{
        console.log("fail");
        
    }
}
grade(89)

// Advanced Function Questions
// Q1. Student Result calculateResult(marks1, marks2, marks3) function banao jo:
// Total marks calculate kare
// Percentage calculate kare
// Agar percentage >= 80 ho → "A Grade"
// >= 70 → "B Grade"
// >= 60 → "C Grade"
// warna "Fail"
// Result return kare.
function result(comp ,math, physics){
    let totalnumber = (comp + math + physics * 100 / 300)
    console.log(totalnumber);
    if(totalnumber > 70){
        console.log("Grade B");
    }else if(totalnumber > 60){
        console.log("Grade C");
    }else{
        console.log(fail);
        
    }
}
result(93,56,83)

// 1. Password Strength Checker
// Write a function checkPassword(password) that:
// Takes a password as a parameter.
// Checks its length using .length.
// Checks whether it contains uppercase and lowercase letters.
// Checks whether it contains a number.
// Uses a loop to examine each character.
// Returns:
// "Strong Password" if length ≥ 8 and it contains uppercase, lowercase, and a number.
// "Weak Password" otherwise.

function checkPassword(password) {
    let hasUppercase = false;
    let hasLowercase = false;
    let hasNumber = false;

    let length = password.length;
    for (let i = 0; i < password.length; i++) {
        let character = password[i];

        if (character >= "A" && character <= "Z") {
            hasUppercase = true;
        }
        else if (character >= "a" && character <= "z") {
            hasLowercase = true;
        }
        else if (character >= "0" && character <= "9") {
            hasNumber = true;
        }
    }
    if (length >= 8 && hasUppercase && hasLowercase && hasNumber) {
        return "Strong Password";
    }
    else {
        return "Weak Password";
    }
}

console.log(checkPassword("Rida1234"));

// Write a function checkSpeed(speed) that:
// Takes speed as a parameter.
// Uses a loop to count how many times the speed is checked.
// Checks whether the speed is above, below, or equal to 60.
// Uses conditions to classify the speed.

function checkSpeed(speed) {
    let count = 0;

    for (let i = 0; i < 5; i++) {
        count++;

        if (speed > 60) {
            console.log("Above 60");
        }
        else if (speed < 60) {
            console.log("Below 60");
        }
        else {
            console.log("Equal to 60");
        }
    }

    console.log("Speed checked:", count, "times");
}

// checkSpeed(70);

// Student Marks Evaluator

// Create an arrow function evaluateMarks(marks) that takes a student's marks as a parameter.

// The function should:

// Return "Invalid Marks" if marks are less than 0 or greater than 100.
// Return "Excellent" if marks are 85 or above.
// Return "Good" if marks are 70 or above.
// Return "Needs Improvement" if marks are 50 or above.
// Otherwise return "Fail".

// Then create a normal function displayResult() that calls the arrow function and prints the result.

// Example:

// evaluateMarks(78);
// // "Good"

const evaluateMarks = (marks) => {
    if (marks < 0 || marks > 100) {
        return "Invalid Marks";
    }
    else if (marks >= 85) {
        return "Excellent";
    }
    else if (marks >= 70) {
        return "Good";
    }
    else if (marks >= 50) {
        return "Needs Improvement";
    }
    else {
        return "Fail";
    }
};

function displayResult() {
    let result = evaluateMarks(78);
    console.log(result);
}

displayResult();

// Product Price Analyzer

// Create a JavaScript function analyzePrice(price) that takes a product price as a parameter.

// The function should:

// If price is below 1000 → return "Budget Product"
// If price is between 1000 and 5000 → return "Regular Product"
// If price is above 5000 → return "Premium Product"

// Then create an arrow function showResult that calls analyzePrice() and displays the returned result using console.log().

// Example:

// analyzePrice(3500);
// // "Regular Product"

function analyzePrice(price) {
    if (price < 1000) {
        return "Budget Product";
    }
    else if (price <= 5000) {
        return "Regular Product";
    }
    else {
        return "Premium Product";
    }
}

const showResult = () => {
    let result = analyzePrice(3500);
    console.log(result);
};

showResult();

// 1.  Shopping Discount Function
// Question:
// Write a function
//  checkDiscount(amount) that calculates the discount category:
// 50000 or above → return "30% Discount"
// 30000 or above → return "20% Discount"
// 10000 or above → return "10% Discount"
// Otherwise → return "No Discount"

function checkDiscount(amount) {
    if (amount >= 50000) {
        return "30% Discount";
    }
    else if (amount >= 30000) {
        return "20% Discount";
    }
    else if (amount >= 10000) {
        return "10% Discount";
    }
    else {
        return "No Discount";
    }
}

console.log(checkDiscount(35000));

// Write a function checkTemperature(temp) that checks the temperature according to the following conditions:
// If temperature is 40 or above - return "Very Hot"
// If temperature is 30 or above - return "Hot"
// If temperature is 20 or above - return "Normal"
// Otherwise - return "Cold"

function checkTemperature(temp) {
    if (temp >= 40) {
        return "Very Hot";
    }
    else if (temp >= 30) {
        return "Hot";
    }
    else if (temp >= 20) {
        return "Normal";
    }
    else {
        return "Cold";
    }
}

console.log(checkTemperature(35));

// 1. Weather Status Function
// Question:
// Write a function checkWeather(degree) that checks the weather according to these conditions:

// If temperature is 45 or above → "Extreme Heat"

// If temperature is 35 or above → "Hot"

// If temperature is 25 or above → "Pleasant"

// Otherwise → "Cool"

function checkWeather(degree) {
    if (degree >= 45) {
        return "Extreme Heat";
    }
    else if (degree >= 35) {
        return "Hot";
    }
    else if (degree >= 25) {
        return "Pleasant";
    }
    else {
        return "Cool";
    }
}

console.log(checkWeather(38));


// 2. Employee Salary Category
// Question:
// Write a function checkSalary(salary) that categorizes an employee's salary:

// 100000 or above → "High Salary"

// 70000 or above → "Good Salary"

// 40000 or above → "Average Salary"

// Otherwise → "Low Salary"

function checkSalary(salary) {
    if (salary >= 100000) {
        return "High Salary";
    }
    else if (salary >= 70000) {
        return "Good Salary";
    }
    else if (salary >= 40000) {
        return "Average Salary";
    }
    else {
        return "Low Salary";
    }
}

console.log(checkSalary(75000));