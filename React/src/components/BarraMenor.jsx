import '../App.css';
import React from 'react';
import  {useHistory} from "react-router-dom";


export default function BarraMenor(){
 
  const history = useHistory();
 
  return(
    <div className="conteiner">
        <div className="col-md-3 a">
            <img src="" className="fab fa-spotify button-home color-spotify" onClick={() => history.push('/home')}/>
        </div>
    </div>      
  );

}
