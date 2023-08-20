import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import Sharetab from '../file/components/Sharetab';
import Photos from '../file/components/Photos';

const FolderItem = () => {
    const router = useRouter();
    const { id } = router.query;
 
 const images = [
        {
            name: 'image1'
        }, {
            name: 'image2'
        }, {
            name: 'image3'
        }, {
            name: 'image4'
        }, {
            name: 'image5'
        }, {
            name: 'image6'
        },
 ]
 
    return (
    <Layout>
            <div className="w-[1200px] mx-auto h-[1000px]">
                    <h1 className="side w-[197px] h-[36px] font-[400] text-[32px] leading-[36px] ">{id}</h1>
                    <Sharetab />
                    {images.map((item, index)=>{
                        return <Photos key={index} name={item.name} />
                    })}                       
            </div>
    </Layout>
    
  )
}

export default FolderItem