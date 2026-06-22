// Task 1: Employee Registration

let empName = "Kiruthika";
const empId = "STK-1624";
let dept = "Development";
let salary = 30000;
let permanentEmp = true;


console.log("1.Employee Registration");
console.log(`    Employee Details
------------------------
Name       : ${empName}
ID         : ${empId}
Department : ${dept}
Salary     : ${salary}
Permanent  : ${permanentEmp}`);

// Task 2: Employee Skills

let skills = ["HTML","CSS","JavaScript","React","Git","Node.js"];

console.log("2.Employee Skills");

console.log(`First Skill  : ${skills[0]}
Third Skill  : ${skills[2]}
Last Skill   : ${skills[skills.length - 1]}
Total Skills : ${skills.length}`);

// Task 3: Company Object

let company = {
    companyName:"Stackly",
    location:"Salem",
    employees:800,
    technologies:["Frontend", "Backend","FullStack","Dataase","Version Control"]
}

console.log("3.Company Object");
console.log(`Company Name      : ${company.companyName}
Location          : ${company.location}
Second Technology : ${company.technologies[1]}
Total Technology  : ${company.technologies.length}`);

// Task 4: Salary Calculator

let basicSalary = 30000;
let bonus = 5000;
let tax = basicSalary * 0.10; // tax = 10%
let finalSalary = (basicSalary - tax) + bonus;

console.log("4.Salary Calculator");
console.log(`Total Salary : Rs.${basicSalary}/-
Tax(10%)     : Rs.${tax}/-
Final Salary : Rs.${finalSalary}/-
`);

// Task 5: Attendance Checker

let attendance = 85;

console.log("5.Attandance Checker");
// Using Ternary Operator
let checkEligible = attendance >=75 ? "Eligible For Exam" : "Not Eligible";
console.log(checkEligible);

// Task 6: Login Verification

let userName = "Kiruthika";
let pwd = "123";

let login = (userName == "Kiruthika" && pwd == "123") ? "Login Successfully" : "Invalid Credentials"

console.log("6.Login Verification");
console.log(login);

// Task 7: Product Billing

let productName = "Mobile";
let productPrice = 35000;
let quantity = 3;

let total = productPrice * quantity;

console.log("7.Product Billing");
console.log(`Product : ${productName}
Price    : Rs.${productPrice}/-
Quantity : ${quantity}
Total    : Rs.${total}/-`);

// Task 8: Increment & Decrement

let a = 32;
let b = 56;
let c = 43;
let d = 67;

// Pre Increment: First increases the value, then returns it
// Post Increment: First returns the current value, then increases it
// Pre Decrement: First decreases the value, then returns it
// Post Decrement: First returns the current value, then decreases it

console.log("8.Increment & Decrement");
console.log(`PreIncrement : ${++a}
PostIncrement : ${b++} 
PreDecrement  : ${--c}
PostDecrement : ${d--}`);

//Task 9: Comparison Checker

console.log("9.Comparison Checker");
console.log('(10 == "10")  :  ' + (10 == "10"));
//This is loosy equality operator, it will check numbers only.

console.log('(10 === "10") : ' + (10 === "10")); //false
//This is strictly equality operator, it will check both value and its data type.so the expected output is false because 10 is a number and "10" this is a string.

console.log('(20 != "20")  : ' + (20 != "20")); //false
//This is a not equal operator.The result is false because both values are equal.

console.log('(20 !== "20") : ' + (20 !== "20")); //true
//This is a strictly not equal operator.The result is true because it will check both values and its data type.

console.log('(5 < 10)      : ' + (5 < 10)); // true
//This is a less than operator. It will check whether the value on the left is smaller than the value on the right.

console.log('(15 >= 20)    : ' + (15 >= 20)); //false
//This is a greater than or equal operator. It will check whether the value on the left is greater or equal than the value on the right.

console.log('(100 <= 100)  : ' + (100 <= 100)); //true
//This is a less than or equal operator. It will check whether the value on the left is lesser or equal than the value on the right.

// Task 10: User Interaction

alert("Welcome to Stackly");
let employeeName = prompt("Enter Your Name");
let employeeAge = prompt("Enter Your Age");
let  ask = confirm("Do you want to join our company?");

let acceptance = ask ? ("Welcome " + employeeName) : "Thank you!!!";
document.writeln(acceptance);

//Final Task 

alert("Welcome to Employee Portal");

let name = prompt("For Login Enter Your Name?");
let password = prompt("Enter Your Password")
let isLogin = (name === userName && password === pwd);
let loginVerify = confirm(isLogin ? "Login Successful" : "Invalid Login");

let employee = {
    name : empName,
    id : empId,
    department : dept,
    experience : 2,
    salary : basicSalary,
    bonus : bonus,
    finalSalary : basicSalary + bonus,
    skills : skills,
    attendance : attendance,
    examStatus : checkEligible,
    loginStatus : "Success" ,
    company : company.companyName,
    location : company.location
}

let show = isLogin ? 
console.log(`==================================================
            Employee Portal
=====================================================
Employee Name : ${employee.name}
Employee ID   : ${employee.id}
Department    : ${employee.department}
Experience    : ${employee.experience} Years
Salary        : Rs.${employee.salary}/-
Bonus         : Rs.${employee.bonus}/-
Final Salary  : Rs.${employee.finalSalary}/-
Skils         : ${employee.skills}
Attendance    : ${employee.attendance}%
Exam Status   : ${employee.examStatus}
Login Status  : ${employee.loginStatus}
Company       : ${employee.company}
Location      : ${employee.location}
=====================================================`) :
console.log("Login Failed");








