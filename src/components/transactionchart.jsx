"use client"

import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export const options = {
  responsive: true,
  plugins: {
    // legend: {
    //   position: 'top' as const,
    // },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};



const TransactionChart = () => {
    const [chartData, setChartData] = useState({
        datasets: []
    })

    const [chartOptions, setChartOptions] = useState({})

    useEffect(() => {
        setChartData({
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', "Sep", 'Oct', 'Nov', 'Dec'],
            datasets: [
                {
                    label: '',
                    data: [270, 450, 380, 290, 120, 190, 180, 190, 180, 190, 280, 300],
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: '#FFC145'
                }
            ]
        })

        setChartOptions({
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: 'Revenue'
                }
            },
            maintainAspectRatio: false,
            responsive: true
        })
    }, [])


  return (
        <div className='flex-1 w-[336px] h-[279px] mx-auto sm:mx-0 rounded-lg sm:w-full sm:h-[491px] p-4 py-6 sm:py-12 sm:p-8 border-2 bg-white border-gray-200 mt-8 mb-4'>
          <div className='sm:flex sm:flex-col gap-2'>
            <div className='sm:flex sm:flex-row gap-2'>
            <p className='font-light text-[14px]'>
              <p className='text-[#424242] text-[14px] font-bold'>
              Revenue 
              </p>
              <p  className='hidden sm:block text-[#6DC27F]'>+0.00%</p>
              <p className='hidden sm:block'>vs Last 7 days</p>

              </p>
            </div>
            <p className='hidden sm:block font-extrabold text-[#424242] text-[28px] mb-2'>#0.00 <span className='text-black text-[13px] font-normal'>in total value</span></p>
          </div>
            <Bar options={chartOptions} data={chartData} />;
        </div>
  )
}

export default TransactionChart