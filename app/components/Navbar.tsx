import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
      <header className='flex px-16 py-10 justify-center items-center'>
        <nav className='flex justify-between items-center border px-10 py-7 w-2/3 rounded-3xl'>
          
          <Link href='/'><span className='tracking-[0.2em] font-semibold text-secondary-300 hover:text-secondary duration-300 '>JUSTINE REI</span></Link>
          
          <div className="flex items-center gap-5 text-white-100">
              <Link href='https://www.facebook.com/Tatin.janolino' className='max-w-xs transition duration-300 ease-in-out hover:scale-110'> 
                <Image src="/fb.png" alt="facebook" width={30} height={30}/>
              </Link>

              <Link href='https://github.com/justinerei' className='max-w-xs transition duration-300 ease-in-out hover:scale-110'>
                <Image src="/github.png" alt="github" width={30} height={30}/>
              </Link>
          </div>
        </nav>
      </header>          
  )
}

export default Navbar