import Layout from '@/components/Layout'
import ActivityFeatures from '@/features/Activity/ActivityFeatures'
import SharedFeatures from '@/features/Shared/SharedFeatures'
import { useState } from 'react'


export default function Activity() {
  // const [openPhotos, setOpenPhotos] = useState(false)
  const [activity, setActivity] = useState(false)
  return (
    <Layout>
      <div className="flex justify-center items-center gap-3">
        <h2  onClick={()=>setActivity(false)} className={`text-[17px] font-primary font-medium hover:border-b-2 ease-in-out border-[#0E1A87] cursor-pointer ${!activity && "border-b-2"}`}>Shared Photos</h2>
        <h2 className={`text-[17px] font-primary font-medium hover:border-b-2 border-[#0E1A87] cursor-pointer ease-in-out ${activity && "border-b-2"}`} onClick={()=>setActivity(true)}>Personal Activity</h2>
      </div>
      {
        activity ?
        <ActivityFeatures/> :
      <SharedFeatures/>
      }
    </Layout>
  )
}
