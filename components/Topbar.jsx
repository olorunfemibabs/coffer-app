import React from 'react'
import {CiSearch} from 'react-icons/ci'
import Profile from './Profile'

export default function Topbar() {
  return (
    <main>
        <section className="w-[90%] mx-auto">
            <div className="flex justify-between items-center pt-5">
            <h1  className='text-[32px] font-semibold leading-[48px] logo'>
                <a href="/dashboard"> COFFER</a>
                </h1>
            <div className="w-[50%] pl-[8px] flex border-[1px] items-center rounded-lg h-[45px] border-[#C5CBFD] focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-2">
            <CiSearch size={20} className='text-[#3849DD] mr-2'/>
                <input type="text" placeholder='Search your photos' className='h-full border-none w-full focus:outline-none focus:border-none focus:ring-none focus:ring-0 rounded-lg text-[16px] font-normal text-[#C5CBFD] bg-transparent' />
            </div>
            <Profile/>
            </div>
        </section>
    </main>
  )
}
