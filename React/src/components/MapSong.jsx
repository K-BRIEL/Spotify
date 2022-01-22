import '../App.css';
import React  from 'react';
import CardSong from './CardSong';
import Tools from './Tools';

const MapSong=(props)=>{

  const listSong= props.list;
  const text= props.text;

  

    return(

      <>
      <div >
        <h3>{text}</h3>
      </div >
      <div className="container5"> 
          {listSong.map(element=>(
             <div >
               <CardSong width="" text={element.name}   image={Tools.idImage(element.url)} element={element} maxlength='10px' /> 
             </div>
          ))}
      </div>
    </>
    );

}

export default MapSong;