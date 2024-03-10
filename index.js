document.querySelector("#submit").addEventListener("click", submitForm);

function submitForm() {
    // e.preventDefault();
    var name = document.querySelector("#name").value;
    var email = document.querySelector("#mail").value;
    var message = document.querySelector(".input-message").value;
    sendEmail(name, email, message);
}



function sendEmail(name, email, message) {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "gpvisshuyadav@gmail.com",
        Password: "Yadav@123",
        To: 'gpvisshuyadav@gmail.com',
        From: "gpvisshuyadav@gmail.com",
        Subject: `${name} sent you a message`,
        Body: `Name: ${name} <br/> Email: ${email} <br/> Message: ${message}`
    }).then(
        message => alert("Your message has been sent successfully.")
    );
}