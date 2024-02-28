const sendButton = document.querySelector(".submit");

sendButton.addEventListener("click", sendData);

function sendData() {
    alert("Hij werkt");
    const firstname = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#user_message").value;
    console.log((firstname, email, message));

    fetch(`http://localhost:3000/message?name=${firstname}&email=${email}&message=${message}`);
}