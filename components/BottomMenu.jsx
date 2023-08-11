import {RiHome7Fill} from 'react-icons/ri';
import {FiSearch} from 'react-icons/Fi';

export default function BottomMenu() {
    const menu=[
        {
            name:"Home",
            icon:<RiHome7Fill/>,
            href:"/dashboard/home"
        },
        {
            name:"Home",
            icon:<FiSearch/>,
            href:"/dashboard/home"
        },
        {
            name:"Files",
            icon:<RiHome7Fill/>,
            href:"/dashboard/file"
        },
        {
            name:"Activity",
            icon:<RiHome7Fill/>,
            href:"/dashboard/activity"
        },
    ]
  return (
    <main className='fixed bottom-0 w-[100%]'>
        <section className='bg-[#5060E9] w-[100%] h-[104px] rounded-t-3xl'>

        </section>
        </main>
  )
}
