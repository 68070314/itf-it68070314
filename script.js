function updateBalances() {
    const acc = document.getElementById('accBal').value;
    const cash = document.getElementById('cashBal').value;
    logAction(`Balances updated → Account: ${acc}, Cash: ${cash}`);
}

function processOperation() {
    const type = document.getElementById('operation').value;
    const amount = parseFloat(document.getElementById('amount').value);
    let acc = parseFloat(document.getElementById('accBal').value);
    let cash = parseFloat(document.getElementById('cashBal').value);

if (isNaN(amount) || amount <= 0) {
    alert("Enter a valid amount!");
    return;
}

if (type === "deposit") {
    if (cash < amount) {
        logAction(`Deposit ${amount} cancelled → Not enough cash`);
        return;
    }
    acc += amount;
    cash -= amount;
    logAction(`Deposited ${amount}`);
} 
else if (type === "withdraw") {
    if (acc < amount) {
        logAction(`Withdraw ${amount} cancelled → Not enough balance`);
        return;
    }
    acc -= amount;
    cash += amount;
    logAction(`Withdrew ${amount}`);
}

document.getElementById('accBal').value = acc;
document.getElementById('cashBal').value = cash;
}

function convertCurrency() {
    const input = parseFloat(document.getElementById('inputBal').value);
    const currency = document.getElementById('currency').value;
    let output = 0;
  const rate = 36; // Example: 1 USD = 36 THB

if (isNaN(input) || input <= 0) {
    alert("Enter a valid amount!");
    return;
}

if (currency === "USD") {
    output = input * rate;
} else {
    output = input / rate;
}

document.getElementById('outputBal').value = output.toFixed(2);
}

function logAction(msg) {
    const logBox = document.getElementById('log');
    logBox.value += (logBox.value ? "\n" : "") + msg;
    logBox.scrollTop = logBox.scrollHeight;
}
