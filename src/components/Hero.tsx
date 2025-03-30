import React from 'react'
import { Button } from '../components/ui/button'
import { Gift, Zap } from 'lucide-react'

import { ThreeDCardDemo } from './hero-img'

function Hero() {
  return (
    <div className='max-w-screen-xl min-h-[90vh] overflow-x-hidden grid md:grid-cols-2 md:gap-4 mx-auto'>

        <div className='flex flex-col items-start p-3 lg:p-0  justify-center md:gap-8 gap-3'>
          <h1 className='border-2 border-foreground px-3 py-2 text-xs  opacity-70 rounded-xl'>AI coming soon ✨</h1>
            {/* hero tag */}
        <div className='md:text-5xl  text-2xl gap-4 leading-loose font-bold tracking-wider '>Save, Search & Reuse Code

            <span className="relative inline-block px-2 mx-1 py-2 my-1">
            <span className="absolute inset-0 dark:bg-gray-300 bg-foreground skew-x-[-6deg] rotate-[-2deg] md:px-2 md:py-1"></span>
              <span className="relative dark:text-black text-white font-bold">  Instantly </span>
             </span>
        </div>
        {/* sub text */}
        <h2 className='opacity-70'>The AI-powered snippet manager that keeps your code organized, accessible, and synced across devices</h2>
      
        {/* CTA */}
        <div className='flex gap-4'>
            <Button variant={"default"} className='px-6 font-semibold'> <Zap color="#000000" />Get Started</Button>
            
        </div> 

      <div className='flex gap-2 font-semibold text-sm items-center justify-center  '>
      <Gift color="#339220" /> <span className='text-[#339220] '>$100 off</span> <span className='opacity-70 flex flex-wrap'>for the first 100 users (80 left) </span> 
      </div>
        </div>

          {/* image */}
        <div className='flex justify-center items-center'>

     
      <div className=''>
      <ThreeDCardDemo/>
      </div>
      
       

        </div>

    </div>
  )
}

export default Hero