import React from 'react';
import './Meal.css'
const Meal = ({ meal, handleAddToOrder }) => {
    const { strMeal, strInstructions, strMealThumb } = meal;

    return (
        <div className='meal'>
            <img src={strMealThumb} alt="" />
            <h4>{strMeal}</h4>
            <p>{strInstructions.slice(0, 100)}</p>
            <button onClick={() => handleAddToOrder(meal)}>Add this Food</button>
        </div>
    );
};

export default Meal;