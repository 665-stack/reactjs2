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
            <h2 className='text-slate-800 text-2xl font-bold'>Find the food you want</h2>

            <input onChange={searchFood} type="text" placeholder="Search your food name" className="mt-4 px-3 py-1 placeholder-slate-500 border-solid border-2 border-slate-800 rounded-md  text-slate-800 relativ bg-slate-200" />
            <br />
            <h3>Result Found: {meals.length}</h3>

            <div className='meals-container '>
                {
                    meals.map(meal => <Meal meal={meal}
                        key={meal.idMeal}></Meal>)
                }
            </div>

        </div >
    );
};

export default Restaurant;