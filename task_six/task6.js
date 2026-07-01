// Task 1 - Find the Highest Salary

let employees = [
    {
        name: "Naveen",
        id: 101,
        salary: 30000
    },
    {
        name: "John",
        id: 102,
        salary: 60000
    },
    {
        name: "Arun",
        id: 103,
        salary: 45000
    }
];

let highestSalary = employees[0];

employees.forEach((emp)=>{
    if (emp.salary > highestSalary.salary) {
    highestSalary = emp;
  }
  })  

console.log(`Highest Salary : ${highestSalary.salary}
Employee Name  : ${highestSalary.name}`);

// Task 2 - Find Employee by ID

let searchId = 103;

let found = employees.find((emp)=>{
    return searchId == emp.id
})

if(found){
console.log(`Employee Found
Name    : ${found.name}
Salary  : ${found.salary}
`);
}else console.log("Employee Not Found");

// Task 3 - Calculate Salary with Bonus

let bonus = 5000;

employees.forEach((emp)=>{
console.log(`${emp.name} : ${emp.salary + bonus}`);    
})

// Task 4 - Experience Check

let employee = [
{
    name:"Naveen",
    experience:2
},
{
    name:"John",
    experience:7
},
{
    name:"Arun",
    experience:5
}
];

employee.forEach((emp)=>{
    if(emp.experience >= 5){
        console.log(`${emp.name} - Senior Employee`);
    }else console.log(`${emp.name} - Junior Employee`);
})

// Task 5 - Display Only Employee Names

employees.forEach((emp)=>{
    console.log(emp.name);
})

// Task 6 - Display Employee IDs

employees.forEach((emp)=>{
    console.log(emp.id);
})

// Task 7 - Find Total Salary

let totalSal = employees.reduce((acc,emp)=>{
    return acc + emp.salary    
},0)

console.log(`Total Salary : ${totalSal}`);

// Task 8 - Employees Earning More Than ₹40,000

let moreThan = employees.filter((emp)=>{
    return emp.salary > 40000
})

console.log("More Than 40,000 Salary");
moreThan.forEach((emp)=>{
console.log(`${emp.name}`);
})

// Task 9 - Increase Salary

employees.forEach((emp)=>{
console.log(`${emp.name} : ${emp.salary + 5000}`);    
})

// Task 10 - Employee Report

employees.forEach((emp)=>{
console.log(`
Employee Name : ${emp.name}
Employee ID   : ${emp.id}
Salary        : ${emp.salary}`);
    
})

//>>>>>>>>>>>>>>>>Challenge Task>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

let empDetails = [
{
    name:"Naveen",
    id:101,
    salary:30000
},
{
    name:"John",
    id:102,
    salary:60000
},
{
    name:"Arun",
    id:103,
    salary:45000
}
];

let totalEmp = empDetails.reduce((acc,emp,i)=>{
     return acc + i
},0)
console.log(`Total Number Of Employees : ${totalEmp}`);

let highSalary = empDetails[0].salary;

empDetails.forEach((emp)=>{
    if (emp.salary > highSalary) {
    highSalary = emp.salary;
  }
  })  

console.log(`Highest Salary : ${highSalary}`);

let lowestSalary = empDetails[0].salary;

empDetails.forEach((emp)=>{
    if (emp.salary < lowestSalary) {
    lowestSalary = emp.salary;
  }
  })  

console.log(`Lowest Salary : ${lowestSalary}`);

let totalSalary = empDetails.reduce((acc,emp)=>{
    return acc + emp.salary    
},0)

console.log(`Total Salary : ${totalSalary}`);

let highestSalaryEmp = empDetails[0];

empDetails.forEach((emp)=>{
    if (emp.salary > highestSalaryEmp.salary) {
    highestSalaryEmp = emp;
  }
  })  

console.log(`Highest Salary Employee 
Employee Name  : ${highestSalaryEmp.name}
Id             : ${highestSalaryEmp.id}
Salary         : ${highestSalaryEmp.salary}
`);

let lowestSalaryEmp = empDetails[0];

empDetails.forEach((emp)=>{
    if (emp.salary < lowestSalaryEmp.salary) {
    lowestSalaryEmp = emp;
  }
  })  

console.log(`Lowest Salary Employee 
Employee Name  : ${lowestSalaryEmp.name}
Id             : ${lowestSalaryEmp.id}
Salary         : ${lowestSalaryEmp.salary}
`);

let moreThanSal = empDetails.filter((emp)=>{
    return emp.salary > 40000
})

console.log("More Than 40,000....");
moreThanSal.forEach((emp)=>{
console.log(`${emp.name}`);
})

let searchById = 102;

let foundById = empDetails.find((emp)=>{
    return searchById == emp.id
})

if(foundById){
console.log(`Employee Found
Name    : ${foundById.name}
Id      : ${foundById.id}
Salary  : ${foundById.salary}
`);
}else console.log("Employee Not Found");

empDetails.forEach((emp)=>{
console.log(`${emp.name} : ${emp.salary + 5000}`);    
})

empDetails.forEach((emp)=>{
console.log(`
Employee Name : ${emp.name}
Employee ID   : ${emp.id}
Salary        : ${emp.salary}`);
    
})



