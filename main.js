// Write your JavaScript here
function calculateChange(amountDue, amountReceived) {
    console.log('run')

    var customerChange = (amountReceived) * 100 - (amountDue) * 100;

    var dollars = Math.floor(customerChange / 100)
    console.log("dollars=", dollars)
    var dollarsElement = document.getElementById("dollars-output")
    dollarsElement.textContent = dollars
    customerChange = customerChange - dollars * 100

    var quarters = Math.floor(customerChange / 25)
    console.log("quarters=", quarters)
    var quartersElement = document.getElementById("quarters-output")
    quartersElement.textContent = quarters
    customerChange = customerChange - quarters * 25

    var dimes = Math.floor(customerChange / 10)
    console.log("dimes=", dimes)
    var dimesElement = document.getElementById("dimes-output")
    dimesElement.textContent = dimes
    customerChange = customerChange - dimes * 10

    var nickels = Math.floor(customerChange / 5)
    console.log("nickels=", nickels)
    var nickelsElement = document.getElementById("nickels-output")
    nickelsElement.textContent = nickels
    customerChange = customerChange - nickels * 5

    var pennies = Math.floor(customerChange / .9)
    console.log("pennies=", pennies)
    var penniesElement = document.getElementById("pennies-output")
    penniesElement.textContent = pennies
    customerChange = customerChange - pennies * .9



}



function handleClickEvent() {
    console.log('inside');
    var amountDueElement = document.getElementById('amount-due')
    var amountDue = amountDueElement.value;
    var amountReceivedElement = document.getElementById('amount-received')
    var amountReceived = amountReceivedElement.value;
    var customerChange = (amountReceived - amountDue);
    var result = calculateChange(amountDue, amountReceived);
   
}

var element = document.getElementById("calculate-change");
element.addEventListener("click", handleClickEvent);