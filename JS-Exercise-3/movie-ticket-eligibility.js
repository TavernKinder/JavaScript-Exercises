// input age and student status
let age = 21;
let isStudent = true;


// Print Age and Student status
if (age < 18) {
    console.log("Person is a Minor")
} else if (age >= 18){
    console.log("Person is an Adult")
}

if (isStudent) {
    console.log("Person is a Student")
}


// Check age and student status for ticket eligibility
if (age > 18 || isStudent) {
    console.log("Discount ticket granted ✅")
} else {
    console.log("Regular ticket only ❌")
}