import React from 'react'

export default function NoPhoto() {
  return (
    <main>
        <section className="h-[672px] top-[288px] gap-12" >
            <div className="mx-auto flex justify-center items-center w-[456px] mobile:mt-16 mobile:px-auto mobile:w-[100%]">
            <img src="/../images/guy2.svg" className="w-[456px] mobile:w-[280px]"/>

            </div>

            <div className="">
                <h2 className="text-center font-[400] text-[24px] leading-9 mt-2  tablet:mt-[60px] mobile:text-[20px] side">No Photo Uploaded.</h2>
                <h2 className="text-center font-[400] text-[24px] mobile:text-[20px] leading-9 mt-8 side">Create a Folder to upload.</h2>
            </div>
            
        </section>
    </main>
  )
}
