import React from "react"

const CaseStudies = ({ caseStudiesData }) => {
  const ImagesCard = () => 
      {caseStudiesData.caseStudiesImagesRepeater.map((v, i) => {
        <div key={i}>
          <img
            src={v.caseStudiesImage.sourceUrl}
            alt={v.caseStudiesImage.textAlt}
          />
        </div>
      })}

  return (
    <div
      className="bg-cover bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `url('${caseStudiesData.caseStudiesBgImage.sourceUrl}')`,
        zIndex:1
      }}
    >
      <ImagesCard />
      <div className="container mx-auto flex flex-col h-screen">
        <div className="md:flex-row-reverse md:p-10 flex sm:flex-col-reverse sm:pt-[150px]">
          {/* <img
            className="md:h-[780px] md:w-[700px] md:me-10 w-full h-auto"
            src={caseStudiesData.caseStudiesBgImage.sourceUrl}
            alt={caseStudiesData.caseStudiesBgImage.altText}
          /> */}
          <div className="flex flex-col m-auto md:mx-50 md:mb-10">
            <h1 className="text-green-500 uppercase font-bold text-xl md:text-2xl">
              {/* {homeData.homeTitle} */}
            </h1>
            <h1 className="text-white text-4xl md:text-7xl capital w-full leading-tight font-semibold">
              {/* {homeData.homeTitle2.slice(
                0,
                homeData.homeTitle2.indexOf("product")
              )} */}
              <span className="text-orange-300">
                {/* {homeData.homeTitle2.slice(
                  homeData.homeTitle2.indexOf("product"),
                  homeData.homeTitle2.indexOf("product") + 8
                )} */}
              </span>
              {/* {homeData.homeTitle2.slice(
                homeData.homeTitle2.indexOf("product") + 8
              )} */}
            </h1>
            <button
              //   style={rootStyle}
              className="bgClr w-[38%] md:w-[40%] p-2 rounded-full mt-6 text-white font-bold "
            >
              {/* {homeData.consultationButton} */}
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default CaseStudies
