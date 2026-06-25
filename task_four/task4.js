// Task 1: Employee Management System Requirements

let empDetails = [
    {
        name : "Kiruthika",
        age : 25,
        experience : "2 yrs",
        dept : "Frontend",
        salary : "32000" 
    },
    {
        name : "Gopal",
        age : 28,
        experience : "3 yrs",
        dept : "Frontend",
        salary : "30000" 
    },
    {
        name : "Ramya",
        age : 27,
        experience : "2 yrs",
        dept : "Backend",
        salary : "25000" 
    },
    {
        name : "Karthik",
        age : 32,
        experience : "5 yrs",
        dept : "Full Stack",
        salary : "50000" 
    },
]

for(let details of empDetails){
    console.log("Name :", details.name);
    console.log("Age :", details.age);
    console.log("Experience :", details.experience);
    console.log("Department :", details.dept);
    console.log("Salary :", details.salary);
     if (details.salary > 30000) {
        console.log("Employee Eligible For Bonus");
    } else {
        console.log("Employee Not Eligible For Bonus");
    }
    console.log("--------------------");
}

// Task 2: Student Result Portal

let student = {
    name: prompt("Enter Student Name"),
    tamil: Number(prompt("Enter Tamil Mark")),
    english: Number(prompt("Enter English Mark")),
    maths: Number(prompt("Enter Maths Mark")),
    science: Number(prompt("Enter Science Mark")),
    social: Number(prompt("Enter Social Mark"))
};

let total =student.tamil + student.english + student.maths + 
           student.science + student.social;

let percentage = total / 5;

let grade;

if (percentage >= 90) {
    grade = "A+";
} else if (percentage >= 80) {
    grade = "A";
} else if (percentage >= 70) {
    grade = "B";
} else if (percentage >= 60) {
    grade = "C";
} else {
    grade = "Fail";
}

console.log("-----Student Result Portal-----");
console.log("Student Name :", student.name);
console.log("Total Marks :", total);
console.log("Percentage :", percentage + "%");
console.log("Grade :", grade);


// Task 3: E-Commerce Cart

let products = [
    {
    name:"Laptop",
    price:50000
    },
    {
    name:"Mouse", 
    price:1000
    },
    {
    name:"Keyboard", 
    price:2000
    },
];

function calculateBill(){
    let total = 0;
    
    for (let product of products){
        total +=product.price;
    }

    console.log("-----Bill-----");
    
    if(total > 5000){
        let discount = total * 0.10;
        let finalAmount = total - discount;
        console.log("10% Discount Applied");
        console.log("Discount Amount" + " " + discount);
        console.log("Final Amount" + " " + finalAmount);
    }else{
        console.log("Discount Not Applied");
        console.log("Final Amount" + " " + total);        
    }
}

calculateBill();

// Task 4: Login Authentication

let userName = "abcd";
let password = "1234";

let name = prompt("Enter your user name");
let pwd = prompt("Enter your password");

console.log("-----Login Authentication-----");

let check = name == password && password == pwd ? "Login Successfull" : "Invalid credentials";
console.log(check);


// Task 5: Traffic Signal System

let signal = prompt("The Siganl is \n1.Red \n2.Yellow \n3.Green");

switch(signal){
    case "1" : console.log("Red Signal Means Stop");
    break; 

    case "2" : console.log("Yellow Signal Means Ready");
    break;

    case "3" : console.log("Green Signal Means Go");
    break;

    default : console.log("Invalid Signal");
    break;
}

// Task 6: ATM Withdrawal System

let balance = prompt("Enter the Total Balance");
let withdrawalAmount = prompt("Enter Withdrawal Amount");

console.log("-----ATM Withdrawal-----");

if (balance >= withdrawalAmount) {
    console.log("Withdrawal Successful");
} else {
    console.log("Insufficient Balance");
}

// Task 7: Online Food Order

console.log("-----Online Food Order-----");

function orderPlaced(){
  console.log("Order Received");
  foodPrepared()
}
function foodPrepared(){
    console.log("Food Preparing");
    foodDelivered()
}
function foodDelivered(){
    console.log("Food Delivered");
}

orderPlaced();

// Task 8: Cashback Generator (Generator Function)

console.log("-----Cashback Generator-----");

function* offers(){
    yield "10% Cashback"
    yield "20% Cashback"
    yield "50% Cashback"
    yield "70% Cashback"
    yield "Better Luck Next Time"
}

let showOffer = offers();
console.log(showOffer.next().value);
console.log(showOffer.next().value);
console.log(showOffer.next().value);
console.log(showOffer.next().value);
console.log(showOffer.next().value);



// // Task 9: Hospital Patient Check

let patientName = prompt("Enter Your Name");
let age = prompt("Enter Your Age");
let weight = prompt("Enter Your Weight");

console.log("-----Hospital Patient Check-----");
if(age > 18){
    if(weight){
        console.log("Eligible For Treatment");
    }
}else{
    console.log("Not Eligible For Treatment");
}