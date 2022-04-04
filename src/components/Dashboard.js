import React, { PureComponent, useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const Dashboard = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('sellData.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    // destructuring Object Data.........
    const { investment, month, sell, revenue } = data

    // Charts.............
    // 1. SimpleLineChart..........

    const renderLineChart = (
        <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sell" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="investment" stroke="#82ca9d" />
        </LineChart>
    );
    return (
        <div className='project-body  project-container'>
            <h1 className='text-center lg mb-50'>niksrchery Sells Revenue</h1>
            <div className='grid two-columns-grid'>
                <div>
                    {renderLineChart}
                </div>
                <div>
                    {renderLineChart}
                </div>
                <div>
                    {renderLineChart}
                </div>
                <div>
                    {renderLineChart}
                </div>

            </div>
        </div>
    );
};

export default Dashboard;