function calc() {
    var out = document.getElementById("out");
    var p = document.getElementById("principal");
    var r = document.getElementById("intrate");
    var t = document.getElementById("numyears");
    var m = document.getElementById("monpay");
    var n = 12;
    var b = 1 * p
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