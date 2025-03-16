import React from 'react'
import { Email, LogoGithub, LogoLinkedin, MailAll } from "@carbon/icons-react";

const SideBar = () => {
  return (
    <div className='fixed top-0 left-0 w-16 h-screen sidebar'>
        <div className='flex flex-col gap-4 items-center justify-center h-full '>
            <ul>
                <li className='text-gray-400 mb-2 hover:text-white cursor-pointer transition-colors'><a href="https://github.com/Musfarr"><LogoGithub size={32}/></a></li>
                <li className='text-gray-400 mb-2 hover:text-white cursor-pointer transition-colors'><a href="https://www.linkedin.com/in/syed-musfer/"> <LogoLinkedin size={32}/></a></li>
                <li className='text-gray-400 mb-2   hover:text-white cursor-pointer transition-colors'><a href="mailto:musfarhassan@gmail.com"> <Email size={32}/></a></li>
             
            </ul>

        </div>
    </div>
  )
}

export default SideBar