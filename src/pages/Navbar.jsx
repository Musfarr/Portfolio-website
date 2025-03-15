import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed  top-10 left-0 w-full h-16 '>
      <div className='flex flex-row items-center justify-center h-full'>
        <div className='text-gray-400 mb-2 px-4 hover:text-white cursor-pointer transition-colors'>Home</div>
        <div className='text-gray-400 mb-2 px-4 hover:text-white cursor-pointer transition-colors'>Projects</div>
        <div className='text-gray-400 mb-2 px-4 hover:text-white cursor-pointer transition-colors'>Contact</div>
      </div>
    </div>
  )
}

export default Navbar