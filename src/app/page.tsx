"use client";

import { FaJs, FaPython, FaJava, FaPhp, FaSwift, FaRust } from "react-icons/fa";
import { SiTypescript, SiKotlin, SiGoland, SiCplusplus } from "react-icons/si";

import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import clsx from "clsx";
import { useState } from "react";
import { BiLogoTypescript } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { IoFlashSharp } from "react-icons/io5";
import { GiStack } from "react-icons/gi";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism"; 
import { FaCode, FaRegCopy } from "react-icons/fa";
import { TbBrandTeams } from "react-icons/tb";
import { MdDarkMode } from "react-icons/md";
import Marquee from "react-fast-marquee";
import FAQSection from "@/components/FAQSection";

export default function Home() {
  const [listItems, setListItems] = useState(0);

  const problemsCode = `const getProblems = (): string[] => {
  return [
    "Searching for old snippets",
    "Writing the same code repeatedly",
    "Messy, unorganized code storage",
    "Sending code snippets via
     Slack/Notion/Google Docs",
  ];
};
export default getProblems;`;

  const solutionsCode = `const getSolutions = (): string[] => {  
  return [
    "Instant Access",
    "Smart Organization",
    "Team Collaboration",
    "Multi-Language Support",

  ];
};
export default getSolutions;`;

  return (
    <div className="w-screen bg-accent min-h-screen md:p-5 pt-5 p-2">
      <Nav />
      <Hero />
      {/* problem/solution section */}
      <div className="flex flex-col min-h-[80vh] py-20 gap-6 overflow-x-hidden">
        <div className="flex flex-col gap-6 pt-10 items-center justify-center">
          <h1 className="md:text-4xl pb-10 text-xl opacity-70">
            How Much Time Do You Waste?
          </h1>
          <div className="rounded-xl p-0 m-0">
            <div className="flex rounded-t-xl h-full px-4 pt-4 m-0 gap-1 border-2 border-b-0 border-[#1b1e25] dark:bg-[#1b1e25]">
              <div className="flex gap-3 pr-3">
                <div className="h-3 w-3 rounded-full bg-[#fc9ea4]" />
                <div className="h-3 w-3 rounded-full bg-[#f8ba75]" />
                <div className="h-3 w-3 rounded-full bg-[#3cc276]" />
              </div>

              <button
                className={clsx(
                  "px-3 text-xs md:text-md flex border-2 border-[#0e1117] border-b-0 items-center justify-center gap-1 py-3 rounded-t-xl h-[100%]",
                  listItems == 0
                    ? "text-white bg-[#0e1117]"
                    : "bg-transparent border-0 dark:border-0"
                )}
                onClick={() => setListItems(0)}
              >
                <BiLogoTypescript className="text-blue-600" />
                Problems.ts <IoMdClose />
              </button>
              <button
                className={clsx(
                  "px-3 text-xs md:text-md flex border-2 border-[#0e1117] border-b-0 items-center justify-center gap-1 py-3 rounded-t-xl h-[100%]",
                  listItems == 1
                    ? "text-white bg-[#0e1117]"
                    : "bg-transparent border-0 dark:border-0"
                )}
                onClick={() => setListItems(1)}
              >
                <BiLogoTypescript className="text-blue-600" />
                solution.ts <IoMdClose />
              </button>
            </div>

            <div className="md:p-6 px-4 py-2 dark:bg-[#0e1117] border-2 border-[#0e1117] rounded-b-xl list-disc flex flex-col gap-6 text-xl md:text-2xl relative min-h-[150px]">
              {listItems === 0 ? (
               <div className="text-xs md:text-sm lg:text-md xl:text-lg">
               <SyntaxHighlighter language="typescript"   style={oneDark} >
                 {problemsCode}
               </SyntaxHighlighter>
             </div>
              ) : (
                <div className="text-xs md:text-sm lg:text-md xl:text-lg">
                <SyntaxHighlighter language="typescript" style={oneDark} >
                  {solutionsCode }
                </SyntaxHighlighter>
              </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* features section */}

      <div className="flex flex-col p-3 gap-6 pt-10 min-h-screen items-center justify-center">
        <h1 className="md:text-4xl pb-10 text-xl opacity-70">
          Features
        </h1> 
        <h1 className="md:text-4xl text-2xl font-extrabold tracking-wide"> Supercharge Your Productivity Instantly</h1>
        <h2 className="md:text-xl opacity-70  text-sm max-w-screen-lg flex items-center justify-center">Say goodbye to unorganized code and hello to seamless efficiency. Our tool is packed with features to help you write, store, and share code like never before.</h2>
        <div className="max-w-screen-lg grid md:grid-cols-3 grid-cols-2 md:gap-4 gap-1 md:p-6 p-2 w-full h-[30vh] justify-center items-center">
              <div className="flex items-center justify-center gap-2 flex-col text-sm">
              <IoFlashSharp className="h-4 md:h-6 md:w-6 w-4" />
              Instant Access
              </div>
              <div className="flex items-center justify-center gap-2 flex-col text-sm">
              <GiStack className="h-4 md:h-6 md:w-6 w-4" />
              Smart Organization
              </div>
             
              <div className="flex items-center justify-center gap-2 flex-col text-sm">
              <FaCode  className="h-4 md:h-6 md:w-6 w-4" />
              Multi-Language Support
              </div>
              <div className="flex items-center justify-center gap-2 flex-col text-sm">
              <TbBrandTeams className="h-4 md:h-6 md:w-6 w-4" />
              Team Collaboration
              </div>
              <div className="flex items-center justify-center gap-2 flex-col text-sm">
              <FaRegCopy className="h-4 md:h-6 md:w-6 w-4" />
              One-Click Copy 
              </div>
              <div className="flex items-center justify-center gap-2 flex-col text-sm">
              <MdDarkMode className="h-4 md:h-6 md:w-6 w-4" />
              Dark Mode
              </div>
              
        </div>
        <Marquee speed={50} gradient={false} pauseOnHover={true} className="flex gap-10">
  <FaJs className="text-yellow-500 text-2xl md:text-6xl mx-4" title="JavaScript" />
  <SiTypescript className="text-blue-500 text-2xl md:text-6xl mx-4" title="TypeScript" />
  <FaPython className="text-blue-300 text-2xl md:text-6xl mx-4" title="Python" />
  <FaJava className="text-red-500 text-2xl md:text-6xl mx-4" title="Java" />
  <FaPhp className="text-purple-600 text-2xl md:text-6xl mx-4" title="PHP" />
  <SiKotlin className="text-purple-400 text-2xl md:text-6xl mx-4" title="Kotlin" />
  <FaSwift className="text-orange-500 text-2xl md:text-6xl mx-4" title="Swift" />
  <SiGoland className="text-blue-400 text-2xl md:text-6xl mx-4" title="GoLang" />
  <SiCplusplus className="text-blue-600 text-2xl md:text-6xl mx-4" title="C++" />
  <FaRust className="text-orange-700 text-2xl md:text-6xl mx-4" title="Rust" />
  <FaJs className="text-yellow-500 text-2xl md:text-6xl mx-4" title="JavaScript" />
  <SiTypescript className="text-blue-500 text-2xl md:text-6xl mx-4" title="TypeScript" />
  <FaPython className="text-blue-300 text-2xl md:text-6xl mx-4" title="Python" />
  <FaJava className="text-red-500 text-2xl md:text-6xl mx-4" title="Java" />
  <FaPhp className="text-purple-600 text-2xl md:text-6xl mx-4" title="PHP" />
  <SiKotlin className="text-purple-400 text-2xl md:text-6xl mx-4" title="Kotlin" />
  <FaSwift className="text-orange-500 text-2xl md:text-6xl mx-4" title="Swift" />
  <SiGoland className="text-blue-400 text-2xl md:text-6xl mx-4" title="GoLang" />
  <SiCplusplus className="text-blue-600 text-2xl md:text-6xl mx-4" title="C++" />
  <FaRust className="text-orange-700 text-2xl md:text-6xl mx-4" title="Rust" />
</Marquee>


      </div>
      <div>
        <FAQSection/>
      </div>
    </div>
  );
}
