let employeeDetails = "https://6a475f5fabfcbaade1184ddb.mockapi.io/employeeDetails/EmployeeDetails";

let responseData = [];

fetch(employeeDetails)
    .then((response) => response.json())
    .then((data) => {
        responseData = data;
        startProgram();
    })
    .catch((err) => console.log(err));

function viewEmployee() {
console.log("----- Employee Details -----");
responseData.forEach((emp) => {
console.log(`
Employee Name : ${emp.name}
Id            : ${emp.id}
Salary        : ${emp.salary}
Department    : ${emp.dept}
Experience    : ${emp.experience}
`);
    });
}

function searchById() {
let find = Number(prompt("Enter Employee ID to Find"));
let employee = responseData.find((emp)=> {
  return emp.id === find;
});

if (employee) {
console.log(`Employee Search By Id.....
Employee Name : ${employee.name}
Id            : ${employee.id}
Salary        : ${employee.salary}
Department    : ${employee.dept}
Experience    : ${employee.experience}
`);
    } else {
        console.log("Employee Not Found");
    }
}

function addBonus(){
console.log("After adding the bonus.....");
responseData.forEach((emp) => {
let totalSalary = emp.salary + emp.bonus;
console.log(`
Employee Name : ${emp.name}
Id            : ${emp.id}
Salary        : ${totalSalary}
Department    : ${emp.dept}
Experience    : ${emp.experience}
`);
});
}

function highestSal(){
let highestSalary = responseData[0].salary;
responseData.forEach((emp)=>{
if (emp.salary > highestSalary) {
highestSalary = emp.salary;
  }
  })  
console.log(`Highest Salary : ${highestSalary}`);
}

function lowestSal(){
let lowestSalary = responseData[0].salary;
responseData.forEach((emp)=>{
if (emp.salary < lowestSalary) {
lowestSalary = emp.salary;
  }
  }) 
console.log(`Lowest Salary : ${lowestSalary}`);
}

function totalSal(){
    let total = responseData.reduce((acc,emp)=>{
        return acc + emp.salary
    },0)
    console.log(`Total Salary : ${total}`);
}

function filterEmp() {
let details = responseData.filter((emp) => {
    return emp.salary > 40000;
});
console.log("----- Salary Above 40,000 -----");
details.forEach((emp) => {
console.log(`
Employee Name : ${emp.name}
Id            : ${emp.id}
Salary        : ${emp.salary}
Department    : ${emp.dept}
Experience    : ${emp.experience}
`);
});
}


function dateAndTime(){
let currentDateTime = new Date();
let date = `${currentDateTime.getDate()}-${currentDateTime.getMonth() + 1}-${currentDateTime.getFullYear()}`;
let time = `${currentDateTime.getHours()}:${currentDateTime.getMinutes()}:${currentDateTime.getSeconds()}`;

console.log(`
Current Date : ${date}
Current Time : ${time}
`);
}

function startProgram() {

    let choice;

    do {

        choice = prompt(`
===== Employee Management System =====

1. View Employees
2. Search Employee By ID
3. Calculate Bonus
4. Find Highest Salary
5. Find Lowest Salary
6. Calculate Total Salary
7. Filter Salary Above ₹40,000
8. Display Current Date & Time
9. Exit

Enter Your Choice
`);

        switch (choice) {

            case "1":
                viewEmployee();
                break;

            case "2":
                searchById();
                break;

            case "3":
                addBonus();
                break;

            case "4":
                highestSal();
                break;

            case "5":
                lowestSal();
                break;

            case "6":
                totalSal();
                break;

            case "7":
                filterEmp();
                break;

            case "8":
                dateAndTime();
                break;

            case "9":
                alert("Thank You!");
                break;

            default:
                alert("Invalid Choice");
        }

    } while (choice !== "9");

}

