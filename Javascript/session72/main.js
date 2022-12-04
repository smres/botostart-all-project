const usernameInput =  document.querySelector(".user-input");
const passwordInput = document.querySelector(".pass-input");
const usenameMsg = document.querySelector(".username-msg");
const passwordMsg = document.querySelector(".password-msg");
const signinMsg = document.querySelector(".signin-status");
const signinButton = document.querySelector('.signin-button');

signinButton.addEventListener("click", signIn);

function signIn(event){
    event.preventDefault();
    usenameMsg.innerText = "";
    passwordMsg.innerText = "";
    const usernameValue = usernameInput.value;
    const passwordValue = passwordInput.value;
    let ifSendData = true;

    if (usernameValue.length === 0 || usernameValue.indexOf('@') === -1 || usernameValue.indexOf('.') === -1) {
        usenameMsg.innerText = "Please enter a valid Email";
        ifSendData = false;
    }

    if (passwordValue.length === 0) {
        passwordMsg.innerText = "Please enter your password";
        ifSendData = false;
    } else if(passwordValue.length <= 4) {
        passwordMsg.innerText = "Your password is too short";
        ifSendData = false;
    } 

    if (ifSendData) {
        const body = JSON.stringify({
            userName: usernameValue,
            password: passwordValue
        })
        const headers = {
            "Content-Type": "application/json"
        }
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "POST",
            body: body,
            headers: headers
        })
        .then(response =>{
            console.log(response);
            if (response.ok) {
                signinMsg.innerText = "You signed in successfully";
            }
            return response.json();
        })
        .then(json => {
            console.log(json);
        })
    }
}