import React from 'react'

import OverviewCard from '@/components/cards/OverviewCard'
import ZoneVisits from '@/components/cards/ZoneVisits'
import PromotionsList from '@/components/cards/PromotionsList'
import QuickStatsCard from '@/components/cards/QuickStatsCard'

const page = () => {
  return (
    <div className='flex flex-col justify-center  text-3xl font-bold'>
      <div>
        Dashboard
      </div>
      <div className='text-xl pt-7 font-semibold mt-2'>
      Overview
      </div>
      
      <div className='   '>
        <div className='grid  md:grid-cols-4 gap-4'>
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
       </div>
       
      <ZoneVisits/>

      <PromotionsList/>

      <QuickStatsCard/>
     </div>
  )
}

export default page