// 1. Create a variable and store your favorite food.
    let favFood = "Chicken Rice"

// 2. Create a variable and store your mobile number.
    let mobNum = 9876543210    

// 3. Create a boolean variable with false value.
    let bool = false    

// 4. Create one undefined variable and print typeof.
    let a 
    console.log(typeof(a));

// 5. Create one array with 6 animal names.
    let arr = ["Lion", "Tiger", "Elephant", "Dog", "Cat", "Monkey"]

// 6. Print second animal from array.
    console.log(arr[1]);
    

// 7. Print last animal from array using length.
    console.log(arr[arr.length-1]);    

// 8. Create object with bike details (name, model, color).
    let bike = {
        name: "BajajPulser",
        model: "NS200",
        color: "Black"
    }

// 9. Print bike color from object.
    console.log(bike.color)

// 10. Create two variables and subtract values.
    let num1 = 20
    let num2 = 10
    console.log(num1-num2);
    
// 11. Create two variables and divide values.
    let x = 10
    let y = 20
    console.log(x/y);
    
// 12. Find 15 % 2.
    let mod1 = 15
    let mod2 = 2
    let result = mod1 % mod2

    console.log(result);
    

// 13. Find 2 ** 5.
    let mul1 = 2
    let mul2 = 5
    let ans = mul1 ** mul2

    console.log(ans);
    

// 14. Create variable with 5 and use post increment.
    let postInc = 5
    console.log(postInc++);
    
// 15. Create variable with 10 and use pre increment.
    let preInc = 10
    console.log(++preInc);

// 16. Create variable with 20 and use post decrement.
    let postDec = 20
    console.log(postDec--);

// 17. Create variable with 50 and use pre decrement.
    let preDec = 50
    console.log(--preDec);

// 18. Check 100 > 50.
    console.log(100 > 50);  //true    

// 19. Check 25 < 10.
    console.log(25 < 10);   //false

// 20. Check 50 >= 50.
    console.log(50 >= 50);  //true

// 21. Check 30 <= 25.
    console.log(30 <= 25);  //false
    
// 22. Check 10 == "10".
    console.log(10 == "10");  //true

// 23. Check 10 === "10".
    console.log(10 === "10");  //false

// 24. Check 25 != "25".
    console.log(25 != "25");  //false

// 25. Check 25 !== "25".
    console.log(25 !== "25");  //true

// 26. Use AND operator:
//     10 > 5 && 20 > 15
    console.log(10 > 5 && 20 > 15);  //true

// 27. Use AND operator:
//     5 > 10 && 20 > 15
    console.log(5 > 10 && 20 > 15);  //false

// 28. Use OR operator:
//     5 > 10 || 20 > 15
    console.log(5 > 10 || 20 > 15);  //true

// 29. Use OR operator:
//     2 > 5 || 1 > 10
    console.log(2 > 5 || 1 > 10);  //false

// 30. Use NOT operator:
//     !(10 > 5)
    console.log(!(10 > 5));  //false

// 31. Use NOT operator:
//     !(5 > 10)
    console.log(!(5 > 10));  //true

// 32. Create ternary operator:
//     if 50 > 25 print "True"
//     else print "False"
    let result1 = 50 > 25 ? "True" : "False"
    console.log(result1);

// 33. Create ternary operator:
//     if 18 >= 21 print "Adult"
//     else print "Minor"
    let age = 18
    let result2 = age >= 21 ? "Adult" : "Minor"
    console.log(result2);

// 34. Create one array with 5 city names and print third city.
    let cities = ["Chennai", "Bangalore", "Hyderabad", "Mumbai", "Delhi"]
    console.log(cities[2]);

// 35. Create one object with employee details and print employee name.
    let employee = {
        empName: "Vetrivel",
        empId: 12345,
        empDept: "IT"
    }
    console.log(employee.empName);

// 36. Create variable with string "100" and print typeof.
    let strNum = "100"
    console.log(typeof(strNum));

// 37. Create variable with number 100 and print typeof.
    let num = 100
    console.log(typeof(num));

// 38. Create one null variable and print it.
    let nullVar = null
    console.log(nullVar);
    

// 39. Create one array with mixed datatypes.
    let mixedArray = ["Vetrivel", 23, true, null]

// 40. Create object with student details:
//     name, mark, passed(boolean)

    let student={
        stdName: "Vetri",
        mark: 75,
        passed: true
    }