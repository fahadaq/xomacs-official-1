import React from "react"

const CaseStudies = ({ caseStudiesData, ClrStandard }) => {
  const StdClr = ClrStandard.map(clr => clr.colors)
  const clr0th = StdClr[0].toString()
  const clr1st = StdClr[1].toString()
  const clr2nd = StdClr[2].toString()

  const rootStyle = {
    "--clr0th": clr0th,
    "--clr1st": clr1st,
    "--clr2nd": clr2nd,
  }

  const ImagesCard = () => {
    return (
      // <div className="grid grid-cols-3 absolute top-0 left-0 right-0 bottom-0 m-auto">
      <div className="flex flex-wrap -mx-2 p-10">
        {caseStudiesData.caseStudiesImagesRepeater.map((v, i) => (
          // <div key={i} className="flex items-start justify-center w-full p-2">
          <div key={i} className="w-1/3 px-2">
            <div className="flex flex-col items-center relative">
              <img
                src={v.caseStudiesImage.sourceUrl}
                alt={v.caseStudiesImage.textAlt}
                className="w-full h-auto"
              />
              <div className="text-center absolute inset-0 flex flex-col justify-center items-center text-white px-20">
                <h1 className="font-bold text-2xl">
                  {v.caseStudiesImageTitle}
                </h1>
                <p className="my-5">{v.caseStudiesImageDescription}</p>
                {v.caseStudiesImageButton && (
                  <button
                    style={rootStyle}
                    className="bgClr w-[38%] md:w-[60%] p-2 rounded-full mt-6 text-white font-bold"
                  >
                    {v.caseStudiesImageButton}
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  const TabBar = () => {
    return 
    caseStudiesData.caseStudiesNavRepeater[0].caseStudiesNavbar.map((tab, idx)=><>
    <button>{tab.caseStudiesTitle}</button>
    </>)}

  return (
    <div
    className="bg-cover bg-no-repeat h-[1100px] overflow-hidden relative flex justify-center flex-col"
    style={{
      backgroundImage: `url('${caseStudiesData.caseStudiesBgImage.sourceUrl}')`,
    }}
     >
      <h1 className="text-teal-500 font-bold uppercase my-5 text-center tracking-widest">{caseStudiesData.caseStudiesTitle}</h1>
      <h1 className="text-white text-5xl font-bold mb-5 -mt-5 text-center">{caseStudiesData.caseStudiesTitle2}</h1>
      <div
        className="bg-cover bg-no-repeat h-[1100px] overflow-hidden relative flex justify-center flex-col"
        style={{
          backgroundImage: `url('${caseStudiesData.caseStudiesBgImage.sourceUrl}')`,
        }}
      >
        <TabBar/>
        <ImagesCard />
      </div>
    </div>
  )
}

export default CaseStudies
