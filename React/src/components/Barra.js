import '../App.css';
import React, { useEffect, useState} from 'react';
import Axios from './Axios';
import  {useHistory} from "react-router-dom";


export default function Barra(){
  const [search, setSearch]=useState('');
  const url= `/search?text=${search}`;
  const history = useHistory();
  const updateSearch = (event)=> {
    setSearch(event.target.value)
  };
  
  const[likes,setLikes]=useState([])
  const[countLikes,setCountLikes]=useState([])

  const datos=()=>{
    Axios.getUser()    
  .then(function (response) {
     
    setLikes(response.data.likes);
    setCountLikes(response.data.likes.length)
  }) }

useEffect(()=>{

    datos()

},[])

const enterPress=(e)=>{
  if(e.keyCode == 13){
    history.push(url);
 }
  
}



    return(
      <div className="conteiner">
        <div className="col-md-3 a">
            <img src="" className="fab fa-spotify button-home color-spotify"  onClick={() => history.push('/home')}/>
        </div>
        <div className="col-md-9 b" margin= "left" width="55%">
            <input placeholder="Buscar" className="form-control form-text"  type="text" size="" maxlength="28"  width="" height="" value={search} onChange={updateSearch} onKeyUp={enterPress} />
            <input aria-hidden="true" className="button-home" type="submit" onClick={()=>{history.push(url)}} href={url}/>
        
       
        </div>
      </div>  
               
     );

}
