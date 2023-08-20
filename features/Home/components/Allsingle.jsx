
export default function Allsingle({close, uri}) {

    const imguri = `https://ipfs.io/ipfs/${uri}`
    return (
      <main className="fixed w-[100%] h-screen max-h-screen min-h-screen  bg-[#F5F6FF] -mt-[310px] -ml-[263px]  smDesktop:-ml-[252px] tabletAir:-ml-[257px] tablet:-ml-[36px] tablet:-mt-[300px] mobile:-ml-[20px] mobile:-mt-[250px] z-[1]">
  
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
          <div className="w-[100%] mx-auto smDesk:mt-[40px]">
              <img src={imguri} alt="" className="w-[45%] lgDesktop:w-[48%] smDesk:w-[600px] tabletAir:w-[500px]  mx-auto tabletAir:mt-[60px] mobile:mt-[120px] "/>
          </div>
          </section>
      </main>
    )
  }
  