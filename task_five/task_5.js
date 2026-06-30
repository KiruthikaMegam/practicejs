// 1. Employee Salary

function yearlySalary(monthlySal){
    return monthlySal * 12;
}

let monthlySal = 45000;
console.log("Yearly Salary : " + "$" +yearlySalary(monthlySal));

// 2. Student Pass or Fail

function studentResult(markScored){
    if(markScored == 35 || markScored >35){
        return "Pass";
    }else return "Fail";
}

let markScored = 72;
console.log("Result : " + studentResult(markScored));
;

// 3. Food Bill

function totalBill(burger,quantity){
    return burger * quantity;
}

let burger = 180;
let quantity = 3;
console.log(`-----Total Bill-----
Burger       : $${burger}
Quantity     : ${quantity}
Total Amount : $${totalBill(burger,quantity)}`);

// 4. Welcome Employee

function employee(name,dept){
console.log(`Welcome ${name}
Department : ${dept}`);
}

employee("Kiruthika", "Development");

// 5. Shopping Discount

function finalAmount(price,discount){
    return price - discount;
}

let price = 5000;
let discount = 500;

console.log(`-----Shopping Discount-----
Price        : $${price}
Discount     : $${discount}
Final Amount : $${finalAmount(price,discount)}`);

// 6. Company Login

function login(loading){
    console.log("Login Successful");
    loading();
}
function loading(){
    console.log("Loading Dashboard...");
}

login(loading);

// 7. Food Delivery

function orderReceived(next) {
    console.log("Order Received");
    next(outForDelivery);
}

function preparingFood(next) {
    console.log("Preparing Food");
    next(delivered);
}

function outForDelivery(next) {
    console.log("Out for Delivery");
    next();
}

function delivered() {
    console.log("Delivered");
}

orderReceived(preparingFood);

// 8. Lucky Draw

function* luckyDraw(){
    yield "Coupons";
    yield "10%";
    yield "20%";
    yield "50%";
    yield "Better Luck for Next Time";
}

let show = luckyDraw();
console.log(show.next().value);
console.log(show.next().value);
console.log(show.next().value);
console.log(show.next().value);
console.log(show.next().value);

// 9. Employee Bonus

function bonus(salary) {
    return function(bonusAmount) {
        console.log("Total Salary : " + "$" + (salary + bonusAmount));
    };
}

bonus(50000)(5000);

// 10. Merge Employee Details

let empPersonal ={
    name : "Kiruthika",
    age  : 26,
    contact : 1234567890
}

let empOffice = {
    empId : "stk123",
    dept : "Development",
    designation : "Web Developer"
}

let mergeEmpDetails = {...empPersonal,...empOffice};
console.log(mergeEmpDetails);

// 11. Shopping Cart

let cart1 = ["Rice","Wheat flour","Rava","Sugar","Salt"];
let cart2 = ["Washing Machine","Refrigerator","Television","Air Conditioner","Dining Table"];

let mergeCart = [...cart1,...cart2];
console.log(mergeCart);


// 12. Student Marks

function student(name,...marks){

let totalMarks = marks[0] + marks[1] + marks[2] + marks[3];
console.log(`
Student      : ${name}
Total Marks  : ${totalMarks}
Average      : ${totalMarks / marks.length}
`);
}
student("Kiruthika",90,85,88,95);

// 13. Product Details

let product = {
name  : "Laptop",
price : 65000,
brand : "Dell",
stock : 20
};

let {name:productName,price:productPrice} = product;
console.log(`-----Product Details-----
Name  : ${productName}
Price : $${productPrice}
`);

// 14. Customer Details

let customer = [143,"Kiruthika","Salem",1234567890];
let [id,name,city] = customer;
console.log(`-----Customer Details-----
ID   : ${id}
Name : ${name}
City : ${city}`);

// 15. Add Product

let cart3 = ["Mobile","Laptop"];
cart3.push("Headphone");
console.log(cart3);

// 16. Remove Last Product

let cart4 = ["Mobile","Laptop","Headphone"];
cart4.pop();
console.log(cart4);

// 17. Replace Employee

let replace = ["Rahul","Arun","John","Devid"];
replace.splice(2,1,"Naveen");
console.log(replace);

// 18. Search Product

let products = ["Mouse","Keyboard","Monitor","Laptop"];
let available = products.includes("Laptop");
console.log(available);

// 19. Employee Ranking

let salaries = [25000,45000,30000,70000];
console.log(salaries.sort());

// 20. Reverse Chat Messages

let messages = ["Hi","Hello","How are you?","Good Morning"];
console.log(messages.reverse());

// Employee Management System

let employees = [];

function addEmp() {
    
        let employee = {
            empName: prompt("Enter Employee Name"),
            empId: prompt("Enter Employee ID"),
            dept: prompt("Enter Department"),
            salary: prompt("Enter Salary"),
            experience: prompt("Enter Experience")
        };

        employees.push(employee);
        alert("Employee Added Successfully!");
}

function viewEmp() {

if (employees.length === 0) {
    console.log("No Employees Found");
    return;
}

for (let employee of employees) {

let { empName, empId, dept, salary, experience } = employee;

        console.log(`
Employee Name : ${empName}
Employee ID   : ${empId}
Department    : ${dept}
Salary        : $${salary}
Experience    : ${experience} Years
`);
    }
}

function empByID() {
    let searchId = prompt("Enter Employee ID");
    let found = false;

    for (let employee of employees) {
        let { empName, empId, dept, salary, experience } = employee;

        if (empId == searchId) {
            console.log(`
Employee Name : ${empName}
Employee ID   : ${empId}
Department    : ${dept}
Salary        : $${salary}
Experience    : ${experience} Years
`);
            found = true;
            break;
        }
    }

    if (!found) {
        console.log("Employee Not Found");
    }
}

function calculation(){
    for(let employee of employees){
        let { empName, empId, dept, salary, experience } = employee;
        if(salary >= 30000){
            let bonus = 5000;
            let totalSalary = salary + bonus;
console.log(`
Employee Name : ${empName}
Employee ID   : ${empId}
Bonus         : $${bonus}
Salary        : $${totalSalary}`);
           
        } else {
            let bonus = 2000;
            let totalSalary = salary + bonus;
console.log(`
Employee Name : ${empName}
Employee ID   : ${empId}
Bonus         : $${bonus}
Salary        : $${totalSalary}`);
           
        }
    } 
}

function removeId() {
    let removeId = prompt("Enter the Employee ID to Remove");
    let found = false;

    for (let i = 0; i < employees.length; i++) {
        if (employees[i].empId == removeId) {
            let deletedEmployee = employees[i];
            employees.splice(i, 1);

console.log(`---- Removed Employee ----
Employee Name : ${deletedEmployee.empName}
Id            : ${deletedEmployee.empId}
Department    : ${deletedEmployee.dept}
Salary        : $${deletedEmployee.salary}
Experience    : ${deletedEmployee.experience} Years
`);

            found = true;
            break;
        }
    }

    if (!found) {
        console.log("Employee Not Found");
    }
}

function sortBySalary() {
    employees.sort((a, b) => a.salary - b.salary);

    console.log("---- Employees Sorted by Salary ----");
    for (let employee of employees) {

    let { empName, empId, dept, salary, experience } = employee;
        console.log(`
Employee Name : ${empName}
Id            : ${empId}
Department    : ${dept}
Salary        : $${salary}
Experience    : ${experience} Years
`);
    }
}

function empByName() {
    let searchName = prompt("Enter Employee Name");
    let found = false;

    for (let employee of employees) {
        let { empName, empId, dept, salary, experience } = employee;

        if (empName === searchName) {
            console.log(`
Employee Name : ${empName}
Employee ID   : ${empId}
Department    : ${dept}
Salary        : $${salary}
Experience    : ${experience} Years
`);
            found = true;
            break;
        }
    }

    if (!found) {
        console.log("Employee Not Found");
    }
}

let choice;

function getChoice() {
    choice = prompt(`
===== Employee Management System =====

1. Add Employee
2. View Employees
3. Search Employee By ID
4. Calculate Bonus
5. Remove Employee
6. Sort Employee By ID
7. Find Employee By Name
8. Exit

Enter Your Choice
`);
}

function select() {

    switch (choice) {

        case "1":
            addEmp();
            break;

        case "2":
            viewEmp();
            break;

        case "3":
            empByID();
            break;

        case "4":
            calculation();
            break;

        case "5":
            removeId();
            break;

        case "6":
            sortBySalary();
            break;

        case "7":
            empByName();
            break;

        case "8":
            alert("Thank You!");
            break;

        default:
            alert("Invalid Choice");
    }
}

do {
    getChoice();
    select();
} while (choice !== "8");




