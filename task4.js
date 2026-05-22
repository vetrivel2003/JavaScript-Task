// Task 1 — Smart Attendance Checker
// Concept:
// if else
// logical operator
// function
// Scenario:
// A student can enter exam hall only if:
// attendance >= 75
// fees paid = true
// Expected:
// Allowed for Exam
// Otherwise:
// Not Allowed

function checkExamEligibility(attendance, feesPaid) {

    if (attendance >= 75 && feesPaid === true) {
        console.log("Allowed for Exam");
    } else {
        console.log("Not Allowed");
    }

}
checkExamEligibility(80, true);
checkExamEligibility(70, true);
checkExamEligibility(85, false);




// Task 2 — Mobile Password Strength Checker
// Concept:
// string
// conditions
// Requirement:
// Check password:
// minimum 8 characters
// should contain number
// should contain uppercase
// Example:
// Abc12345
// Output:
// Strong Password

function checkPassword(password) {

    let hasUppercase = /[A-Z]/.test(password);
    let hasNumber = /[0-9]/.test(password);

    if (password.length >= 8 && hasUppercase && hasNumber) {
        console.log("Strong Password");
    } else {
        console.log("Weak Password");
    }

}
checkPassword("Abc12345");
checkPassword("abc123");


// Task 3 — Find Second Largest Number
// Concept:
// loop
// conditions
// variables
// Input:
// [10,50,80,20,90,70]
// Output:
// 80

function findSecondLargest(arr) {

    let largest = arr[0];
    let secondLargest = arr[0];

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        }

        else if (arr[i] > secondLargest && arr[i] != largest) {
            secondLargest = arr[i];
        }
    }

    console.log("Second Largest Number:", secondLargest);
}

findSecondLargest([10, 50, 80, 20, 90, 70]);


// Task 4 — Bus Seat Booking System
// Concept:
// array
// loop
// conditions
// Requirement:
// Create 10 seats.
// If seat booked:
// Seat Already Booked
// Else:
// Seat Booked Successfully


let seats = [0,0,0,0,0,0,0,0,0,0];

function bookSeat(seatNumber) {

    if (seats[seatNumber - 1] === 1) {
        console.log("Seat Already Booked");
    } else {
        seats[seatNumber - 1] = 1;
        console.log("Seat Booked Successfully");
    }

}

bookSeat(3);
bookSeat(3);
bookSeat(7);


// Task 5 — ATM Cash Withdraw Logic
// Concept:
// function
// return
// conditions
// Rules:
// balance = 10000
// user cannot withdraw more than balance
// minimum balance should maintain 1000
// Example:
// Withdraw:
// 9500
// Output:
// Insufficient Balance


let balance = 10000;

function withdraw(amount) {

    if (balance - amount < 1000) {
        return "Insufficient Balance";
    }

    if (amount > balance) {
        return "Insufficient Balance";
    }

    balance = balance - amount;

    return "Withdraw Successful. Remaining Balance: " + balance;
}
console.log(withdraw(2000));
console.log(withdraw(9500));
console.log(withdraw(3000));


// Task 6 — Product Search Engine
// Concept:
// array
// for of
// string methods
// Requirement:
// Search product from array.
// Example:
// ["iphone","samsung","realme","oppo"]
// Search:
// realme
// Output:
// Product Found

function searchProduct(products, searchItem) {

    for (let product of products) {

        if (product.toLowerCase() === searchItem.toLowerCase()) {
            console.log("Product Found");
            return;
        }
    }

    console.log("Product Not Found");
}
let products = ["iphone", "samsung", "realme", "oppo"];

searchProduct(products, "realme");
searchProduct(products, "vivo");


// Task 7 — Voting Eligibility System
// Concept:
// nested if
// logical operators
// Rules:
// Person can vote only if:
// age >= 18
// has voter id
// citizenship = Indian

function checkVotingEligibility(age, hasVoterId, citizenship) {

    if (age >= 18) {

        if (hasVoterId === true) {

            if (citizenship === "Indian") {
                console.log("Eligible to Vote");
            } else {
                console.log("Not Eligible - Must be Indian Citizen");
            }

        } else {
            console.log("Not Eligible - Voter ID Required");
        }

    } else {
        console.log("Not Eligible - Age must be 18 or above");
    }
}
checkVotingEligibility(20, true, "Indian");
checkVotingEligibility(17, true, "Indian");
checkVotingEligibility(25, false, "Indian");
checkVotingEligibility(30, true, "US");


// Task 8 — Online Food Order Bill
// Concept:
// function
// parameters
// arithmetic operators
// Requirement:
// Calculate:
// food price
// GST
// delivery charge
// discount
// Final Output:
// Total Bill : ₹450

function calculateBill(foodPrice, gstPercent, deliveryCharge, discount) {

    let gstAmount = (foodPrice * gstPercent) / 100;

    let total = foodPrice + gstAmount + deliveryCharge;

    let finalBill = total - discount;

    return finalBill;
}
let bill = calculateBill(400, 10, 50, 0);
console.log("Total Bill : ₹" + bill);


// Task 9 — Reverse Word Without reverse()
// Concept:
// loop
// string
// Input:
// javascript
// Output:
// tpircsavaj

function reverseWord(word) {

    let reversed = "";

    for (let i = word.length - 1; i >= 0; i--) {
        reversed = reversed + word[i];
    }

    console.log(reversed);
}
reverseWord("javascript");


// Task 10 — Mini Instagram Like System
// Concept:
// variable
// function
// ternary operator
// Requirement:
// When user clicks like:
// Liked ❤️
// Else:
// Like 🤍
// Also maintain total likes count.


let liked = false;
let totalLikes = 0;

function likePost() {

    liked = !liked;

    totalLikes = liked ? totalLikes + 1 : totalLikes - 1;

    console.log(liked ? "Liked ❤️" : "Like 🤍");
    console.log("Total Likes:", totalLikes);
}
likePost();
likePost();
likePost();




