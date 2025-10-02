import React from 'react'

const QuickStatsCard = () => {
  return (
    <div className='flex mt-10 grid grid-cols-1 md:grid-cols-3 space-y-4 md:space-y-1 md:gap-4'>
       <div className='flex flex-col  rounded-md border border-gray-200 shadow-sm hover:shadow-lg transition p-4'>
         <div className='text-sm font-semibold pt-2'>
            Entry Count
         </div>
         <div className='text-md font-semibold pt-2'>
           600
         </div>
       </div>
       <div className='flex flex-col  rounded-md border border-gray-200 shadow-sm hover:shadow-lg transition p-4'>
           <div className='text-sm font-semibold pt-2'>
            Exit Count
         </div>
         <div className='text-md font-semibold pt-2'>
           250
         </div>
       </div>
       <div className='flex flex-col rounded-md border border-gray-200 shadow-sm hover:shadow-lg transition p-4'>
           <div className='text-sm font-semibold pt-2'>
            Active Promotions
         </div>
         <div className='text-md font-semibold pt-2'>
           2
         </div>
       </div>
    </div>
  )
}

export default QuickStatsCard