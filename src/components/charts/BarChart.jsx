import React from 'react'
import { Column } from '@ant-design/plots';
const data = [
  {
    type: 'Monday',
    sales: 38,
  },
  {
    type: 'Tuesday',
    sales: 52,
  },
  {
    type: 'Wednesday',
    sales: 61,
  },
  {
    type: 'Thursday',
    sales: 145,
  },
  {
    type: 'Friday',
    sales: 48,
  },
  {
    type: 'Satuday',
    sales: 38,
  },
  {
    type: 'Sunday',
    sales: 38,
  },
];
const BarChart = () => {
  const config = {
    data,
    xField: 'type',
    yField: 'sales',
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: 'Day',
      },
      sales: {
        alias: 'Visitors',
      },
    },
    minColumnWidth: 20,
    maxColumnWidth: 20,
  };

  return (
    <div className="bg-white shadow-md border p-3">
      <Column {...config} />
    </div>
  )
}

export default BarChart