import '../App.css';
import React from 'react';
import {useHistory} from "react-router-dom";

const Card=(props)=>{

    
    const history = useHistory();
    const text= props.text;
    const image= props.image;
    const url= props.url;
    const id = props.id;

  const clickHandler=()=>{
    history.push(url+id); 
  }

    return(

      <div className="conteiner-card">
        <div>
          <img src={image} className="cont" width="100%" onClick={clickHandler} className="imgP"/>
        </div>
        <div>
          <h3 width="20%">{text}</h3>
        </div>
      </div> 
   );

}

export default Card;