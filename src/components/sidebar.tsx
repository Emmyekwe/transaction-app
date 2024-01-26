import React, { useState } from 'react';
import Link from 'next/link';
import { CiGlobe } from "react-icons/ci";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoWalletOutline } from "react-icons/io5";
import { ImSpinner10 } from "react-icons/im";
import { IoSettingsOutline } from "react-icons/io5";
import { BsReceiptCutoff } from "react-icons/bs";


const Sidebar = () => {

  return (
    <aside className="hidden  w-60 p-3 sm:flex sm:flex-col text-[#04004D] bg-white border-r border-gray-25">
      <nav>
        <ul className='space-y-4'>
          <li>
            <Link className="flex items-center gap-2 px-3 py-2 rounded-sm text-base hover:no-underline hover:bg-[#3976E8] hover:text-white active:bg-red-200" href="/">
              <CiGlobe /> Get Started
            </Link>
          </li>
          <li>
          <Link className="flex items-center gap-2 px-3 py-2 rounded-sm text-base hover:no-underline hover:bg-[#3976E8] hover:text-white active:bg-red-200" href="/dashboard">
          <LuLayoutDashboard /> Dashboard
            </Link>
          </li>
          <li>
          <Link className="flex items-center gap-2 px-3 py-2 rounded-sm text-base hover:no-underline hover:bg-[#3976E8] hover:text-white active:bg-red-200" href="/">
          <IoWalletOutline /> Accounts
            </Link>
          </li>
          <li>
          <Link className="flex items-center gap-2 px-3 py-2 rounded-sm text-base hover:no-underline hover:bg-[#3976E8] hover:text-white active:bg-red-200" href="/">
          <ImSpinner10 /> Transfers
            </Link>
          </li>
          <li>
          <Link className="flex items-center gap-2 px-3 py-2 rounded-sm text-base hover:no-underline hover:bg-[#3976E8] hover:text-white active:bg-red-900" href="/transactions">
          <BsReceiptCutoff /> Transactions
            </Link>
          </li>
          <li>
          <Link className="flex items-center gap-2 px-3 py-2 rounded-sm text-base hover:no-underline hover:bg-[#3976E8] hover:text-white active:bg-red-200" href="/">
          <IoSettingsOutline /> Settings
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar