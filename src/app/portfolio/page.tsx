

"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import Skills from "../Skills/page";

const projects = [
  {
    title: "E-commerce website",
    desc: "Figma design",
    devStack: "React, Next.js, Node.js",
    link: "",
    git: "",
    src: "/project.jpg",
  },
  {
    title: "Resume Builder",
    desc: "Resume",
    devStack: "Next.js",
    link: "",
    git: "",
    src: "/project.jpg",
  },
  // Add more projects here...
];

const Page = () => {
  return (
    <div className="text-white bg-gradient-to-b from-black to-purple-800 py-18 " id="portfolio">
      <h1 className='text-white text-6xl w-[320px] mx-auto font-semibold '>SELECTED
      <span className='text-pink-700'>PROJECTS</span></h1>
      
      <div className="max-w-[1000px] mx-auto space-y-24 px-4 mt-32">
        {projects.map((project, index) => (
          <motion.div
            className={`flex flex-col md:flex-row ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
            key={`${project.title}-${index}`}
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <div className="space-y-2 max-w-[550px]">
              <h2 className="text-7xl my-4 text-white/70">{`0${index + 1}`}</h2>
              <h2 className="text-4xl font-bold">{project.title}</h2>
              <p className="text-lg text-white/70 break-words p-4">{project.desc}</p>
              <p className="text-gray-300">{project.devStack}</p>
              <div className="w-64 h-[1px] bg-gray-400 my-4"></div>
              <div>
                {project.link && <a href={project.link} className="mr-6 text-blue-500">Link</a>}
                {project.git && <a href={project.git} className="text-blue-500">Git</a>}
              </div>
            </div>
            <div className="flex justify-center items-center mt-4 md:mt-0">
              <Image
                className="h-[350px] w-auto object-cover border
                rounded border-gray-700"
                src={project.src}
                alt={project.title}
                width={400}
                height={400}
              />
            </div>
          </motion.div>
        ))}
      </div>
      <Skills />
    </div>
  );
};

export default Page;

