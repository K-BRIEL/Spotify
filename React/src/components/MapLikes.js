import '../App.css';
import React from 'react';
import PlaylistCard from './PlaylistCard';

const MapLikes=(props)=>{

  const lista= props.list;
   
    const text= props.text;

  const clickHandler=()=>{
    
  }

    return(

       <>

        <div >
            <h2>{text}</h2>
        </div >
        <div className="container5"> 
            {lista.map(elemento=>(
              <div onClick={clickHandler}>
                <PlaylistCard text={elemento.name}  id={elemento.id} url='/playlist/' image={elemento.songs[0]} list={elemento.songs} /> 
              </div>
            ))}
        </div>
      </>
    );

}

export default MapLikes;