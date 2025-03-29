import React from 'react'
import { Button } from '../components/ui/button'
import { Gift, Zap } from 'lucide-react'

function Hero() {
  return (
    <div className='max-w-screen-xl min-h-[90vh] grid md:grid-cols-2 gap-4 mx-auto'>

        <div className='flex flex-col items-start p-3 lg:p-0  justify-center gap-8'>
            {/* hero tag */}
        <div className='md:text-5xl  text-2xl gap-4 leading-loose font-bold tracking-wider '>Save, Search & Reuse Code

            <span className="relative inline-block px-2 mx-1 py-2 my-1">
            <span className="absolute inset-0 dark:bg-gray-300 bg-foreground skew-x-[-6deg] rotate-[-2deg] px-2 py-1"></span>
              <span className="relative dark:text-black text-white font-bold">  Instantly </span>
             </span>
        </div>
        {/* sub text */}
        <h2 className='opacity-70'>The AI-powered snippet manager that keeps your code organized, accessible, and synced across devices</h2>
      
        {/* CTA */}
        <div className='flex gap-4'>
            <Button variant={"default"} className='px-6 font-semibold'> <Zap color="#000000" />Get Started</Button>
            
        </div> 

      <div className='flex gap-2 font-semibold text-sm items-center justify-center '>
      <Gift color="#339220" /> <span className='text-[#339220] '>$100 off</span> <span className='opacity-70'>for the first 100 users (80left) </span> 
      </div>
        </div>

          {/* image */}
        <div>


        </div>

    </div>
  )
}

export default Hero