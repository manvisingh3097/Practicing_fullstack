import React from "react";
import { useNavigate } from "react-router-dom";


const InvalidAccess = () =>{
    let navigate = useNavigate();
    function redirectLogin (){
        navigate("/login",true);
    }
    return(
        <div>
        <p> Invalid credentials, please verify your creds. </p>

        <form>
            <button onClick={redirectLogin}> Login in Back  </button>
        </form>
    
    </div>
    )
    //  (<p></p>)
}

export default InvalidAccess;