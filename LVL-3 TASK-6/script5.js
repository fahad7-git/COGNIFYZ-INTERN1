function validateForm() {
    
    document.getElementById("name-error").textContent = "";
    document.getElementById("email-error").textContent = "";
    document.getElementById("password-error").textContent = "";
    document.getElementById("terms-error").textContent = "";

    let isValid = true;

    
    const name = document.getElementById("name").value;
    if (name.trim() === "") {
        document.getElementById("name-error").textContent = "Full name is required.";
        isValid = false;
    }

    
    const email = document.getElementById("email").value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email.match(emailPattern)) {
        document.getElementById("email-error").textContent = "Please enter a valid email address.";
        isValid = false;
    }

    
    const password = document.getElementById("password").value;
    if (password.trim() === "") {
        document.getElementById("password-error").textContent = "Password is required.";
        isValid = false;
    }

    
    const termsAccepted = document.getElementById("terms").checked;
    if (!termsAccepted) {
        document.getElementById("terms-error").textContent = "You must agree to the terms and conditions.";
        isValid = false;
    }

    
    if (isValid) {
        console.log("User Details:");
        console.log("Full Name:", name);
        console.log("Email:", email);
        console.log("Password:", password); // Consider masking or omitting in production
        console.log("Terms Accepted:", termsAccepted);
    }

    return isValid;
}