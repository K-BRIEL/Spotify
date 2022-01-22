import '../App.css';
import React, { useEffect, useState } from 'react';
import Axios from './Axios';
import {  useParams } from 'react-router';
import Tools from './Tools';
import CardSong from './CardSong';
import Barra from './Barra';


const Playlist =()=>{

    
    const id= useParams().id;
    const url=`/play/${id}`

    const[data,setData]=useState({songs :[{url:''}]});
    const[nrolike,setNroLike]=useState(0);
    const[userLikedIt,setColor]=useState(false);
    const[colorLike, setColorlike]=useState("far fa-heart color-spotify like");
    
    const iHaveLike=(data)=>{
      
        if(data.likes.some(element => element.id == localStorage.userId)){
          setColor(true)
          setColorlike('fas fa-heart color-spotify like')
        }else{
          setColor(false)
          setColorlike('far fa-heart color-spotify like')
        } 
      }
   
    const obtenerDatos=()=>{
      
        Axios.getPlaylist(id)  
                                                                                                                                                                                                                         
        .then(function (response) {
        setData(response.data);
        iHaveLike(response.data)
        setNroLike(response.data.cantLikes)
          
      }) 
        .catch((error)=>{console.log('error al cargar')});
       
    }

    const fnLike=()=>{
        setColor(!userLikedIt)
        if(userLikedIt){
            setNroLike(nrolike-1)
            setColorlike('far fa-heart color-spotify like')
        }else{
            setNroLike(nrolike+1)
            setColorlike('fas fa-heart color-spotify like')
       }
         
      }

    const likePlayList=()=>{
        Axios.getLikesofPlayList(id)
             .catch(error => console.log(error))
              fnLike()
    }

    useEffect(()=>{
          obtenerDatos();
       
    },[])

 
     

    return(

        <div> 
            <Barra/>
            <div> 
                <div>
                    <h1>PlayList : {data.name} </h1> 
                </div>
                <img width='30%' src={Tools.idImage(data.songs[0].url) } />
                <h2> <a href={url} className="button-blue">PLAY</a> LIKES <i className={colorLike} onClick={likePlayList}></i> {nrolike}</h2>
                <form>
                    <h2>Songs</h2>
                    <div className="col-md-8 container5">
                        {data.songs.map(element=>(
                            <div width=''>
                                <CardSong text={element.name}  url='/play/'  id={element.id} image={Tools.idImage(element.url)} element={element}  /> 
                            </div>
                        ))}
                    </div>
                </form>
            </div>
    
        </div>
   );
}

export default  Playlist;