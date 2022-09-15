import React from 'react';
import './Country.css'

const Country = ({ country }) => {




    const { strMeal, strMealThumb, strTags, strArea, strCategory, strSource, strYoutube, strInstructions } = country;

    const sliceInstruction = strInstructions.slice(0, 120);

    let mealInstruction;
    if (sliceInstruction.length === 120) {
        mealInstruction = <small className='text-base	'>{sliceInstruction} <a className='m-0 text-slate-300 ml-2' href="www.google.com">See more</a></small>;
    };


    return (
        <div className='country'>
            <img className='meal-img' src={strMealThumb} alt="" />
            <div className='country-info'>
                <h4 className='font-bold'>{strMeal}</h4>
                <p className='meal-tag mt-3'>Tag: {strTags}</p>
                <p>Area: {strArea}</p>
                <p>Category: {strCategory}</p>
                <p>Instruction: {mealInstruction}</p>

            </div>
            <div className='links'>
                <a className='border-solid border-2 border-white rounded-3xl	 mr-1 text-white py-1 px-4' href={strSource}>Source</a>
                <a className='order-solid border-2 border-white rounded-3xl	 ml-1 text-white py-1 px-4' href={strYoutube}>Youtube</a>
            </div>
        </div>
    );
};

export default Country;