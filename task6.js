// 1. Employee Bonus Filter
// Concept:
// filter(), map()
// Task:
// You have employee salaries.
// Find employees whose salary is greater than 300000 and print:
// "Congrats <name>"
// Input:
// let employees = [
//   {name:"john", salary:200000},
//   {name:"rahul", salary:500000},
//   {name:"siva", salary:700000}
// ]
// Expected Output:
// Congrats rahul
// Congrats siva

    let employees = [
    {name:"john", salary:200000},
    {name:"rahul", salary:500000},
    {name:"siva", salary:700000}
    ]

    let newFilter = employees.filter((c,i,t)=>{
        return c.salary > 300000;
    })

    let newMap = newFilter.map((c,i,t)=>{
        return ("Congrats : " + c.name);
    })

    console.log(newMap);


    
// 2. Shopping Cart Total
// Concept:
// reduce()
// Task:
// Calculate total bill amount.
// Input:
// let cart = [1200, 3400, 500, 999]
// Expected Output:
// 6099

    let cart = [1200, 3400, 500, 999]

    let newCart = cart.reduce((acc,c,i,t)=>{
        return acc + c
    },0)

    console.log(newCart);
    


// 3. Login Username Formatter
// Concept:
// slice(), toUpperCase()
// Task:
// Convert first letter into capital.
// Input:
// let user = "naveen"
// Expected Output:
// Naveen

let user = "vetri"

let caps = user.slice(0,1).toUpperCase()
let small = user.slice(1,user.length).toLowerCase()

console.log(caps+small);




// 4. OTP Checker
// Concept:
// includes()
// Task:
// Check whether OTP contains number 0.
// Input:
// let otp = "560890"
// Expected Output:
// Valid OTP
// Else:
// Invalid OTP

let otp = "560890"

if (otp.includes("0")){
    console.log( "Valid OTP");
    
}else{
    console.log("Invalid OTP");
    
}



// 5. Food Delivery App
// Concept:
// push(), pop()
// Task:
// Add new order and remove delivered order.
// Input:
// let orders = ["burger","pizza"]
// Process:
// Add "shawarma"
// Remove last order
// Expected Output:
// ["burger","pizza"]

let orders = ["burger","pizza"]

orders.push("shawarma")
orders.pop()

console.log(orders);




// 6. Attendance Checker
// Concept:
// every()
// Task:
// Check whether all students passed.
// Input:
// let marks = [40,50,70,80]
// Condition:
// mark >= 35
// Expected Output:
// true

let marks = [40,50,70,80]

let markCheck = marks.every((c,i,t)=>{
    return(c >= 35)
})
console.log(markCheck);




// 7. Find VIP Customer
// Concept:
// find()
// Task:
// Find first customer whose purchase is greater than 10000.
// Input:
// let customer = [
//   {name:"arun", purchase:5000},
//   {name:"vijay", purchase:15000},
//   {name:"surya", purchase:25000}
// ]
// Expected Output:
// vijay

let customer = [
  {name:"arun", purchase:5000},
  {name:"vijay", purchase:15000},
  {name:"surya", purchase:25000}
]

let newCustomer = customer.find((c,i,t)=>{
    return c.purchase >= 10000;
})

console.log(newCustomer.name);



// 8. Reverse Chat Message
// Concept:
// split(), reverse(), join()
// Task:
// Reverse the message.
// Input:
// let msg = "hello"
// Expected Output:
// olleh

let msg = "hello"

let rev = msg.split("").reverse().join("")

console.log(rev);



// 9. Remove Duplicate Product
// Concept:
// indexOf()
// Task:
// Find position of "mobile".
// Input:
// let products = ["tv","laptop","mobile","watch"]
// Expected Output:
// 2

let products = ["tv","laptop","mobile","watch"]

console.log(products.indexOf("mobile"));




// 10. Student Rank Sort
// Concept:
// sort()
// Task:
// Sort marks ascending order.
// Input:
// let marks = [99,45,12,67,89]
// Expected Output:
// [12,45,67,89,99]

let marks1 = [99,45,12,67,89]

let markSort = marks1.sort((a,b)=>{
    return a-b
})

console.log(markSort);



// 11. Movie Search
// Concept:
// some()
// Task:
// Check whether "Leo" movie exists.
// Input:
// let movies = ["Jailer","Leo","Vikram"]
// Expected Output:
// true

let movies = ["Jailer","Leo","Vikram"]

let checkLeo = movies.some((c,i,t)=>{
    return c == "Leo";
})

console.log(checkLeo);




// 12. Hide Mobile Number
// Concept:
// slice()
// Task:
// Show only last 4 digits.
// Input:
// let num = "6383366774"
// Expected Output:
// 6774

let num = "6383366774"

let hideNum = num.slice(num.length-4)

console.log(hideNum);




// 13. Online Exam Result
// Concept:
// ternary operator
// Task:
// If mark >= 35 print "Pass" else "Fail".
// Input:
// let mark = 78
// Expected Output:
// Pass

let mark = 78

let examResult = mark >= 35? "Pass" : "Fail";

console.log(examResult);



// 14. Cab Booking Price
// Concept:
// function, return
// Task:
// Create function for total fare.
// Input:
// baseFare = 100
// extraKm = 50
// Expected Output:
// 150

function totalFare(baseFare,extraKm){
    return baseFare + extraKm
}

console.log("Total fare is : "+ totalFare(100,50));



// 15. Instagram Hashtag Generator
// Concept:
// replaceAll()
// Task:
// Convert spaces into _
// Input:
// let tag = "web developer"
// Expected Output:
// web_developer

let tag = "web developer"

let replace = tag.replaceAll(" ", "_")

console.log(replace);



// 16. Netflix Kids Content
// Concept:
// filter()
// Task:
// Get only movies below age 18.
// Input:
// let movies = [
//   {name:"A", age:13},
//   {name:"B", age:18},
//   {name:"C", age:10}
// ]
// Expected Output:
// A
// C

let movies1 = [
  {name:"A", age:13},
  {name:"B", age:18},
  {name:"C", age:10}
]

let filterAge = movies1.filter((c,i,t)=>{
    return c.age < 18;

})
filterAge.forEach((c,i,t) => {
    console.log(c.name);
    
});


// 17. E-commerce Product Search
// Concept:
// startsWith()
// Task:
// Check whether product starts with "i".
// Input:
// let product = "iphone"
// Expected Output:
// true

let product = "iphone"

console.log(product.startsWith("i"));



// 18. WhatsApp Group Names
// Concept:
// forEach()
// Task:
// Print all group names with numbering.
// Input:
// let groups = ["office","friends","family"]
// Expected Output:
// 1 office
// 2 friends
// 3 family

let groups = ["office","friends","family"]

groups.forEach((c,i,l)=>{
    console.log(i + 1, c);  
})





// 19. Salary Highest Finder
// Concept:
// reduce()
// Task:
// Find highest salary.
// Input:
// let salary = [20000,50000,70000,10000]
// Expected Output:
// 70000

let salary = [20000,50000,70000,10000];

let highest = salary.reduce((max, current) => {
    return current > max ? current : max;
});

console.log(highest);


// 20. Password Security Checker
// Concept:
// length, includes()
// Task:
// Password should:
// contain @
// minimum 8 characters
// Input:
// let password = "navi@123"
// Expected Output:
// Strong Password

let password = "navi@123";

if(password.includes("@") && password.length >= 8){
    console.log("Strong Password");
}
else{
    console.log("Weak Password");
}