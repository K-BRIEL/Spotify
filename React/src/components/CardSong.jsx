import '../App.css';
import React  from 'react';

const CardSong=(props)=>{

    const text= props.text;
    const image= props.image;
  


    return(

      <div className="conteiner-card">
        <div>
          <img src={image} width="100%" className=""/>
        </div>
        <div>
          <h3 width="20%">{text}</h3>
        </div>
      </div> 
   );

}

export default CardSong;