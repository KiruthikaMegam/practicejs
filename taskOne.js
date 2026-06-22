var empName = "Kiruthika S" ;
let empAge = 25 ;
const companyName = "Stackly" ;

console.log("Employee Name = " + empName);
console.log("Employee Age = " + empAge);
console.log("Company Name = " + companyName);

alert("Welcome to Employee Portal");

let isCompleted = confirm("Have you completed today's task?");

console.log(isCompleted);

let name = prompt("Please Enter Your Name");
console.log(name);

document.writeln("Welcome " + name);

if (isCompleted == true) {
console.warn("Task submitted successfully");
}else
{
 console.error("Task submission failed");
}

empAge = 28 ;
console.log("After Promotion");
console.log("Employee Age = " + empAge);




