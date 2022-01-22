import '../App.css';
import React from 'react';
import Tools from './Tools';
import {useHistory} from "react-router-dom";

const PlaylistCard=(props)=>{

    const history = useHistory();
    const text =props.text;
    const songs= props.list.map(element=> Tools.cutId(element.url));
    const url= props.url;
    const id = props.id;


    const clickHandler=()=>{
        history.push(url+id); 
      }

    return(
        <div className="conteiner-card">
           <div>
               <img className="button-playList" onClick={clickHandler} src={`https://img.youtube.com/vi/${songs[0]}/0.jpg`} width="50%" />
               </div>
               <div>
                  <h3 className="textPlaylist">{text}</h3> 
           </div>
         
        </div>

    )
}

export default PlaylistCard;