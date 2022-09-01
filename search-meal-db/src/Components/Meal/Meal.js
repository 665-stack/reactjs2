import React from 'react';
import { Link, useNavigate } from "react-router-dom";

import './Meal.css'
const Meal = ({ meal }) => {
    const { strMeal, strInstructions, strMealThumb } = meal;
    const navigate = useNavigate();
    const showMealDetail = () => {
        navigate(`/mealDetails/${meal.idMeal}`)
    }
    return (
        <div className='meal'>
            <img src={strMealThumb} alt="" />
            <div className='mealInfo'>
                <h4>{strMeal}</h4>
                <p>{strInstructions.slice(0, 100)}</p>
            </div>
            <Link className='link' to={'/mealDetails/' + meal.idMeal}>Add to cart</Link>
            <button onClick={showMealDetail}>Add to cart</button>
        </div>
    );
};

export default Meal;