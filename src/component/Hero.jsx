import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { FaFacebook , FaInstagram , FaTwitter } from 'react-icons/fa';
import { FaMessage } from 'react-icons/fa6'
import { HeadphoneDatta } from "../Data/MockData";
import { motion, AnimatePresence, easeInOut } from 'framer-motion'
import { SlideRight } from "../utility/animation";

const Hero = () => {
    const [activeData,setActiveData]=useState(HeadphoneDatta[0])
    const [currentIndex,setCurrentIndex]=useState(0)

    useEffect(()=>{
        const interval=setInterval(()=>{
        setCurrentIndex((prev)=>(prev+1)%HeadphoneDatta.length)
        },3000)

        return () => clearInterval(interval);
    },[currentIndex])

    useEffect(()=>{
        setActiveData(HeadphoneDatta[currentIndex])
    },[currentIndex])

  return (
    <motion.section 
    initial={{
        backgroundImage:`radial-gradient(circle, ${activeData.bgcolor}
        0%,${activeData.bgcolor}0%)`
    }}
    animate={{
        backgroundImage:`radial-gradient(circle, ${activeData.bgcolor}
        0%,${activeData.bgcolor} 70%)`
    }}
    transition={{duration:0.8}}
    className=" text-white">
      <Navbar />
      <div className="container grid grid-cols-1 md:grid-cols-2
      h-screen md:h-[700px] relative ">
            {/* {headphone info section} */}
            <div className="flex flex-col justify-center py-14 md:py-0
            xl:max-w-[500px] order-2 md:order-1">
                <div className="space-y-5 md:space-y-7 text-center 
                md:text-left">
                    <AnimatePresence mode="wait">
                    <motion.h1 
                    key={activeData.id}
                    variants={SlideRight(0.2)}
                    initial='hidden'
                    animate='show'
                    exit='exit'
                    className="text-3xl lg:text-4xl xl:text-5xl
                    font-bold" >
                        {activeData.title}
                    </motion.h1>
                    </AnimatePresence>
                    <AnimatePresence mode="wait">
                    <motion.p 
                    key={activeData.id}
                    variants={SlideRight(0.4)}
                    initial='hidden'
                    animate='show'
                    exit='exit'
                    className=
                    "text-sm leading.loose text-white/80"
                    >{activeData.subtitle}</motion.p>
                    </AnimatePresence>
                    <AnimatePresence mode="wait">
                    <motion.p 
                      key={activeData.id}
                      variants={SlideRight(0.6)}
                      initial='hidden'
                      animate='show'
                      exit='exit'
                    className="text-3xl lg:text-4xl xl:text-5xl
                    font-bold">{activeData.price}</motion.p>
                    </AnimatePresence>
                    {/* Social icons sections */}
                    <div className="flex items-center justify-center
                    md:justify-start gap-4 text-3xl">
                        <FaInstagram className="cursor-pointer border rounded-full
                        p-[6px]"/>
                        <FaFacebook className="cursor-pointer border rounded-full
                        p-[6px]"/>
                        <FaTwitter className="cursor-pointer border rounded-full
                        p-[6px]"/>
                    </div>
                </div>
            </div>
            {/* {headphone image section} */}
            <div className="flex flex-col items-center justify-center 
            order-1 md:order-2 relative">
               <AnimatePresence mode="wait">
                <motion.img 
                key={activeData.id}
                initial={{opacity: 0, x:100}}
                animate={{opacity:1, x: -100}}
                transition={{duration: 0.4, ease:easeInOut, delay:0}}
                exit={{opacity:0, x:-100}}
                src={activeData.image} alt="" className="w-[300px] md:w-[400px]
                xl:w-[500px] relative z-10"/>
                </AnimatePresence>
                <AnimatePresence mode="wait">
                <motion.div 
                key={activeData.id}
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:0.4, ease:easeInOut, delay:0}}
                exit={{opacity:0}}
                className="text-[300px] absolute top-0 left-1/2 -translate-x-1/2
                -translate-y-1/2 z-0 text-white/5 font-poppins font-extrabold">
                    {activeData.model}
                </motion.div>
                </AnimatePresence>
            </div>
            {/* chatr icon section */}
            <div className="absolute bottom-10 right-10 z-[999]">
                <FaMessage  className="text-2xl cursor-pointer"/>
            </div>
      </div>
    </motion.section>
  );
};

export default Hero;
