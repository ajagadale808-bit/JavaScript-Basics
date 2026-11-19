let form = 
document.getElementById("studentForm");

form.addEventListener("submit",function(event) {

    event.preventDefault();

    let name = document.getElementById("studentName").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
    let course = document.getElementById("course").value;

//Empty field validation 
    if (name === "" || email === "" || mobile === "" || 
        course === "") 
        {
        alert("Please fill all fields!");
        return;
    }

//Email validation
let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address!");
        return;
    }

//Mobile number validation
    let mobilePattern = /^[0-9]{10}$/;
    if (!mobilePattern.test(mobile)) {
        alert("Please enter a valid 10-digit mobile number!");
        return;
    }

document.getElementById("successModal").style.display = "flex";

//Successful registration
        alert("Registration Successful!");
});

let closeButton = document.getElementById("closeModal");
closeButton.addEventListener("click", function() {
    document.getElementById("successModal").style.display = "none";
    form.reset();
});