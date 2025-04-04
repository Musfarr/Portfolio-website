import React from 'react'
import PageTransition from '../components/PageTransition'

const Home = () => {
  return (
    <PageTransition>
      <div className="Grad-effct h-screen w-screen text-center flex items-center justify-center p-10">
        <div className='breath-effct'>
          <p className='text-gray-300 text-5xl mb-4 font-bold '>Syed Musfer </p>
          <h1 className='text-gray-300 text-2xl  '>Full Stack Software Engineer </h1>
          <button className='Btn mt-4'> <a href="./resume.pdf" download> Download Resume</a></button>
        </div>
      </div>
    </PageTransition>
  )
}

export default Home