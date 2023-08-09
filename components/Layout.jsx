import React from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'

export default function Layout() {
  return (
    <main className='bg-[#F5F6FF] min-h-screen'>
        <Topbar/>
        <section className="flex">
            <div className="w-[17%]">

      <Sidebar/>
            </div>

        </section>
      
      </main>
  )
}
