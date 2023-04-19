function calc() {
    var out = document.getElementById("out");
    var principal = document.getElementById("principal");
    var intrate = document.getElementById("intrate");
    var numyears = document.getElementById("numyears");
    var monpay = document.getElementById("monpay");
    var balance = principal * 1 + intrate / 12**12*numyears - monpay * 1 + intrate / 12**12*numyears - 1 / intrate / 12;
    out.innerText = "Remaining Loan Balance: " + balance;
}

function reset() {
    var out = document.getElementById("out");
    var principal = document.getElementById("principal");
    var intrate = document.getElementById("intrate");
    var numyears = document.getElementById("numyears");
    var monpay = document.getElementById("monpay");
    principal.value = "";
    intrate.value = "";
    numyears.value = "";
    monpay.value = "";
    out.innerText = "";
}