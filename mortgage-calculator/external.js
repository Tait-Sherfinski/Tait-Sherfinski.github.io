function calc() {
    var out = document.getElementById("out");
    var p = document.getElementById("principal").value;
    var r = document.getElementById("intrate").value;
    var t = document.getElementById("numyears").value;
    var m = document.getElementById("monpay").value;
    var n = 12;
    var b = Number(p * (1 + r / n)**n * t) - Number((m * [(1 + r / n)**n * t - 1]) / (r / n));
    out.innerText = "Remaining Loan Balance: " + b.toFixed(2);
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