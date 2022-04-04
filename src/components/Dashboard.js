import React, { useEffect, useState } from 'react';
import { LineChart, Line } from 'recharts';


const Dashboard = () => {
    const [data , setData] = useState([])
    useEffect(()=>{
        fetch('sellData.json')
        .then(r =>r.json())
        .then(d=>setData(d))
    },[])

    const {investment,month,sell,revenue} = data

    const renderLineChart = (
        <LineChart width={400} height={400} data={data}>
            <Line type="month" dataKey="sell" stroke="red" />
        </LineChart>
    );
    return (
        <div className='project-container'>
            <h2>Aniks Sells Revenue</h2>
            {renderLineChart}
        </div>
    );
};

export default Dashboard;