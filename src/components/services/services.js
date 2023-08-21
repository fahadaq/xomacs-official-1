import React from "react"

const Services = ({ servicesData, ClrStandard }) => {
  const StdClr = ClrStandard.map(clr => clr.colors)
  const clr0th = StdClr[0].toString()
  const clr1st = StdClr[1].toString()
  const clr2nd = StdClr[2].toString()

  const rootStyle = {
    "--clr0th": clr0th,
    "--clr1st": clr1st,
    "--clr2nd": clr2nd,
  }

  const Cards = () => (
    <div className="grid grid-cols-3 gap-1 mx-20">
      {servicesData.servicerepeater[0].servicesInfo.map(v => (
        <div className="p-5">
          <img src={v.serviceLogo.sourceUrl} alt={v.serviceLogo.textAlt} />
          <h1 className="font-bold">{v.serviceTitle}</h1>
          <p className="text-zinc-500">{v.serviceDescription}</p>
        </div>
      ))}
      {console.log("|||||", servicesData.servicerepeater[0].servicesInfo)}
    </div>
  )

  return (
    <div className="my-10 m-auto flex flex-col justify-center items-center">
      <h1 className="uppercase text-teal-600 font-[400]">
        {servicesData.serviceTitle}
      </h1>
      <h1 className="text-[30px] font-bold text-zinc-700">
        {servicesData.serviceTitle2}
      </h1>
      {/* Card */}
      <div>
        <Cards />
      </div>
      <button
        style={rootStyle}
        className="bgClr w-[38%] md:w-[12%] p-2 rounded-full mt-6 text-white font-bold"
      >
        {servicesData.serviceButton}
      </button>
    </div>
  )
}

export default Services
