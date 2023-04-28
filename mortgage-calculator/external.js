function calc() {
    var out = Number(document.getElementById("out"));
    var p = Number(document.getElementById("principal"));
    var r = Number(document.getElementById("intrate"));
    var t = Number(document.getElementById("numyears"));
    var m = Number(document.getElementById("monpay"));
    var n = 12;
    var b = p * (1 + r / n)**n*t - m * [(1 + r / n)**n*t ]
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