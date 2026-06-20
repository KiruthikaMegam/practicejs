let atm = {
    bank: "IDFC Bank",
    balance: 100000,
    pin: "1234"
};

let options = ["Withdraw", "Check Balance"];

let choice;
let amount;

alert(`Welcome To ${atm.bank} ATM`);

confirm("Please Insert Your Card");

let userPin = prompt("Enter Your PIN");

userPin === atm.pin ? (
alert("Login Successful"),

choice = prompt(`Choose Option
1. ${options[0]}
2. ${options[1]}`),

choice === "1" ? (
amount = prompt("Enter Withdrawal Amount"),
amount <= atm.balance ? ( atm.balance -= amount,

 console.log(`========================
      ATM RECEIPT
========================
Bank         : ${atm.bank}
Transaction  : ${options[0]}
Amount       : Rs.${amount}
Balance      : Rs.${atm.balance}
Status       : Success
========================
        Thank You
========================`)): 
 console.log("Insufficient Balance")) : 

 choice === "2" ? 
console.log(`========================
      ATM RECEIPT
========================
Bank         : ${atm.bank}
Transaction  : ${options[1]}
Balance      : Rs.${atm.balance}
Status       : Success
========================
       Thank You
========================`): 
console.log("Invalid Option")
)
: (
    alert("Invalid PIN"),
    console.log("Invalid PIN")
);