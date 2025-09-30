import React from 'react'

import OverviewCard from '@/components/cards/OverviewCard'
import ZoneVisits from '@/components/cards/ZoneVisits'

const page = () => {
  return (
    <div className='flex flex-col justify-center  text-3xl font-bold'>
      <div>
        Dashboard
      </div>
      <div className='text-lg pt-7 font-semibold mt-2'>
      Overview
      </div>
      <div className='flex space-x-10  '>
       <OverviewCard
       label = "Daily Footfall"
       value = '1,340'
       percent = "5"

       />
       <OverviewCard
       label = "Real-time Occupancy"
       value = '54'
       percent = "-5"

       />

       <OverviewCard
       label = "Average Dwell Time"
       value = '100 hours'
       percent = "30"

       />
       <OverviewCard
       label = "Promotion Impact"
       value = '100'
       percent = "8"

       />
       </div>
       <div className='text-lg pt-7 font-semibold mt-2'>
        Top  Store Zones 
      </div>
      <ZoneVisits/>
     </div>
  )
}

export default page