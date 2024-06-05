

function logIn(){
    let email = document.getElementById("email-login").value;
    let password = document.getElementById("password-login").value;

    console.log("Email: " + email + "\nPassword: " + password)

    let loginButton = document.getElementById("log-In");

    // For aesthetics of the button
    loginButton.addEventListener("mousedown", function (){
        loginButton.style.transform = "translateY(2px)";
    })

    loginButton.addEventListener("mouseup", function (){
        loginButton.style.transform = "translateY(0px)";
    })

    // To introduce variable and reset on valid login credentials proceeding non valid log in attempt
    let error = "";

    if (password && email){

        // go to employee management area
    }else{
        // To set the error message
        error = document.createElement("h2");
        error.style.color = "red";
        error.innerText = "Not Valid Account!!"

        console.log("Error else condition executed")

        let errorContainer = document.getElementById("error");
        errorContainer.appendChild(error);
    }


}

