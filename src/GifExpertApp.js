import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

//Funcional Components

export const GifExpertApp = () => {

  
   const [categories, setCategories] = useState(['My hero academia']);

//    const handleAdd = () => {
//         setCategories( ['Boku no hero',...categories,'Naruto']);
//        }


    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = { setCategories}/>
            <hr />
    
            <ol>
                { 
                    categories.map( (category,i ) => (
                        <GifGrid 
                        key= {category}
                         category = { category } /> 
                    ))
                }
            </ol>
        </>

    );

}
