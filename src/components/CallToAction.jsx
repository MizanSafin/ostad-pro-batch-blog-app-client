import React from "react"

function CallToAction() {
  return (
    <div className="w-full flex md:flex-row flex-col my-10 border-lime-100 hover:border-lime-300 transition-all border-4 rounded-se-[50px] p-1 rounded-bl-[80px]">
      <div className="right flex-1 flex flex-col gap-2 items-center md:mb-0 mb-7 justify-center">
        <h2 className="dark:text-slate-500 pt-3 md:pt-0">
          Do you want to learn MERN ?
        </h2>
        <h4 className="dark:text-slate-500">
          10+ MERN Projects with resources
        </h4>
        <button className="bg-lime-500 px-5 rounded-md py-2 transition-all hover:bg-lime-200 hover:text-slate-600 text-slate-50 mt-2">
          10+ MERN projects
        </button>
      </div>
      <div className="left flex-1 rounded-md p-5">
        <img
          src="https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="w-full object-cover max-h-[200px] rounded-md rounded-es-[38px] md:rounded-es-md md:rounded-se-3xl"
        />
      </div>
    </div>
  )
}

export default CallToAction
