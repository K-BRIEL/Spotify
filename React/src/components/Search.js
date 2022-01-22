import '../App.css';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import Axios from './Axios';
import MapPlaylist from './MapPlaylist';
import BarraMenor from './BarraMenor';
import MapUser from './MapUser';
import MapSong from './MapSong';
import  {useHistory} from "react-router-dom";

const Search=()=>{

    const location = useLocation();
    var urlParams = new URLSearchParams(location.search);
    const text= urlParams.get('text');
    console.log(text)

    const history = useHistory();
    const [users,setUsers]= useState([])
    const[data, setData]=useState({
         "users":[],
         "playLists":[],
         "songs":[]
    });

 ;


    const [state,setState]=useState(<h1>not found result</h1>);

    
    const obtenerDatosUser= ()=>{
        
        Axios.search(text)
       
        .then(function (response) { 

            setData(response.data);
             
             {response.data.users.length !=0 ? setState(<MapUser list={response.data.users} text ='My Search of Users'/>) : setState(<h1>Empty user list</h1>)};
        })
        }

    const obtenerDatosPlaylist= ()=>{
        
        Axios.search(text)
       
        .then(function (response) {
        
            setData(response.data);
           {data.playLists.length !=0 ? setState(<MapPlaylist list={data.playLists}  text='My Search of Playlist'/>) : setState(<h1>Empty playLists list</h1>)};
            }) 
        
        }
    const obtenerDatosSong= ()=>{
        
        Axios.search(text)
           
        .then(function (response) {
              
            setData(response.data);
           {data.songs.length !=0 ? setState(<MapSong list={data.songs} text ='My Search of Songs'/>): setState(<h1>Empty songs list</h1>)};
                
              
            }) 
            
        }    

    

    const obtenerDatos= ()=>{
        
       
            obtenerDatosUser(); 
            
        }

 useEffect(()=>{
                
   obtenerDatos()
               
                
    },[])   



return(
    <div className="conteiner5">
        <BarraMenor/>
        
        <nav>
            <div className="left"  role="tablist">
                <button className="button-blue xxl" onClick={obtenerDatosUser} id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-user" aria-selected="true">Users</button>
                <button className="button-blue xxl" onClick={obtenerDatosPlaylist}  id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-playlist" aria-selected="false">Playlists</button>
                <button className="button-blue xxl"  onClick={obtenerDatosSong} id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-song" aria-selected="false">Songs</button>
            </div>
        </nav>
        
         {state}

    </div>
    );
}

export default Search;