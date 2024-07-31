import React from 'react'
import AK from '../assets/Ak.png';
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
        <nav className="mb-20 flex justify-between items-center py-6 ">
          <div className='flex flex-shrink-0 items-center'>
            <img src={AK} alt=" no img" className=" mx-2 h-14"/>
          </div>
          <div className="flex m-8 items-center justify-center gap-5 lg:gap-10 text-2xl lg:text-4xl text-white">
            <a href="https://www.instagram.com/aryan._.kashyap?igsh=OTVlejgzOHdubTNq" target="_blank" className="hover:scale-150 hover:text-pink-500 transition-all  duration-300"><FaInstagram/></a>

            <a href="https://www.linkedin.com/in/aryan-kashyap3005?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"className="hover:scale-150 hover:text-blue-500 transition-all duration-300"><FaLinkedin /></a>

            <a href="https://leetcode.com/u/aryan_kashyap3005/" target="_blank" className="hover:scale-150 hover:text-yellow-500 transition-all duration-300"><SiLeetcode /></a>

            <a href="https://github.com/aryan-kashyap-07" target="_blank" className="hover:scale-150 hover:text-purple-600 transition-all duration-300"><FaGithub /></a>
          </div>
        </nav>
    </div>
  )
}

export default Navbar;