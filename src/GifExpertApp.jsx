import React, { useState } from 'react';
import { AddCategory,GifGrid } from './components'; 

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['']);

    const onAddCategory = ( newCategory) => {
        //validacion para no repetir categorias
        if(categories.includes(newCategory)) return;
        setCategories([...categories, newCategory]);
    };
                                                 
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory 
                onNewCategory={(event) => onAddCategory(event)}
            />
            <br />

                {
                    categories.map( (category) => (
                        <GifGrid key={category} category={category} />
                    ))
                       
                }
            
        </>
    );
};