import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'


const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(data => setCountries(data.meals))
    }, [])
    // console.log(countries);
    return (
        <div className='countries pt-6'>
            <h2 className='text-white text-xl'>Here you find some of meals information.</h2>
            <div className="countries-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {
                    countries.map(country => <Country country={country} key={country.idMeal}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;