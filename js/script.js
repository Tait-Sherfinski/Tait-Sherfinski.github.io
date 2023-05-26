function reset() {
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var subject = document.getElementById("subj");
    var reason = document.getElementById("reas");
    var message = document.getElementById("mess");

    name.innerText = "";
    email.innerText = "";
    subject.innerText = "";
    reason.innerText = "";
    message.innerText = "";
}