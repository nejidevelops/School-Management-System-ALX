import React from 'react'
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from "recharts"

function Charts() {
    const data =[
        {name: "Students", value:  300},
        {name: "Teachers", value:  70},
        {name: "Staff", value:  20},
        {name: "Sponsors", value:  40},

    ]
  return (
    <div className='charts'>
   Persons
    
    
        <BarChart
          width={500}
          height={250}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="value" fill="#8884d8" background={{ fill: '#eee' }} />
        </BarChart>
      
     
      </div>
  )
}

export default Charts