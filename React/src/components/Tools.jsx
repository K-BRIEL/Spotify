
const cutId=(url)=>{

    const list =  url.split('=')
  
    return list[1]
  
  }

const idImage=(url)=>{
    const image= cutId(url)
    return `https://img.youtube.com/vi/${image}/0.jpg`;
}

const listaId=(urlList)=>{
    console.log(urlList)
    return urlList.map(element=>cutId(element));
}
  export default {cutId, idImage, listaId};


 