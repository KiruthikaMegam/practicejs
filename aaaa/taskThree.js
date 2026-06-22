// Task 1: Employee Information System Requirements

let empName = prompt("Enter Your Name");
let empAge = prompt("Enter Your Age");
let empDept = prompt("Enter Your Department");
let empSalary = prompt("Enter Your Salary");

let empDetails = {
    name : empName,
    age : empAge,
    dept : empDept,
    salary : empSalary
}

console.log(`          Employee Details
-----------------------------
Name       : ${empDetails.name}
Age        : ${empDetails.age}
Department : ${empDetails.dept}
Salary     : ${empDetails.salary}`);


if(empSalary > 30000){
    console.log("Eligible for Bonus");
}else{
    console.log("Not Eligible for Bonus"); 
}

//Task 2: Supermarket Billing

let productName = prompt("Enter the Product Name");
let ProductPrice = prompt("Enter the Product Price");
let productQuantity = prompt("Enter the Product Quantity");

let totalBill = ProductPrice * productQuantity;

if(totalBill > 5000){
    let discount = 10 ;
    discount = totalBill * discount / 100;
    totalBill = totalBill - discount; 
    console.log(`     Supermarket Bill
-------------------------
Product Name : ${productName}
Product Price : Rs.${ProductPrice}/-
Quantity : ${productQuantity}
Discount : 10%
Total Amount : Rs.${totalBill}/-
        `);
}else{
    console.log(`     Supermarket Bill
-------------------------
Product Name : ${productName}
Product Price : Rs.${ProductPrice}/-
Quantity : ${productQuantity}
Total Amount : Rs.${totalBill}/-
`);
}

// Task 3: Student Result Portal

let studName = prompt("Enter the Student Name");
let studMark = prompt("Enter the Student Mark");

console.log("Student Result Portal");

if (studMark >= 90){
console.log("Grade A");
}else if (studMark >= 75){
console.log("Grade B");
}else if (studMark >= 50){
console.log("Grade C");
}else {
console.log("Fail");
}

// Task 4: Bank ATM Eligibility

let userName = prompt("Enter the Your Name");
let accountBal = prompt("Enter the Account Balance");
let withdrawBal = prompt("Enter the Withdrawal Balance");

console.log("Bank ATM Eligibility");

if(withdrawBal <= accountBal){
    console.log("Transaction Successful");
}else{
    console.log("Insufficient Balance");
}

// Task 5: Login Validation

let user = "abcd";
let pwd = "1234"

let name = prompt("Enter Your User Name");
let password = prompt("Enter Your Password");

console.log("Login Validation");

if(user == name && pwd == password){
    console.log("Login Successful");
}else{
    console.log("Invalid Username or Password");
}

// Task 6: Online Food Order

let foodItems = ["Briyani","Tandoori","Chicken65","Chicken Rice","Noodles","Shawarma","Naan","Chicken Gravy"];

console.log("Online Food Order");

console.log(`
First Item            : ${foodItems[0]}
Last Item             : ${foodItems[foodItems.length - 1]}
Total Number of Items : ${foodItems.length}`);

for (let items of foodItems){
    console.log(items);
}

// Task 7: Company Employee Directory

let details = {
name:"Kiruthika",
age:"25",
department:"Frontend",
salary:"Rs.30000/-",
experience:"2 Years"
}
console.log("Company Employee Directory");

for (let employee in details){
    console.log(`${employee} : ${details[employee]}`);
}

// Task 8: Traffic Signal System

let color = prompt("Traffic Signal \n1.Red \n2.Yellow \n3.Green");

console.log("Traffic Signal System");

switch(color){
    case "1" : console.log("Stop");
    break;
    
    case "2" : console.log("Ready");
    break;

    case "3" : console.log("Go");
    break;

    default : console.log("Invalid Signal");
    break;
}

// Task 9: Age Category Checker

let age = prompt("Enter Your Age");

console.log("Age Category Checker");

if(age <=12){
    console.log("Child");
}else if(age >=13 && age <=19){
    console.log("Teenager");
}else if(age >=20 && age <=59){
    console.log("Adult"); 
}else{
    console.log("Senior Citizen");
}

// Task 10: Employee Attendance

let employeeName = prompt("Enter the Employee Name");
let empAttendance = prompt("Enter the Attendance (Present/Absent)");

console.log("Employee Attendance");

let attendance = empAttendance == "Present" ? (`Welcome ${employeeName} \nAttendance : ${empAttendance}`) : (`Welcome ${employeeName} \nAttendance : ${empAttendance}`);
console.log(attendance);
