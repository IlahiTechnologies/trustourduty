import Image from 'next/image'
import React, { useEffect, useState } from 'react';
import profile from '../public/profile.png'
import { GroupIcon, HomeIcon, LogoutIcon, ReceiptIcon, SettingsIcon, UserIcon } from './Icons'

function Sidebar() {
    const [currentTab,setCurrentTab] = useState(1)
  return (
    <div className='flex h-full flex-col justify-between items-center text-gray-400'>
        <div className='flex flex-col justify-center items-center md:p-5'>
            <div className='border-b-2 flex flex-col md:items-start items-center flex-1'>
                <div className='flex gap-3 items-center'>
                    <div className='items-center'>
                        <Image src={profile} className="" alt="" />
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='font-[600]  hidden md:flex text-black'>Trustourduty</h1>
                        <h1 className=' hidden md:flex text-[12px]'>Non-Government Organiztion</h1>
                    </div>
                </div>
                <button onClick={()=>setCurrentTab(0)} className={currentTab===0?'flex gap-3 items-center fill-black text-black py-4':'flex gap-3 items-center text-gray-400 fill-gray-500 py-3'}>
                    <HomeIcon className='h-6 w-6 '/>
                    <h1 className=' hidden md:flex'>Dashboard</h1>
                </button>
                <button onClick={()=>setCurrentTab(1)} className={currentTab===1?'flex gap-3 items-center fill-black text-black py-4':'flex gap-3 items-center text-gray-400 fill-gray-500 py-3'}>
                    <ReceiptIcon className='h-6 w-6 '/>
                    <h1 className=' hidden md:flex'>Receipts</h1>
                </button>
                <button onClick={()=>setCurrentTab(2)} className={currentTab===2?'flex gap-3 items-center fill-black text-black py-4':'flex gap-3 items-center text-gray-400 fill-gray-500 py-3'}>
                    <GroupIcon className='h-6 w-6 '/>
                    <h1 className=' hidden md:flex'>Members</h1>
                </button>
                <button onClick={()=>setCurrentTab(3)} className={currentTab===3?'flex gap-3 items-center fill-black text-black py-4':'flex gap-3 items-center text-gray-400 fill-gray-500 py-3'}>
                    <UserIcon className='h-6 w-6 '/>
                    <h1 className=' hidden md:flex'>My Profile</h1>
                </button>
                <button onClick={()=>setCurrentTab(4)} className={currentTab===4?'flex gap-3 items-center fill-black text-black py-4':'flex gap-3 items-center text-gray-400 fill-gray-500 py-3'}>
                    <SettingsIcon className='h-6 w-6 '/>
                    <h1 className=' hidden md:flex'>Settings</h1>
                </button>
            </div>
            <div className='py-6 flex justify-start items-center'>
                <button className=' md:bg-[#FFDFDF] items-center flex rounded-2xl md:px-7 md:py-[10px]'>
                    <div className='flex gap-3 text-[#F90001] items-center'>
                        <LogoutIcon className='h-6 w-6 '/>
                        <h1 className=' hidden md:flex'>Logout</h1>
                    </div>
                </button>
            </div>
        </div>
        <div className=' hidden md:flex justify-end'>
            <h1>
            2022 @ All Rights Reserved
            </h1>
        </div>
    </div>
  )
}

export default Sidebar