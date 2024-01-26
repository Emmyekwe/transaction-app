import TransactionChart from '@/components/TransactionChart';
import Image from 'next/image';
import React from 'react';
import copy from '../../../public/copy.svg';
import { Alert } from "flowbite-react";





const Dashboard = () => {
  return (
    <div className="bg-[#E4E4E7] flex-1 text-gray-200 flex min-h-screen flex-col pl-[20px] sm:pl-[70px]">
    <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-[#EDEDF2]">
        <ul className="flex flex-wrap -mb-px">
            <li className="text-center">
                <a href="#" className="inline-block p-4 mt-[47px]  text-[#2E2E2E] border-b-2 border-black rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Online Payments</a>
            </li> 
        </ul>
      </div>

      <div className="bg-[#FFFFFF] w-[325px] h-[115px] mx-auto sm:mx-0 space-y-2 justify-center border-1 border-gray-200 rounded-lg mt-[50px] px-[28px] py-[16px]">
          <p className="text-[#8F8E8E] text-[11px] font-medium">ACCOUNT DETAILS</p>
          <p className="text-black text-[11px] font-medium">STERLING BANK</p>
          <div className="flex flex-row justify-between">
          <p className="text-black font-bold text-[21px]">8000000000000</p>
          {/* <div className='flex flex-row bg-[#9F56D4] opacity-20 text-white w-[70px] h-[28px] rounded-lg text-center justify-center p-2'>
            <Image alt='copy'  src={copy}/>
            <p className=" text-[#9F56D4] text-[12px]">Copy</p>
          </div> */}
          </div>
      </div>

      <div className=' text-[#71717A] text-[14px] font-bold p-8 my-8 border-2 border-gray-300 rounded-lg mb-[300px] pb-[100px]' >
          <div className='flex flex-row gap-2 text-center mb-4'>
            <p className='mt-2'>Showing data for </p>
            <button id="dropdownRadioButton" data-dropdown-toggle="dropdownRadio" className="inline-flex items-center text-gray-500 bg-gray-200 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                
                Last 7 days
                <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                </svg>
            </button>
          </div>
        <TransactionChart />

      </div>

      
    </div>
  )
}

export default Dashboard