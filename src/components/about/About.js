import React from "react"

const About = ({ aboutData }) => {
  return (
    <div className="flex flex-col mx-[10px]">
      <img
        className="w-full absolute z-0"
        src={aboutData.aboutBgImage.sourceUrl}
        alt={aboutData.aboutBgImage.altText}
      />
      <div className="mx-[100px]">
        {/* Left Side */}
        <div className="flex justify-between items-center relative">
          {/* <div> */}
          <img
            className="z-10 h-[30%] w-[30%] my-20"
            src={aboutData.aboutLeftImage.sourceUrl}
            alt={aboutData.aboutLeftImage.altText}
          />
          {/* <div className="absolute bottom-24 left-60 z-10 bg-sky-950 rounded-lg  p-3 flex  w-[180px]"> */}
          <div className="absolute bottom-24 left-60 z-10 bg-[#1A1F33] rounded-lg  p-3 flex  w-[180px]">
            <span className="flex justify-end">
              <img
                className="h-10"
                src={aboutData.aboutSubbgImage.sourceUrl}
                alt={aboutData.aboutSubbgImage.altText}
              />
              <span className="flex flex-col ms-2">
                <h1 className="text-white font-bold text-[20px]">
                  {aboutData.aboutSubbgImageText}
                </h1>
                <h1 className="w-[105px] text-white text-[10px] -mt-1">
                  {aboutData.aboutSubbgImageText2}
                </h1>
              </span>
            </span>
          </div>
          {/* </div> */}
          {/* Right Side */}
          <div className="flex flex-col z-10 m-auto ms-[160px] w-[90%]">
            <h1 className="text-green-600 font-bold uppercase">
              {aboutData.aboutTitle}
            </h1>
            <h1 className="text-[50px] font-bold text-[#1A1F33] w-full leading-[1] my-3">
              {aboutData.aboutTitle2}
            </h1>
            <h1 className="text-zinc-700 font-bold">{aboutData.aboutTitle3}</h1>
            <h1 className="text-gray-400 text-[14px] w-full mt-5">
              {aboutData.aboutTitle4}
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
