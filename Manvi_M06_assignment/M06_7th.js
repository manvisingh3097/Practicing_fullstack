let username = window.prompt("enter a username");
let password = window.prompt("enter a password");
let attempts = 0;


for (let i = 4; i >=1; i--){

    if (username!=="manvi" && password!=="12345")
    {
        console.log(`Incorrect! Try again. ${i} attempts left`);
        username = window.prompt("enter a username");
        password = window.prompt("enter a password");
        attempts = attempts +1
        
    }

    else 
    {
        console.log("success");
    }}
if(attempts==4)
{
        console.log("No attempts left. We have to block your account");
    }




