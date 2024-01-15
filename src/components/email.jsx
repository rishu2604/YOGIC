import emailjs from "@emailjs/browser";


export default function sendMail() {
    let fullName = document.getElementById("name").value;
    let userEmail = document.getElementById("email").value;
    let userMessage = document.getElementById("message").value;

    var contactParams = {
        from_name: fullName,
        from_email: userEmail,
        message: userMessage,
    };

    emailjs.send("service_6z35erg", "template_w78vywk", contactParams).then(function (res) {
        console.log("SUCCESS!", res.status);
        
    });
}