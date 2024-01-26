import Image from 'next/image';
import * as React from "react";
import copy from '../../public/copy.svg';
import TransactionChart from '../components/TransactionChart'
import Dashboard from './dashboard/page';



export default function Home() {



  return (
    <main className="bg-[#E4E4E7] flex-1 text-gray-200 flex min-h-screen flex-col pl-[70px]">
      <Dashboard />
      {/* <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-[#EDEDF2]">
        <ul className="flex flex-wrap -mb-px">
            <li className="text-center">
                <a href="#" className="inline-block p-4 mt-[47px]  text-[#2E2E2E] border-b-2 border-black rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Online Payments</a>
            </li>
        </ul>
      </div>

      <div className="bg-[#FFFFFF] w-[325px] h-[115px] space-y-2 justify-center border-1 border-[#8F8E8E] rounded-lg mt-[50px] px-[28px] py-[16px]">
          <p className="text-[#8F8E8E] text-[11px] font-medium">ACCOUNT DETAILS</p>
          <p className="text-black text-[11px] font-medium">STERLING BANK</p>
          <div className="flex flex-row justify-between">
          <p className="text-black font-bold text-[21px]">8000000000000</p>
          <div className='flex flex-row bg-[#9F56D4] opacity-20 text-white w-[70px] h-[28px] rounded-lg text-center justify-center p-2'>
            <Image  src={copy}/>
            <p className=" text-[#9F56D4] text-[12px]">Copy</p>
          </div>
          </div>
      </div>

    <div> */}

    {/* <TransactionChart /> */}

    {/* </div> */}

    </main>
  );
}
