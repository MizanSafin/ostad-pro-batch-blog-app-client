import React from "react"

import yourData from "../../../portfolio.json"

const Socials = ({ className }) => {
  return (
    <div className={`${className} flex flex-wrap gap-5  link`}>
      {yourData.socials.map((social, index) => (
        <button key={index} onClick={() => window.open(social.link)}>
          {social.title}
        </button>
      ))}
    </div>
  )
}

export default Socials
