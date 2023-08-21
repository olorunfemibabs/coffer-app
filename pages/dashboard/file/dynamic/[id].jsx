import Layout from '@/components/Layout'
import UploadFeatures from '@/features/Files/UploadFeatures'
import React from 'react'
import { useRouter } from "next/router";


export default function Upload() {
  const router = useRouter();
  const { id } = router.query;
  const Foldername = id?.toString()
  return (
    <Layout>
        <UploadFeatures Foldername={Foldername}/>
    </Layout>
  )
}
