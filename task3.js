// 1. Student Login Check

// Ask username and password using prompt().

// If username = "admin" and password = "1234"
// → print "Login Success"
// Else print "Invalid User"

        // let username = prompt("Enter your name: ");
        // let password = prompt("Enter your password: ");
        // if (username == "admin" & password == "1234"){
        //     alert("Login Success..");    
        // }else{
        //     alert("Invalid User");   
        // }


// 2. ATM Balance System

// Create a variable balance = 5000

// Withdraw amount using prompt()
// If amount less than balance → "Withdraw Success"
// Else → "Insufficient Balance"
        
        // let balance = 5000
        // let withdraw = prompt("Enter withdrawal amount: ")

        // if(withdraw <= balance){
        //     alert("Withdraw Success...")
        // }else{
        //     alert("Insufficient Balance")
        // }




// 3. Traffic Signal Project

// Using switch

// "red" → stop
// "yellow" → ready
// "green" → go

        // let signal = prompt("Enter - Red / Yellow / Green ")

        // switch(signal){
        //     case "Red" :
        //         alert("Stop...")  
        //         break; 

        //     case "Yellow" :
        //         alert("Ready...") 
        //         break;

        //     case "Green" :
        //         alert("Go...")  
        //         break;

        //     default:
        //         alert("😒 Enter Correctly 😒") 
        //         break;       
        // }



// 4. Age Eligibility Checker

// Take age from user.

// age >= 18 → "Eligible for Vote"
// Else → "Not Eligible"

        // let age = prompt("Enter Your Age: ")

        // if (age >= 18){
        //     alert("Eligible for vote 👍")
        // }
        // else{
        //     alert("Not Eligible for Vote 👎")
        // }



// 5. Shopping Discount System

// Take product price.

// Above 5000 → 20% discount
// Above 3000 → 10% discount
// Else → no discount

        // let productPrice = prompt("Enter your purchase amount")

        // if(productPrice >= 5000){
        //     alert("20% Discount");
        // }
        // else if(productPrice >= 3000 & productPrice < 5000){
        //     alert("10% Discount");            
        // }
        // else{
        //     alert("No discount")
        // }


// 6. Password Strength Checker

// Check password length.

// length >= 8 → "Strong Password"
// Else → "Weak Password"

        // let password = prompt("Enter your password for check your password is Weak or Strong")

        // if (password.length >= 8){
        //     alert("Strong Password 💪")
        // }else{
        //     alert("Weak Password 🥱")
        // }



// 7. Mobile Battery Warning

// Take battery percentage.

// <= 10 → "Battery Low"
// <= 50 → "Battery Medium"
// Else → "Battery Full"

        let batteryPercentage = 9

        if (batteryPercentage <= 10){
            console.log("Battery Low")
        }
        else if(batteryPercentage <= 50){
            console.log("Battery Medium")
        }
        else{
            console.log("Battery Full")
        }



// 8. Employee Salary Bonus

// Create salary variable.

// salary >= 50000 → 15% bonus
// salary >= 30000 → 10% bonus
// Else → 5% bonus

        // let salary = prompt("Enter your salary:")

        // switch (true){
        //     case salary >= 50000:
        //         alert("15% bonus for you" )
        //         break;

        //     case salary >= 30000:
        //         alert("10% bonus for you")
        //         break;
            
        //     default:
        //         alert("5% bonus for you")
        //         break
        // }



// 9. Online Food Order

// Take order amount.

// Above 499 → "Free Delivery"
// Else → "Delivery Charge Added"

        // let orderAmount = prompt("Enter your order amount")

        // if (orderAmount > 499){
        //     alert("Free Delivery")
        // }else{
        //     alert("Delivery Charge Added")
        // }



// 10. Movie Ticket Booking

// Take age.

// Below 5 → Free ticket
// Below 18 → Child ticket
// Else → Adult ticket

        // let age = prompt("Enter Your Age")

        // if (age <= 5){
        //     alert("Free ticket")
        // }
        // else if (age > 5 & age <=18){
        //     alert("Child ticket")
        // }
        // else{
        //     alert("Adult ticket")
        // }



// 11. Instagram Likes Counter

// Using for loop
// Print:

// Like 1
// Like 2
// Like 3
// Like 4
// Like 5

            for (let i=1; i<=5; i++){
                console.log("Like " + i);                
            }


// 12. Countdown Timer

// Using while loop
// Print:

// 5
// 4
// 3
// 2
// 1
// Start

            // let val = 5

            // while(val>=1){
            //     console.log(val);
                
            //     val--;
            // }

            // console.log("Start");
            



// 13. OTP Verification

// Create OTP = 1234
// Take input from user.

// Correct → "OTP Verified"
// Wrong → "Invalid OTP"

        // let otp = 1234
        // let verifyOTP = prompt("Enter OTP 1234")

        // if (otp == verifyOTP){
        //     alert("OTP Verified")
        // }
        // else{
        //     alert("Invalid OTP")
        // }



// 14. E-commerce Cart Total

// Array:

// let cart = [200,500,1000,300]
// Find total cart value using loop.

        let cart = [200,500,1000,300]
        let total = 0

        for (let i = 0; i < cart.length; i++){
            total = total + cart[i];
            
        }
        console.log(total);



// 15. Student Mark Grade System

// Take mark.

// 90+ → A Grade
// 70+ → B Grade
// 50+ → C Grade
// Else → Fail

        // let mark = prompt("Enter your mark:")

        // if (mark >= 90){
        //     alert("A Grade")
        // }
        // else if( mark < 90 & mark >= 70){
        //     alert("B Grade")
        // }
        // else if (mark < 70 & mark >= 50){
        //     alert("C Grade")
        // }
        // else{
        //     alert("Fail")
        // }



// 16. Netflix Subscription Checker

// Boolean variable:

// let subscription = true
// true → "Watch Movie"
// false → "Buy Subscription"

        let subscription = false

        if (subscription){
            console.log("Watch Movie")
        }

        else{
            console.log("Buy Subscription")
        }



// 17. Product Stock Checker

// let stock = 0
// stock > 0 → "Product Available"
// Else → "Out of Stock"

        let stock = 1

        if (stock > 0){
            console.log("Product Available")
        }
        else{
            console.log("Out of Stock")
        }



// 18. Weather App Condition

// Using switch

// "sunny" → "Go Outside"
// "rainy" → "Take Umbrella"
// "cold" → "Wear Jacket"

        let weather = "cold"

        switch (weather){
            case "sunny":
                console.log("Go Outside")
                break;

            case "rainy":
                console.log("Take Umbrella")
                break;

            case "cold":
                console.log("Wear Jacket")
                break;

            default:
                console.log("Go to sleep")
        }



// 19. User Profile Object

// Create object:

// let user = {
//    name : "Navi",
//    age : 20,
//    city : "Bangalore"
// }
// Print all values using for in loop.

        let user = {
            name : "Navi",
            age : 20,
            city : "Bangalore"
        }

        for (let a in user){
            console.log(user[a]);
            
        }



// 20. WhatsApp Chat Array

// Array:

// let chats = ["hi","hello","where are you","ok"]
// Print each message using for of loop.


        let chats = ["hi", "hello", "where are you", "ok"];

        for (let message of chats) {
            console.log(message);
        }