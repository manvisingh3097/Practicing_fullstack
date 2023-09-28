import React, { useState } from "react";
import logindetails from "../logindetails.json"
import {useLocation, useNavigate} from "react-router-dom"; 


function LoginForm({updateState}) {
    let location = useLocation();
    console.log(location.pathname);
    let navigate = useNavigate();
    

  const [formData, setFormData] = useState({
    email : "",
    password : " "
  });
  
const {email , password}= formData ;

  function handleSubmit  (event) {
    //preventing default behaviour of event.
    event.preventDefault();
    // handle the login submission here
    // console.log(event.target[0].value);
    // console.log(event.target[1].value);
    console.log("checking");
    if(logindetails.email===email && logindetails.password===password){
        // updateState(true);
      navigate("/ToDolist",true);
      }
    
    else {
      navigate("/InvalidAccess",true);
    }

  };

  function handleChange(event) {
    event.preventDefault();
    const {name , value} = event.target;  
    setFormData({ ...formData, [name]:value});
    
  };



  return (
    <div> 
    <form onSubmit={handleSubmit} className = "login-form">
        <h3> login </h3>
        <div>
      <label>
        Email:
      </label>
      <input type="text" name = "email" id="emailid" value={email} onChange ={handleChange}  />
      </div>
      <div>
      <label>
        Password:
        <input type="password" name="password" id="password" value={password} onChange ={handleChange} />
      </label>
      </div>
      <button type="submit">Submit</button>
    </form>
    </div>
  );
}

export default LoginForm;
