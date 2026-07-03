// Task 1 - Student Management System

let students = [
{
    name:"Naveen",
    id:101,
    mark:85
},
{
    name:"John",
    id:102,
    mark:45
},
{
    name:"Arun",
    id:103,
    mark:25
}
]

console.log("Print All Students.....");
for (let i = 0; i < students.length; i++) {
console.log(`
Student Name : ${students[i].name}
Student Id   : ${students[i].id}
Mark         : ${students[i].mark}`);
}

console.log("Print Students Name.....");
for (let i = 0; i < students.length; i++) {
console.log(`${students[i].name}`);
}

console.log("Find Student id = 102");
for (let i = 0; i < students.length; i++) {
    if (students[i].id === 102) {
console.log(`
Student Name : ${students[i].name}
Student Id   : ${students[i].id}
Mark         : ${students[i].mark}`);
}    
}

console.log("Find students who passed (mark >=35)");
for (let i = 0; i < students.length; i++) {
    if (students[i].mark >= 35) {
console.log(`
Student Name : ${students[i].name}
Student Id   : ${students[i].id}
Mark         : ${students[i].mark}`);
}    
}

console.log(`Total Students : ${students.length}`);

// Task 2 - Employee Salary System

let employees = [
{
    name:"Naveen",
    salary:30000
},
{
    name:"John",
    salary:45000
},
{
    name:"Arun",
    salary:60000
}
]

let highestSalary = employees[0];
employees.forEach((emp)=>{
    if (emp.salary > highestSalary.salary) {
    highestSalary = emp;
  }
  })  
console.log(`Highest Salary.....
Salary         : ${highestSalary.salary}
Employee Name  : ${highestSalary.name}`);

let lowestSalary = employees[0];
employees.forEach((emp)=>{
    if (emp.salary < lowestSalary.salary) {
    lowestSalary = emp;
  }
  })  
console.log(`Lowest Salary.....
Salary         : ${lowestSalary.salary}
Employee Name  : ${lowestSalary.name}`);

let bonus = 5000;
console.log("Salary After Bonus.....");
employees.forEach((emp)=>{
console.log(`${emp.name} : ${emp.salary + bonus}`);    
})

let totalSalary = employees.reduce((acc,emp)=>{
    return acc + emp.salary;
},0)
console.log(`Total Salary : $${totalSalary}`);

let moreThan = employees.filter((emp)=>{
    return emp.salary > 40000
})

console.log("More Than 40,000 Salary.....");
moreThan.forEach((emp)=>{
console.log(`${emp.name}`);
})

// Task 3 - Shopping Cart

let products = [
{
    name:"Laptop",
    price:50000
},
{
    name:"Mouse",
    price:500
},
{
    name:"Keyboard",
    price:1500
}
]

console.log("Product Name.....");
products.forEach((product)=>{
    console.log(`${product.name}`);
});

console.log("Total Bill.....");
let totalBill = products.reduce((acc,product)=>{
    return acc + product.price
},0)
console.log(`Amount : ${totalBill}`);

let search = products.find((product)=>{
    if(product.name === "Mouse"){
        return product
    }
})
console.log(search);

let applyDis = products.map((product)=>{
    return product.price * 0.10
})
console.log("After Discount.....");
products.forEach((product,i)=>{
let totalPrice = product.price + applyDis[i];
console.log(`
Product Name : ${product.name}
Price        : ${totalPrice}
`);
})

// Task 4 - Bank Account

let account = {
    name: "Naveen",
    balance: 50000
};

let deposit = 10000;
let withdraw = 5000;

let afterDeposit = account.balance + deposit;
console.log(`After Deposit : ${afterDeposit}`);

let afterWithdraw = afterDeposit - withdraw;
console.log(`After Withdraw : ${afterWithdraw}`);

if (account.balance < 20000) {
    console.log("Balance is below ₹20,000");
} else {
    console.log("Balance is above ₹20,000");
}

console.log(`
----- Account Details -----
Account Holder : ${account.name}
Balance        : ₹${account.balance}
`);

// Task 5 - Company Login

let userName = "abc";
let password = "123";

let name = prompt("Enter Your Username");
let pwd = prompt("Enter Your Password");

if(userName === name && password === pwd){
    console.log("Welcome");
}else console.log("Invalid Username or Password");

// Task 6 - Traffic Signal

let signal = prompt(`Enter the your choice
1. Red
2. Yellow
3. Green
`);
switch(signal){
    case "1" : console.log("Stop");
                 break;
    case "2" : console.log("Ready");
                 break;
    case "3" : console.log("Go");
                 break;
    default    : console.log("Invalid");
                 break;
}

// Task 7 - ATM Machine

let balance = 25000;
let choice = Number(prompt(`
===== Choose Your choice =====

1. Balance
2. Deposit
3. Withdraw
4. Exit

`));

switch (choice) {
    case 1:
        console.log(`Current Balance: ₹${balance}`);
        break;

    case 2:
        let deposit = Number(prompt("Enter deposit amount:"));
        balance += deposit;
        console.log(`₹${deposit} deposited successfully.`);
        console.log(`Current Balance: ₹${balance}`);
        break;

    case 3:
        let withdraw = Number(prompt("Enter withdrawal amount:"));
        if (withdraw <= balance) {
            balance -= withdraw;
            console.log(`₹${withdraw} withdrawn successfully.`);
            console.log(`Current Balance: ₹${balance}`);
        } else {
            console.log("Insufficient Balance!");
        }
        break;

    case 4:
        console.log("Thank you for using our bank!");
        break;

    default:
        console.log("Invalid Choice!");
}

// Task 8 - Cricket Score

let scores=[10,25,40,60,80,100];

let highest = scores[0];
let lowest = scores[0];

for (let i = 1; i < scores.length; i++) {
    if (scores[i] > highest) {
        highest = scores[i];
    }

    if (scores[i] < lowest) {
        lowest = scores[i];
    }
}

console.log("Highest Score:" + highest);
console.log("Lowest Score:" + lowest);

// Task 9 - Movie Ticket Booking

let age = prompt("For Movie Ticket Booking Please Enter Your Age");
if(age >=18){
    confirm("Allow Movie");
}else confirm("Not Allowed");

// Task 10 - Hospital Appointment

let tokenNum = prompt("Entet Your Token Number");
switch(tokenNum){
    case "1" : console.log("Doctor A");
                 break;
    case "2" : console.log("Doctor B");
                 break;
    case "3" : console.log("Doctor C");
                 break;
    default    : console.log("Invalid");
                 break;
}

// Task 11 - Array Method Practice

let fruits=["Apple","Orange","Banana"]

fruits.push("Grapes","Jackfruit")
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.shift();
console.log(fruits);

fruits.unshift("Plum","Mango","Watermelon");
console.log(fruits);

fruits.splice(2,2,"Papaya");
console.log(fruits);

let newFruits = fruits.slice(1,4);
console.log(newFruits);

// Task 12 - Higher Order Methods

let employee=[
{name:"A",salary:20000},
{name:"B",salary:35000},
{name:"C",salary:50000},
{name:"D",salary:70000}
]

let increaseSal = employee.map((emp) => {
    return {
        ...emp,
        salary: emp.salary + 5000
    };
});
console.log("Increase every salary by ₹5,000.....");
console.log(increaseSal);

let greaterThan = employee.filter((emp)=>{
    if(emp.salary > 30000){
        return emp
    }
})
console.log("Salary greater than ₹30,000.....");
console.log(greaterThan);

let findSal = employee.find((emp)=>{
    if(emp.salary == 50000){
        return emp
    }
})
console.log("Find salary ₹50,000.....");
console.log(findSal);

let totalSal = employee.reduce((acc,emp)=>{
    return acc + emp.salary
},0)
console.log(`Total Salary : ${totalSal}`);

let check = employee.some((emp)=>{
    return emp.salary > 60000
})
console.log(`Any Employee earn more than $60000 : ${check}`);

let checkEmpSal = employee.every((emp)=>{
    return emp.salary > 15000
})
console.log(`Every Employee earn more than $15000 : ${checkEmpSal}`);

// Task 13 - String Practice

let company=" Stackly IT "

let upperCase = company.toUpperCase();
console.log(upperCase);

let lowerCase = company.toLowerCase();
console.log(lowerCase);

let removeSpace = company.trim();
console.log(removeSpace);

let replace = company.replace("IT","Software");
console.log(replace);

let checking = company.includes("Stackly");
console.log(checking);

let split = company.split(" ");
console.log(split);

// Task 14 - Digital Clock

let timer = setInterval(() => {
    let currentTime = new Date();
    console.log(currentTime.toLocaleTimeString());
}, 1000);

setTimeout(()=>{
        clearInterval(timer);
        console.log("Stopped after 10 seconds.");
},10000)

// Task 15 - Fake Store API

let apiData = 'https://fakestoreapi.com/products';

fetch(apiData).then((data)=>{
    console.log(data);
    return data.json();
})
.then((jsData)=>{
console.log(jsData);

console.log("Product Titles....");
jsData.forEach((jsData)=>{
console.log(`${jsData.title}`);
})

console.log("Print Price Only....");
jsData.forEach((jsData)=>{
console.log(`${jsData.price}`);
})

console.log("Products costing more than ₹100....");
jsData.forEach((jsData)=>{
if(jsData.price > 100){
console.log(`${jsData.title} : ${jsData.price}`);
}
})

console.log(`Total Products: ${jsData.length}`);

console.log("Print category names....");
jsData.forEach((jsData)=>{
if(jsData.price > 100){
console.log(`${jsData.category}`);
}
})
})



































