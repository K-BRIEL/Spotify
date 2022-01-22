import '../App.css';
import React, { useState} from 'react';
import Axios from './Axios'
import {useHistory} from "react-router-dom";

const Login=()=> {
  const history = useHistory();
  const [error, setError] = useState("");
  const [errorBool, setErrorBool] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 

  
  const updateEmail = (event)=> {
    setEmail(event.target.value)
  };
  
  const updatePassword = (event)=>{
      setPassword(event.target.value);
  } 




   const btn_i_forget=()=>{
  if (email ==""){ 
     
      setError("Ingrese un correo válido")
  }else{
       alert("Te enviamos un email para restaurar tu contraseña")
     }
      }

const buttonClose=()=>{
    setTimeout(()=>{setError("")},250);
    setErrorBool(false);
}

 const btn_login=()=> {
      

        if((email!="" || password!="")||(email!="" && password!="")){
      
       Axios.Loginer(email,password)
       
       
       
            .then(function (response) {
                localStorage.setItem("token",response.headers.authorization);
                localStorage.setItem("userId",response.data.id);
                
               
                if(response.data != undefined){
                   
                   history.push('/home'); 

                }
               
                
            } )
          
           .catch((error)=> { 
               setError("email o password inválido")
               setErrorBool(true);
            
            });           
        }else{
             setError("email o password inválido");
             setErrorBool(true);
            
        }
  



}
   
      return (
     
        <div className="loginColorFondo">
        <div className="colLoginI">
           
        <img src="" className="fab fa-spotify color-spotify logo-home"/>
            <h1>Welcome to Spotify</h1>
        </div> 
        
        <div className="colLoginII">       
        <p>To continue, login to Spotify</p>
            <form>
                <br/>
                
                <div className="form-group">
                    <div>
                 {errorBool &&  <div className="red">{error} <button className="button-error"  onClick={buttonClose}>x</button></div>}
                    

                    </div>
                   
                  
                    <div>
                        <label>Email </label>
                    </div>
                    
                <input className="input-width"  type="text" name="email"  value={email} onChange={updateEmail} required/>
                </div>
                <div className="form-group">
                    <div>
                        <label>Password </label>
                    </div>
                <input  className="input-width"  type="password" name="pass" value={password} onChange={updatePassword} required/>
                    <div color="white">
                        <p className="forgotpass" type="button" onClick={btn_i_forget}>I forgot my password</p>
                    </div>
                    <div className="custom-control custom-checkbox">
                        <link type="checkbox" className="custom-control-input" id="customCheck1" />
                    </div>
                    <button className="button-blue" type="button" onClick={btn_login}>Login</button> 
                 </div>   
            </form>
            <div className="formA">
                 <a  className="button-blue" type="button" href="/register">Register</a> 
            </div>
        </div>
    </div>
      
      );

}  
export default Login;