import React from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'

export default function Layout({children}) {
  return (
    <main className='bg-[#F5F6FF] min-h-screen'>
        <Topbar/>
        <section className="flex mt-16">
            <div className="w-[17%]">

      <Sidebar/>
            </div>
            <div className="">

{children}
            </div>

        </section>
      
      </main>
  )
}
