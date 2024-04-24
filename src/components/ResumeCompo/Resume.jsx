import React, { useEffect, useState } from "react"
import "./style.css"
// Data
import { name, showResume } from "../../../portfolio.json"
import { resume } from "../../../portfolio.json"
import data from "../../../portfolio.json"
import ProjectResume from "./ProjectResume"
import Socials from "./Socials"

const Resume = () => {
  return (
    <>
      {/* <div className="fixed bottom-6 right-6">
        <button onClick={() => router.push("/edit")} type={"primary"}>
          Edit Resume
        </button>
      </div> */}

      <div className={`container mx-auto mb-10 resume `}>
        <div className="main-resume mt-10 w-full max-w-4xl mx-auto flex flex-col items-center bg-slate-800">
          <div
            className={`w-full max-w-4xl sm:p-10 p-5 md:p-20  rounded-lg shadow-sm text-lime-200`}
          >
            <h1 className="text-3xl font-bold">{name}</h1>
            <h2 className="text-xl mt-5">{resume.tagline}</h2>
            <h2 className=" text-xl mt-5 opacity-50">{resume.description}</h2>
            <div className="mt-2">
              <Socials />
            </div>
            <div className="mt-5">
              <h1 className="text-2xl font-bold">Experience</h1>

              {resume.experiences.map(
                ({ id, dates, type, position, bullets }) => (
                  <ProjectResume
                    key={id}
                    dates={dates}
                    type={type}
                    position={position}
                    bullets={bullets}
                  ></ProjectResume>
                )
              )}
            </div>
            <div className="mt-5">
              <h1 className="text-2xl font-bold">Education</h1>
              <div className="mt-2">
                <h2 className="text-lg">{resume.education.universityName}</h2>
                <h3 className="text-sm opacity-75">
                  {resume.education.universityDate}
                </h3>
                <p className="text-sm mt-2 opacity-50">
                  {resume.education.universityPara}
                </p>
              </div>
            </div>
            <div className="mt-5">
              <h1 className="text-2xl font-bold">Skills</h1>
              <div className="flex mob:flex-col desktop:flex-row justify-between">
                {resume.languages && (
                  <div className="mt-2 mob:mt-5">
                    <h2 className="text-lg">Languages</h2>
                    <ul className="list-disc">
                      {resume.languages.map((language, index) => (
                        <li key={index} className="ml-5 py-2">
                          {language}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {resume.frameworks && (
                  <div className="mt-2 mob:mt-5">
                    <h2 className="text-lg">Frameworks</h2>
                    <ul className="list-disc">
                      {resume.frameworks.map((framework, index) => (
                        <li key={index} className="ml-5 py-2">
                          {framework}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {resume.others && (
                  <div className="mt-2 mob:mt-5">
                    <h2 className="text-lg">Others</h2>
                    <ul className="list-disc">
                      {resume.others.map((other, index) => (
                        <li key={index} className="ml-5 py-2">
                          {other}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Resume
