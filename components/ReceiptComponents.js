import Image from 'next/image'
import React, { useEffect, useState } from 'react';
import profile from '../public/profile.png'
import { AddIcon, ArrowIcon, TickIcon, TimeIcon, UserIcon } from './Icons'

function ReceiptComponents() {
    const [currentTab,setCurrentTab] = useState(0)
    const [loading,setLoading]=useState(false)
    const [values, setValues] = useState({
        name: '',
        username: '',
        email: '',
        location: '',
        amount: '',
        sum: '',
        purpose: '',
        month: '',
        received: '',
      })
    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
    }

    const onChange = (e) => {
        setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
  return (
    <div className=''>
        <div className='flex flex-col pt-5 px-5'>
            <h1>Hi Tharic Ilahi!</h1>
            <h1>Good Morning!</h1>
        </div>
        <div className='py-4 px-5 gap-5 flex items-center'>
            <button onClick={()=>setCurrentTab(0)} className={currentTab===0?"text-blue-600 border-b-2 py-3 border-blue-600":"text-gray-500"}>
                <h1>Receipt List</h1>
            </button>
            <button onClick={()=>setCurrentTab(1)} className={currentTab===1?"text-blue-600 border-b-2 py-3 fill-blue-500 border-blue-600":"text-gray-500 fill-slate-500"}>
                <div className='flex items-center gap-2'>
                    <AddIcon className="h-4 w-4"/>
                    <h1> Add Receipt</h1>
                </div>
            </button>
        </div>
        {currentTab===0?<div><div className='flexflex-col p-5 bg-[#f3efef] max-h-sm  h-[90vh]'> 
            <div className="overflow-x-auto overflow-hidden w-full no-scrollbar">
                <table className="table bg-white   w-full">
                    {/* head */}
                    <thead>
                    <tr className='border-b-2 bg-[#f7f3f3] items-center '>
                        <th>
                        <label>
                            <input type="checkbox" className=" checkbox checkbox-sm" />
                        </label>
                        </th>
                        <th><div className='flex gap-2 items-center'><UserIcon className="h-5 w-4 fill-black"/><h1>RECEIPIENT NAME</h1></div></th>
                        <th>PURPOSE</th>
                        <th>RECEIVED BY</th>
                        <th><div className='flex gap-2 items-center'><TimeIcon className="h-5 w-4 fill-black"/><h1>STATUS</h1></div></th>
                        <th />
                    </tr>
                    </thead>
                    <tbody className='text-gray-500 border-b-2'>
                    {/* row 1 */}
                    <tr>
                        <th>
                        <label>
                            <input type="checkbox" className="checkbox checkbox-sm" />
                        </label>
                        </th>
                        <td>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <Image
                                src={profile}
                                alt=""
                                />
                            </div>
                            </div>
                            <div>
                            <div className="font-bold text-black">Segun Adebayo</div>
                            <div className="text-sm opacity-50">sage@chakra-ui.com</div>
                            </div>
                        </div>
                        </td>
                        <td>
                        <h1>Donation</h1>
                        </td>
                        <td>
                        <h1>Mohammed Tharic Illahi</h1>
                        </td>
                        <td>
                        <button className=" bg-green-500 p-1 text-[12px] px-2 text-white rounded-lg">ACTIVE</button>
                        </td>
                        
                        <th className='flex justify-center text-sm'>
                        <button>...</button>
                        </th>
                    </tr>
                    </tbody>
                
                </table>
            </div>
            <div className='bg-white py-5 px-5 flex md:flex-row flex-col justify-between items-center'>
                <div className='flex items-center gap-4'>
                    <h1>Show rows per page</h1>
                    <select className="select focus:outline-0 select-sm select-bordered  max-w-xs">
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                    </select>

                </div>
                <div className='flex gap-6'>
                    <div className='flex gap-1'>
                        <h1>1-8</h1>
                        <h1>of</h1>
                        <h1>32</h1>
                    </div>
                    <div className='flex gap-6 items-center'>
                        <button><ArrowIcon className="h-3 w-3 -rotate-180 fill-black"/></button>
                        <button><ArrowIcon className="h-3 w-3 fill-black"/></button>
                    </div>
                </div>
            </div>
        </div></div>:<div>
            <div className=''></div>
            <form className='flex flex-col md:flex-row md:gap-6 bg-[#f3efef] p-3' action="">
            <div className="py-2 px-6 gap-3 flex flex-col ">
                <div>
                    <label className="label ">
                    Name
                    </label>
                    <input
                        value={values.fullname}
                        onChange={onChange}
                        className="input h-[40px] w-[320px] bg-white input-bordered outline-none valid:border-green-500 focus:border-none focus:outline-[1px] "
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Joe dan"
                        required
                    />
                    <span className='label block max-w-[3200px] text-[12px] text-gray-500'>Receipient Details should be provided in this form.</span>
                </div>
                <div>
                    <label className="label ">
                    Email Address
                    </label>
                    <input
                        value={values.email}
                        onChange={onChange}
                        className="input h-[40px] w-[320px] bg-white input-bordered outline-none valid:border-green-500 focus:border-none focus:outline-[1px] "
                        type="email"
                        id="email"
                        name="email"
                        placeholder="email@example.com"
                        required
                    />
                </div>
                <div>
                    <label className="label ">
                    Residing at
                    </label>
                    <select onChange={onChange} value={values.location} id="location" name='location' className="select focus:outline-0 select-sm h-[40px] font-[400] select-bordered w-full">
                        <option>India</option>
                        <option>Nigeria</option>
                        
                    </select>
                </div>
                <div>
                    <label className="label ">
                    Amount
                    </label>
                    <input
                        value={values.amount}
                        onChange={onChange}
                        className="input h-[40px] w-[320px] bg-white input-bordered outline-none valid:border-green-500 focus:border-none focus:outline-[1px] "
                        type="number"
                        id="amount"
                        name="amount"
                        placeholder="$ 500"
                        required
                    />
                </div>
                <div>
                    <label className="label ">
                    Sum of
                    </label>
                    <input
                        value={values.sum}
                        onChange={onChange}
                        className="input h-[40px] w-[320px] bg-white input-bordered outline-none valid:border-green-500 focus:border-none focus:outline-[1px] "
                        type="text"
                        id="sum"
                        name="sum"
                        placeholder="FIVE HUNDRED ONLY"
                        required
                    />
                    <span className=' lowercase label block max-w-[320px] text-[12px] text-gray-500'>KINDLY MENTION AMOUNT IN WORDS ENDING WITH ONLY</span>
                </div>
            </div>
            <div className="py-2 flex flex-col gap-3 px-6">
                <div>
                    <label className="label ">
                        Received By
                    </label>
                    <select value={values.received} onChange={onChange} name="received" id='received' className="select focus:outline-0 select-sm h-[40px] font-[400] select-bordered w-full">
                        <option>Membership</option>
                        <option>Membership</option>
                        
                    </select>
                </div>
                <div>
                    <label className="label ">
                    Select Month
                    </label>
                    <select onChange={onChange} value={values.month} id="month" name='month' className="select focus:outline-0 select-sm h-[40px] font-[400] select-bordered w-full">
                        <option>January</option>
                        <option>February</option>
                        
                    </select>
                </div>
                <div>
                    <label className="label ">
                    Received By
                    </label>
                    <input
                        value={values.fullname}
                        onChange={onChange}
                        className="input h-[40px] w-[320px] bg-white input-bordered outline-none valid:border-green-500 focus:border-none focus:outline-[1px] "
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Muhammed Kaif"
                        required
                    />
                    <span className='label block max-w-[240px] text-[12px] text-gray-500'>Person who creates receipt his name should be mentioned here.</span>
                </div>
                <div>
                    <label htmlFor="Submit1"  className="btn modal-button bg-teal-500 border-0 ">
                        Submit Now
                    </label>
                </div>
                <>
                    <input type="checkbox" id="Submit1" className="modal-toggle" />
                    <label htmlFor="Submit1" className="modal cursor-pointer">
                        <label className="modal-box relative px-4 items-center text-center" htmlFor="">
                        <h3 className="text-lg font-bold tex-[18px] ">
                        Enter the Authentication Code
                        </h3>
                        <p className="py-4 text-gray-500 text-[14px] px-6 ">
                        Before Submitting, The Code that’ve assigned to you should be
                    mentioned
                        </p>
                        <input
                                value={values.fullname}
                                onChange={onChange}
                                className="input h-[40px] w-[320px] bg-white input-bordered outline-none valid:border-green-500 focus:border-none focus:outline-[1px] "
                                type="text"
                                id="name"
                                name="name"
                                placeholder="XXXX"
                                required
                            />
                            <div className='flex w-full items-center justify-between px-6 pt-4'>
                                <button className='btn w-[200px] border-x border-gray-300 btn-sm bg-white text-black '>Cancel</button>
                                <label htmlFor="Submit2"  className="btn modal-button w-[200px] border-0 btn-sm bg-teal-500 ">
                                    Continue
                                </label>
                            </div>
                        </label>
                    </label>
                </>
                <>
                    <input type="checkbox" id="Submit2" className="modal-toggle" />
                    <label htmlFor="Submit2" className="modal cursor-pointer">
                        <label className="modal-box relative px-4 items-center flex justify-center flex-col text-center" htmlFor="">
                            <div className=' items-center'>
                                <TickIcon className="h-10 w-10 fill-slate-500 bg-teal-400 p-2 rounded-full"/>
                            </div>
                            <p className="py-4 font-[400] text-[17px]">
                            Congratulations
                            </p>
                            <h2 className='text-gray-500 text-[14px]'>You’ve officially done something really nice. Well done for making it happen, you deserve a cookie!</h2>
                        </label>
                    </label>
                </>

            </div>
            </form></div>}
    </div>
  )
}

export default ReceiptComponents