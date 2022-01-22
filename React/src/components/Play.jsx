import '../App.css';
import React, { useEffect, useState } from 'react';
import {Player }from 'react-yt-sound-player';
import Axios from './Axios';
import { useParams } from 'react-router';
import Tools from './Tools';
import Barra from './Barra';
import  {useHistory} from "react-router-dom";

const Play=(props)=>{

    const id= useParams().id;
    const [state,setState]=useState(<h1>not found result</h1>);
    const history = useHistory();


    const obtenerDatos=()=>{ 
        Axios.getPlaylist(id)
      
        .then(function (response) {

            {response.data.songs.length!=0? setState(<Player songs={Tools.listaId(response.data.songs.map(e=>e.url))} width='10%' className='z'/>):setState(<h1>not function</h1>) }
                     
            })
            .catch((error)=>console.log('error de carga')) 

    }

    useEffect(()=>{

       obtenerDatos();

    },[])        

    return(
    <>
            <div>
                <Barra/>
                </div>
                <div>
                    <div className='reproductor'>
                        {state}
                    </div> 
                <button className="button-blue" onClick={() => history.push('/home')} className="button-blue" >Home</button>
                <button className="button-blue" onClick={() => history.push(`/playlist/${id}`)} className="button-blue" >My Play List</button>
            </div>
    </>
    );
    
}

export default Play;