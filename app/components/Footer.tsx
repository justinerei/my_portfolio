import React from 'react'
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
        <div className="footer">
        {/* Content Area */}
        <div className="flex flex-col lg:flex-row justify-center  w-full lg:w-[80%] gap-[241px]">
            {/* Column 1 */}
            <div className="text-center lg:text-left">
            <h1 className="uppercase text-12-inter tracking-[0.15em]">Justine Rei</h1>
            <h2 className="text-20-jakarta mt-[1rem] lowercase">
                i&apos;m Justine, <br />
                first-year BS Info student. <br />
                Future UI/UX designer.
            </h2>
            </div>

            {/* Column 2 */}
            <div className="text-center lg:text-left">
            <h1 className="uppercase text-12-inter tracking-[0.15em]">Contact Me</h1>
            <p className="text-14-jakarta-white mt-[1rem] leading-[30px]">
                Email: janolinojustinesa@gmail.com <br />
                Phone: +63 969 631 0064
            </p>
            <h1 className="uppercase text-12-inter tracking-[0.15em] mt-[1rem]">Follow Me</h1>
            <div className="flex justify-center lg:justify-start gap-4 mt-[1rem]">
                <a href="https://www.facebook.com/Tatin.janolino"          
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook">
                    <FaFacebook className="w-[40px] h-[39px] text-secondary-100 hover:text-gray-500 duration-300 cursor-pointer" />
                </a>
                <a href="https://www.instagram.com/_justinereii/"
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Instagram'>
                    <FaInstagram className="w-[40px] h-[40px] text-secondary-100 hover:text-gray-500 duration-300 cursor-pointer" />
                </a>
                <a href="https://github.com/justinerei"
                target='_blank'
                rel='noopener noreferrer'
                aria-label='GitHub'>
                    <FaGithub className="w-[40px] h-[40px] text-secondary-100 hover:text-gray-500 duration-300 cursor-pointer" />
                </a>
                
            </div>
            </div>
        </div>

        {/* Credits Section */}
        <div className="mt-[62px] text-center w-full text-10-inter tracking-[0.15em]">
            © 2024 Justine Janolino. All rights reserved.
        </div>
        </div>
  )
}

export default Footer