import React from 'react'

const Home = ({ homeData, ClrStandard }) => {

    const StdClr = ClrStandard.map(clr => clr.colors)
    const clr0th = StdClr[0].toString()
    const clr1st = StdClr[1].toString()
    const clr2nd = StdClr[2].toString()

    const rootStyle = {
        '--clr0th': clr0th,
        '--clr1st': clr1st,
        '--clr2nd': clr2nd
    };

    return (
        // <div className="absolute top-0 left-0 flex flex-col h-[100px]"
        <div className="flex flex-col h-screen"
            // style={`background-image: url${('homeData.homeBgImage.sourceUrl')}`}
            // style={{backgroundImage: url(homeData.homeBgImage.sourceUrl)}}

            style={{
                backgroundImage: `url('${homeData.homeBgImage.sourceUrl}')`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                overflow: 'hidden',
                // height: 500, 
                width: '100%',
                height: '100%'
            }}
        >
            {/* <img className='absolute -top-5 right-10 h-[700px]' src={homeData.homeImage.sourceUrl} alt={homeData.homeImage.altText} /> */}
            {/* <img className='absolute -top-[100px] right-[180px] h-[780px]' src={homeData.homeImage.sourceUrl} alt={homeData.homeImage.altText} /> */}
            <div className='flex flex-row-reverse'>
                    <img className='h-[580px] w-[500px] me-60' src={homeData.homeImage.sourceUrl} alt={homeData.homeImage.altText} />
                <div className='flex flex-col m-auto mx-20 bg-cyan-100'>
                    <h1 className='text-green-500 uppercase font-bold '>{homeData.homeTitle}</h1>
                    <h1 className='text-white text-[60px] capital w-[800px] leading-[1] font-[600]'>
                        {homeData.homeTitle2.slice(0, homeData.homeTitle2.indexOf('product'))}
                        <span className='text-orange-300'>{homeData.homeTitle2.slice(homeData.homeTitle2.indexOf('product'), homeData.homeTitle2.indexOf('product') + 8)}</span>
                        {homeData.homeTitle2.slice(homeData.homeTitle2.indexOf('product') + 8,)}
                    </h1>
                    <button style={rootStyle} className={`bgClr w-[38%] p-2 rounded-full mt-6 text-white font-bold`}>{homeData.consultationButton}</button>
                </div>
            </div>
        </div>
    )
}

export default Home