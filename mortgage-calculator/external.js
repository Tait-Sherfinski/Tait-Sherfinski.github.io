function calc() {
    var out = document.getElementById("out");
    var p = document.getElementById("principal");
    var r = document.getElementById("intrate");
    var t = document.getElementById("numyears");
    var m = document.getElementById("monpay");
    var n = 12;
    var b = p * (1 + r / n)**n * t - m * [(1 + r / n)**n * t - 1] / (r / n);
    out.innerText = "Remaining Loan Balance: " + b;
}

function reset() {
    var out = document.getElementById("out");
    var p = document.getElementById("principal");
    var r = document.getElementById("intrate");
    var t = document.getElementById("numyears");
    var m = document.getElementById("monpay");
    p.value = "";
    r.value = "";
    t.value = "";
    m.value = "";
    out.innerText = "";
}