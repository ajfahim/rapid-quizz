import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';

const Statistics = () => {
    const data = useLoaderData();

    return (
        <div className='mt-20 flex justify-center'>

            <LineChart
                width={1000}
                height={500}
                data={data.data}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis dataKey="total" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="total" stroke="#8884d8" />

            </LineChart>

        </div>
    );
};

export default Statistics;