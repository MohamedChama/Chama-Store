



function handleValueChange() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var msg = document.getElementById('msg').value;

    if (name == '') {
        alert("Enter your name please")
    }
    else if (email == '') {
        alert("Enter your email please")
    }
    else if (msg == '') {
        alert("Enter your message please")
    }
    else {
        alert("thank you " + name + " for you message")
    }


}
