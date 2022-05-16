import React from 'react'
import ReceiptComponents from '../components/ReceiptComponents'
import Sidebar from '../components/Sidebar'

function Receipt() {
  return (
    <div>
        <div className='flex flex-1 md:px-10 px-2 md:h-screen'>
            <div className=' flex-[0.16] py-10'>
                <Sidebar/>
            </div>
            <div className='overflow-x-auto overflow-hidden no-scrollbar flex-[0.8] py-10'>
                <ReceiptComponents/>
            </div>
        </div>
    </div>
  )
}

export default Receipt