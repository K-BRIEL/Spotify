import '../App.css';
import React from 'react';
import Card from './Card';
import Tools from './Tools';


const MapPlaylist=(props)=>{

    const listPlaylist= props.list;
    const text= props.text;
    
   

    return(   
        <>
        <div>
           <h2>{text}</h2>
        </div>
        <div className="col-md-8 container5">
            {listPlaylist.map(element=>(
                <div>
                    <Card text={element.name}  id={element.id} url='/playlist/' image={Tools.idImage(element.songs[0].url)} element={element}/> 
                </div>
            ))}
         </div>
        </>
    );

}

export default MapPlaylist;