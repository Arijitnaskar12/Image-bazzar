import React, { useEffect, useState } from "react";
import axios from "axios";

const SearchBar=({setInfo})=>{

    let[search,setSearch]=useState("");
    useEffect(()=>{
        getImages();
    },[])
async function getImages(){
    try{
    let request=await axios.get("https://api.unsplash.com/search/photos",{
        params:{
            query:search || "nature",
        },
    headers:{
        Authorization:`Client-ID ${process.env.REACT_APP_CLIENT_ID}`
    }
})
// console.log(request.data.results);
setInfo(request.data.results); 
}
catch(error)
{
 console.log(error);
}
}
    return(

        <div>

            
            <input type="text" placeholder="Search...."
             onChange={(e)=>setSearch(e.target.value)}/>
            <button onClick={getImages}>Search</button>
        </div>
    )
}
export default SearchBar;