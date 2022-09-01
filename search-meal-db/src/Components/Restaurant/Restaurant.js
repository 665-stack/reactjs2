import React, { useEffect } from 'react';
import { useState } from 'react';
import Meal from '../Meal/Meal';
import './Restaurant.css'

const Restaurant = () => {
    const [searchText, setSearchText] = useState('');

    const [meals, setMeals] = useState([]);
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [searchText]);
    console.log(searchText);
    console.log(meals);



    const searchFood = e => {
        setSearchText(e.target.value)
    }
    return (
        <div className='mt-4'>
            <h2 className='Heading'>Find the food you want</h2>

            <input onChange={searchFood} type="text" placeholder="Search your food name" className="input-field mt-5 px-3 py-1 placeholder-gray " />
            <br />

            <div className='meals-container mt-16 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-16 sm:mx-10 md:mx-10'>
                {
                    meals.map(meal => <Meal meal={meal}
                        key={meal.idMeal}></Meal>)
                }
            </div>

        </div >
    );
};

export default Restaurant;