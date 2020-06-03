import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title,calrories,image,ingredients})=>{
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredients =>(
                    <li>{ingredients.text}</li>
                ))}
            </ol>
            <p>{calrories}</p>
            <img className={style.image} src={image} />
        </div>
    )
}

export default Recipe;