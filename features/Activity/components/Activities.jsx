import React from 'react'
import SingleActivities from './SingleActivities'

export default function Activities() {
  return (
    <main>
      <section className="mt-8">
        {/* <h2 className="text-[17px] font-medium leading-6 text-center">All</h2> */}
      </section>
      <div className="w-[90%] flex flex-col gap-4 mx-auto pl-[40px] mt-2 tablet:pl-[0px] ">

      <SingleActivities/>
      <SingleActivities/>
      <SingleActivities/>
    
      </div>
   
      </main>
  )
}
