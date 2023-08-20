import Layout from "@/components/Layout"
import Card from './components/Card'
import Createfolder from "./components/Createfolder"
import Link from "next/link"
 
export default function File() {
  const mockFiles = [
        {
            name: 'Downloads',
            number: 67
        },
        {
          name: 'Family Photos',
          number: 67
      },
        {
          name: 'Trip',
          number: 67
      },
        {
          name: 'Happy Moment',
          number: 67
      },
      {
        name: 'Old Pictures',
        number: 67
      },
  ]
  
  return (
    <Layout>
        <div className="w-[1200px] mx-auto h-[1000px]">
                <h1 className="side w-[197px] h-[36px] font-[400] text-[32px] leading-[36px] ">Categories</h1>             
             
               <div className="flex flex-wrap w-[1180px] space-x-4">
                {mockFiles.map((item, index) =>{
                    return <Link href={item.name} ><Card key={index} photoNumber={item.number} folderName={item.name} /></Link>
                })}
                  <Createfolder />
               </div>
                
        </div>
  </Layout>
  )
}
