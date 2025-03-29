import Image from 'next/image'
import React from 'react'
import { Button } from '../components/ui/button'
import Link from 'next/link'
import ToggleButton from './ThemeToggle'

function Nav() {
  return (
    <div className='max-w-screen-xl   sticky top-5 z-[10] tektur font-semibold tekturn   grid grid-cols-3 gap-4 mx-auto'>

     {/* title */}
     <div className='flex gap-2 text-lg justify-start items-center' >
        <Image src='/logo.svg' width={40} height={40} alt={''} />
    
        <div>Snip<span className='text-red-500'>Cache</span></div>
     </div>

        {/* Links */}
     <div className='flex   items-center justify-evenly gap-4'>
        <Link href={'/'} className=' cursor-pointer'>Pricing</Link>
        <Link href={'/'} className=' cursor-pointer'>Reviews</Link>
        <Link href={'/'} className=' cursor-pointer'>FAQ</Link>
       
     </div>

        {/* CTA */}
        <div className='flex gap-4 justify-end '>    
            <Button variant={"default"} className='font-semibold cursor-pointer'>Try for free</Button>
            <ToggleButton />
            
        </div>

    </div>
  )
}

export default Nav