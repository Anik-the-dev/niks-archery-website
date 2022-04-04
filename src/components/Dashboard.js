import React, { PureComponent, useEffect, useState } from 'react';
import { ComposedChart,BarChart, Bar, Cell, AreaChart, Area, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Scatter, } from 'recharts';



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
            height={400}
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
            <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
        </LineChart>

    );

    // 2.AreaChart........
    const renderAreaChart = (
        <AreaChart
            width={500}
            height={400}
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
            <Area type="monotone" dataKey="sell" stackId="1" stroke="#8884d8" fill="#8884d8" />
            <Area type="monotone" dataKey="investment" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
            <Area type="monotone" dataKey="revenue" stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>

    );

    // Bar Chart..................
    const renderBarChart = (
        <BarChart
        width={500}
        height={400}
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
        <Bar dataKey="investment" fill="#8884d8" />
        <Bar dataKey="revenue" fill="#82ca9d" />
        <Bar dataKey="sell" fill="#ee3dee" />
      </BarChart>
    );

    // 4. composed Chart
    const renderComposedChart = (
        <ComposedChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="month" scale="band" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="sell" fill="#8884d8" stroke="#8884d8" />
        <Bar dataKey="investment" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="revenue" stroke="#ff7300" />
        <Scatter dataKey="revenue" fill="red" />
      </ComposedChart>
    ) 

    return (
        <div className='project-body  project-container'>
            <h1 className='text-center lg mb-50'>niksrchery Sells Revenue</h1>
            <div className='grid two-columns-grid'>
                <div>
                    {renderLineChart}
                </div>
                <div>
                    {renderAreaChart}
                </div>
                <div>
                    {renderBarChart}
                </div>
                <div>
                    {renderComposedChart}
                </div>

            </div>
        </div>
    );
};

export default Dashboard;