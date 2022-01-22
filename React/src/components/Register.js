import '../App.css';
import React, { useState} from 'react';
import Axios from './Axios'
import { useHistory} from "react-router-dom";


const Register=()=> {
  const history = useHistory();
  const [error, setError] = useState("");
  const [errorBool, setErrorBool] = useState(false);


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 
  const [name, setName] = useState("");
  const [image, setImage] = useState(""); 
  

  
  const updateName = (event)=> {
    setName(event.target.value)
    };
    
    const updateImage = (event)=>{
        setImage(event.target.value);
        
    } 
  
  const updateEmail = (event)=> {
  setEmail(event.target.value)
  };
  
  const updatePassword = (event)=>{
      setPassword(event.target.value);
      
  } 
     

     const btn_register =()=> {
    

      if(email!="" && password!="" && image!="" && name!=""){
  
        Axios.register(name,email,password,image)
            .then( (response) =>{
                
                try{
                    
                        localStorage.setItem("token",response.headers.authorization);
                        localStorage.setItem("userId",response.data.id);
                        history.push('/home') 
                    
                }catch (error) {
                    
                    history.push('/');  
                reload()
                }
       } )
        
         .catch((error)=>{
             setError('The Email Already Exists')
             setErrorBool(true);
        });           
      }else{
        setError('Fill In all The Spaces Correctly')
        setErrorBool(true);
          
      }

}

const buttonClose=()=>{
    setTimeout(()=>{setError("")},250);
    setErrorBool(false);
}

   const reload=()=>{
    setEmail("");
    setPassword(""); 
    setName("");
    setImage("");
   }
   
      return (
     
     
        <div className="loginColorFondo">
                <div className="colLoginI">
                    
                <img src="" className="fab fa-spotify color-spotify logo-home"/>
                    <h1 className="textoddd">Welcome to Spotify</h1>
                </div> 
            
          <div className= "colLoginII" >
              <p>Sign up for free to listen</p>
              <form>
              {errorBool &&  <div className="red">{error}<button className='button-error' onClick={buttonClose}>x</button></div>}
                <br/>
                   <div className="form-group">
                     <div>
                        <label>Name </label>
                      </div>
                      <input className="forgot-password center"  type="text" name="name"  value={name} onChange={updateName} required/>
                     </div>
                     <div className="form-group">
                        <div>
                            <label>Email </label>
                        </div>
                        <input className="forgot-password center"  type="text" name="email"  value={email} onChange={updateEmail} required/>
                    </div>
                    <div className="form-group">
                        <div>
                            <label>Image </label>
                        </div>
                        <input className="forgot-password center"  type="text" name="image"  value={image} onChange={updateImage} required/>
                    </div>
                <div className="form-group">
                     <div>
                        <label>Password </label>
                     </div>
                     <input  className="forgot-password center"  type="password" name="pass" value={password} onChange={updatePassword} required/>
                </div>
                <div className="custom-control custom-checkbox">
                    <link type="checkbox" className="custom-control-input" id="customCheck1" />
                </div>
                
                <div className="formA">
                    <button type="button" className="button-blue" onClick={btn_register}>Register</button>
                </div> 
                    <a type="button" className="button-blue" href="/">Go to Login</a> 
        </form>
                </div >
            </div >
       
        
      );
}
export default Register;