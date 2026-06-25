let employees = [];

function addEmployee() {
    let employee = {
        name: prompt("Enter Employee Name"),
        id: Number(prompt("Enter Employee ID")),
        age: Number(prompt("Enter Employee Age")),
        dept: prompt("Enter Department"),
        experience: prompt("Enter Experience"),
        salary: Number(prompt("Enter Salary"))
    };

    employees[employees.length] = employee;
    alert("Employee Added Successfully!");

}


function viewEmployees() {
if (employees.length === 0) {
    console.log("No Employees Found");
    return;
}

console.log("----- Employee Details -----");
for (let emp of employees) {
console.log(`
Employee Name : ${emp.name}
Age           : ${emp.age}
Employee Id   : ${emp.id}
Department    : ${emp.dept}
Experience    : ${emp.experience}
Salary        : ₹${emp.salary}
--------------------------
`);
}
}

function searchEmployeeById() {
    let searchId = Number(prompt("Enter Employee ID"));
    let found = false;

for (let emp of employees) {
    if (emp.id === searchId) {
console.log(`
-----Search Employee By Id-----
Employee Name : ${emp.name}
Age           : ${emp.age}
Employee Id   : ${emp.id}
Department    : ${emp.dept}
Experience    : ${emp.experience}
Salary        : ₹${emp.salary}
`);
    found = true;
}
}

if (!found) {
    console.log("Employee Not Found");
}
}

function calculateBonus() {

for (let emp of employees) {

let bonus;

if (emp.salary > 30000) {
bonus = emp.salary * 0.10;
} else {
bonus = emp.salary * 0.05;
}

console.log("-----Bonus Details-----");
console.log(`
Employee Name : ${emp.name}
Salary        : ₹${emp.salary}
Bonus         : ₹${bonus}
--------------------------
`);
}
}

function deleteEmployee() {

let deleteId = Number(prompt("Enter Employee ID to Delete"));
let found = false;

for (let i = 0; i < employees.length; i++) {

    if (employees[i].id === deleteId) {
     let deletedEmployee = employees[i];
     for (let j = i; j < employees.length - 1; j++) {
     employees[j] = employees[j + 1];
    }
    employees.length--;
    found = true;

console.log(`
-----Deleted Employee Details-----

Employee Name : ${deletedEmployee.name}
Age           : ${deletedEmployee.age}
Employee Id   : ${deletedEmployee.id}
Department    : ${deletedEmployee.dept}
Experience    : ${deletedEmployee.experience}
Salary        : ₹${deletedEmployee.salary}
--------------------------
`);

alert("Employee Deleted Successfully");
break;
}
}

    if (!found) {
     alert("Employee Not Found");
    }
}

function totalEmployeesCount() {
    console.log("-----Total Employees-----");
    console.log(`Total Employees : ${employees.length}`);
}

let choose;

function getChoice() {
    choose = prompt(`
===== Employee Management System =====

1. Add Employee
2. View Employees
3. Search Employee By ID
4. Calculate Bonus
5. Delete Employee
6. Total Employees Count
7. Exit

Enter Your Choice
`);
}

function select() {

    switch (choose) {

        case "1":
            addEmployee();
            break;

        case "2":
            viewEmployees();
            break;

        case "3":
            searchEmployeeById();
            break;

        case "4":
            calculateBonus();
            break;

        case "5":
            deleteEmployee();
            break;

        case "6":
            totalEmployeesCount();
            break;

        case "7":
            alert("Thank You!");
            break;

        default:
            alert("Invalid Choice");
    }
}

do {
    getChoice();
    select();
} while (choose !== "7");