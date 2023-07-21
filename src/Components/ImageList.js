import React from "react";

const ImageList=({images})=>{
    return(
        <div>
            {
                images&&
                images.map((value,index)=>(
                    <img  key={index}src={value.urls.small} alt={value.alt_description}/>
                )
                )
            }
        </div>

    )
}
export default ImageList;