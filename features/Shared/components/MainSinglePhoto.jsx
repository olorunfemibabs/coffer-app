
export default function MainSinglePhoto({close , uri}) {
  return (
    <main className="fixed w-[100%] h-screen max-h-screen min-h-screen  bg-[#F5F6FF] -mt-[200px] -ml-[326px]  smDesktop:-ml-[295.99px] tabletAir:-ml-[288px] tablet:-ml-[38px] mobile:-ml-[19px] z-[1]">

        <section className="w-[80%] mx-auto">

        <div className="flex justify-between items-center pt-[100px]">
            <div className="">

            <img src="/../Icon/backArrow.svg" alt="" className="w-[28px] h-[28px] mobile:w-[20px] mobile:h-[20px]" onClick={close}/>
            </div>
            <div className="flex items-center gap-3">
                <img src="/../Icon/share.svg" alt="" className="w-[28px] h-[28px] mobile:w-[20px] mobile:h-[20px]" />
                <img src="/../Icon/like.svg" alt="" className="w-[32px] h-[32px] mobile:w-[28px] mobile:h-[28px]" />
            </div>
        </div>
        <div className="w-[100%] px-auto">
            <img src={`https://ipfs.io/ipfs/${uri}`} alt="" className="w-[45%] lgDesktop:w-[48%] smDesk:w-[600px] tabletAir:w-[500px] mx-auto tabletAir:mt-[60px] mobile:mt-[120px] "/>
        </div>
        </section>
    </main>
  )
}


