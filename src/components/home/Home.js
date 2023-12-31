import React from "react"

const Home = ({ homeData, ClrStandard }) => {
  const StdClr = ClrStandard.map(clr => clr.colors)
  const clr0th = StdClr[0].toString()
  const clr1st = StdClr[1].toString()
  const clr2nd = StdClr[2].toString()

  const rootStyle = {
    "--clr0th": clr0th,
    "--clr1st": clr1st,
    "--clr2nd": clr2nd,
  }

  return (
    <div
      className="bg-cover bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url('${homeData.homeBgImage.sourceUrl}')` }}
    >
      <div className="container mx-auto flex flex-col h-screen">
        <div className="md:flex-row-reverse md:p-10 flex sm:flex-col-reverse sm:pt-[150px]">
          <img
            className="md:h-[780px] md:w-[700px] md:me-10 w-full h-auto"
            src={homeData.homeImage.sourceUrl}
            alt={homeData.homeImage.altText}
          />
          <div className="flex flex-col m-auto md:mx-50 md:mb-10">
            <h1 className="text-green-500 uppercase font-bold text-xl md:text-2xl">
              {homeData.homeTitle}
            </h1>
            <h1 className="text-white text-4xl md:text-7xl capital w-full leading-tight font-semibold">
              {homeData.homeTitle2.slice(
                0,
                homeData.homeTitle2.indexOf("product")
              )}
              <span className="text-orange-300">
                {homeData.homeTitle2.slice(
                  homeData.homeTitle2.indexOf("product"),
                  homeData.homeTitle2.indexOf("product") + 8
                )}
              </span>
              {homeData.homeTitle2.slice(
                homeData.homeTitle2.indexOf("product") + 8
              )}
            </h1>
            <button
              style={rootStyle}
              className="bgClr w-[38%] md:w-[40%] p-2 rounded-full mt-6 text-white font-bold "
            >
              {homeData.consultationButton}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
