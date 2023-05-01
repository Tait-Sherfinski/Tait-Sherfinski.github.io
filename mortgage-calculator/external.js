function calc() {
    var out = document.getElementById("out");
    var p = Number(document.getElementById("principal").value);
    var r = Number(document.getElementById("intrate").value);
    var t = Number(document.getElementById("numyears").value);
    var m = Number(document.getElementById("monpay").value);
    var n = 12;
    var b = (((r / n) + 1)**(n*t)) * p - ((((((r / n) + 1)**(n*t)) - 1) * m) / (r / n));
    out.innerText = "$" + b.toFixed(2);
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