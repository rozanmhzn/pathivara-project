"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const ClientCV = ({ profile }) => {
  const [activeSection, setActiveSection] = useState("");

  return (
    <div className="min-h-screen bg-black p-4 text-textColor">
      <div className="bg-bgColor shadow-md rounded-lg p-8 w-full h-full flex flex-col justify-center items-center">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-HeadingColor mb-2">
            {profile.name}
          </h1>
          <p className="text-lg">{profile.special}</p>
        </div>
        <div className="w-full max-w-3xl">
          <div className="flex sm:flex-row flex-col gap-10">
            <section>
              <Image src={profile.image} alt="Profile Image" height={300} />
            </section>
            <section className="sm:w-2/3">
              <h2 className="text-2xl font-semibold mb-4">Summary</h2>
              <p className="mb-4">{profile.summary}</p>
            </section>
          </div>
          <div className="flex justify-center items-center mt-4 space-x-4">
            <button
              className={`${
                activeSection === "education" ? "bg-blue-700" : "bg-blue-500"
              } hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
              onClick={() => setActiveSection("education")}
            >
              Education
            </button>
            <button
              className={`${
                activeSection === "skills" ? "bg-blue-700" : "bg-blue-500"
              } hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
              onClick={() => setActiveSection("skills")}
            >
              Skills
            </button>
            <button
              className={`${
                activeSection === "projects" ? "bg-blue-700" : "bg-blue-500"
              } hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
              onClick={() => setActiveSection("projects")}
            >
              Projects
            </button>
            <Link href="/our-team" className="text-HeadingColor hover:underline">
              Back
            </Link>
          </div>
          {activeSection === "education" && (
            <div>
              <h2 className="text-2xl font-semibold tex mb-4">Education</h2>
              <ul className="list-disc pl-5">
                {profile.education?.map((data, index) => (
                  <li key={index} className="mb-2">
                    <strong>{data.institute}</strong>
                    <br />
                    {data.year} <br />
                    <span>• {data.degree}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {activeSection === "skills" && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Skills</h2>
              <ul className="list-disc pl-5">
                {profile.skills?.map((data, index) => (
                  <li key={index} className="mb-2">
                    <strong>{data.skills}</strong>
                    <br />
                    {data.tools.map((dat, index) => (
                      <React.Fragment key={index}>
                        <span>• {dat}</span>
                        <br />
                      </React.Fragment>
                    ))}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {activeSection === "projects" && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Projects</h2>
              <ul className="list-disc pl-5">
                {profile.projects?.map((data, index) => (
                  <li key={index}>{data}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClientCV;
