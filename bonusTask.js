let balance = 100000;
let amount;

alert("Welcome To IDFC Bank ATM");

confirm("Pleae insert your card");
let pin = prompt("Enter Your PIN");

pin === "1234"
? (
    alert("Login Successful"),

    amount = prompt("Enter Withdrawal Amount"),

    amount <= balance
    ? (
        balance -= amount,

        console.log(`
========================
      ATM RECEIPT
========================
       IDFC Bank

Withdrawal : Rs.${amount}
Balance    : Rs.${balance}
Status     : Success
========================
        Thank You 
========================`)
    )
    : console.log("Insufficient Balance")
)
: 
alert("Invalid Pin");
console.log("Invalid PIN");




