import Image from 'next/image'
import React from 'react'
import { Button } from '../components/ui/button'
import Link from 'next/link'
import ToggleButton from './ThemeToggle'
import BurgerMenu from './BurgerMenu'

function Nav() {
  return (
    <div className='max-w-screen-xl   sticky md:top-5 top-2 z-[10] tektur font-semibold tekturn   grid grid-cols-3 gap-4 mx-auto'>
 
     {/* title */}
     <div className='flex gap-2 text-lg z-[2000] font-extrabold justify-start items-center' >
        <Image src='/logo.svg' width={40} height={40} alt={''} />
    
        <div className='tracking-wide leading-loose'>Snip<span className='text-primary'>Cache</span></div>
     </div>

        {/* Links */}
     <div className='md:flex   items-center justify-evenly gap-4 hidden'>
        <Link href={'/'} className=' cursor-pointer'>Pricing</Link>
        <Link href={'/'} className=' cursor-pointer'>Reviews</Link>
        <Link href={'/'} className=' cursor-pointer'>FAQ</Link>
        <Link href={'/'} className=' cursor-pointer'>About</Link>
        <Link href={'/'} className=' cursor-pointer'>Contact</Link>
       
     </div>

        {/* CTA */}
        <div className='md:flex hidden gap-4 justify-end '>    
            <Button variant={"default"} className='font-semibold cursor-pointer'>Try for free</Button>
            <ToggleButton />
            
        </div>
        <BurgerMenu />

    </div>
  )
}

export default Nav