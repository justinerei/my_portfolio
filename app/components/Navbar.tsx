import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
<nav>
  <div className="fixed z-50 w-full">
    <div className="navbar shadow-2xl bg-primary my-[40px] backdrop-filter backdrop-blur-lg bg-opacity-30 flex justify-between items-center px-4">

      <div className="text-sm sm:text-xs md:text-base lg:text-base">
        <Link href="/" className="hover-logo">JUSTINE REI</Link>
      </div>

      <div className="flex items-center space-x-4">
        <a
          href="https://www.facebook.com/Tatin.janolino"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="text-secondary-300 hover:text-gray-300 transition"
        >
          <FaFacebook className='w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8' />
        </a>
        <a
          href="https://github.com/justinerei"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-secondary-300 hover:text-gray-300 transition"
        >
          <FaGithub className='w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8' />
        </a>
      </div>
    </div>
  </div>
</nav>

  )
}

export default Navbar