const users = [ 
    { username:"abc",password:"aba123"},
    { username:"xyz",password:"xyz@123"}
];

function valid(){
    const usernameIntput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;

    const isvalid = users.some(user =>
        user.username === usernameIntput && user.password === passwordInput
    );
    if(isvalid){
        window.location.href="start.html"
    }
    else{
        alert("invalid");
    }
}

document.querySelector(".Login").addEventListener("click", function(event){
    event.preventDefault(); 
    valid();
}

);
