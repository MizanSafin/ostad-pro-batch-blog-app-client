import React from "react"
import "./style.css"
import { Helmet, HelmetProvider } from "react-helmet-async"
import Typewriter from "typewriter-effect"
import { introdata, meta } from "../../../content_option"
import { Link } from "react-router-dom"

function HomeComponent() {
  return (
    <HelmetProvider>
      <section id="home" className="home pt-5 md:pt-0">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec gap-5 md:gap-7 flex flex-col md:py-5 md:px-2 md:flex-row items-center justify-center  md:items-center mx-auto md:max-h-[600px] ">
          <div
            className="h_bg-image md:flex-1   md:w-[550px] w-11/12 max-h-[400px] "
            style={{ backgroundImage: `url(${introdata.your_img_url})` }}
          ></div>
          <div className="text md:flex-1 md:flex pt-5 md:pt-0  ">
            <div className=" ">
              <div className="intro mx-auto flex flex-col items-center">
                <h2 className="mb-[5px] text-3xl">{introdata.title}</h2>
                <h1 className=" z-48 mb-0 ">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
                <p className="mb-5 text-center -mt-0 max-w-[400px] mx-auto">
                  {introdata.description}
                </p>
                <div className="intro_btn-action pb-3 flex gap-5">
                  <Link to="/resume" className="text_2">
                    <div id="button_p" className="ac_btn btn ">
                      My Resume
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/contact">
                    <div id="button_h" className="ac_btn btn">
                      Contact Me
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  )
}

export default HomeComponent
