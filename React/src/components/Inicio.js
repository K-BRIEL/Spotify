import '../App.css';
import React, { useEffect, useState} from 'react';
import Axios from './Axios';
import MapLikes from './MapLikes';
import MapPlaylist from './MapPlaylist';

const Inicio=()=>{

  const[data,setData]=useState({});
  const [likes,setLikes]= useState([])
  const [list,setList]=useState([]);
  

  const obtenerDatos= ()=>{Axios.getUser()
        
    .then(function (response) {
      
      setList(response.data.myPlayList);
      setData(response.data);
  }) }

  const obtenerLikes=()=>{Axios.getUser()
        
        .then(function (response) {
        
          setLikes(response.data.likes)
            
  }) }

useEffect(()=>{
  
  obtenerDatos()
  obtenerLikes()

},[])

  return(
    <div className="conteiner-user">
      <div>
         <h1>User Name : {data.displayName }</h1>
      </div>
      <form className="form-search content-search navbar-form" action="" method="post">
        <div>
        {list.length !=0 ? <MapPlaylist list={list}  text='My  Playlists'/> : <h2>Empty My playLists</h2>}
        </div>
        <div>
          {likes.length!=0?<MapLikes list={likes} text='My Likes'/> : <h2>My Likes<br/>No Data Found</h2>}
        </div> 
      </form>
    </div>
        
  );
   
}
export default   Inicio;



