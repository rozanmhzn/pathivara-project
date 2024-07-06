"use client";
import React, { useState } from "react";
import { profiles } from "@/app/constant/ProfileData";
import Image from "next/image";
import { usePathname } from "next/navigation";

const CV = () => {
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();
   const path = pathname.split("/");
   const slug = path[2];
   //console.log(slug)
   const titleToFind = decodeURIComponent(slug);
   const index = profiles.findIndex((item) => item.name === titleToFind);

  return (
    <div className="min-h-screen bg-black p-4 text-textColor">
      <div className="bg-bgColor shadow-md rounded-lg p-8 w-full h-full flex flex-col justify-center items-center">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-HeadingColor mb-2">
            {/* Apurva Nepal */}
            {profiles[index].name}
          </h1>
          <p className="text-lg">
            {/* Research-Oriented Cyber Security Enthusiast */}
            {profiles[index].special}
          </p>
        </div>
        <div className="w-full max-w-3xl">
          <div className="flex sm:flex-row flex-col gap-10">
          <section>
            <Image src={profiles[index].image} alt="Profile Image" height={300}/>
          </section>
          <section className="sm:w-2/3">
          <h2 className="text-2xl font-semibold  mb-4">Summary</h2>
          <p className=" mb-4">
            {/* A highly motivated and skilled Cyber Security professional with a
            Master's degree in "Cyber Security and Pen Testing" and CEH
            certification (2022). Possesses a strong foundation in Electronics
            and Communication Engineering (B.E. 2018) and a passion for
            continuous learning. Expertise in pen testing, prototype
            development, and problem-solving. Proven ability to identify
            vulnerabilities and exploit them using Python. */}
            {profiles[index].summary}
          </p>
          </section>
          </div>
          <div className="flex justify-center mt-4 space-x-4">
            <button
              // className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              className={`${
                activeSection === "education" ? "bg-blue-700" : "bg-blue-500"
              } hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
              onClick={() => setActiveSection("education")}
            >
              Education
            </button>
            <button
              // className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              className={`${
                activeSection === "skills" ? "bg-blue-700" : "bg-blue-500"
              } hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
              onClick={() => setActiveSection("skills")}
            >
              Skills
            </button>
            <button
              // className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              className={`${
                activeSection === "projects" ? "bg-blue-700" : "bg-blue-500"
              } hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
              onClick={() => setActiveSection("projects")}
            >
              Projects
            </button>
          </div>
          {activeSection === "education" && (
            <div>
              <h2 className="text-2xl font-semibold tex mb-4">Education</h2>
              <ul className="list-disc pl-5">
                {profiles[index]?.education?.map((data, index) => {
                  return (
                    <li className="mb-2">
                      <strong>{data.institute}</strong>
                      <br />
                      {data.year} <br />
                      <span>• {data.degree}</span>
                    </li>
                  );
                })}
                {/* <li className="mb-2">
                  <strong>{profiles[0].education[0].institute}</strong>
                  <br />
                  {profiles[0].education[0].year} <br />
                  <span>• {profiles[0].education[0].degree}</span>
                </li> */}
                {/* <li className="mb-2">
                  <strong>EC Council</strong>
                  <br />
                  September 2022
                  <br />
                  <span>• Certified Ethical Hacker (CEH)</span>
                </li>
                <li className="mb-2">
                  <strong>
                    Middlesex University Hendon, London, Great Britain
                  </strong>
                  <br />
                  February 2021
                  <br />
                  <span>• M.Sc. in Cyber Security and Pen Testing</span>
                </li>
                <li>
                  <strong>
                    SIT (Siddaganga Institute of Technology), Banglore,
                    Karnataka, India
                  </strong>
                  <br />
                  2018
                  <br />
                  <span>
                    • B.E. in Electronics and Communication Engineering
                  </span>
                </li> */}
              </ul>
            </div>
          )}
          {activeSection === "skills" && (
            <div>
              <h2 className="text-2xl font-semibold  mb-4">Skills</h2>
              <ul className="list-disc pl-5">
                {profiles[index]?.skills?.map((data, index) => {
                  // console.log(data.tools);
                  return (
                    <li className="mb-2">
                      <strong>{data.skills}</strong>
                      <br />
                      {data.tools.map((dat, index) => {
                        return(
                          <>
                          <span>• {dat}</span>
                          <br />
                          </>
                        )
                      })}
                      {/* <span>• </span>
                    <br />
                    <span>• </span>
                    <br /> */}
                    </li>
                  );
                })}

                {/* <li className="mb-2">
                  <strong>{profiles[0].skills[0].skills}</strong>
                  <br />

                  <span>• {profiles[0].skills[0].tools[0]}</span>
                  <br />
                  <span>• </span>
                  <br />
                  <span>• </span>
                  <br />
                </li> */}
                {/* <li className="mb-2">
                  <strong>Programming Languages</strong>
                  <br />

                  <span>
                    • Python (Django, Flask, Cryptography, Shell, Automation,
                    API)
                  </span>
                  <br />
                  <span>• C</span>
                  <br />
                  <span>• Matlab</span>
                  <br />
                </li>
                <li className="mb-2">
                  <strong>Networking & Security Tools</strong>
                  <br />
                  <span>• Metasploitable</span> <br />
                  <span>• Nmap</span> <br />
                  <span>• Kali Linux</span> <br />
                  <span>• Snort</span> <br />
                  <span>• Wireshark</span> <br />
                </li>
                <li>
                  <strong>Hardware & Development</strong>
                  <br />
                  <span>• Arduino</span> <br />
                  <span>• 8051</span> <br />
                  <span>• Verilog</span> <br />
                  <span>• VHDL</span> <br />
                </li>
                <li>
                  <strong>Others</strong>
                  <br />
                  <span>• Bash Scripting</span> <br />
                  <span>• Cybersecurity Network Security OWSAP 10</span> <br />
                  <span>• Microsoft Office 365</span> <br />
                  <span>• Blockchain Development</span> <br />
                </li> */}
              </ul>
            </div>
          )}
          {activeSection === "projects" && (
            <div>
              <h2 className="text-2xl font-semibold  mb-4">Projects</h2>
              <ul className="list-disc pl-5 ">
                {profiles[index]?.projects?.map((data, index) => {
                  return <li>{data}</li>;
                })}

                {/* <li>{profiles[0].projects[1]}</li> */}
                {/* <li>Automatic and Manual Robotic Arm</li>
                <li>Autonomous Car using Sonar</li>
                <li>Eye Tracking Wheelchair using IR Sensor</li>
                <li>
                  EEG based Brain Computer Interface for Disabled (Government
                  funded project by NAIN)
                </li> */}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CV;
