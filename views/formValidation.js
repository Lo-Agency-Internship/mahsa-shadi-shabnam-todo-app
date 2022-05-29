

function formValidation() {
    const btn = document.querySelector('button');
    const username=document.getElementById('username').value;
    const password=document.getElementById('password').value;
    const password2=document.getElementById('password2').value;
    let say;
    

    
    if (username.length === 0) {
        say = "Please enter a valid email address";
        error_message.innerHTML = say;
       return false;
        
    }
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(username).toLowerCase())){
        say = "enter a vaild email";
        error_message.innerHTML = say;
       return false;

    }
    
    if (password.length == 0 || password.length < 5 ) {
        say = "Password must be at least 6 characters and must contain at least 1 capital letter"
        error_message.innerHTML = say;
       return false;
        
    }
    
    const  reg = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
    if (!reg.test(String(password).toLowerCase())){
        say = "Password must be at least 5 characters and must contain at least 1 capital letter"
        error_message.innerHTML = say;
       return false;
        
    }

    if (password !== password2) {
        say = "Password does not match";
        error_message.innerHTML = say;
       return false;
        
    }
    
    alert("Form sent successfully")
    
    return true;

}






