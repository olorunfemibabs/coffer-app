import React from 'react'
import Upload from './uploading'

export default function UploadFeatures(prop) {
  return (
    <main className='w-[90%] mx-auto'>
        <Upload Foldername={prop.Foldername}/>
    </main>
  )
}
