import '../App.css';
import React, { useEffect, useState } from 'react';
import Axios from './Axios';
import MapPlaylist from './MapPlaylist';
import MapLikes from './MapLikes';
import { useParams } from 'react-router';
import Barra from './Barra';


const User =()=>{

    
    const id= useParams().id;
 
    
    const[data,setData]=useState({});
    const [likes,setLikes]= useState([])
    const [list,setList]=useState([]);

    const seteo=(data)=>{
        setData(data);
        setLikes(data.likes);
       setList(data.myPlaylist)
           
    }
 

    const obtenerDatos=()=>{
       Axios.getUserId(id)                                                                                                                                                                                                                    
        .then(function (response) {
          seteo(response.data);
        console.log(response.data)
      }) 
        .catch((error)=>{console.log('error al cargar')});
       
    }

    useEffect(()=>{
        obtenerDatos();
        
        },[])

    
    return( 
            <>
        <div className="container"> 
            <Barra/>
            <form className="row">
                <div className="col-md-12">
                    <h1>User Name : {data.displayName}</h1>
                    <img src={data.image} width='20%'/>
                </div>    
                
                <div className="col-md-3 container5"> 
        
                    { list.length!=0?<MapPlaylist list={list} text='My Playlist' /> : <h2>My Playlists<br/>No Data Found</h2>}
                </div> 
                <div> 
                    { likes.length!=0? <MapLikes list={likes} text='My Likes'  />:<h1>My Likes<br/>No Data Found</h1>}
                </div>      
            </form>
    </div>
  
</>
    );
}

export default  User;