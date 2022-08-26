import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PhoneChart = () => {
    const [phones, setPhones] = useState([]);
    useEffect(() => {
        // akhane age fetch diye data load kortam.
        axios.get('http://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const loadedData = data.data.data;
                const phoneData = loadedData.map(phone => {
                    const parts = phone.slug.split('-');
                    const ph = {
                        name: parts[0],
                        value: parseInt(parts[1])
                    };
                    return ph;
                })
                setPhones(phoneData)
                console.log(phoneData);
            })
    }, [])
    return (
        <div>

            <BarChart width={600} height={300} data={phones}>
                <Bar dataKey="value" fill="#8884d8" />
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </BarChart>
        </div>
    );
};

export default PhoneChart;