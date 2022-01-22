import '../App.css';
import React from 'react';
import Card from './Card';

const MapUser=(props)=>{

    const listUser= props.list;
    const text= props.text;

    return(
    <>
    <div >
        <h1>{text}</h1>
    </div >
    <div className="col-md-4 container5"> 
        {listUser.map(element=>(
          <div className="card-user">
            <Card width="" text={element.displayName} url='/user/' id={element.id} image={element.image} element={element} /> 
          </div>
        ))}
    </div>
    </>
    );

}

export default MapUser;