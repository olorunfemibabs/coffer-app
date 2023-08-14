import React from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import BottomMenu from './BottomMenu'

export default function Layout({children}) {
  return (
    <main className='bg-[#F5F6FF] h-full min-h-screen max-h-screen overflow-y-hidden tablet:flex-col'>
        <Topbar/>
        <section className="flex mt-16">
            <div className="w-[230px] tabletAir:w-[250px]  h-full tablet:w-[0px]">

      <Sidebar/>
            </div>
 
            <div className="w-[90%] lgDesktop:w-[84%]  h-screen min-h-screen max-h-screen pb-[200px] overflow-y-scroll scrollbar-thin scrollbar-thumb-[#5060E9] scrollbar-track-gray-100 scrollbar-thumb-rounded-full scrollbar-track-rounded-full tablet:w-[100%]">

{children}
            </div>
           

        </section>
        <div className="hidden tablet:block w-[100%]">
              <BottomMenu/>
            </div>
      </main>
  )
}
