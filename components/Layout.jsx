import React from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import BottomMenu from './BottomMenu'

export default function Layout({children}) {
  return (
    <main className='bg-[#F5F6FF] h-full min-h-screen max-h-screen overflow-y-hidden tablet:flex-col'>
        <Topbar/>
        <section className="flex mt-16">
            <div className="w-[230px] h-full ">

      <Sidebar/>
            </div>
            <div className="">

{children}
            </div>
           

        </section>
        <div className="hidden tablet:block w-[100%]">
              <BottomMenu/>
            </div>
      </main>
  )
}
