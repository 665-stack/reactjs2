import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import './MealDetails.css'

const MealDetails = () => {
    const { mealID } = useParams([]);
    const [meal, setMeal] = useState([]);
    const { strMeal, strInstructions, strMealThumb, strTags, strSource, strArea, strCategory, strYoutube } = meal;

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMeal(data.meals[0]));
    }, [])
    console.log('meal -- ', meal);


    return (
        <div className='MealDetails'>
            <img src={strMealThumb} alt="" />
            <h2 className='NameHeading'>Name: {strMeal}</h2>
            <h4 className='mealDetailHeading'>Tags: {strTags}</h4>
            <h4 className='mealDetailHeading'>Country: {strArea}</h4>
            <h4 className='mealDetailHeading'>Category: {strCategory}</h4>
            <p className='mb-9'>Instructions: {strInstructions}</p>
            <a className='sourceLink' href={strSource}>Source</a>
            <a className='sourceLink' href={strYoutube}>Youtube Video</a>
        </div >
    );
};

export default MealDetails;