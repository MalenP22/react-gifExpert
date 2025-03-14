import { useEffect, useState } from "react";
import { getGif } from "../helpers/getGifs";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({category}) => {
    const{ images, isLoading} = useFetchGifs(category);
    console.log(images);


    return (
        <>
          <h3>{category}</h3>
          {
            isLoading && <h2>Loading...</h2> 
          }

          <div className="card-grid"> 
            {
              images.map((img) => (
                <GifItem 
                    key={img.id} 
                    {...img}
                 />      
              ))
            }
          </div>
        </>
    );
}  