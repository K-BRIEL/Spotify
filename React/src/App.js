
import './App.css';
import Login from './components/Login';
import Register from './components/Register'
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import Search from './components/Search';
import User from './components/User';
import Playlist from './components/Playlist';
import Player from './components/Play';

const goToLogin=()=><Redirect to="/" />

const Redirection=(Param)=>{
  return localStorage.getItem('token')!= null? Param: goToLogin;
  } 


const App=()=>{

  return (
    <div className="App">
      <BrowserRouter>      
         <Switch> 
         <Route exact path="/" component= {Login}/>
           <Route path="/register" component={Register} />
           <Route path="/home" component={Redirection(Home)} />
           <Route path='/search' component={Redirection(Search)}/>
           <Route path='/user/:id' component={Redirection(User)}/>
           <Route path='/playlist/:id' component ={Redirection(Playlist)}/>   
           <Route path='/play/:id' component={Redirection(Player)}/>
           <Route path ="*" render = {() => <h1> NOT FOUND </h1>}/>
         </Switch>  
   </BrowserRouter>
    
    </div>
  );
}

export default App;
