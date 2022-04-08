import React from 'react'
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, CartesianAxis
} from 'recharts'

const data = [
  {
    name: 'Jan', costs: 4000, income: 2400, amt: 2400
  },
  {
    name: 'Feb', costs: 3000, income: 1398, amt: 2210
  },
  {
    name: 'Mar', costs: 2000, income: 9800, amt: 2290
  },
  {
    name: 'Apr', costs: 2780, income: 3908, amt: 2000
  },
  {
    name: 'May', costs: 1890, income: 4800, amt: 2181
  },
  {
    name: 'Jun', costs: 2390, income: 3800, amt: 2500
  },
  {
    name: 'Jul', costs: 3490, income: 4300, amt: 2100
  },
  {
    name: 'Aug', costs: 3490, income: 4300, amt: 2100
  },
  {
    name: 'Sep', costs: 3490, income: 4300, amt: 2100
  },
  {
    name: 'Oct', costs: 3490, income: 4300, amt: 2100
  },
  {
    name: 'Nov', costs: 3490, income: 4300, amt: 2100
  },
  {
    name: 'Dec', costs: 3490, income: 4300, amt: 2100
  }
]

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const CustomTooltip = (props) => {
  const {active, payload, label} = props;
  if (!active) {
    return null;
  }
  return (
    <div className="custom-tooltip">
      <p className="label">{label}</p>
      {
        payload && payload.map(item => {
          return (
            <p key={item.name} style={{color: item.color || '#000'}}>
              <span className="name">
                {item.name}
              </span>
              {`: R${numberWithCommas(item.value)}`}
            </p>
          )
        })
      }
    </div>
  )
}

const ChartView = () => {
  const formatter = (value) => {
    if (value === 0) {
      return 'R 0'
    }
    return `R ${value / 1000} K`
  }
  return (
    <div className='chart'>
      <div className='chart-title'>Earnings over the last 12 months</div>
      <div className='chart-wrapper'>
        <ResponsiveContainer width='100%' height={226}>
          <BarChart
            width={693}
            height={206}
            data={data}
            margin={{
              top: 5, right: 0, left: 0, bottom: 20
            }}
          >
            <Tooltip
              content={CustomTooltip}
            />
            <CartesianGrid strokeDasharray='5 1' vertical={false} />
            <XAxis
              dataKey='name'
              // allowDecimals={false}
              // axisLine={false}
              // tickLine={false}
              // tick={false}
              tickMargin={11}
              // mirror={false}
            />
            <YAxis
              width={100}
              padding={{ bottom: 21 }}
              allowDecimals={false}
              tickFormatter={formatter}
            />
            <Tooltip />
            {/* <Legend layout='vertical' verticalAlign='middle' align='right' /> */}
            <Bar dataKey='costs' fill='#FF8364' barSize={4} />
            <Bar dataKey='income' fill='#8FE0A7' barSize={4} />
          </BarChart>
        </ResponsiveContainer>
        <div className='legend'>
          <div className='legend-item'>
            <div className='line-group orange'>
              <div className='line' />
              <div className='circle' />
            </div>
            <div className='legend-item-text'>
                  Costs
            </div>
          </div>
          <div className='legend-item'>
            <div className='line-group green'>
              <div className='line' />
              <div className='circle' />
            </div>
                Income
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChartView
