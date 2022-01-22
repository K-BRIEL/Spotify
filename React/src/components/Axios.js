import axios from 'axios';


const url ='http://localhost:7000/';

const Loginer = async( myEmail, myPassword) => {return  axios.post(url+'login',{
               
    email:myEmail,
    password:myPassword
 
})};

const register= async(myName, myEmail, myPassword, myImage) => {return axios.post(url+'register',{
     
    name: myName,
    email:myEmail,
    password:myPassword,
    image: myImage
 
})};

const getUser = async()=>{
    return axios.get(url+'user',{headers:{ authorization:localStorage.token}})
};

const getUserId = async(id)=>{
    return axios.get(url+`user/${id}`,{headers:{ authorization:localStorage.token}})
};

const getLikesofPlayList= async(playlistId)=>{
    return axios.put(url+`playlist/${playlistId}`,{},{headers:{ authorization:localStorage.token}})
}
const getPlaylist=async(playlistId)=>{
    return  axios.get(url+`playlist/${playlistId}`,{headers:{ authorization:localStorage.token}})
}
const search = async(text)=>{
    return axios.get(url+`search?text=${text}`,{headers:{ authorization:localStorage.token}})
};


export default {Loginer, register, getUser, getUserId, getLikesofPlayList, getPlaylist, search };