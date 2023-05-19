const feedbackText = document.querySelector(".feedback");
const username = document.querySelector("#name");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");

function sendContactRequest(){
    const text = document.createElement("p");
    text.style.color ="red";

    if(username.value.length < 6){
        text.innerHTML += "Name must be longer than 5 characters. "
    }
    if(!email.value.includes("@")  || !email.value.includes(".")){
        text.innerHTML += "Not valid E-mail format. "
    }
    if(subject.value.length < 16){
        text.innerHTML += "Subject must be longer than 15 characters. "
    }
    if(message.value.length < 26){
        text.innerHTML += "Message must be longer than 25 characters. "
    }
    
    if(username.value.length > 5 && email.value.includes("@") && email.value.includes(".") && subject.value.length > 15 && message.value.length > 25){
        text.style.color ="#DDE4D1";
        text.innerHTML = "Thank you! Your contact request was sent successfully. I will get back to you soon. "
        username.value = "";
        email.value = "";
        subject.value = "";
        message.value = "Your Message";
    }

    feedbackText.innerHTML = text.outerHTML;  
}