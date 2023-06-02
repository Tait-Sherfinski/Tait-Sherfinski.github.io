function reset() {
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var subject = document.getElementById("subj");
    var reason = document.getElementById("reas");
    var message = document.getElementById("mess");

    name.value = "";
    email.value = "";
    subject.value = "";
    reason.value = "";
    message.value = "";
}

function updateTime() {
    var date = new Date();
    var s = ("0" + date.getSeconds()).slice(-2);
    var m = ("0" + date.getMinutes()).slice(-2);
    var h = ("0" + date.getHours()).slice(-2);
    document.getElementById("clock").innerHTML = h + ":" + m + ":" + s; 
}
    setInterval(updateTime, 1000);