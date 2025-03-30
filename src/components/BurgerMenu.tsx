"use client";
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react'
import Link from 'next/link';

import React, { useState } from 'react'
import { CgMenuGridR } from 'react-icons/cg'
import { Button } from './ui/button';
import ToggleButton from './ThemeToggle'; // Adjust the path as needed

function BurgerMenu() {
    const[isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden p-0 m-0 overflow-hidden">
         <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed top-5 scale-110 right-5 z-[1101] transition-colors duration-300 mt-2 `}
      >
        {isOpen ? (
          <Menu size={32} className="dark:text-white" />
        ) : (
          <CgMenuGridR size={32} />
        )}
      </button>

      <motion.div
        initial={{ y: "-100%" }}
        animate={isOpen ? { y: 0 } : { y: "-100%" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        
        className="fixed top-0 left-0 w-full text-primary  gap-6 h-screen px-5 flex bg-background justify-center font-extrabold flex-col z-[1000]"
      >

<div className='flex flex-col text-4xl    gap-4 '>
        <Link href={'/'} className=' cursor-pointer'>Pricing</Link>
        <Link href={'/'} className=' cursor-pointer'>Reviews</Link>
        <Link href={'/'} className=' cursor-pointer'>FAQ</Link>
        <Link href={'/'} className=' cursor-pointer'>Contact</Link>
        <Link href={'/'} className=' cursor-pointer'>About</Link>
       
     </div>
     <div className='h-1 my-3 rounded-xl w-full bg-foreground'></div>

         {/* CTA */}
         <div className='flex  gap-4 justify-start '>    
            <Button variant={"default"} className='font-semibold cursor-pointer'>Try for free</Button>
            <ToggleButton />
            
        </div>

        </motion.div>
        </div>
  )
}

export default BurgerMenu