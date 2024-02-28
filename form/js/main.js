const sendButton = document.querySelector(".submit");

sendButton.addEventListener("click", sendData);

function sendData(){
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#user_message").value;
    console.log(name, email, message);
    fetch(`http://localhost:3010/message?name=${name}&email=${email}&message=${message}`)
    alert(123);
}